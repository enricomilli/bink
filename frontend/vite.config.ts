import { defineConfig } from 'vite';

export default defineConfig(async () => {
    const solidPlugin = (await import('vite-plugin-solid')).default;
    const tsconfigPaths = (await import('vite-tsconfig-paths')).default;

    return {
        plugins: [
            solidPlugin(),
            tsconfigPaths({ root: "./" })
        ],
        build: {
            target: 'esnext',
        },
    };
});
