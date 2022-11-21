import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

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

import { ThewhereComponent } from './thewhere/thewhere.component';
import { KingdomComponent } from './thewhere/kingdom/kingdom.component';
import { DaysComponent } from './thewhere/days/days.component';
import { WinterComponent } from './thewhere/winter/winter.component';
import { NocturnalComponent } from './thewhere/nocturnal/nocturnal.component';
import { DeProfundisComponent } from './thewhere/de-profundis/de-profundis.component';
import { PramComponent } from './thewhere/pram/pram.component';
import { IlluzstratorComponent } from './thewhere/illuzstrator/illuzstrator.component';
import { UrsaComponent } from './thewhere/ursa/ursa.component';

import { ChordsComponent } from './chords/chords.component';
import { AngelComponent } from './chords/angel/angel.component';
import { RainComponent } from './chords/rain/rain.component';
import { SendeiComponent } from './chords/sendei/sendei.component';
import { DukeComponent } from './chords/duke/duke.component';
import { DittiesComponent } from './chords/ditties/ditties.component';
import { WarmComponent } from './chords/warm/warm.component';
import { TiredComponent } from './chords/tired/tired.component';
import { GoblinComponent } from './chords/goblin/goblin.component';
import { LoveComponent } from './chords/love/love.component';
import { FunComponent } from './chords/fun/fun.component';
import { HorizontalComponent } from './chords/horizontal/horizontal.component';
import { LadoComponent } from './chords/lado/lado.component';
import { CinemaComponent } from './chords/cinema/cinema.component';
import { BanditoComponent } from './chords/bandito/bandito.component';
import { FutureComponent } from './chords/future/future.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
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
        ThewhereComponent,
        KingdomComponent,
        DaysComponent,
        WinterComponent,
        NocturnalComponent,
        DeProfundisComponent,
        PramComponent,
        IlluzstratorComponent,
        UrsaComponent,
        ChordsComponent,
        AngelComponent,
        RainComponent,
        SendeiComponent,
        DukeComponent,
        DittiesComponent,
        WarmComponent,
        TiredComponent,
        GoblinComponent,
        LoveComponent,
        FunComponent,
        HorizontalComponent,
        LadoComponent,
        CinemaComponent,
        BanditoComponent,
        FutureComponent,
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
