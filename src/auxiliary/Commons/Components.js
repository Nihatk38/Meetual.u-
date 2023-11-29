import BookingHubList from "@/components/BookingHub/views/BookingHubList.vue";
import SettingsView from "@/components/settings/views/UserList.vue";
import WaitingConfirmList from "@/components/BookingConfirmation/views/WaitingConfirmList.vue";

export const componentList = (app) => {
    app.component("booking-hub-list", BookingHubList);
    app.component("waiting-confirm-list", WaitingConfirmList);
    app.component("settings-view", SettingsView);
}