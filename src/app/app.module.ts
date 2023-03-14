import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PreviewDisplayComponent } from './preview-display/preview-display.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { WebsiteLinksComponent } from './website-links/website-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PersonaldetailsComponent,
    PreviewDisplayComponent,
    PersonalSummaryComponent,
    WebsiteLinksComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
