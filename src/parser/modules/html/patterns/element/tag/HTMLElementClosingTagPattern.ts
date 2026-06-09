import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import HTMLElementTagNameToken from "../../../tokens/element/tag/name/HTMLElementTagNameToken";
import HTMLElementClosingTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementClosingTagQuoteToken";
import HTMLElementOpeningTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementOpeningTagQuoteToken";
import HTMLElementClosingTagOpeningSlashToken from "../../../tokens/element/tag/slash/HTMLElementClosingTagOpeningSlashToken";

export default class HTMLElementClosingTagPattern extends AbstractParserPattern
{
    name = undefined as HTMLElementTagNameToken | undefined;
    openingQuote = undefined as HTMLElementOpeningTagQuoteToken | undefined;
    closingQuote = undefined as HTMLElementClosingTagQuoteToken | undefined;
    openingSlash = undefined as HTMLElementClosingTagOpeningSlashToken | undefined;

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
            element: HTMLElementClosingTagOpeningSlashToken,
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
