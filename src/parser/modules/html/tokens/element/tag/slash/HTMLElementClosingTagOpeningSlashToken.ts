import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class HTMLElementClosingTagOpeningSlashToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => symbol === '/',
        final: (symbol: string) => symbol != '/',
        symbol: (symbol: string) => symbol === '/',
        length: () => 1,
    });
};
