<template>
  <AuthPage :pagetitle="pagetitle">
    <div class="content">
      <div class="row flex-row flex-row--center">
        <div class="col-md-6">
          <form method="post" class="form-horizontal"
            v-on:submit.prevent="handleSubmit"
          >
            <div class="form-group">
              <label for="forgot-login-email" class="control-label">Почта:</label>
              <input
                type="text"
                name="email"
                placeholder
                class="form-control"
                id="forgot-login-username"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <div class="row flex-row flex-row--justify">
                <div class="col-xs-6 col-md-5">
                  <button type="button" class="btn btn-secondary btn-block"
                    v-on:click.prevent="$router.back()"
                  >
                    Назад
                  </button>
                </div>
                <div class="col-xs-6 col-md-5 col-md-offset-2">
                  <button type="submit" class="btn btn-primary btn-block">
                    Отправить запрос
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </AuthPage>
</template>

<script>
import AuthPage from '@/components/AuthPage';

import { forgot } from '@/apis/user';

export default {
  name: 'ForgotPassword',
  props: {
    pagetitle: String,
  },
  computed: {
    email: {
      get() { return this.$store.state.user.email; },
      set(email) { this.$store.commit('setUserState', { email }); },
    },
  },
  components: {
    AuthPage,
  },
  methods: {
    handleSubmit() {
      this.$store.commit('setUserState', { email: this.email });
      forgot({ email: this.email }).then(() => {
        // eslint-disable-next-line no-alert
        alert('На вашу почту отправлен новый пароль');
        this.$router.push('/lk/login');
      });
    },
  },
};
</script>
