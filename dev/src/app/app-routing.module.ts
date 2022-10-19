import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { KnmComponent } from './knm/knm.component';
import { BusComponent } from './bus/bus.component';
import { TriflesComponent } from './trifles/trifles.component';
import { ConquistaComponent } from './conquista/conquista.component';
import { IambingComponent } from './iambing/iambing.component';
import { LaterComponent } from './later/later.component';
import { EmComponent } from './em/em.component';

import { EmpireComponent } from './empire/empire.component';
import { EmcardComponent } from './emcard/emcard.component';

const routes: Routes = [
    { path: 'thewhere', component: ThewhereComponent },
    { path: 'thewhere/kingdom', component: KingdomComponent },
    { path: 'thewhere/days', component: DaysComponent },
    { path: 'thewhere/winter', component: WinterComponent },
    { path: 'thewhere/nocturnal', component: NocturnalComponent },
    { path: 'thewhere/de-profundis', component: DeProfundisComponent },
    { path: 'thewhere/pram', component: PramComponent },
    { path: 'thewhere/illuzstrator', component: IlluzstratorComponent },
    { path: 'thewhere/ursa', component: UrsaComponent },
    { path: 'knm', component: KnmComponent },
    { path: 'bus', component: BusComponent },
    { path: 'trifles', component: TriflesComponent },
    { path: 'conquista', component: ConquistaComponent },
    { path: 'iambing', component: IambingComponent },
    { path: 'later', component: LaterComponent },
    { path: 'em', component: EmComponent },
    { path: 'empire', component: EmpireComponent },
    { path: 'emcard', component: EmcardComponent },
    { path: '', component: MainComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
