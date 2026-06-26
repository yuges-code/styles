import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSDataFunctionKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'function',
    });
};
