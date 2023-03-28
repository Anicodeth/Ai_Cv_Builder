import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public relevantSkills: string[] = [];
  public skillsForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.skillsForm = this.resumeService.getSkillsForm();
  }

  ngOnInit() {
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
    ]
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill(newSkillName: String = ""): void {
    this.skills.push(
      this.fb.group({
        skillName: [newSkillName, Validators.required],
        experienceLevel: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      })
    );
  }

  addSuggestedSkill(skillIndex: number): void {
    this.addSkill(this.relevantSkills[skillIndex]);
    this.relevantSkills[skillIndex] = "";
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
