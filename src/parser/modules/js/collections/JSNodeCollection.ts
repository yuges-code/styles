import JSNodePattern from "../patterns/JSNodePattern";
import AbstractParserPatternCollection from "../../../abstracts/AbstractParserPatternCollection";

export default class JSNodeCollection extends AbstractParserPatternCollection
{
    skip = () => /[\s;]/;

    pattern = () => JSNodePattern;
};
