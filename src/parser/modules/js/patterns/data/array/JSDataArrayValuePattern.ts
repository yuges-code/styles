import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorCommaToken from "../../../tokens/operator/comma/JSOperatorCommaToken";
import JSExpressionBinaryPattern from "../../expression/binary/JSExpressionBinaryPattern";

export default class JSDataArrayValuePattern extends AbstractParserPattern
{
    expression = undefined as JSExpressionBinaryPattern | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'expression',
        'operator',
    ];

    pattern = () => [
        {
            name: 'expression',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'operator',
            required: false,
            element: JSOperatorCommaToken,
        },
    ];
};
