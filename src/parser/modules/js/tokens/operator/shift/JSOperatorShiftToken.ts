import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorShiftToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => [
            '<<=',
            '<<',
            '>>=',
            '>>',
            '>>>=',
            '>>>',
        ],
    });
};
