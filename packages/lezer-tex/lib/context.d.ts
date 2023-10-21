import { CatCode, GroupType } from './enums';
import { Term } from './gen/terms';
import { Trie } from './utils/trie';
export default class Context {
    groupType: GroupType;
    depth: number;
    parent: Context | null;
    static clone(ctx: Context): Context;
    eqtb: {
        catcode: number[];
        commands: Trie<[code: number, dialect: Term]>;
    };
    constructor(groupType: GroupType);
    constructor(groupType: GroupType, depth: number, parent: Context | null);
    get hash(): number;
    hashEQTB(): number;
    catcode(chr: number): CatCode;
    catcode(chr: number, code: CatCode): Context;
    command(cs: string): number;
    command(cs: string, code: number, dialect: number): Context;
}
export declare class BottomContext extends Context {
    constructor();
    private _catcode;
}
//# sourceMappingURL=context.d.ts.map