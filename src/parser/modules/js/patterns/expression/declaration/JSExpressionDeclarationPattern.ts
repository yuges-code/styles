import JSExpressionBinaryPattern from "../binary/JSExpressionBinaryPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../tokens/variable/name/JSVariableNameToken";
import JSVariableKeywordToken from "../../../tokens/variable/keyword/JSVariableKeywordToken";
import JSOperatorAssignmentToken from "../../../tokens/operator/assignment/JSOperatorAssignmentToken";

export default class JSExpressionDeclarationPattern extends AbstractParserPattern
{
    name = undefined as JSVariableNameToken | undefined;
    keyword = undefined as JSVariableKeywordToken | undefined;
    operator = undefined as JSOperatorAssignmentToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;

    properties = () => [
        'name',
        'keyword',
        'operator',
        'expression',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSVariableKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'name',
            required: () => this.keyword != undefined,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'operator',
            required: false,
            element: JSOperatorAssignmentToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'expression',
            required: () => this.operator != undefined,
            disabled: () => this.operator === undefined,
            element: JSExpressionBinaryPattern,
        },
    ];
}
