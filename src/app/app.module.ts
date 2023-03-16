import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PreviewDisplayComponent } from './preview-display/preview-display.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { PlainTemplateComponent } from './resume-templates/plain-template/plain-template.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PersonaldetailsComponent,
    PreviewDisplayComponent,
    PersonalSummaryComponent,
    PlainTemplateComponent,
    ReferenceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
