import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSOperatorAccessOptionalToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '?.',
    });
};
