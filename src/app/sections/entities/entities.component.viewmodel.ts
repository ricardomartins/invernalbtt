import {Injectable} from "@angular/core";
import {Repository} from "./repository";
import {Observable} from "rxjs/index";
import {EntityGroup} from "./entity";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class EntitiesComponentViewmodel {
    constructor(private repository: Repository) {}

    getSponsorList(): Observable<EntityGroup[]> {
        return this.repository.entities.pipe(map((entityGroups: EntityGroup[]) =>
            entityGroups
                .filter(eg => eg.visible)
                .map(eg => {
                    const newEg = new EntityGroup(eg);
                    newEg.entities = newEg.entities.filter(e => e.visible);
                    return newEg;
                })
                .filter(eg => eg.entities != null && eg.entities.length > 0)));
    }
}
