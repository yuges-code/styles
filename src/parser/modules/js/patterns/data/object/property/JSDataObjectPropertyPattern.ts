import JSDataObjectPropertyKeyPattern from "./key/JSDataObjectPropertyKeyPattern";
import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSDataObjectPropertyValuePattern from "./value/JSDataObjectPropertyValuePattern";
import JSDataObjectPropertySeparatorToken from "../../../../tokens/data/object/property/separator/JSDataObjectPropertySeparatorToken";
import JSOperatorCommaToken from "../../../../tokens/operator/comma/JSOperatorCommaToken";

export default class JSDataObjectPropertyPattern extends AbstractParserPattern
{
    key = undefined as JSDataObjectPropertyKeyPattern | undefined;
    separator = undefined as JSDataObjectPropertySeparatorToken | undefined;
    value = undefined as JSDataObjectPropertyValuePattern | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'key',
        'separator',
        'value',
        'operator',
    ];

    pattern = () => [
        {
            name: 'key',
            required: true,
            element: JSDataObjectPropertyKeyPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'separator',
            required: true,
            element: JSDataObjectPropertySeparatorToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'value',
            required: true,
            element: JSDataObjectPropertyValuePattern,
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
