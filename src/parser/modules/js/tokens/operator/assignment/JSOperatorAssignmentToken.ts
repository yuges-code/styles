import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorAssignmentToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '=',
    });
};
