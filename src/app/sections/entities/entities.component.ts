import {Component} from "@angular/core";
import {EntityGroup} from "./entity";
import {EntitiesComponentViewmodel} from "./entities.component.viewmodel";

@Component({
    selector: 'entities',
    templateUrl: './entities.component.html',
    styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent {
    entities: EntityGroup[];

    constructor(private vm: EntitiesComponentViewmodel) {
        vm.getSponsorList().subscribe((entityGroups: EntityGroup[]) => {
            this.entities = entityGroups;
        });
    }
}
