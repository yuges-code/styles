import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSDataStringClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => ['\'', '"', '`'],
    });
};
