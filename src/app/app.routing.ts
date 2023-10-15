import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { P2pHomeComponent } from './pathtopeace/home/p2p.home.component';
import { P2pCoachingComponent } from './pathtopeace/coaching/p2p.coaching.component';
import { P2pAboutMeComponent } from './pathtopeace/about-me/p2p.about-me.component';
import { P2pContactComponent } from './pathtopeace/contact/p2p.contact.component';
import { P2pYourStoriesLandingComponent } from './pathtopeace/empowering-you/your-stories/p2p.your-stories.landing.component';
import { P2pYourStoriesPodcastsComponent } from './pathtopeace/empowering-you/your-stories/podcasts/p2p.your-stories.podcasts.component';
import { P2pYourStoriesInterviewsComponent } from './pathtopeace/empowering-you/your-stories/interviews/p2p.your-stories.interviews.component';
import { P2pPeacefulActivitiesComponent } from './pathtopeace/empowering-you/peaceful-activities/p2p.peaceful-activities.component';
import { P2pPeaceOfAdviceComponent } from './pathtopeace/empowering-you/peace-of-advice/p2p.peace-of-advice.component';


const routes: Routes =[
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'p2p', pathMatch: 'full' },
    { path: 'p2p',                       component: P2pHomeComponent },
    { path: 'coaching',                  component: P2pCoachingComponent },
    { path: 'about',                     component: P2pAboutMeComponent },
    { path: 'contact',                   component: P2pContactComponent },
    { path: 'your-stories',              component: P2pYourStoriesLandingComponent },
    { path: 'your-stories/podcasts',     component: P2pYourStoriesPodcastsComponent },
    { path: 'your-stories/interviews',   component: P2pYourStoriesInterviewsComponent },
    { path: 'peaceful-activities',       component: P2pPeacefulActivitiesComponent },
    { path: 'peace-of-advice',           component: P2pPeaceOfAdviceComponent },

    { path: 'home',                      component: ComponentsComponent },
    { path: 'user-profile',              component: ProfileComponent },
    { path: 'signup',                    component: SignupComponent },
    { path: 'landing',                   component: LandingComponent },
    { path: 'nucleoicons',               component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
