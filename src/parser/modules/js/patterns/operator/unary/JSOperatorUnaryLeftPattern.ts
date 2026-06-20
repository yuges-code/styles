import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorLogicalUnaryLeftPattern from "../logical/JSOperatorLogicalUnaryLeftPattern";
import JSOperatorArithmeticUnaryLeftPattern from "../arithmetic/JSOperatorArithmeticUnaryLeftPattern";
import JSOperatorBitwiseUnaryLeftPattern from "../bitwise/JSOperatorBitwiseUnaryLeftPattern";

export default class JSOperatorUnaryLeftPattern extends AbstractParserPattern
{
    morphs = () => [
        JSOperatorLogicalUnaryLeftPattern,
        JSOperatorBitwiseUnaryLeftPattern,
        JSOperatorArithmeticUnaryLeftPattern,
    ];
};
