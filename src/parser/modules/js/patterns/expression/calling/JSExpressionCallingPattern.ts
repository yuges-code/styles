import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSExpressionClosingQuoteToken from "../../../tokens/expression/quote/JSExpressionClosingQuoteToken";
import JSExpressionOpeningQuoteToken from "../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";

export default class JSExpressionCallingPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSExpressionOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSExpressionClosingQuoteToken,
        },
    ];
};
