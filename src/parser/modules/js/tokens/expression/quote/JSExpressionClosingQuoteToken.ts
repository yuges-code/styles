import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSExpressionClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ')',
    });
};
