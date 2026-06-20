import JSExpressionCallingPattern from "../calling/JSExpressionCallingPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../tokens/variable/name/JSVariableNameToken";
import JSOperatorAccessToken from "../../../tokens/operator/access/JSOperatorAccessToken";
import JSOperatorAccessOptionalToken from "../../../tokens/operator/access/JSOperatorAccessOptionalToken";

export default class JSExpressionAccessPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorAccessToken | undefined;
    identifier = undefined as JSVariableNameToken | undefined;
    calling = undefined as JSExpressionCallingPattern | undefined;
    access = undefined as JSExpressionAccessPattern | undefined;

    properties = () => [
        'operator',
        'identifier',
        'calling',
        'access',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: false,
            element: JSOperatorAccessToken,
        }, {
            name: 'operator',
            required: () => this.operator === undefined,
            disabled: () => this.operator != undefined,
            element: JSOperatorAccessOptionalToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'identifier',
            required: false,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'calling',
            required: () => this.identifier === undefined,
            element: JSExpressionCallingPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'access',
            required: false,
            element: JSExpressionAccessPattern,
        },
    ];
};
