import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSDataArrayOpeningQuoteToken from "../../../tokens/data/array/quote/JSDataArrayOpeningQuoteToken";
import JSDataArrayClosingQuoteToken from "../../../tokens/data/array/quote/JSDataArrayClosingQuoteToken";
import JSDataArrayValueCollection from "../../../collections/data/array/value/JSDataArrayValueCollection";

export default class JSDataArrayPattern extends AbstractParserPattern
{
    values = undefined as JSDataArrayValueCollection | undefined;
    openingQuote = undefined as JSDataArrayOpeningQuoteToken | undefined;
    closingQuote = undefined as JSDataArrayClosingQuoteToken | undefined;

    properties = () => [
        'values',
        'openingQuote',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSDataArrayOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: false,
            element: JSDataArrayValueCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSDataArrayClosingQuoteToken,
        },
    ];
};
