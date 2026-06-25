import JSDataNullValueToken from "../../../tokens/data/null/JSDataNullValueToken";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";

export default class JSDataNullPattern extends AbstractParserPattern
{
    value = undefined as JSDataNullValueToken | undefined;

    properties = () => [
        'value',
    ];

    pattern = () => [
        {
            name: 'value',
            required: true,
            element: JSDataNullValueToken,
        },
    ];
};
