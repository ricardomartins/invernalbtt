import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';

import {IntroductionComponent} from './sections/introduction/introduction.component';
import {ResultsComponent} from "./sections/results/results.component";
import {ScheduleComponent} from './sections/schedule.component';
import {RegulationComponent} from './sections/regulation.component';
import {SubmissionComponent} from './sections/submission.component';
import {TracksComponent} from './sections/tracks.component';
import {LocationComponent} from './sections/location.component';
import {ContactsComponent} from './sections/contacts.component';
import {Repository} from "./repository";
import {ConfigApiService} from "./config-api.service";
import {EntitiesModule} from "./sections/entities/entities.module";

const appRoutes: Routes = [
    {path: 'introduction', component: IntroductionComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'regulation', component: RegulationComponent},
    {path: 'submission', component: SubmissionComponent},
    {path: 'tracks', component: TracksComponent},
    {path: 'location', component: LocationComponent},
    {path: 'contacts', component: ContactsComponent},

    // Portuguese URIs redirection
    {path: 'programa', redirectTo: '/schedule', pathMatch: 'full'},
    {path: 'regulamento', redirectTo: '/regulation', pathMatch: 'full'},
    {path: 'inscricao', redirectTo: '/submission', pathMatch: 'full'},
    {path: 'percursos', redirectTo: '/tracks', pathMatch: 'full'},
    {path: 'localizacao', redirectTo: '/location', pathMatch: 'full'},
    {path: 'contactos', redirectTo: '/contacts', pathMatch: 'full'},

    // Default
    {path: '**', redirectTo: '/introduction'}
];

@NgModule({
    declarations: [
        AppComponent,
        IntroductionComponent,
        ResultsComponent,
        ScheduleComponent,
        RegulationComponent,
        SubmissionComponent,
        TracksComponent,
        LocationComponent,
        ContactsComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        BrowserModule,
        HttpClientModule,
        EntitiesModule
    ],
    providers: [Repository, ConfigApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
