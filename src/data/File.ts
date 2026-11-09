export default class File
{
    public readonly dir?: string;
    public readonly path: string;
    public readonly base?: string;
    public readonly name?: string;
    public readonly type?: string;

    public constructor(path: string)
    {
        this.path = path;

        ({
            dir: this.dir,
            base: this.base,
            name: this.name,
            type: this.type,
        } = this.parse(path));
    };

    public parse(path: string)
    {
        const normalized = path.replace(/\\/g, '/').trim();

        const lastSlash = normalized.lastIndexOf('/');
        const dir  = lastSlash === -1 ? '' : normalized.slice(0, lastSlash);
        const base = lastSlash === -1 ? normalized : normalized.slice(lastSlash + 1);

        const lastDot = base.lastIndexOf('.');
        const hasExt  = lastDot > 0;
        const name    = hasExt ? base.slice(0, lastDot) : base;
        const type    = hasExt ? base.slice(lastDot + 1) : '';

        return {
            dir,
            base,
            name,
            type,
        };
    };
};
