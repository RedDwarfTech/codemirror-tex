export declare class Trie<T> {
    value: T;
    static deserialize<S>(s: string): Trie<S>;
    static serialize(t: Trie<unknown>): string;
    children: {
        [s: string]: Trie<T>;
    };
    constructor(value: T);
    insert(k: string, v: T): void;
    lookup(k: string): T | undefined;
    clone(): Trie<T>;
}
//# sourceMappingURL=trie.d.ts.map