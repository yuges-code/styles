import fs from 'fs';
import path from 'path';
import type Config from '../config/Config';

export default class Writer
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;
    };

    public write(css: string): void
    {
        const file = path.resolve(
            process.cwd(),
            this.config.output.path,
            this.config.output.name + '.' + this.config.output.type
        );

        fs.mkdirSync(
            path.dirname(file),
            { 
                recursive: true
            }
        );

        fs.writeFileSync(file, css);
    };
};
