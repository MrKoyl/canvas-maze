import {
    GAME_OBJECT_LIST,
    GameObject,
} from "./constants";

import { Exit, ExitProp } from "./GameObjectImport";

export default class GameObjectFactory{
    private static getNewObject: { [key in GAME_OBJECT_LIST]: Function } = {
        EXIT: (prop: ExitProp) => new Exit(prop)
    }

    public static create(objectType: GAME_OBJECT_LIST, prop: object): GameObject{
        return this.getNewObject[objectType](prop);
    }
}
