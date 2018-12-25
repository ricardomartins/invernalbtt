export class Entity {
    id: string;
    name: string;
    imageUrl: string;
    columns: number;
    anchorUrl: string;
    visible: boolean;
    anchorActive: boolean;
}

export class EntityGroup {
    entities: Entity[];
    id: string;
    visible: boolean;
    name: string;

    constructor(copy: EntityGroup) {
        this.id = copy.id;
        this.name = copy.name;
        this.visible = copy.visible;
        this.entities = Object.assign([], copy.entities);
    }
}
