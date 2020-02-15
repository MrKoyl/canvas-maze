import { GameObject } from "../constants";

export type Prop = {
    endGame: Function
}

export class Exit implements GameObject {
    prop: Prop;
    constructor(prop: Prop) {
        this.prop = prop;
    }
    
    trigger(): void {
        this.prop.endGame();
    }
}
