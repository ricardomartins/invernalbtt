import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {EntityGroup} from "./entity";

@Injectable({
    providedIn: 'root'
})
export class EntitiesApiService {
    constructor(private http: HttpClient) {}

    getEntities(): Observable<EntityGroup[]> {
        return this.http.get<EntityGroup[]>("assets/entities.json");
    }
}
