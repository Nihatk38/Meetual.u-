import NkTextInput from "@/auxiliary/BaseInputs/NkTextInput.vue";
import NkTextInputField from "@/auxiliary/BaseInputs/NkTextInputField.vue";
import NkDialog from "@/auxiliary/BaseInputs/NkDialog.vue";
export const nk = (app) => {
    app.component("NkDialog", NkDialog);
    app.component("NkTextInput", NkTextInput);
    app.component("NkTextInputField", NkTextInputField);

};