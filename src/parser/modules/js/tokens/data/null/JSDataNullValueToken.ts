import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSDataNullValueToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'null',
    });
};
