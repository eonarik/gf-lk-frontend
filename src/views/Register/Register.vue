<template>
  <AuthPage :pagetitle="pagetitle">
    <div class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="alert alert-warning"
            v-if="message && message.type === 'error'"
            @click="message = {}"
          >
            {{ message.text }}
          </div>

          <form method="post" class="form-horizontal"
            v-on:submit.prevent="handleSubmit"
          >
            <FormGroup
              id="register-email"
              label="Почта *"
              type="email"
              v-model="email"
              :errorLabel="errorData.email || errorData.username"
              required
            />

            <FormGroup
              id="register-password"
              label="Пароль *"
              type="password"
              v-model="password"
              :errorLabel="errorData.password || errorData.specifiedpassword"
              required
            />

            <FormGroup
              id="register-confirmpassword"
              label="Повторите пароль *"
              type="password"
              v-model="confirmpassword"
              :errorLabel="errorData.confirmpassword"
              required
            />

            <FormGroup
              id="register-fullname"
              label="Имя *"
              v-model="fullname"
              :errorLabel="errorData.fullname"
              required
            />

            <FormGroup
              id="register-mobilephone"
              label="Контактный телефон *"
              type="tel"
              v-model="mobilephone"
              :errorLabel="errorData.mobilephone"
              required
            />

            <div class="form-group" style="margin-top: 68px;">
              <div class="row">
                <div class="col-xs-6 col-md-5">
                  <button type="button" class="btn btn-lg btn-success btn-success--outlined"
                    v-on:click.prevent="$router.back()"
                  >
                    Назад
                  </button>
                </div>
                <div class="col-xs-6 col-md-5 col-md-offset-2 text-right">
                  <button type="submit" class="btn btn-lg btn-warning">Вперед</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-5 col-md-offset-1">
          <!-- TODO: вход через соц сети -->
        </div>
      </div>
    </div>
  </AuthPage>
</template>

<script>
import { mapActions } from 'vuex';

import AuthPage from '@/components/AuthPage';
import FormGroup from '@/components/FormGroup';

import { messageTypes } from '@/constants';

export default {
  name: 'Register',
  data: () => ({
    password: '',
    confirmpassword: '',
    message: {},
  }),
  props: {
    pagetitle: String,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    errorData() {
      const { errorData } = this.$store.state;
      const draftErrorData = {};
      for (let i = 0; i < errorData.length; i++) {
        const { id, msg } = errorData[i];
        draftErrorData[id] = msg;
      }
      return draftErrorData;
    },
    email: {
      get() { return this.$store.state.user.email; },
      set(email) { this.$store.commit('setUserState', { email }); },
    },
    fullname: {
      get() { return this.$store.state.user.fullname; },
      set(fullname) { this.$store.commit('setUserState', { fullname }); },
    },
    mobilephone: {
      get() { return this.$store.state.user.mobilephone; },
      set(mobilephone) { this.$store.commit('setUserState', { mobilephone }); },
    },
  },
  components: {
    AuthPage,
    FormGroup,
  },
  methods: {
    ...mapActions(['register']),
    handleSubmit() {
      this.register({
        email: this.email,
        username: this.email,
        fullname: this.fullname,
        mobilephone: this.mobilephone,
        password: this.password,
        confirmpassword: this.confirmpassword,
      }).then(() => {
        this.$router.push('/lk/home');
      }).catch(({ message }) => {
        this.message = {
          type: messageTypes.ERROR,
          text: message,
        };
      });
    },
  },
};
</script>
