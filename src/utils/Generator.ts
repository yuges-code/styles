import type Config from "../config/Config";
import type StyleClass from "../data/StyleClass";

export default class Generator
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;

        this.config;
    };

    public generate(styles: StyleClass[])
    {
        let css = '';

        const layers = this.layers(styles);

        css += this.atoms(layers.atoms);

        return css;
    };

    public camelToKebab(string: string) {
        return string
            .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
            .toLowerCase();
    };

    public layers(styles: StyleClass[])
    {
        const layers = {
            atoms: [] as StyleClass[],
            variants: [] as StyleClass[],
            components: [] as StyleClass[],
        }

        styles.forEach(style => {
            if (style.variants.length) {
                layers.variants.push(style);
            } else {
                layers.atoms.push(style);
            }
        });

        return layers;
    };

    public selector(style: StyleClass)
    {
        return style.raw;
    };

    public content(style: StyleClass)
    {
        return Object.entries(style.content || {})
            .map(([prop, value]) => {
                return `${this.camelToKebab(prop)}: ${value!(style.value || '')}`
            });
    };

    public space(size = 4, level = 0, indent = ' ')
    {
        return indent.repeat(size * level);
    };

    public atom(style: StyleClass, space = 4, nested: boolean | number = false)
    {
        nested = Number(nested);

        const body = this
            .content(style)
            .map(string =>
                this.space(space, nested + 1) + string + ';'
            )
            .join('\n');

        const indent = this.space(space, nested);

        return `${indent}.${this.selector(style)} {\n${body}\n${indent}};`;
    };

    public atoms(styles: StyleClass[])
    {
        return styles.map(style => this.atom(style, 2)).join('\n');
    };

    public variables()
    {

    };

    public variants()
    {

    };

    public components()
    {

    };
};
