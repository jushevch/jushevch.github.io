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
import { StarComponent } from './chords/star/star.component';
import { MemoryComponent } from './chords/memory/memory.component';

const routes: Routes = [
    { path: 'thewhere/kingdom', component: KingdomComponent },
    { path: 'thewhere/days', component: DaysComponent },
    { path: 'thewhere/winter', component: WinterComponent },
    { path: 'thewhere/nocturnal', component: NocturnalComponent },
    { path: 'thewhere/de-profundis', component: DeProfundisComponent },
    { path: 'thewhere/pram', component: PramComponent },
    { path: 'thewhere/illuzstrator', component: IlluzstratorComponent },
    { path: 'thewhere/ursa', component: UrsaComponent },
    { path: 'thewhere', component: ThewhereComponent },
    { path: 'chords/memory', component: MemoryComponent },
    { path: 'chords/star', component: StarComponent },
    { path: 'chords/angel', component: AngelComponent },
    { path: 'chords/rain', component: RainComponent },
    { path: 'chords/sendei', component: SendeiComponent },
    { path: 'chords/duke', component: DukeComponent },
    { path: 'chords/ditties', component: DittiesComponent },
    { path: 'chords/warm', component: WarmComponent },
    { path: 'chords/tired', component: TiredComponent },
    { path: 'chords/goblin', component: GoblinComponent },
    { path: 'chords/love', component: LoveComponent },
    { path: 'chords/fun', component: FunComponent },
    { path: 'chords/horizontal', component: HorizontalComponent },
    { path: 'chords/lado', component: LadoComponent },
    { path: 'chords/future', component: FutureComponent },
    { path: 'chords/cinema', component: CinemaComponent },
    { path: 'chords/bandito', component: BanditoComponent },
    { path: 'chords', component: ChordsComponent },
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
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
