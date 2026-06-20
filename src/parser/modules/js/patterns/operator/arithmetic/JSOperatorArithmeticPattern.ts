import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorArithmeticToken from "../../../tokens/operator/arithmetic/JSOperatorArithmeticToken";

export default class JSOperatorArithmeticPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorArithmeticToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorArithmeticToken,
        },
    ];
};
