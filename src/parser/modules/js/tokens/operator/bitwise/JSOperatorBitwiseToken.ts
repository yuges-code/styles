import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorBitwiseToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '&',
            '|',
            '^',
        ],
    });
};
