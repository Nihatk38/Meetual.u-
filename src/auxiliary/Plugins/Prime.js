import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import PrimeVue from "primevue/config";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import Autocomplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import Calendar from "primevue/calendar";
import OverlayPanel from "primevue/overlaypanel";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import MultiSelect from "primevue/multiselect";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import ContextMenu from "primevue/contextmenu";
import ProgressSpinner from "primevue/progressspinner";
import SplitButton from "primevue/splitbutton";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Listbox from "primevue/listbox";
import TieredMenu from "primevue/tieredmenu";
import RadioButton from "primevue/radiobutton";
import SelectButton from "primevue/selectbutton";
import FileUpload from 'primevue/fileupload';
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import FocusTrap from 'primevue/focustrap';

export const prime = (app) => {
    app.use(PrimeVue, {
        inputStyle: "outlined",
        locale: {
            dateIs: "Tarih Eşittir",
            dateIsNot: "Tarih Eşit Değil",
            dateBefore: "Daha Önce",
            dateAfter: "Daha Sonra",
            accept: "Evet",
            reject: "Hayır",
            cancel: "İptal",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["Pa", "Pz", "Sa", "Ça", "Pe", "Cu", "Cm"],
            monthNames: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık",
            ],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            today: "Bugün",
            weekHeader: "Wk",
            firstDayOfWeek: 1,
            dateFormat: "dd.mm.yy",
            showOtherMonths: true,
            selectOtherMonths: true,
            weak: "Zayıf",
            medium: "Orta",
            strong: "Güçlü",
            passwordPrompt: "Şifre Giriniz",
        },
    });
    app.component("PvCheckbox", Checkbox);
    app.component("PvColumn", Column);
    app.component("PvDataTable", DataTable);
    app.component("PvContextMenu", ContextMenu);
    app.component("PvOverlayPanel", OverlayPanel);
    app.component("PvCalendar", Calendar);
    app.component("PvConfirmDialog", ConfirmDialog);
    app.component("PvToast", Toast);
    app.component("PvDialog", Dialog);
    app.component("PvInputNumber", InputNumber);
    app.component("PvTextarea", Textarea);
    app.component("PvDropdown", Dropdown);
    app.component("PvAutocomplete", Autocomplete);
    app.component("PvInputText", InputText);
    app.component("PvButton", Button);
    app.component("PvMenubar", Menubar);
    app.component("PvTabView", TabView);
    app.component("PvTabPanel", TabPanel);
    app.component("PvSidebar", Sidebar);
    app.component("PvToolBar", Toolbar);
    app.component("PvDivider", Divider);
    app.component("PvMultiSelect", MultiSelect);
    app.component("PvProgressSpinner", ProgressSpinner);
    app.component("PvSplitButton", SplitButton);
    app.component("PvAccordion", Accordion);
    app.component("PvAccordionTab", AccordionTab);
    app.component("PvListbox", Listbox);
    app.component("PvTieredMenu", TieredMenu);
    app.component("PvRadioButton", RadioButton);
    app.component("PvSelectButton", SelectButton);
    app.component('FileUpload', FileUpload);

    app.directive("tooltip", Tooltip);
    app.directive("PvFocusTrap", FocusTrap);

    const toastService = app.use(ToastService);
    const confirmationService = app.use(ConfirmationService);

    app.config.globalProperties.$toast = toastService.config.globalProperties.$toast;
    app.config.globalProperties.$confirm = confirmationService.config.globalProperties.$confirm;
};
