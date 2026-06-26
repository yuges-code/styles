import JSNodeCollection from "../../../../collections/JSNodeCollection";
import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSDataFunctionBodyOpeningQuoteToken from "../../../../tokens/data/function/body/quote/JSDataFunctionBodyOpeningQuoteToken";
import JSDataFunctionBodyClosingQuoteToken from "../../../../tokens/data/function/body/quote/JSDataFunctionBodyClosingQuoteToken";

export default class JSDataFunctionBodyPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSDataFunctionBodyOpeningQuoteToken | undefined;
    instructions = undefined as JSNodeCollection | undefined;
    closingQuote = undefined as JSDataFunctionBodyClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'instructions',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSDataFunctionBodyOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'instructions',
            required: false,
            element: JSNodeCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSDataFunctionBodyClosingQuoteToken,
        },
    ];
};
