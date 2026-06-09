import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class HTMLCommentOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '<!--',
    });
};
