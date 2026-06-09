import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class HTMLCommentClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '-->',
    });
};
