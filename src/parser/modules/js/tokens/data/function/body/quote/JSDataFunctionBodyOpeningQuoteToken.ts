import AbstractParserToken from "../../../../../../../abstracts/AbstractParserToken";

export default class JSDataFunctionBodyOpeningQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '{',
    });
};
