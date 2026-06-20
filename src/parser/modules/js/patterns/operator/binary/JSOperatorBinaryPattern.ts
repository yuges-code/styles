import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorArithmeticPattern from "../arithmetic/JSOperatorArithmeticPattern";
import JSOperatorAssignmentPattern from "../assignment/JSOperatorAssignmentPattern";
import JSOperatorAssignmentArithmeticPattern from "../assignment/JSOperatorAssignmentArithmeticPattern";
import JSOperatorComparisonPattern from "../comparison/JSOperatorComparisonPattern";
import JSOperatorLogicalPattern from "../logical/JSOperatorLogicalPattern";
import JSOperatorBitwisePattern from "../bitwise/JSOperatorBitwisePattern";
import JSOperatorShiftPattern from "../shift/JSOperatorShiftPattern";

export default class JSOperatorBinaryPattern extends AbstractParserPattern
{
    morphs = () => [
        JSOperatorAssignmentArithmeticPattern,
        JSOperatorShiftPattern,
        JSOperatorComparisonPattern,
        JSOperatorArithmeticPattern,
        JSOperatorAssignmentPattern,
        JSOperatorLogicalPattern,
        JSOperatorBitwisePattern,
    ];
};
