import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSDataArrayClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ']',
    });
};
