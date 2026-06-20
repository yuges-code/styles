import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorShiftToken from "../../../tokens/operator/shift/JSOperatorShiftToken";

export default class JSOperatorShiftPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorShiftToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorShiftToken,
        },
    ];
};
