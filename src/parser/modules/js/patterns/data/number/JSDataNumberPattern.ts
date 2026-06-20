import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSDataNumberSeparatorToken from "../../../tokens/data/number/JSDataNumberSeparatorToken";
import JSDataNumberValueToken from "../../../tokens/data/number/JSDataNumberValueToken";

export default class JSDataNumberPattern extends AbstractParserPattern
{
    integer = undefined as JSDataNumberValueToken | undefined;
    separator = undefined as JSDataNumberSeparatorToken | undefined;
    fractional = undefined as JSDataNumberValueToken | undefined;

    properties = () => [
        'integer',
        'separator',
        'fractional',
    ];

    pattern = () => [
        {
            name: 'integer',
            required: false,
            element: JSDataNumberValueToken,
        }, {
            name: 'separator',
            required: () => this.integer === undefined,
            element: JSDataNumberSeparatorToken,
        }, {
            name: 'fractional',
            required: () => this.separator != undefined,
            disabled: () => this.separator === undefined,
            element: JSDataNumberValueToken,
        },
    ];
};
