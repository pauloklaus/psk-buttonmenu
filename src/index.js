import Vue from "vue";
import ButtonMenu from "@/components/ButtonMenu";

function install(Vue, options = {}) {
    Vue.component(options.ButtonMenuName || "ButtonMenu", ButtonMenu);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { ButtonMenu };
