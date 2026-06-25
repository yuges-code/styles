import AbstractParserPatternCollection from "../../../../../../abstracts/AbstractParserPatternCollection";
import JSDataObjectPropertyPattern from "../../../../patterns/data/object/property/JSDataObjectPropertyPattern";

export default class JSDataObjectPropertyCollection extends AbstractParserPatternCollection
{
    pattern = () => JSDataObjectPropertyPattern;
};
