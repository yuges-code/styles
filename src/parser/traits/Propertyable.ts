import AbstractParserToken from "../abstracts/AbstractParserToken";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";
import AbstractParserPatternCollection from "../abstracts/AbstractParserPatternCollection";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Propertyable<T extends Constructor>(base: T)
{
    return class extends base
    {
        properties(): string[]
        {
            return [];
        };

        setProperty(
            name: string,
            value:
                AbstractParserToken |
                AbstractParserPattern |
                AbstractParserPatternCollection
            )
        {
            if (this.hasOwnProperty(name)) {
                // @ts-ignore
                this[name] = value;
            }

            return this;
        };
    };
};
