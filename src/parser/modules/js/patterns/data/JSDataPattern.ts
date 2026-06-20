import JSDataArrayPattern from "./array/JSDataArrayPattern";
import JSDataStringPattern from "./string/JSDataStringPattern";
import JSDataNumberPattern from "./number/JSDataNumberPattern";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";

export default class JSDataPattern extends AbstractParserPattern
{
    morphs = () => [
        JSDataStringPattern,
        JSDataNumberPattern,
        JSDataArrayPattern,
        // Object
        // Boolean
    ];
};
