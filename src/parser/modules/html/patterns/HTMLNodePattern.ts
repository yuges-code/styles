import HTMLTextPattern from "./text/HTMLTextPattern";
import HTMLElementPattern from "./element/HTMLElementPattern";
import AbstractParserPattern from "../../../abstracts/AbstractParserPattern";

export default class HTMLNodePattern extends AbstractParserPattern
{
    morphs = () => [
        HTMLTextPattern,
        HTMLElementPattern,
    ];
};
