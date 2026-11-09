import fs from 'fs';
import path from "path";
import { createRequire } from 'module';
import config from '../../styles.config.ts';
import type { StylesConfig } from '../types/StylesConfig.ts';
import type { ConfigGroupItems } from '../types/config/ConfigGroupItems.ts';

export default class Config
{
    private data: StylesConfig;

    public source = {
        include: [] as string[],
        exclude: [] as string[],
    };
    public output = {
        name: '',
        type: '',
        path: '',
        mode: 'split' as 'single' | 'split',
    };
    public classes = {
        include: {} as ConfigGroupItems,
        exclude: [] as (string | RegExp)[],

        force: {
            include: [] as (string)[],
        },
    };

    public constructor(file: string | null = null)
    {
        if (file) {
            const paths = {
                config: path.resolve(process.cwd(), file),
            };

            const require = createRequire(import.meta.url);

            this.data = fs.existsSync(paths.config)
                ? require(paths.config)?.default
                : config;
        } else {
            this.data = config;
        }

        this.distribute();
    };

    public distribute()
    {
        this.source = this.data.source;
        this.output = this.data.output;
        this.classes = this.data.classes;
    };

    public get()
    {
        return this.data;
    };
};
