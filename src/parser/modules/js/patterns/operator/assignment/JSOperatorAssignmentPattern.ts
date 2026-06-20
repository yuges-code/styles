import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorAssignmentToken from "../../../tokens/operator/assignment/JSOperatorAssignmentToken";

export default class JSOperatorAssignmentPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorAssignmentToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorAssignmentToken,
        },
    ];
};
