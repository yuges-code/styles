import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorAccessToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '.',
    });
};
