import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSDataStringValueToken from "../../../tokens/data/string/value/JSDataStringValueToken";
import JSDataStringOpeningQuoteToken from "../../../tokens/data/string/quote/JSDataStringOpeningQuoteToken";
import JSDataStringClosingQuoteToken from "../../../tokens/data/string/quote/JSDataStringClosingQuoteToken";

export default class JSDataStringPattern extends AbstractParserPattern
{
    value = undefined as JSDataStringValueToken | undefined;
    openingQuote = undefined as JSDataStringOpeningQuoteToken | undefined;
    closingQuote = undefined as JSDataStringClosingQuoteToken | undefined;

    properties = () => [
        'value',
        'openingQuote',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSDataStringOpeningQuoteToken,
        }, {
            name: 'value',
            required: false,
            element: JSDataStringValueToken,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSDataStringClosingQuoteToken,
        },
    ];
};
