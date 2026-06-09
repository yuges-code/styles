import AbstractParserToken from "../../../../../../../abstracts/AbstractParserToken";

export default class HTMLElementOpeningTagAttributeQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /["']/.test(symbol),
        final: (symbol: string) => /[^"']/.test(symbol),
        symbol: (symbol: string) => /["']/.test(symbol),
        length: () => 1,
    });
};
