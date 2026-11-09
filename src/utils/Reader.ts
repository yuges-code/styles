import fs from 'fs';
import File from '../data/File';
import Extractor from './Extractor';
import type Config from '../config/Config';

type Item = {
    file: File,
    lexemes: string[],
};

export default class Reader
{
    private result: Item[];
    private config: Config;
    private extractor: Extractor;

    public constructor(config: Config)
    {
        this.result = [];
        this.config = config;
        this.extractor = new Extractor(this.config);
    };

    public getLexemes()
    {
        const lexemes = new Set<string>();

        this.result.forEach(item => 
            item.lexemes.forEach(lexeme =>
                lexemes.add(lexeme)
            )
        );

        return Array.from(lexemes);
    };

    public getResult = () => this.result;

    public setExtractor(extractor: Extractor): this
    {
        this.extractor = extractor;

        return this;
    };

    public read(files: string[]): this
    {
        files.forEach(path => {
            const file = new File(path);
            const content = fs.readFileSync(file.path, 'utf8');

            this.result.push({
                file: file,
                lexemes: file.type ? this.extractor.extract(content, file.type) : [],
            });
        });

        return this;
    };
};
