import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorBitwiseToken from "../../../tokens/operator/bitwise/JSOperatorBitwiseToken";

export default class JSOperatorBitwisePattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorBitwiseToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorBitwiseToken,
        },
    ];
};
