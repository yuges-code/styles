import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSOperatorLogicalUnaryLeftToken from "../../../tokens/operator/logical/JSOperatorLogicalUnaryLeftToken";

export default class JSOperatorLogicalUnaryLeftPattern extends AbstractParserPattern
{
    operator = undefined as JSOperatorLogicalUnaryLeftToken | undefined;

    properties = () => [
        'operator',
    ];

    pattern = () => [
        {
            name: 'operator',
            required: true,
            element: JSOperatorLogicalUnaryLeftToken,
        },
    ];
};
