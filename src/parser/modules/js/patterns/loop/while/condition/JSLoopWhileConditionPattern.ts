import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSExpressionClosingQuoteToken from "../../../../tokens/expression/quote/JSExpressionClosingQuoteToken";
import JSExpressionOpeningQuoteToken from "../../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";
import JSExpressionBinaryPattern from "../../../expression/binary/JSExpressionBinaryPattern";

export default class JSLoopWhileConditionPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    expression = undefined as JSExpressionBinaryPattern | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'expression',
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
            name: 'expression',
            required: true,
            element: JSExpressionBinaryPattern,
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
