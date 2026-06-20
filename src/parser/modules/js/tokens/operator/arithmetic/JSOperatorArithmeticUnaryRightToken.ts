import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorArithmeticUnaryRightToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '++',
            '--',
        ],
    });
};
