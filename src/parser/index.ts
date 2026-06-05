import ParserRoot from "./root/ParserRoot";
import HTMLNodeCollection from "./modules/html/collections/HTMLNodeCollection";

const strategies = {
    js: js,
    ts: ts,
    jsx: jsx,
    tsx: tsx,
    vue: vue,
    html: html,
};

function parse(
    content: string,
    type: keyof typeof strategies,
    position = 0 as number,
)
{
    var {
        root,
        position,
    } = ParserRoot.parse(content, HTMLNodeCollection, position);

    return {
        root: root,
    };
};

function js() {};
function ts() {};
function jsx() {};
function tsx() {};
function vue() {};
function html() {};

const parser = {
    parse: parse,
    vue: vue,
};

export default parser;
