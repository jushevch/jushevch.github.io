import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

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
