import read from "../utils/read";
import Arrayable from "../traits/Arrayable";
import Parentable from "../traits/Parentable";
import Positionable from "../traits/Positionable";
import AbstractParserPattern from "./AbstractParserPattern";

interface Rules {
    start: <T extends AbstractParserPattern>(
        symbol: string,
        content: string,
        position: number,
        parent: T,
    ) => boolean,
    final: <T extends AbstractParserPattern>(
        symbol: string,
        content: string,
        position: number,
        parent: T
    ) => boolean,
    symbol: <T extends AbstractParserPattern>(
        symbol: string,
        content: string,
        position: number,
        parent: T
    ) => boolean,
    length?: <T extends AbstractParserPattern>(
        symbol: string,
        content: string,
        position: number,
        parent: T
    ) => undefined | number,
    lexeme?: <T extends AbstractParserPattern>(
        symbol: string,
        content: string,
        position: number,
        parent: T
    ) => string | string[]
};

export default class AbstractParserToken extends Arrayable(Parentable(Positionable(class {})))
{
    static name: string;

    lexeme = undefined as string | undefined;

    length = () => this.lexeme?.length || 0;

    properties = () => [
        'lexeme'
    ];

    concat(symbol: string)
    {
        return this.lexeme === undefined ? symbol : this.lexeme + symbol;
    }

    setSymbol(symbol: string) {
        this.lexeme = this.concat(symbol);

        return this;
    };

    rules = (): Rules => ({
        start: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern
        ) => true,
        final: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern
        ) => true,
        symbol: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern
        ) => true,
        length: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern
        ): undefined | number => undefined,
        lexeme: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern
        ) => [],
    });

    static rules()
    {
        return new this().rules();
    }

    required()
    {
        return true;
    }

    static required()
    {
        return new this().required();
    }

    static parse(content: string, position: number, parent: AbstractParserPattern)
    {
        const instance = new this()
            .setParent(parent)
            .setPosition(position);

        const rules = instance.rules();

        if (! rules.start(content[position], content, position, parent)) {
            return {
                token: undefined,
                position: position,
            };
        }

        const lexeme = rules.lexeme?.(content[position], content, position, parent);

        position = read(content, position, (content, position) => {
            const length = rules.length?.(content[position], content, position, parent);

            if (length != undefined && instance.length() === length) {
                return false;
            }

            if (rules.final(content[position], content, position, parent)) {
                return false;
            }

            if (! rules.symbol(content[position], content, position, parent)) {
                throw new Error(`
                    Illegal symbol ${content[position]}
                    {position: ${position}, element: ${instance.constructor.name}}
                `);
            }

            if (lexeme && lexeme.length) {
                if (! instance.lexemeStartsWith(lexeme, instance.concat(content[position]))) {
                    return false;
                }
            }

            instance
                .setSymbol(content[position])
                .setPositionEnd(position);
        }, false);

        if (lexeme && lexeme.length) {
            if (! instance.lexemeIncludes(lexeme, instance.lexeme || '')) {
                return {
                    token: undefined,
                    position: instance.position?.start || 0,
                };
            }
        }

        return {
            token: instance,
            position: position,
        };
    };

    lexemeStartsWith(lexeme: string | string[], str: string)
    {
        return Array.isArray(lexeme) ? lexeme.some((lexeme) => lexeme.startsWith(str)) : lexeme.startsWith(str);
    }

    lexemeIncludes(lexeme: string | string[], str: string)
    {
        return Array.isArray(lexeme) ? lexeme.includes(str) : lexeme === str;
    }
};
