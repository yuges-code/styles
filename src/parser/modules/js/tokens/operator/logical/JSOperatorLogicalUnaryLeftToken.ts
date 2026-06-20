import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorLogicalUnaryLeftToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '!',
    });
};
