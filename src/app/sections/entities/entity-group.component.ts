import {Component, Input} from '@angular/core';
import {EntityGroup} from "./entity";

@Component({
    selector: 'entity-group',
    template: `
        <div class="d-flex justify-content-center">
            <div class="fitted-group">
                <h5 class="d-flex justify-content-center">{{entityGroup.name}}</h5>
                <entity *ngFor="let e of entityGroup.entities" [entity]="e"></entity>
            </div>
        </div>`,
    styles: [".fitted-group{background:white;border-radius:0.5rem;}"]
})
export class EntityGroupComponent {
    @Input() entityGroup: EntityGroup;
}
