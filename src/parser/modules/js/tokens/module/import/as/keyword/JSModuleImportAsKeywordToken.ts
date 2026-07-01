import AbstractParserToken from "../../../../../../../abstracts/AbstractParserToken";

export default class JSModuleImportAsKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'as',
    });
};
