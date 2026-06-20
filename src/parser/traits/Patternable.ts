import read from "../utils/read";
import Parentable from "./Parentable";
import Positionable from "./Positionable";
import Propertyable from "./Propertyable";
import ParserRoot from "../root/ParserRoot";
import AbstractParserToken from "../abstracts/AbstractParserToken";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";
import AbstractParserPatternCollection from "../abstracts/AbstractParserPatternCollection";

type Constructor<T = {}> = new (...args: any[]) => T;

type Element = 
    typeof AbstractParserToken |
    typeof AbstractParserPattern |
    typeof AbstractParserPatternCollection

export default function Patternable<T extends Constructor>(base: T)
{
    return class extends Propertyable(Positionable(Parentable(base)))
    {
        pattern()
        {
            return [] as ({
                name: string,
                required: boolean | (() => boolean),
                disabled?: boolean | (() => boolean),
                element: Element | (() => Element),
            } | {
                skip: RegExp,
                required: boolean | (() => boolean),
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
            const instance = new this()
                .setParent(parent)
                .setPosition(position);

            const items = instance.pattern();

            if (!items || !Array.isArray(items) || !items.length) {
                return {
                    pattern: undefined,
                    position: position,
                };
            }

            for (let index = 0; index < items.length; index++) {
                const item = items[index];

                if ('disabled' in item && (
                        typeof item.disabled === 'boolean' && item.disabled ||
                        typeof item.disabled === 'function' && item.disabled()
                    )
                ) {
                    continue;
                }

                if ('skip' in item) {
                    position = read(content, position, undefined, item.skip);

                    continue;
                }

                const result = { position } = (this.isClassConstructor(item.element) ? item.element : item.element())
                    .parse(
                        content,
                        position,
                        instance as any as AbstractParserPattern
                    );

                const element =
                    'token' in result ? result.token :
                    'pattern' in result ? result.pattern :
                    'collection' in result ? result.collection : undefined;

                if (! element && (
                        (typeof item.required === 'boolean' && item.required) ||
                        (typeof item.required === 'function' && item.required())
                    )
                ) {
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

        static isClassConstructor(value: any): value is Element
        {
            if (typeof value !== 'function') {
                return false;
            }

            try {
                value();

                return false;
            } catch (err) {
                return true;
            }
        };
    };
};
