import type { ConfigGroupItems } from "../../types/config/ConfigGroupItems";

const value = (value: string) => value;

const values = [
    'inline',
    'block',
    'inline-block',
    'flow-root',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
    'contents',
    'table',
    'inline-table',
    'table-caption',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row-group',
    'table-row',
    'list-item',
    'hidden',
];

export default {
    'display': {
        prefix: ['d'],
        postfix: values,
        content: { display: value },
    },
} satisfies ConfigGroupItems;
