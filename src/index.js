import MyButton from "./components/MyButton.vue";

const components = {
    MyButton
};

export default {
    install: (app) => {
        for (const name in components) {
            app.component(name, components[name]);
        }
    }
};
