import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorComparisonToken extends AbstractParserToken
{
    rules = () => ({
        start: (
            symbol: string,
            content: string,
            position: number
        ) => content[position + 1] != '/',
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '===',
            '==',
            '!==',
            '!=',
            '>=',
            '<=',
            '>',
            '<',
        ],
    });
};
