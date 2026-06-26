import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import JSOperatorCommaToken from "../../../../tokens/operator/comma/JSOperatorCommaToken";

export default class JSDataFunctionArgumentPattern extends AbstractParserPattern
{
    identifier = undefined as JSVariableNameToken | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'identifier',
        'operator',
    ];

    pattern = () => [
        {
            name: 'identifier',
            required: true,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'operator',
            required: false,
            element: JSOperatorCommaToken,
        },
    ];
};
