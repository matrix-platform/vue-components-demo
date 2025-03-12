import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.js",
            fileName: "demo-components",
            formats: ["umd"],
            name: "DemoComponents"
        },
        rollupOptions: {
            external: [
                "pinia",
                "vue"
            ],
            output: {
                dir: "dist",
                globals: {
                    pinia: "Pinia",
                    vue: "Vue"
                }
            }
        },
        sourcemap: true
    },
    plugins: [
        AutoImport({
            dirs: [
                "./src/composables/**",
                "./src/store/**",
            ],
            imports: [
                "pinia",
                "vue"
            ]
        }),
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false
                }
            }
        })
    ]
});
