import {Component, HostBinding, Input} from '@angular/core';
import {Entity} from "./entity";

@Component({
    selector: 'entity',
    template: `
        <a *ngIf="entity.anchorActive && entity.anchorUrl; else image" [href]="entity.anchorUrl">
            <ng-container *ngTemplateOutlet="image"></ng-container>
        </a>
        <ng-template #image>
            <img [src]="entity.imageUrl" class="logo p-1 w-auto"/>
        </ng-template>`,
    styles: ['.logo{height:4em;}']
})
export class EntityComponent {
    @Input() entity: Entity;

    // @HostBinding('class') hostClasses: string = "p-1";
}
