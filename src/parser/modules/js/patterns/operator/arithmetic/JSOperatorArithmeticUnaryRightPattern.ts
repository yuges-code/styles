import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorArithmeticUnaryRightToken from "../../../tokens/operator/arithmetic/JSOperatorArithmeticUnaryRightToken";

export default class JSOperatorArithmeticUnaryRightPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorArithmeticUnaryRightToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorArithmeticUnaryRightToken,
        },
    ];
};
