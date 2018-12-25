import {NgModule} from '@angular/core';

import {EntitiesComponent} from './entities.component';
import {Repository} from "./repository";
import {EntitiesApiService} from "./entities-api.service";
import {EntityComponent} from "./entity.component";
import {EntityGroupComponent} from "./entity-group.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {EntityGroupSetComponent} from "./entity-group-set.component";

@NgModule({
    imports: [HttpClientModule, BrowserModule],
    exports: [EntitiesComponent],
    declarations: [EntitiesComponent, EntityGroupComponent, EntityComponent, EntityGroupSetComponent],
    providers: [Repository, EntitiesApiService],
})
export class EntitiesModule {
}
