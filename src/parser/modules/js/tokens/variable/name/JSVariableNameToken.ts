import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSVariableNameToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[a-zA-Z_$]/.test(symbol),
        final: (symbol: string) => /[\s=:;,.]/.test(symbol),
        symbol: (symbol: string) => /[a-zA-Z0-9_$]/.test(symbol),
    });
};
