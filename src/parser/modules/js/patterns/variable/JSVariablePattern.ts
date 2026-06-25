import JSDataPattern from "../data/JSDataPattern";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../tokens/variable/name/JSVariableNameToken";
import JSExpressionAccessPattern from "../expression/access/JSExpressionAccessPattern";
import JSExpressionCallingPattern from "../expression/calling/JSExpressionCallingPattern";

export default class JSVariablePattern extends AbstractParserPattern
{
    data = undefined as JSDataPattern | undefined;
    identifier = undefined as JSVariableNameToken | undefined;
    calling = undefined as JSExpressionCallingPattern | undefined;
    access = undefined as JSExpressionAccessPattern | undefined;

    properties = () => [
        'data',
        'identifier',
        'calling',
        'access',
    ];

    pattern = () => [
        {
            name: 'data',
            required: false,
            element: JSDataPattern,
        }, {
            name: 'identifier',
            required: () => this.data === undefined,
            disabled: () => this.data != undefined,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'calling',
            required: false,
            disabled: () => this.data === undefined && this.identifier === undefined,
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
