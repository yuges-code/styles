import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSDataNumberSeparatorToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '.',
    });
};
