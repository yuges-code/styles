import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSLoopWhileKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'while',
    });
};
