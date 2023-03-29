import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public relevantSkills: string[] = [];
  public skillsForm: any;
  private prevPercentageIncrease: number = 0;
  private WEIGHTOFSKILL = 2;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService
  ) {
  }

  ngOnInit() {
    this.skillsForm = this.resumeService.getSkillsForm();

    const storedOnSession = this.sessionService.getItem('skills');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.skills.push(
          this.fb.group(item)
        )
      });
    }

    this.skillsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('skills', this.skills.value);
    });

    // This will later be populated by relevant skills
    // that will be generated by the AI upon the addition of this component

    this.relevantSkills = [
      "Python",
      "Java",
      "MySQL",
      "Nest.Js",
      "Angular",
      "TDD",
      "OOP",
      "Complex Problem Solving",
      "Adaptability",
      "Ability to Work in a Team",
      "Hard Working"
    ];

  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill(newSkillName: String = "", experienceLevel = ""): void {
    this.skills.push(
      this.fb.group({
        skillName: [newSkillName, Validators.required],
        experienceLevel: [experienceLevel, [Validators.required, Validators.min(1), Validators.max(5)]],
      })
    );

    if (this.skills.length <= 5) {
      this.completenessService.increasePercentageCompleteness(this.WEIGHTOFSKILL);
      console.log(this.completenessService.getPercentageCompleteness());
    } 
  }

  addSuggestedSkill(skillIndex: number): void {
    this.addSkill(this.relevantSkills[skillIndex]);
    this.relevantSkills[skillIndex] = "";
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);

    if (this.skills.length < 5) {
      this.completenessService.decreasePercentageCompleteness(this.WEIGHTOFSKILL);
      console.log(this.completenessService.getPercentageCompleteness());
    } 
  }
}
