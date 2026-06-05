import HTMLTextToken from "../../tokens/text/HTMLTextToken";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";

export default class HTMLTextPattern extends AbstractParserPattern
{
    text = undefined as HTMLTextToken | undefined;

    properties = () => [
        'text',
    ];

    pattern = () => [
        {
            name: 'text',
            required: true,
            element: HTMLTextToken,
        },
    ];
};
