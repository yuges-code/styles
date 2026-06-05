import read from "../utils/read";
import Arrayable from "../traits/Arrayable";
import Parentable from "../traits/Parentable";
import Positionable from "../traits/Positionable";
import AbstractParserPattern from "./AbstractParserPattern";

export default class AbstractParserToken extends Arrayable(Parentable(Positionable(class {})))
{
    static name: string;

    lexeme: string | undefined;

    properties()
    {
        return ['lexeme'];
    }

    setSymbol(symbol: string) {
        this.lexeme = this.lexeme === undefined ? symbol : this.lexeme + symbol;

        return this;
    };

    rules()
    {
        return {
            start: (symbol: string, content: string, position: number) => true,
            final: (symbol: string, content: string, position: number) => true,
            symbol: (symbol: string, content: string, position: number) => true,
        };
    };

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

        if (! rules.start(content[position], content, position)) {
            return {
                token: undefined,
                position: position,
            };
        }

        position = read(content, position, (content, position) => {
            if (rules.final(content[position], content, position)) {
                return false;
            }

            if (! rules.symbol(content[position], content, position)) {
                throw new Error(`Illegal symbol ${content[position]}`);
            }

            instance
                .setSymbol(content[position])
                .setPositionEnd(position);
        }, false);

        return {
            token: instance,
            position: position,
        };
    };
};
