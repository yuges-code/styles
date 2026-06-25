import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSDataUndefinedValueToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'undefined',
    });
};
