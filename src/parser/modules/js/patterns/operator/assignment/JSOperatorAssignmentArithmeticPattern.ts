import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorAssignmentArithmeticToken from "../../../tokens/operator/assignment/JSOperatorAssignmentArithmeticToken";

export default class JSOperatorAssignmentArithmeticPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorAssignmentArithmeticToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorAssignmentArithmeticToken,
        },
    ];
};
