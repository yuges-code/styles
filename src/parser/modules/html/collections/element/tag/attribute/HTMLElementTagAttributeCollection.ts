import AbstractParserPatternCollection from "../../../../../../abstracts/AbstractParserPatternCollection";
import HTMLElementTagAttributePattern from "../../../../patterns/element/tag/attribute/HTMLElementTagAttributePattern";

export default class HTMLElementTagAttributeCollection extends AbstractParserPatternCollection
{
    pattern = () => HTMLElementTagAttributePattern;
};
