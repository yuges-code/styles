type PostfixValidator = (value: string) => boolean;
type ContentProperties = {
    [key in keyof CSSStyleDeclaration]?: (value: string) => string;
} & {
    [key: string]: (value: string) => string;
};

export const ValidatorAliases = {
    'number': 'isNumber',
    'integer': 'isInteger',
} as const;

export type ConfigGroupItem = {
    prefix: string[],
    postfix: (PostfixValidator | (keyof typeof ValidatorAliases | (string & {})) | undefined)[],
    content: ContentProperties,
};
