import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorComparisonToken from "../../../tokens/operator/comparison/JSOperatorComparisonToken";

export default class JSOperatorComparisonPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorComparisonToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorComparisonToken,
        },
    ];
};
