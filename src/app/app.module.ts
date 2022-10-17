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
