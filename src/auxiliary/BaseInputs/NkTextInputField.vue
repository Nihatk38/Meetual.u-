<template>
    <div
        :class="{ 'has-error': !!errorMessage, success: meta.valid }"
        class="">
        <div class="mb-1">{{ label }}</div>
        <span class="p-input-icon-right w-full">
            <PvInputText
                v-model="inputValue"
                :name="name"
                :value="inputValue"
                autocomplete="off"
                class="w-full"
                v-bind="$attrs"
                :type="type"
                @blur="handleBlur"
                @input="handleChange"
            />

          <i v-if="errorMessage" v-tooltip.bottom="{ value: errorMessage, class: 'error-tooltip'}"
             class="pi pi-exclamation-triangle error-tooltip error-icon"/>
        </span>


    </div>
</template>

<script>
import {useField} from "vee-validate";
import {watch} from "vue";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: String,
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {

    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    watch(inputValue, (val) => {
      emit('update:modelValue', val);
    });

    watch(() => props.modelValue, (val) => {
      if (val !== inputValue.value) {
        inputValue.value = val;
      }
    })
    return {
      handleChange,
      handleBlur,
      errorMessage,
      meta,
      inputValue,
    };
  },
};
</script>

<style>

</style>