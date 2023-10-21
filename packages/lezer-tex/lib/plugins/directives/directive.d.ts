import Context from '../../context';
export interface DirectiveSpec<Args extends unknown[]> {
    fallthrough?: boolean;
    test(directive: string): Args | undefined;
    run(context: Context, ...args: Args): Context;
}
export default class Directive<Args extends unknown[]> {
    fallthrough: boolean;
    private test;
    private run;
    constructor({ test, run, fallthrough }: DirectiveSpec<Args>);
    exec(directive: string, context: Context): Context | null;
}
//# sourceMappingURL=directive.d.ts.map