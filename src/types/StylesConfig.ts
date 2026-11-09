import type Config from "../config/Config";

export type StylesConfig = Pick<
    Config,
    'source' | 'output' | 'classes'
>;
