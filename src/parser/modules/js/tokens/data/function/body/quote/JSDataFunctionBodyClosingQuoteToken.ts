import AbstractParserToken from "../../../../../../../abstracts/AbstractParserToken";

export default class JSDataFunctionBodyClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '}',
    });
};
