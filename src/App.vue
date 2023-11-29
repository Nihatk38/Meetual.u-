<template>
  <router-view/>
  <PvToast></PvToast>
  <PvConfirmDialog></PvConfirmDialog>
</template>

<script>
import {onMounted} from "vue";
export default {
  name: 'App',
  setup() {
    onMounted(async () => {
      await sessionStorage.setItem("isLogin", false);
    })
    return {}
  }
}
</script>