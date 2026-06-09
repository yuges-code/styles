import AbstractParserToken from "../../../../../../../abstracts/AbstractParserToken";
import AbstractParserPattern from "../../../../../../../abstracts/AbstractParserPattern";
import HTMLElementTagAttributePattern from "../../../../../patterns/element/tag/attribute/HTMLElementTagAttributePattern";

export default class HTMLElementClosingTagAttributeQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: (
            symbol: string,
            content: string,
            position: number,
            parent: AbstractParserPattern,
        ) => {
            if (! (parent instanceof HTMLElementTagAttributePattern)) {
                return false;
            }

            if (parent.openingQuote?.lexeme) {
                return parent.openingQuote.lexeme === '"' ? symbol === '"' : symbol === "'";
            } else {
                return false;
            }
        },
        final: (symbol: string) => /[^"']/.test(symbol),
        symbol: (symbol: string) => /["']/.test(symbol),
        length: () => 1,
    });
};
