<template>
    <div>
        <b-button ref="buttons" v-for="(button, index) in buttonsList" :key="index" @click="buttonClick(index)" :variant="button.variant" :disabled="button.disabled" class="m-1" :size="size"><b-icon v-if="button.icon" :icon="button.icon" /> {{ button.description }}</b-button>
    </div>
</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
            default: () => [
                { description: "Yes", variant: "primary", icon: "check2" },
                { description: "No", variant: "primary", icon: "x" },
                { description: "Cancel", variant: "secondary", icon: "x" }
            ]
        },
        size: {
            type: String,
            default: ""
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            buttonsList: []
        }
    },
    created() {
        this.fillButtonsList();

        this.$nextTick(() => {
            this.$refs.buttons[0].focus();
        });
    },
    methods: {
        fillButtonsList() {
            this.buttonsList = [];

            this.buttons.map(item => {
                const button = { ...item };

                button.variant = item.variant ?? "primary";
                button.disabled = item.disabled ?? false;
                button.icon = item.icon ?? "";
                button.description = item.description;

                this.buttonsList.push(button);
            });
        },
        buttonClick(index) {
            this.$emit("click", this.buttonsList[index]);
            this.buttonsList[index].variant = "outline-primary";

            this.buttonsList.forEach(item => {
                item.disabled = true;
            });
        }
    }
}
</script>

<style>
</style>
