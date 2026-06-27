import JSLoopWhilePattern from "./loop/while/JSLoopWhilePattern";
import AbstractParserPattern from "../../../abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "./expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "./expression/declaration/JSExpressionDeclarationPattern";

export default class JSNodePattern extends AbstractParserPattern
{
    morphs = () => [
        JSExpressionDeclarationPattern,
        JSLoopWhilePattern,
        JSExpressionBinaryPattern,

        // class
        // comment
        // function
    ];
};
