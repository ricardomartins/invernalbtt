import {Component, HostBinding, Input} from '@angular/core';
import {EntityGroup} from "./entity";

@Component({
    selector: 'entity-group-set',
    template: `<entity-group *ngFor="let eGroup of entityGroups" [entityGroup]="eGroup"></entity-group>`
})
export class EntityGroupSetComponent {
    @Input() entityGroups: EntityGroup[];
    // IDEA: Add an input to this component that allows filtering the groups and/or entities

    @HostBinding('class') hostClasses: string = 'container';
}
