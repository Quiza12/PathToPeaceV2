import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { P2pEmpoweringYouModule } from './empowering-you/p2p.empowering-you.module';
import { P2pCoachingModule } from './coaching/p2p.coaching.module';

import { P2pHomeComponent } from './home/p2p.home.component';
import { P2pAboutMeComponent } from './about-me/p2p.about-me.component';
import { P2pContactComponent } from './contact/p2p.contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        P2pEmpoweringYouModule,
        P2pCoachingModule,
        HttpClientModule
    ],
    declarations: [
        P2pHomeComponent,
        P2pAboutMeComponent,
        P2pContactComponent
    ]
})
export class P2pModule { }
