import AbstractParserToken from "../../../../abstracts/AbstractParserToken";

export default class HTMLTextToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[^<]/.test(symbol),
        final: (symbol: string) => /[<]/.test(symbol),
        symbol: (symbol: string) => /[^<]/.test(symbol),
    });
};
