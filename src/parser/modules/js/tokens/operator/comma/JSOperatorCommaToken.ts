import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorCommaToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ',',
    });
};
