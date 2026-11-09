import type { ConfigGroupItems } from "../../types/config/ConfigGroupItems";

const value = (value: string) => `${value}px`;

export default {
    'border-width': {
        prefix: ['border'],
        postfix: ['number', undefined],
        content: { borderWidth: value },
    },
} satisfies ConfigGroupItems;
