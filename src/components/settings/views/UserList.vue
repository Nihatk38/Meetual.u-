<template>
  <div class="h-full ">
    <PvDataTable
                  :value="userList" selectionMode="single"  v-model:selection="selectedUser" dataKey="Id"
               responsiveLayout="scroll" :scrollable="true" scrollHeight="100%"
               filterDisplay="menu"  showGridlines >

      <PvColumn field="UserName" header="Kullanıcı Adı" sortable />
      <PvColumn field="Email" header="Email" sortable />

    </PvDataTable>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";

import userData from "@/auxiliary/users.json";

export default {
  name: 'SettingsView',
  setup() {
    const userList = ref([]);
    const selectedUser=ref();


    onMounted(async () => {
      userList.value = userData.users
    })
    return {
      userList, selectedUser
    }
  }
}
</script>