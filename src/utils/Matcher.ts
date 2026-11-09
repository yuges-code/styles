import type Config from '../config/Config';
import type StyleClass from '../data/StyleClass';

export default class Matcher
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;
    };

    public match(lexemes: (StyleClass | undefined)[])
    {
        return lexemes.filter((lexeme): lexeme is StyleClass => {
            if (! lexeme) {
                return false;
            }

            return this.isExclude(lexeme) ? false : this.isInclude(lexeme)
        });
    };

    public isExclude(lexeme: StyleClass)
    {
        return this.config.classes.exclude.some(pattern =>
            pattern instanceof RegExp ? pattern.test(lexeme.raw || '') : pattern === lexeme.raw);
    }

    public isInclude(lexeme: StyleClass)
    {
        this.config.classes.include

        return lexeme.group !== undefined;
    }
};
