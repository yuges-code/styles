import AbstractParserPattern from "../../../../../../../abstracts/AbstractParserPattern";
import JSVariableNamePattern from "../../../../variable/name/JSVariableNamePattern";
import JSDataBooleanPattern from "../../../boolean/JSDataBooleanPattern";
import JSDataNullPattern from "../../../null/JSDataNullPattern";
import JSDataNumberPattern from "../../../number/JSDataNumberPattern";
import JSDataStringPattern from "../../../string/JSDataStringPattern";
import JSDataUndefinedPattern from "../../../undefined/JSDataUndefinedPattern";

export default class JSDataObjectPropertyKeyPattern extends AbstractParserPattern
{
    morphs = () => [
        JSDataStringPattern,
        JSDataNumberPattern,
        JSDataNullPattern,
        JSDataBooleanPattern,
        JSDataUndefinedPattern,

        JSVariableNamePattern,
    ];
};
