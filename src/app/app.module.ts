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
import { SectionsService } from './services/sections.service';
import { ExtraCurricularActivitiesComponent } from './extra-curricular-activities/extra-curricular-activities.component';
import { AddSectionsComponent } from './add-sections/add-sections.component';
import { EducationComponent } from './education/education.component';

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
    EducationComponent
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
    SectionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
