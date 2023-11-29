<template>
  <NkDialog :closeDialog="closeDialog" header="Randevu Oluştur">
    <template #contents>
      <div class="grid">
        <div class="field col-12">
          <label for="bookingDate" class="tk-label">Randevu Tarihi</label>
          <PvCalendar
              class="w-full"
              v-model="bookingInfo.bookingDate"
              dateFormat="dd.mm.yy"
              :manualInput="false"
              name="bookingDate"
              :showIcon="true"
              hourFormat="24"
              :baseZIndex="3201"
              :showTime="true"
          />
        </div>
        <div class="col-12 field">
          <label for="UserName" class="tk-label">Kişi</label>
          <PvDropdown
              v-model="bookingInfo.user"
              name="UserName"
              optionLabel="UserName"
              optionValue="UserName"
              :options="dropdownOption"
              class="w-full"
          />
        </div>
        <div class="col-12 flex justify-content-between">
          <div class="flex justify-content-start">
            <PvButton class="p-button-secondary p-button-outlined w-10rem" label="İptal" @click="closeDialog"/>
          </div>
          <div class="flex justify-content-end">
            <PvButton class="p-button-success w-10rem " label="Kaydet" @click="onSubmit"/>
          </div>
        </div>

      </div>
    </template>
  </NkDialog>
</template>

<script>


import {onMounted, ref} from "vue";
import userData from "@/auxiliary/users.json";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

export default {
  name: 'editBookingDialog',
  props: {
    userId: {
      type: Number,
      required: true
    },
    closeDialog: {
      type: Function,
      required: true,
    },
  },
  emits: ["bookingInfo"],
  setup(props, {emit}) {
    const toast = useToast();
    const confirm = useConfirm();
    const status = sessionStorage.getItem('user.Status');
    const userName = sessionStorage.getItem('user.UserName');
    const bookingInfo = ref({bookingDate: new Date()});
    const dropdownOption = ref([]);


    onMounted(() => {
      let users = userData.users;

      if (status == 2) {
        dropdownOption.value = users.filter(user => user.Status == 3)
      } else if (status == 3) {
        dropdownOption.value = users.filter(user => user.Status == 2)
      }
    })

    const onSubmit = () => {
      if (!bookingInfo.value.user) {
        toast.add({severity: 'warn', summary: 'Hata', detail: 'Randevu için bir kişi seçmelisiniz', life: 3000});
        return;
      }
      confirm.require({
        message: "Randevu oluşturmak istediğinizden emin misiniz?",
        header: "Onay",
        accept: () => {
          let ınfo = {
            AdvisorName: "",
            ClientName: "",
            start: bookingInfo.value.bookingDate,
            end: ""
          }
          if (status == 2) {
            ınfo.AdvisorName = userName;
            ınfo.ClientName = bookingInfo.value.user
          } else if (status == 3) {
            ınfo.AdvisorName = bookingInfo.value.user;
            ınfo.ClientName = userName
          }
          emit("bookingInfo", ınfo);
          props.closeDialog()
          toast.add({severity: 'success', summary: 'Başarılı', detail: 'Randevbu oluşturuldu', life: 3000});
        }
      })
    }

    return {
      bookingInfo, dropdownOption,
      onSubmit
    }
  }
}
</script>
<style scoped>
</style>