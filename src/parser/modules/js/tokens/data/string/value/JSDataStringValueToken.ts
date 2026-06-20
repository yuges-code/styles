import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSDataStringValueToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => /[^'"`]/.test(symbol),
        final: (symbol: string) => /['"`]/.test(symbol),
        symbol: () => true,
    });
};
