import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ExploreComponent } from './components/explore/explore.component';
import { TopProfilesComponent } from './components/top-profiles/top-profiles.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetStartedComponent,
    TopProfilesComponent,
    ImageSliderComponent,
    ExploreComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
