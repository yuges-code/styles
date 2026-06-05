import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class HTMLElementTagNameToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[a-zA-Z]/.test(symbol),
        final: (symbol: string) => /[\s\/>]/.test(symbol),
        symbol: (symbol: string) => /[\w\-:.<\\]/.test(symbol),
    });
};
