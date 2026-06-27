import JSLoopWhileBodyPattern from "./body/JSLoopWhileBodyPattern";
import JSLoopWhileConditionPattern from "./condition/JSLoopWhileConditionPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSLoopWhileKeywordToken from "../../../tokens/loop/while/keyword/JSLoopWhileKeywordToken";

export default class JSLoopWhilePattern extends AbstractParserPattern
{
    keyword = undefined as JSLoopWhileKeywordToken | undefined;
    condition = undefined as JSLoopWhileConditionPattern | undefined;
    body = undefined as JSLoopWhileBodyPattern | undefined;

    properties = () => [
        'keyword',
        'condition',
        'body',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSLoopWhileKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: true,
            element: JSLoopWhileConditionPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: true,
            element: JSLoopWhileBodyPattern,
        },
    ];
};
