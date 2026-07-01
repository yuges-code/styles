import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import JSOperatorCommaToken from "../../../../tokens/operator/comma/JSOperatorCommaToken";
import JSModuleImportAsKeywordToken from "../../../../tokens/module/import/as/keyword/JSModuleImportAsKeywordToken";

export default class JSModuleImportIdentifierPattern extends AbstractParserPattern
{
    identifier = undefined as JSVariableNameToken | undefined;
    as = undefined as JSModuleImportAsKeywordToken | undefined;
    alias = undefined as JSVariableNameToken | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'identifier',
        'as',
        'alias',
        'operator',
    ];

    pattern = () => [
        {
            name: 'identifier',
            required: true,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'as',
            required: false,
            element: JSModuleImportAsKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'alias',
            required: () => this.as != undefined,
            disabled: () => this.as === undefined,
            element: JSVariableNameToken,
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
