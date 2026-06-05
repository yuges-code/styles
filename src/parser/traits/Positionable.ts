import ParserPosition from "../data/ParserPosition";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Positionable<T extends Constructor>(base: T)
{
    return class extends base
    {
        position: ParserPosition | undefined;

        setPosition(position: ParserPosition | number)
        {
            if (position instanceof ParserPosition) {
                this.position = position;
            } else {
                this.position = new ParserPosition(position);
            }

            return this;
        };
    
        setPositionEnd(position: number) {
            if (this.position) {
                this.position.end = position;
            } else {
                this.position = new ParserPosition(position);
            }

            return this;
        };
    };
};
