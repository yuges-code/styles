import JSDataNullPattern from "./null/JSDataNullPattern";
import JSDataArrayPattern from "./array/JSDataArrayPattern";
import JSDataStringPattern from "./string/JSDataStringPattern";
import JSDataNumberPattern from "./number/JSDataNumberPattern";
import JSDataBooleanPattern from "./boolean/JSDataBooleanPattern";
import JSDataUndefinedPattern from "./undefined/JSDataUndefinedPattern";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";
import JSDataObjectPattern from "./object/JSDataObjectPattern";

export default class JSDataPattern extends AbstractParserPattern
{
    morphs = () => [
        JSDataStringPattern,
        JSDataNumberPattern,
        JSDataArrayPattern,
        JSDataNullPattern,
        JSDataBooleanPattern,
        JSDataUndefinedPattern,
        JSDataObjectPattern,
        // Function
        // Class
    ];
};
