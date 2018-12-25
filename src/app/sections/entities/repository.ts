import {Injectable} from "@angular/core";
import {EntitiesApiService} from "./entities-api.service";
import {BehaviorSubject, Observable} from "rxjs/index";
import {EntityGroup} from "./entity";

@Injectable({
    providedIn: 'root'
})
export class Repository {
    private readonly entitiesSubject = new BehaviorSubject<EntityGroup[]>([]);
    private _entities: Observable<EntityGroup[]> = null;
    get entities(): Observable<EntityGroup[]> {
        if (this._entities == null) {
            this._entities = this.entitiesSubject.asObservable();
            this.refreshEntities();
        }
        return this._entities;
    }

    constructor(private entitiesApiService: EntitiesApiService) {}

    refreshEntities() {
        this.entitiesApiService.getEntities().subscribe(value => {
            this.entitiesSubject.next(value);
        });
    }
}
