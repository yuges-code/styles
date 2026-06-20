import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorArithmeticUnaryLeftToken from "../../../tokens/operator/arithmetic/JSOperatorArithmeticUnaryLeftToken";

export default class JSOperatorArithmeticUnaryLeftPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorArithmeticUnaryLeftToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorArithmeticUnaryLeftToken,
        },
    ];
};
