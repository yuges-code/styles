import AbstractParserPatternCollection from "../../../../../../abstracts/AbstractParserPatternCollection";
import JSDataFunctionArgumentPattern from "../../../../patterns/data/function/argument/JSDataFunctionArgumentPattern";

export default class JSDataFunctionArgumentCollection extends AbstractParserPatternCollection
{
    pattern = () => JSDataFunctionArgumentPattern;
};
