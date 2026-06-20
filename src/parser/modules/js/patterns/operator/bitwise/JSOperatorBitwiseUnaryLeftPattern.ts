import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorBitwiseUnaryLeftToken from "../../../tokens/operator/bitwise/JSOperatorBitwiseUnaryLeftToken";

export default class JSOperatorBitwiseUnaryLeftPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorBitwiseUnaryLeftToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorBitwiseUnaryLeftToken,
        },
    ];
};
