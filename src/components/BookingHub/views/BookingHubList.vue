<template>
  <div class="h-full mt-3 ">
    <FullCalendar ref="calendarRef" :options="calendarOptions"/>

  </div>
  <CreateBookingDialog v-if="dialog" :closeDialog="closeDialog" @bookingInfo="addBooking"/>
</template>

<script>
import {onMounted, ref} from "vue";

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import trLocale from '@fullcalendar/core/locales/tr';

import CreateBookingDialog from "@/components/BookingHub/components/CreateBookingDialog.vue";

import bookingData from "@/auxiliary/userBookingInfos.json";


export default {
  name: 'BookingHubList',
  components: {FullCalendar, CreateBookingDialog},
  setup() {
    const status = sessionStorage.getItem('user.Status');
    const consultationParticipantList = ref([]);
    const selectedUser = ref()
    const dialog = ref(false)
    const calendarOptions = ref({
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      locale: trLocale,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'myCustomButton'
      },
      customButtons: {
        myCustomButton: {
          text: 'Yeni Randevu Oluştur',
          click() {
            openDialog()
          }
        }
      },
      events: [],
    })
    const calendarRef = ref(null);

    const getBookingData = () => {
      const data = bookingData.bookingList;
      const userName = sessionStorage.getItem('user.UserName');
      if (status == 2) {
        data.forEach(booking => {
          if (booking.AdvisorName == userName && booking.IsConfirm)
            calendarOptions.value.events.push(booking)
        })
      } else if (status == 3) {
        data.forEach(booking => {
          if (booking.ClientName == userName && booking.IsConfirm)
            calendarOptions.value.events.push(booking)
        })
      }
      prepareTheData()
    }
    const prepareTheData = () => {
      calendarOptions.value.events.forEach(event => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        const name = status == 2 ? event.ClientName : event.AdvisorName

        event.title = name + "-> " + start.toLocaleTimeString('tr-TR', {
          hour: '2-digit',
          minute: '2-digit'
        }) + "-" + end.toLocaleTimeString('tr-TR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      })
      calendarRef.value.getApi().refetchEvents();
    }

    const addBooking = (booking) => {
      calendarOptions.value.events.push(booking);
      prepareTheData()
    }
    const openDialog = () => {
      dialog.value = true;
    }

    const closeDialog = () => {
      dialog.value = false;
    }


    onMounted(async () => {
      await getBookingData()
    })
    return {
      consultationParticipantList, selectedUser, dialog, calendarOptions, calendarRef,
      openDialog, closeDialog, addBooking
    }
  }
}
</script>