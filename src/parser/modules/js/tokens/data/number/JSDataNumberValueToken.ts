import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class JSDataNumberValueToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[0-9]/.test(symbol),
        final: (symbol: string) => /[^0-9]/.test(symbol),
        symbol: (symbol: string) => /[0-9]/.test(symbol),
    });
};
