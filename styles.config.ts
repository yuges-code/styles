import type { StylesConfig } from "./src/types/StylesConfig";

export default {
    source: {
        include: [
            './**/*.{vue,html,js,ts}',

            '!**/node_modules/!(@yuges)/**',
            '!**/node_modules/@yuges/!(vue-ui)/**',
        ],
        exclude: [
            '**/*.d.ts',
            '**/__tests__/**',
            '**/*.test.{js,jsx}',
            // '**/node_modules/**',
        ],
    },
    output: {
        name: 'yuges',
        type: 'css',
        mode: 'split',
        path: './styles',
    },
    classes: {
        include: {},
        exclude: [],

        force: {
            include: [
                'hidden',
                'absolute',
                'inset-0',
            ],
        },
    },

    // Настройки темы (дизайн-токены)
    // theme: {
    //     colors: { /* ... */ },
    //     spacing: { /* ... */ }
    // }
} satisfies StylesConfig;
