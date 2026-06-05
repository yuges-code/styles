import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import HTMLElementTagNameToken from "../../../tokens/element/tag/name/HTMLElementTagNameToken";
import HTMLElementClosingTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementClosingTagQuoteToken";
import HTMLElementOpeningTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementOpeningTagQuoteToken";
import HTMLElementOpeningTagSlashToken from "../../../tokens/element/tag/slash/HTMLElementOpeningTagSlashToken";

export default class HTMLElementClosingTagPattern extends AbstractParserPattern
{
    name = undefined as HTMLElementTagNameToken | undefined;
    openingQuote = undefined as HTMLElementOpeningTagQuoteToken | undefined;
    openingSlash = undefined as HTMLElementOpeningTagSlashToken | undefined;
    closingQuote = undefined as HTMLElementClosingTagQuoteToken | undefined;

    properties = () => [
        'name',
        'openingQuote',
        'openingSlash',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: HTMLElementOpeningTagQuoteToken,
        }, {
            name: 'openingSlash',
            required: true,
            element: HTMLElementOpeningTagSlashToken,
        }, {
            name: 'name',
            required: true,
            element: HTMLElementTagNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: HTMLElementClosingTagQuoteToken,
        },
    ];
};
