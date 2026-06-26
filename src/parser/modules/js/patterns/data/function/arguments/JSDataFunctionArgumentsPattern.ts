import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSExpressionOpeningQuoteToken from "../../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";
import JSExpressionClosingQuoteToken from "../../../../tokens/expression/quote/JSExpressionClosingQuoteToken";
import JSDataFunctionArgumentCollection from "../../../../collections/data/function/argument/JSDataFunctionArgumentCollection";

export default class JSDataFunctionArgumentsPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    values = undefined as JSDataFunctionArgumentCollection | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'values',
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
            name: 'values',
            required: false,
            element: JSDataFunctionArgumentCollection,
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
