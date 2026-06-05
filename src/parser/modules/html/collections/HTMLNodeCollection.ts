import HTMLNodePattern from "../patterns/HTMLNodePattern";
import AbstractParserPatternCollection from "../../../abstracts/AbstractParserPatternCollection";

export default class HTMLNodeCollection extends AbstractParserPatternCollection
{
    pattern = () => HTMLNodePattern;
};
