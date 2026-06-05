import ParserRoot from "../root/ParserRoot";
import AbstractParserPattern from "../abstracts/AbstractParserPattern";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Parentable<T extends Constructor>(base: T)
{
    return class extends base
    {
        parent: ParserRoot | AbstractParserPattern | undefined;

        setParent(parent: ParserRoot | AbstractParserPattern)
        {
            this.parent = parent;
    
            return this;
        };
    };
};
