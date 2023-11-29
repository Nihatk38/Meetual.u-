<template>
    <PvDialog
        ref="dialogRef"
        class="p-dialog-custom"
        :header="header"
        :modal="true"
        :visible="true"
        draggable
        :baseZIndex="2101"
        @update:visible="closeDialog(event1, event2, event3)"
    >
        <slot name="contents"></slot>
    </PvDialog>
</template>
<script>
    import { ref } from "vue";

    export default {
        name: "TkDialog",
        props: {
            closeDialog: {
                type: Function,
                required: true
            },
            header: {
                type: String,
                required: true
            },
            event1: {
                default: false
            },
            event2: {
                default: false
            },
            event3: {
                default: false
            }
        },
        setup() {
            const dialogRef = ref();

            return {
                dialogRef,
            };
        }
    };
</script>

<style scoped>
</style>
