import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../tokens/variable/name/JSVariableNameToken";

export default class JSVariableNamePattern extends AbstractParserPattern
{
    identifier = undefined as JSVariableNameToken | undefined;

    properties = () => [
        'identifier',
    ];

    pattern = () => [
        {
            name: 'identifier',
            required: true,
            element: JSVariableNameToken,
        },
    ];
};
