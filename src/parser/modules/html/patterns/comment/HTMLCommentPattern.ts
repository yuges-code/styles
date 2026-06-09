import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";
import HTMLCommentTextToken from "../../tokens/comment/text/HTMLCommentTextToken";
import HTMLCommentOpeningQuoteToken from "../../tokens/comment/quote/HTMLCommentOpeningQuoteToken";
import HTMLCommentClosingQuoteToken from "../../tokens/comment/quote/HTMLCommentClosingQuoteToken";

export default class HTMLCommentPattern extends AbstractParserPattern
{
    text = undefined as HTMLCommentTextToken | undefined;
    openingQuote = undefined as HTMLCommentOpeningQuoteToken | undefined;
    closingQuote = undefined as HTMLCommentClosingQuoteToken | undefined;

    properties = () => [
        'text',
        'openingQuote',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: HTMLCommentOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'text',
            required: false,
            element: HTMLCommentTextToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: HTMLCommentClosingQuoteToken,
        },
    ];
};
