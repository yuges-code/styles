import JSExpressionBinaryPattern from "../binary/JSExpressionBinaryPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorUnaryLeftPattern from "../../operator/unary/JSOperatorUnaryLeftPattern";
import JSExpressionOpeningQuoteToken from "../../../tokens/expression/quote/JSExpressionOpeningQuoteToken";
import JSExpressionClosingQuoteToken from "../../../tokens/expression/quote/JSExpressionClosingQuoteToken";

export default class JSExpressionUnaryPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorUnaryLeftPattern | undefined;
    openingQuote = undefined as JSExpressionOpeningQuoteToken | undefined;
    right = undefined as JSExpressionUnaryPattern | JSExpressionBinaryPattern | undefined;
    closingQuote = undefined as JSExpressionClosingQuoteToken | undefined;

    properties = () => [
        'operator',
        'openingQuote',
        'right',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorUnaryLeftPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'openingQuote',
            required: false,
            element: JSExpressionOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'right',
            required: true,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: () => this.openingQuote != undefined,
            disabled: () => this.openingQuote === undefined,
            element: JSExpressionClosingQuoteToken,
        },
    ];
};
