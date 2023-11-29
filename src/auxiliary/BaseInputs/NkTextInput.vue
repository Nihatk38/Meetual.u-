<template>
  <span class="p-float-label">
    <PvInputText
        v-model="inputValue"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="inputValue"
        autocomplete="off"
        class="w-full"
        v-bind="$attrs"

    />
    <label :for="name" class="tk-label">{{ label }}</label>
  </span>
</template>

<script>
import {ref, watch} from "vue";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
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
    const inputValue = ref(props.modelValue);

    watch(inputValue, (val) => {
      emit('update:modelValue', val);
    });

    watch(() => props.modelValue, (val) => {
      if (val !== inputValue.value) {
        inputValue.value = val;
      }
    })
    return {
      inputValue,
    };
  },
};
</script>

<style>

</style>