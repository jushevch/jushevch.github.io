import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

import { ThewhereComponent } from './thewhere/thewhere.component';
import { KingdomComponent } from './thewhere/kingdom/kingdom.component';
import { DaysComponent } from './thewhere/days/days.component';
import { WinterComponent } from './thewhere/winter/winter.component';
import { NocturnalComponent } from './thewhere/nocturnal/nocturnal.component';
import { DeProfundisComponent } from './thewhere/de-profundis/de-profundis.component';
import { PramComponent } from './thewhere/pram/pram.component';
import { IlluzstratorComponent } from './thewhere/illuzstrator/illuzstrator.component';
import { UrsaComponent } from './thewhere/ursa/ursa.component';

import { BusComponent } from './bus/bus.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TriflesComponent } from './trifles/trifles.component';
import { ConquistaComponent } from './conquista/conquista.component';
import { IambingComponent } from './iambing/iambing.component';
import { LaterComponent } from './later/later.component';
import { EmComponent } from './em/em.component';
import { KnmComponent } from './knm/knm.component';
import { EmpireComponent } from './empire/empire.component';
import { EmcardComponent } from './emcard/emcard.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ThewhereComponent,
        KingdomComponent,
        DaysComponent,
        WinterComponent,
        NocturnalComponent,
        DeProfundisComponent,
        PramComponent,
        IlluzstratorComponent,
        UrsaComponent,
        BusComponent,
        NavigationComponent,
        TriflesComponent,
        ConquistaComponent,
        IambingComponent,
        LaterComponent,
        EmComponent,
        KnmComponent,
        EmpireComponent,
        EmcardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
