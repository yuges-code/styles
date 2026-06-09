
import HTMLNodeCollection from "../../collections/HTMLNodeCollection";
import HTMLElementOpeningTagPattern from "./tag/HTMLElementOpeningTagPattern";
import HTMLElementClosingTagPattern from "./tag/HTMLElementClosingTagPattern";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";

export default class HTMLElementPattern extends AbstractParserPattern
{
    children = undefined as HTMLNodeCollection | undefined;
    openingTag = undefined as HTMLElementOpeningTagPattern | undefined;
    closingTag = undefined as HTMLElementClosingTagPattern | undefined;

    properties = () => [
        'children',
        'openingTag',
        'closingTag',
    ];

    pattern = () => [
        {
            name: 'openingTag',
            required: true,
            element: HTMLElementOpeningTagPattern,
        }, {
            name: 'children',
            required: false,
            disabled: () => {
                const name = this.openingTag?.name?.lexeme?.toLowerCase();

                return name ? this.singles().includes(name) : false;
            },
            element: HTMLNodeCollection,
        }, {
            name: 'closingTag',
            required: () => {
                const name = this.openingTag?.name?.lexeme?.toLowerCase();

                return name ? !this.singles().includes(name) : false;
            },
            element: HTMLElementClosingTagPattern,
        },
    ];

    singles = () => [
        'hr',
        'br',
        'img',
        'wbr',
        'col',
        'meta',
        'link',
        'base',
        'area',
        'input',
        'param',
        'track',
        'embed',
        'source',
        'keygen',
        'command',
        'menuitem',
        '!doctype',
    ];
};
