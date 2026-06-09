import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import HTMLElementTagNameToken from "../../../tokens/element/tag/name/HTMLElementTagNameToken";
import HTMLElementClosingTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementClosingTagQuoteToken";
import HTMLElementOpeningTagQuoteToken from "../../../tokens/element/tag/quote/HTMLElementOpeningTagQuoteToken";
import HTMLElementTagAttributeCollection from "../../../collections/element/tag/attribute/HTMLElementTagAttributeCollection";
import HTMLElementOpeningTagClosingSlashToken from "../../../tokens/element/tag/slash/HTMLElementOpeningTagClosingSlashToken";

export default class HTMLElementOpeningTagPattern extends AbstractParserPattern
{
    name = undefined as HTMLElementTagNameToken | undefined;
    attributes = undefined as HTMLElementTagAttributeCollection | undefined;
    openingQuote = undefined as HTMLElementOpeningTagQuoteToken | undefined;
    closingQuote = undefined as HTMLElementClosingTagQuoteToken | undefined;
    closingSlash = undefined as HTMLElementOpeningTagClosingSlashToken | undefined;

    properties = () => [
        'name',
        'attributes',
        'openingQuote',
        'closingSlash',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: HTMLElementOpeningTagQuoteToken,
        }, {
            name: 'name',
            required: true,
            element: HTMLElementTagNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'attributes',
            required: false,
            element: HTMLElementTagAttributeCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingSlash',
            required: false,
            element: HTMLElementOpeningTagClosingSlashToken,
        }, {
            name: 'closingQuote',
            required: true,
            element: HTMLElementClosingTagQuoteToken,
        },
    ];
};
