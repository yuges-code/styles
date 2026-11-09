import type { ConfigGroupItems } from "../../types/config/ConfigGroupItems";

const value = (value: string) => `calc(var(--spacing) * ${value})`;

export default {
    'margin': {
        prefix: ['m'],
        postfix: ['number'],
        content: { margin: value },
    },
    'margin-x': {
        prefix: ['mx', 'mh'],
        postfix: ['number'],
        content: { marginLeft: value, marginRight: value },
    },
    'margin-y': {
        prefix: ['my', 'mv'],
        postfix: ['number'],
        content: { marginTop: value, marginBottom: value },
    },
    'margin-top': {
        prefix: ['mt'],
        postfix: ['number'],
        content: { marginTop: value },
    },
    'margin-bottom': {
        prefix: ['mb'],
        postfix: ['number'],
        content: { marginBottom: value },
    },
    'margin-right': {
        prefix: ['mr', 'me'],
        postfix: ['number'],
        content: { marginRight: value },
    },
    'margin-left': {
        prefix: ['ml', 'ms'],
        postfix: ['number'],
        content: { marginLeft: value },
    },
} satisfies ConfigGroupItems;
