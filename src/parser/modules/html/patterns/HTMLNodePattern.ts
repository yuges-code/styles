import HTMLTextPattern from "./text/HTMLTextPattern";
import HTMLElementPattern from "./element/HTMLElementPattern";
import HTMLCommentPattern from "./comment/HTMLCommentPattern";
import AbstractParserPattern from "../../../abstracts/AbstractParserPattern";

export default class HTMLNodePattern extends AbstractParserPattern
{
    morphs = () => [
        HTMLTextPattern,
        HTMLElementPattern,
        HTMLCommentPattern,
    ];
};
