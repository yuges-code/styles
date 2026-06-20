import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorAssignmentArithmeticToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '+=',
            '-=',
            '*=',
            '/=',
            '%=',
            '**=',
        ],
    });
};
