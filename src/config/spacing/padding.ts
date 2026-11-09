import type { ConfigGroupItems } from "../../types/config/ConfigGroupItems";

const value = (value: string) => `calc(var(--spacing) * ${value})`;

export default {
    'padding': {
        prefix: ['p'],
        postfix: ['number'],
        content: { padding: value },
    },
    'padding-x': {
        prefix: ['px', 'ph'],
        postfix: ['number'],
        content: { paddingLeft: value, paddingRight: value },
    },
    'padding-y': {
        prefix: ['py', 'pv'],
        postfix: ['number'],
        content: { paddingTop: value, paddingBottom: value },
    },
    'padding-top': {
        prefix: ['pt'],
        postfix: ['number'],
        content: { paddingTop: value },
    },
    'padding-bottom': {
        prefix: ['pb'],
        postfix: ['number'],
        content: { paddingBottom: value },
    },
    'padding-right': {
        prefix: ['pr', 'pe'],
        postfix: ['number'],
        content: { paddingRight: value },
    },
    'padding-left': {
        prefix: ['pl', 'ps'],
        postfix: ['number'],
        content: { paddingLeft: value },
    },
} satisfies ConfigGroupItems;
