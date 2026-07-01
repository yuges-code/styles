import JSLoopWhilePattern from "./loop/while/JSLoopWhilePattern";
import AbstractParserPattern from "../../../abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "./expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "./expression/declaration/JSExpressionDeclarationPattern";
import JSModuleImportPattern from "./module/import/JSModuleImportPattern";

export default class JSNodePattern extends AbstractParserPattern
{
    morphs = () => [
        JSModuleImportPattern,
        JSExpressionDeclarationPattern,
        JSLoopWhilePattern,
        JSExpressionBinaryPattern,

        // class
        // comment
        // function
    ];
};
