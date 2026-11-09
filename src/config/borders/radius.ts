import type { ConfigGroupItems } from "../../types/config/ConfigGroupItems";

const value = (value: string) => `${value}px`;

export default {
    'border-radius': {
        prefix: ['rounded'],
        postfix: ['number'],
        content: { borderRadius: value },
    },
} satisfies ConfigGroupItems;
