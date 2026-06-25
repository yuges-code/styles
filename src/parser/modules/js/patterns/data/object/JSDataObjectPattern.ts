import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSDataObjectClosingQuoteToken from "../../../tokens/data/object/quote/JSDataObjectClosingQuoteToken";
import JSDataObjectOpeningQuoteToken from "../../../tokens/data/object/quote/JSDataObjectOpeningQuoteToken";
import JSDataObjectPropertyCollection from "../../../collections/data/object/property/JSDataObjectPropertyCollection";

export default class JSDataObjectPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSDataObjectOpeningQuoteToken | undefined;
    values = undefined as JSDataObjectPropertyCollection | undefined;
    closingQuote = undefined as JSDataObjectClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'values',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSDataObjectOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: false,
            element: JSDataObjectPropertyCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSDataObjectClosingQuoteToken,
        }
    ];
};
