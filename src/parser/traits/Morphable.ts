import ParserRoot from "../root/ParserRoot";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Morphable<T extends Constructor>(base: T)
{
    return class extends base
    {
        morphs(): typeof AbstractParserPattern[]
        {
            return [];
        }

        static morphs()
        {
            return new this().morphs();
        };

        static parseMorph(content: string, position: number, parent: ParserRoot | AbstractParserPattern)
        {
            const morphs = this.morphs();

            var pattern: InstanceType<typeof morphs[number]> | undefined;

            if (morphs && Array.isArray(morphs) && morphs.length) {
                for (let index = 0; index < morphs.length; index++) {
                    if (AbstractParserPattern.prototype.isPrototypeOf(morphs[index].prototype)) {
                        var {
                            pattern,
                            position,
                        } = morphs[index].parse(content, position, parent);
                    } else {
                        continue;
                    }

                    if (pattern) {
                        break;
                    }
                }
            }

            return {
                pattern: pattern,
                position: position,
            };
        }
    };
};
