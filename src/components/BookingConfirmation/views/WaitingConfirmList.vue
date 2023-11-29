<template>
  <div class="h-full ">
    <PvDataTable
        :value="bookingList" selectionMode="single" v-model:selection="selectedBooking"
        v-model:contextMenuSelection="selectedBooking" @rowContextmenu="onRowContextMenu" dataKey="Id"
        responsiveLayout="scroll" :scrollable="true" scrollHeight="100%"
        showGridlines>
      <PvColumn field="AdvisorName" header="Danışman Ad" sortable/>
      <PvColumn field="ClientName" header="Danışan Ad" sortable/>
      <PvColumn field="start" header="Başlangıç" sortable/>
      <PvColumn field="end" header="Bitiş" sortable/>

      <PvContextMenu :model="menuModel" ref="menu"/>
    </PvDataTable>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";

import bookingData from "@/auxiliary/userBookingInfos.json";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

export default {
  name: "WaitingConfirmList",
  setup() {
    const toast = useToast();
    const confirm = useConfirm();
    const bookingList = ref([]);
    const selectedBooking = ref({});
    const menu = ref();

    const menuModel = ref([
      {
        label: "Onayla",
        icon: "pi pi-check",
        command: () => {
          confirmBooking()
        }
      },
    ])

    const confirmBooking = () => {
      confirm.require({
        message: "Randevu onaylamak istediğinizden emin misiniz?",
        header: "Onay",
        accept: () => {
          bookingList.value.splice(bookingList.value.indexOf(selectedBooking.value), 1);
          toast.add({severity: 'success', summary: 'Başarılı', detail: 'Randevu oluşturuldu', life: 3000});
        }
      })
    }

    onMounted(() => {
      const data = bookingData.bookingList;
      data.forEach(booking => {
        if (booking.IsConfirm === false)
          bookingList.value.push({...booking})
      })
    })
    const onRowContextMenu = (event) => {
      menu.value.show(event.originalEvent);
    };
    return {
      bookingList, selectedBooking, menu, menuModel,
      onRowContextMenu,
    }
  }
}
</script>

<style scoped>

</style>