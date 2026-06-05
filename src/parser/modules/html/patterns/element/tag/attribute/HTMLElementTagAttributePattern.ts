import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import HTMLElementTagAttributeNameToken from "../../../../tokens/element/tag/attribute/name/HTMLElementTagAttributeNameToken";
import HTMLElementTagAttributeValueToken from "../../../../tokens/element/tag/attribute/value/HTMLElementTagAttributeValueToken";
import HTMLElementTagAttributeOperatorToken from "../../../../tokens/element/tag/attribute/operator/HTMLElementTagAttributeOperatorToken";
import HTMLElementOpeningTagAttributeQuoteToken from "../../../../tokens/element/tag/attribute/quote/HTMLElementOpeningTagAttributeQuoteToken";
import HTMLElementClosingTagAttributeQuoteToken from "../../../../tokens/element/tag/attribute/quote/HTMLElementClosingTagAttributeQuoteToken";

export default class HTMLElementTagAttributePattern extends AbstractParserPattern
{
    name = undefined as HTMLElementTagAttributeNameToken | undefined;
    value = undefined as HTMLElementTagAttributeValueToken | undefined;
    operator = undefined as HTMLElementTagAttributeOperatorToken | undefined;
    openingQuote = undefined as HTMLElementOpeningTagAttributeQuoteToken | undefined;
    closingQuote = undefined as HTMLElementClosingTagAttributeQuoteToken | undefined;

    properties = () => [
        'name',
        'value',
        'operator',
        'openingQuote',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'name',
            required: true,
            element: HTMLElementTagAttributeNameToken,
        }, {
            name: 'operator',
            required: false,
            element: HTMLElementTagAttributeOperatorToken,
        }, {
            name: 'openingQuote',
            required: false,
            element: HTMLElementOpeningTagAttributeQuoteToken,
        }, {
            name: 'value',
            required: false,
            element: HTMLElementTagAttributeValueToken,
        }, {
            name: 'closingQuote',
            required: false,
            element: HTMLElementClosingTagAttributeQuoteToken,
        },
    ];
};
