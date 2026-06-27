import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSLoopBodyOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '{',
    });
};
