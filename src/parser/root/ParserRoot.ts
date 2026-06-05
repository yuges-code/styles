import read from "../utils/read";
import Positionable from "../traits/Positionable";
import AbstractParserPatternCollection from "../abstracts/AbstractParserPatternCollection";

export default class ParserRoot extends Positionable(class {})
{
    children: AbstractParserPatternCollection | undefined;

    setChildren(collection: AbstractParserPatternCollection)
    {
        this.children = collection;

        return this;
    };

    static parse(content: string, collection: typeof AbstractParserPatternCollection, position: number)
    {
        position = read(content, position);

        const instance = new this().setPosition(position);

        const result = { position } = collection.parse(content, position, instance);

        instance
            .setChildren(result.collection)
            .setPositionEnd(result.collection.position?.end || 0);

        return {
            root: instance,
            position: position,
        };
    };

    toArray(options = { position: false })
    {
        return {
            children: this.children?.toArray(options),
        };
    };
};
