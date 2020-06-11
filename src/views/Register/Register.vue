<template>
  <AuthPage :pagetitle="pagetitle">
    <div class="content">
      <div v-if="loading">Пожалуйста, подождите...</div>

      <div class="row">
        <div class="col-md-6">
          <form method="post" class="form-horizontal"
            v-on:submit.prevent="handleSubmit"
          >
            <div class="form-group">
              <label for="register-email" class="control-label">Почта *</label>
              <input
                type="email"
                name="email"
                placeholder
                class="form-control"
                id="register-email"
                v-model="email"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-password" class="control-label">Пароль *</label>
              <input
                type="password"
                name="password"
                placeholder
                class="form-control"
                id="register-password"
                v-model="password"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-confirmpassword" class="control-label">Повторите пароль *</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder
                class="form-control"
                id="register-confirmpassword"
                v-model="confirmpassword"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-fullname" class="control-label">Имя:</label>
              <input
                type="text"
                name="fullname"
                placeholder
                class="form-control"
                id="register-fullname"
                v-model="fullname"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-phone" class="control-label">
                Контактный телефон:
              </label>
              <input
                type="text"
                name="mobilephone"
                placeholder
                class="form-control"
                id="register-phone"
                v-model="mobilephone"
                required
              />
            </div>

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

export default {
  name: 'Register',
  data: () => ({
    password: '',
    confirmpassword: '',
  }),
  props: {
    pagetitle: String,
  },
  computed: {
    loading() { return this.$store.state.loading; },
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
  },
  methods: {
    ...mapActions(['register']),
    handleSubmit() {
      this.register({
        email: this.email,
        fullname: this.fullname,
        mobilephone: this.mobilephone,
        password: this.password,
        confirmpassword: this.confirmpassword,
      }).then(() => {
        this.$router.push('/lk/home');
      });
    },
  },
};
</script>
