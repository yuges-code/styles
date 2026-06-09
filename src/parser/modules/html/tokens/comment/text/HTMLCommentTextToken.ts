import AbstractParserToken from "../../../../../abstracts/AbstractParserToken";

export default class HTMLCommentTextToken extends AbstractParserToken
{
    rules = () => ({
        start: (symbol: string) => true,
        symbol: (symbol: string) => true,
        final: (symbol: string, content: string, position: number) =>
            content.substring(position, position + 3) === '-->',
    });
};
