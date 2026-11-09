import config from "../config";
import StyleClass from '../data/StyleClass';
import Validator from "../utils/Validator";
import type Config from '../config/Config';
import { ValidatorAliases, type ConfigGroupItem } from "../types/config/ConfigGroupItem";

export default class Converter
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;

        this.config;
    };

    public convert(strings: string[])
    {
        return strings.map(string => this.convertClass(string));
    };

    public convertClass(string: string)
    {
        const { variants, property } = this.parseClass(string);

        if (! property) {
            return undefined;
        }

        const style = new StyleClass(string);

        const parsed = this.parseProperty(property);

        style
            .setProperty(property)
            .setVariants(variants)
            .setName(parsed.name)
            .setValue(parsed.value)
            .setGroup(parsed.group)
            .setContent(parsed.content)
            .setCategory(parsed.category);

        return style;
    };

    public parseClass(string: string)
    {
        const variants = string.split(':');
        const property = variants.pop();

        return {
            variants,
            property,
        };
    };

    public splitProperty(property: string)
    {
        const result = [];
        const parts = property.split('-');

        for (let i = 1; i <= parts.length; i++) {
            const first = parts.slice(0, i).join('-');
            const second = i < parts.length ? parts.slice(i).join('-') : undefined;

            result.push([first, second]);
        }

        return result;
    };

    public parseProperty(property: string)
    {
        const result = {
            group: undefined as string | undefined,
            name: undefined as string | undefined,
            value: undefined as string | undefined,
            category: undefined as string | undefined,
            content: undefined as ConfigGroupItem['content'] | undefined,
        };

        this.splitProperty(property).find((variant) => {
            return Object.entries(config).find(([category, value]) => {
                return Object.entries(value).find(([group, option]: [string, ConfigGroupItem]) => {
                    if (this.validate(option, variant)) {

                        result.group = group;
                        result.name = variant[0];
                        result.value = variant[1];
                        result.category = category;
                        result.content = option.content;

                        return true;
                    }
                });
            });
        });

        return result;
    };

    public validate(option: ConfigGroupItem, variant: (string | undefined)[])
    {
        if (! option.prefix.includes(variant?.[0] || '')) {
            return false;
        }

        const validator = new Validator;

        return option.postfix.some((postfix) => {
            if (postfix === undefined) {
                return variant?.[1] === undefined;
            }

            if (typeof postfix === 'string') {
                if (postfix in ValidatorAliases) {
                    const method = ValidatorAliases[postfix as keyof typeof ValidatorAliases];

                    return validator[method](variant?.[1] || '');
                }

                return postfix === variant?.[1];
            } else {
                return postfix(variant?.[1] || '');
            }
        });
    };
};
