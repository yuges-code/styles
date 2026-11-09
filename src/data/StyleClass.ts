import type { ConfigGroupItem } from "../types/config/ConfigGroupItem";

export default class StyleClass
{
    public readonly raw?: string;
    public name?: string;
    public value?: string;
    public group?: string;
    public property?: string;
    public category?: string;
    public variants = [] as string[];
    public content?: ConfigGroupItem['content'];

    public constructor(string: string)
    {
        this.raw = string;
    };

    public setName(name?: string)
    {
        this.name = name;

        return this;
    };

    public setValue(value?: string)
    {
        this.value = value;

        return this;
    };

    public setGroup(group?: string)
    {
        this.group = group;

        return this;
    };

    public setProperty(property?: string)
    {
        this.property = property;

        return this;
    };

    public setCategory(category?: string)
    {
        this.category = category;

        return this;
    };

    public setVariants(variants: string[])
    {
        this.variants = variants;

        return this;
    };

    public setContent(content?: ConfigGroupItem['content'])
    {
        this.content = content;

        return this;
    };
};
