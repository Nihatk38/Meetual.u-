<template>
  <div class="flex justify-content-center align-items-center h-full"
       style=" min-height: 100vh">

    <div class="card flex flex-column align-items-center w-10 lg:w-4  sm:w-6 h-25rem">

      <img
          alt="logo"
          class="card h-10rem lg:w-13rem w-10rem -mt-8 mb-4"
          src="@/assets/logo.png"
          style="object-fit: contain; object-position: center; background-color: #4eacb8"
      />
      <Form :validation-schema="schema" @submit="onLogin">
        <div class="grid">
          <div class="col-12 ">
            <NkTextInputField name="UserName" label="UserName" v-model="userInfo.UserName"/>
          </div>
          <div class="col-12">
            <NkTextInputField name="Password" label="Şifre" v-model="userInfo.Password" type="password"/>
          </div>
          <div class="col-12">
            <PvButton class="lg:col-4 col-12 lg:col-offset-4 text-3xl button-color mt-3" type="submit"
                      label="Giriş Yap"></PvButton>
          </div>

        </div>
      </Form>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";
import router from "@/router";

import {useToast} from "primevue/usetoast";
import * as Yup from "yup";
import {Form} from "vee-validate";

import NkTextInputField from "@/auxiliary/BaseInputs/NkTextInputField.vue";

import userData from "@/auxiliary/users.json"

export default {
  name: "LoginView",
  components: {NkTextInputField, Form},
  setup() {
    const toast = useToast();
    const userInfo = ref({});
    const schema = Yup.object({
      UserName: Yup.string().nullable(true).required("Kullanıcı Adı Boş Geçilemez"),
      Password: Yup.string().nullable(true).required("Şifre Boş Geçilemez")
    });

    const onLogin = () => {
      let users = userData.users
      for (let i = 0; i < users.length; i++) {
        if (users[i].UserName === userInfo.value.UserName && users[i].Password === userInfo.value.Password) {
          sessionStorage.setItem("user.UserName", users[i].UserName);
          sessionStorage.setItem("user.Status", users[i].Status);
          sessionStorage.setItem("isLogin", true);

          return router.push("/");
        }

      }
      toast.add({severity: 'warn', summary: 'Hata', detail: 'Kullanıcı Adı veya Şifre hatalı', life: 3000});

    };

    return {
      schema,
      userInfo,
      onLogin
    };
  }
};
</script>

<style scoped>
.button-color {
  background-color: #4eacb8;
}

.button-color:hover {
  background-color: #186f79 !important;
}
</style>
