import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { prime } from "@/auxiliary/Plugins/Prime";
import { nk } from  "@/auxiliary/Plugins/Nk"
import {componentList} from "@/auxiliary/Commons/Components";

import "@/auxiliary/Plugins/Dayjs";

import "@/assets/styles/layout.scss";
import "@/assets/styles/App.scss";

const app = createApp(App);

app.use(router);

prime(app);
nk(app);
componentList(app)

app.mount("#app");

export default app;
