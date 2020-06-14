<template>
  <AuthPage :pagetitle="pagetitle">
    <div class="content">
      <div class="row flex-row">
        <div class="col-md-6">
          <div class="alert alert-warning"
            v-if="errorMessage"
            v-on:click="errorMessage = ''"
          >
            {{ errorMessage }}
          </div>
          <form method="post" class="form-horizontal" v-on:submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="auth-login-email" class="control-label">Почта:</label>
              <input
                type="text"
                name="email"
                placeholder
                class="form-control"
                id="auth-login-email"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="auth-login-password" class="control-label">Пароль</label>
              <input
                type="password"
                name="password"
                placeholder
                class="form-control"
                id="login-form-password"
                v-model="password"
                required
              />
            </div>
            <div class="form-group flex-row flex-row--justify flex-row--vcenter">
              <div class="checkbox">
                <input
                  name="rememberme"
                  id="login-form-rememberme"
                  type="checkbox"
                  v-model="rememberme"
                />
                <label for="login-form-rememberme">Запомнить меня</label>
              </div>
              <div>
                <router-link :to="{ name: 'ForgotPassword' }" class="color-green text-underline">
                  Забыли пароль
                </router-link>
              </div>
            </div>
            <div
              class="form-group flex-row flex-row--justify flex-row--vcenter"
              style="margin-top: 68px;"
            >
              <div>
                <button type="submit" class="btn btn-lg btn-warning">Войти</button>
              </div>
              <div>
                <router-link
                  :to="{ name: 'Register' }"
                  class="btn btn-lg btn-success btn-success--outlined"
                >Регистрация</router-link>
              </div>
            </div>
          </form>
        </div>

        <!-- TODO: вход через соц сети -->
        <div class="col-md-5 col-md-offset-1">
          <SocialAuth />
        </div>
      </div>
    </div>
  </AuthPage>
</template>

<script>
import { mapActions } from 'vuex';

import AuthPage from '@/components/AuthPage';
import SocialAuth from '@/components/SocialAuth';

export default {
  name: 'Login',
  data: () => ({
    password: '',
    rememberme: true,
    errorMessage: '',
  }),
  props: {
    pagetitle: String,
  },
  components: {
    AuthPage,
    SocialAuth,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    email: {
      get() { return this.$store.state.user.email; },
      set(email) { this.$store.commit('setUserState', { email }); },
    },
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      this.errorMessage = '';
      this.login({
        username: this.email,
        email: this.email,
        password: this.password,
        rememberme: this.rememberme,
      }).then(() => {
        this.$router.replace('/lk/home');
      }).catch(({ message }) => {
        this.errorMessage = message;
      });
    },
  },
};
</script>
