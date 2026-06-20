import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorArithmeticToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '+',
            '-',
            '*',
            '/',
            '%',
            '**',
            '++',
            '--',
        ],
    });
};
