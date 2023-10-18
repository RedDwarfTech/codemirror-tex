import { LanguageSupport, LezerLanguage } from '@codemirror/language';
/**
 * A language provider based on the [Lezer TeX
 * parser](https://github.com/mu-io/codemirror-tex/tree/main/packages/lezer-tex), extended with
 * language-specific information.
 */
export declare const texLanguage: LezerLanguage;
interface LanguageOptions {
    directives?: boolean;
    dialect?: 'tex' | 'latex' | 'xetex';
}
export declare function tex({ directives, dialect }?: LanguageOptions): LanguageSupport;
export {};
