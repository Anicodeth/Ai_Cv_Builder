import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PreviewDisplayComponent } from './preview-display/preview-display.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { WebsiteLinksComponent } from './website-links/website-links.component';
import { PlainTemplateComponent } from './resume-templates/plain-template/plain-template.component';
import { ResumeService } from './services/resume.service';
import { ReferencesComponent } from './references/references.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddSectionsComponent } from './add-sections/add-sections.component';
import { SectionsService } from './services/sections.service';
import { ExtraCurricularActivitiesComponent } from './extra-curricular-activities/extra-curricular-activities.component';
import { EducationsComponent } from './educations/educations.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';
import { InternshipsComponent } from './internships/internships.component';
import { CustomSectionComponent } from './custom-section/custom-section.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';
import { SessionService } from './services/session.service';
import { CompletenessService } from './services/completeness.service';
import { GenericTemplateComponent } from './resume-templates/generic-template/generic-template.component';
import { PdfService } from './services/pdf.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PersonaldetailsComponent,
    PreviewDisplayComponent,
    PersonalSummaryComponent,
    WebsiteLinksComponent,
    PlainTemplateComponent,
    ReferencesComponent,
    ExperienceComponent,
    AddSectionsComponent,
    ExtraCurricularActivitiesComponent,
    EducationsComponent,
    CoursesComponent,
    LanguagesComponent,
    InternshipsComponent,
    CustomSectionComponent,
    HobbiesComponent,
    SkillsComponent,
    GenericTemplateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ResumeService,
    SectionsService,
    SessionService,
    CompletenessService,
    PdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
