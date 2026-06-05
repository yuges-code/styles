import read from "../utils/read";
import Parentable from "./Parentable";
import Positionable from "./Positionable";
import Propertyable from "./Propertyable";
import ParserRoot from "../root/ParserRoot";
import AbstractParserToken from "../abstracts/AbstractParserToken";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";
import AbstractParserPatternCollection from "../abstracts/AbstractParserPatternCollection";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Patternable<T extends Constructor>(base: T)
{
    return class extends Propertyable(Positionable(Parentable(base)))
    {
        pattern()
        {
            return [] as ({
                name: string,
                required: boolean,
                element:
                    typeof AbstractParserToken |
                    typeof AbstractParserPattern |
                    typeof AbstractParserPatternCollection,
            } | {
                skip: RegExp,
                required: boolean,
            })[];
        };

        static pattern()
        {
            return new this().pattern();
        };

        static parsePattern(
            content: string,
            position: number,
            parent: ParserRoot | AbstractParserPattern
        )
        {
            const items = this.pattern();

            if (!items || !Array.isArray(items) || !items.length) {
                return {
                    pattern: undefined,
                    position: position,
                };
            }

            const instance = new this()
                .setParent(parent)
                .setPosition(position);

            for (let index = 0; index < items.length; index++) {
                const item = items[index];

                if ('skip' in item) {
                    position = read(content, position, undefined, item.skip);

                    continue;
                }

                const result = { position } = item.element.parse(
                    content,
                    position,
                    instance as any as AbstractParserPattern
                );

                console.log(result);

                const element =
                    'token' in result ? result.token :
                    'pattern' in result ? result.pattern :
                    'collection' in result ? result.collection : undefined;

                if (! element && item.required) {
                    return {
                        pattern: undefined,
                        position: instance.position?.start || 0,
                    };
                }

                if (element) {
                    instance
                        .setProperty(item.name, element)
                        .setPositionEnd(element.position?.end || 0);
                }
            }

            return {
                pattern: instance,
                position: position,
            };
        };
    };
};
