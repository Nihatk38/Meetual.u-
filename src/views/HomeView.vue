<template>
  <div class="fullHeight flex flex-column">
    <PvMenubar :model="items">
      <template #start>
        <img
            alt="logo"
            src="@/assets/icon.png"
            height="50" class="mr-2"
        />
      </template>
      <template #end>
        <PvButton class="p-button-secondary p-button-outlined w-10rem mr-2" label="Çıkış" @click="logout"/>
      </template>
    </PvMenubar>
    <div class="flex-grow-1">
      <component v-if="compName" :is="compName"></component>
    </div>
  </div>

</template>
<script>
import {onMounted, ref} from "vue";
import router from "@/router";

export default {
  name: 'HomeView',
  setup() {
    const status = sessionStorage.getItem('user.Status');
    const compName = ref("")
    const items = ref([
      {
        label: 'Randevu Oluştur',
        icon: 'pi pi-fw pi-file',
        command: () => {
          compName.value = "booking-hub-list"
        }
      },
    ])
    const editMenu = () => {
      items.value.push(
          {
            label: 'Randevu Onay',
            icon: 'pi pi-fw pi-file',
            command: () => {
              compName.value = "waiting-confirm-list"
            }
          },
          {
            label: 'Kullanıcı Listesi',
            icon: 'pi pi-fw pi-file',
            command: () => {
              compName.value = "settings-view"
            }
          }
      )
    }
    const logout = () => {
      sessionStorage.setItem("isLogin", false);
      router.push("/login");
    }
    onMounted(async () => {
      if (status == 1) editMenu();
    })
    return {
      compName,
      items,
      logout
    }
  }
}
</script>
<style scoped>
.fullHeight {
  height: 100vh;
}
</style>
