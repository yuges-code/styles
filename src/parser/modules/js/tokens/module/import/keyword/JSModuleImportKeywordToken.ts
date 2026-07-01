import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSModuleImportKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'import',
    });
};
