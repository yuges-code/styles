import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSModuleImportFromKeywordToken from "../../../tokens/module/import/from/keyword/JSModuleImportFromKeywordToken";
import JSModuleImportKeywordToken from "../../../tokens/module/import/keyword/JSModuleImportKeywordToken";
import JSDataStringPattern from "../../data/string/JSDataStringPattern";
import JSModuleImportIdentifiersPattern from "./identifiers/JSModuleImportIdentifiersPattern";

export default class JSModuleImportPattern extends AbstractParserPattern
{
    keyword = undefined as JSModuleImportKeywordToken | undefined;
    identifiers = undefined as JSModuleImportIdentifiersPattern | undefined;
    from = undefined as JSModuleImportFromKeywordToken | undefined;
    source = undefined as JSDataStringPattern | undefined;


    properties = () => [
        'keyword',
        'identifiers',
        'from',
        'source',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSModuleImportKeywordToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'identifiers',
            required: true,
            element: JSModuleImportIdentifiersPattern,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'from',
            required: true,
            element: JSModuleImportFromKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'source',
            required: true,
            element: JSDataStringPattern,
        },
    ];
};
