import JSNodeCollection from "../../../../collections/JSNodeCollection";
import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSLoopBodyOpeningQuoteToken from "../../../../tokens/loop/body/quote/JSLoopBodyOpeningQuoteToken";
import JSLoopBodyClosingQuoteToken from "../../../../tokens/loop/body/quote/JSLoopBodyClosingQuoteToken";

export default class JSLoopWhileBodyPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSLoopBodyOpeningQuoteToken | undefined;
    instructions = undefined as JSNodeCollection | undefined;
    closingQuote = undefined as JSLoopBodyClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'instructions',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSLoopBodyOpeningQuoteToken,
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
            element: JSLoopBodyClosingQuoteToken,
        },
    ];
};
