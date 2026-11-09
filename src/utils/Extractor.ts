import ParserTs from "@yuges/parser-ts";
import type Config from "../config/Config";

export default class Extractor
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;

        this.config;
    };

    public extract(content: string, type: string)
    {
        const lexemes = new Set<string>();

        ParserTs.parse(content, type as any, 0, {
            parsed: (token) => token.lexeme?.split(/\s/).forEach((lexeme) => {
                lexemes.add(lexeme);
            }),
        });

        return Array.from(lexemes);
    };
};
