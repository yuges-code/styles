import read from "../utils/read";
import ParserRoot from "../root/ParserRoot";
import Arrayable from "../traits/Arrayable";
import Parentable from "../traits/Parentable";
import Positionable from "../traits/Positionable";
import AbstractParserPattern from "./AbstractParserPattern";

export default class AbstractParserPatternCollection extends Arrayable(Positionable(Parentable(class {})))
{
    items = [] as AbstractParserPattern[];

    skip = (): RegExp | boolean => /\s/;

    push(...items: AbstractParserPattern[])
    {
        this.items.push(...items);

        return this;
    }

    pattern()
    {
        return undefined as typeof AbstractParserPattern | undefined;
    };

    static pattern()
    {
        return new this().pattern();
    };

    static parse(content: string, position: number, parent: ParserRoot | AbstractParserPattern)
    {
        const instance = new this()
            .setParent(parent)
            .setPosition(position);

        const pattern = this.pattern();

        if (pattern) {
            position = read(content, position, (content, position) => {
                const result = { position } = pattern.parse(content, position, parent);

                if (! result.pattern) {
                    return false;
                }

                instance
                    .push(result.pattern)
                    .setPositionEnd(result.pattern?.position?.end || 0);

                return position;
            }, instance.skip());
        }

        return {
            position: position,
            collection: instance,
        };
    };

    toArray(options = { position: false })
    {
        return this.items.map((item) => item.toArray(options));
    };
};
