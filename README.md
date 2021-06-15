# psk-buttonmenu

Vue component to display a button menu and return the button the user clicked.

* Report bugs: <https://github.com/pauloklaus/psk-buttonmenu/issues>
* Live test: <https://pauloklaus.com.br/playground>

## Install

Create a new vue project:

```shell
vue create
```

Install component and dependencies:

```shell
npm install --save bootstrap bootstrap-vue psk-buttonmenu
```

## Environment setting

Make a src/resources folder at the root:

```shell
mkdir src/resources
```

### Configure the bootstrap

Create the src/resources/bootstrap-vue.js:

```javascript
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
```

### Configure the psk-buttonmenu

Create the src/resources/psk-buttonmenu.js:

```javascript
import Vue from "vue";
import ButtonMenu from "psk-buttonmenu";

Vue.use(ButtonMenu, { ButtonMenuName: "MyButtonMenu" });
```

### Import psk-buttonmenu and dependencies

The "src/main.js" file should look like this:

```javascript
import Vue from "vue";
import App from "./App.vue";

import "./resources/bootstrap-vue";
import "./resources/psk-buttonmenu";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)

```vue
<template>
    <div>
        <my-button-menu @click="active = true" />

        <div v-if="active">
            <my-button-menu :buttons="myButtons" @click="select" />
            Clicked: {{ selected }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            myButtons: [
                {
                    description: "Go!",
                    variant: "success",
                    icon: "check",
                    customData: "111",
                },
                {
                    description: "Stop?",
                    variant: "danger",
                    customData: "222",
                    myData: "333"
                }
            ],
            selected: null
        }
    },
    methods: {
        select(button) {
            this.selected = button;
        }
    }
}
</script>
```

## Properties

Property | Description | Required | Default
-|-|-|-
buttons | Text to display | yes | (1)
size | Size of buttons (bootstrap template: sm, lg) | no | null

(1)

```javascript
{ description: "Yes", variant: "primary", icon: "check2" },
{ description: "No", variant: "primary", icon: "x" },
{ description: "Cancel", variant: "secondary", icon: "x" }
```

* Icons from <https://bootstrap-vue.org/docs/icons>

## Events

Event | Description
-|-
click | Returns a clicked button object

Add properties to the button object so that you can identify it.

## Using in the browser

To use directly in the browser, import psk-buttonmenu:

```html
<script src="https://unpkg.com/vue-boostrap" />
<script src="https://unpkg.com/psk-buttonmenu" />
```
