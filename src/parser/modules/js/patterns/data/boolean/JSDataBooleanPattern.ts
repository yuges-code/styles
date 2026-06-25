import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSDataBooleanValueToken from "../../../tokens/data/boolean/JSDataBooleanValueToken";

export default class JSDataBooleanPattern extends AbstractParserPattern
{
    value = undefined as JSDataBooleanValueToken | undefined;

    properties = () => [
        'value',
    ];

    pattern = () => [
        {
            name: 'value',
            required: true,
            element: JSDataBooleanValueToken,
        },
    ];
};
