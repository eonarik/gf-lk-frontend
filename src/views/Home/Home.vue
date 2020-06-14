<template>
  <InnerPage :pagetitle="pagetitle">
    <div class="cabinet">
      <div class="alert alert-warning"
        v-if="message.type === 'error'"
        v-on:click="message = {}"
      >
        {{ message.text }}
      </div>
      <form class="cabinet__form" v-on:submit.prevent="handleSubmit">
        <div class="cabinet__inp50">
          <label>Имя *:</label>
          <input type="text" name="fullname" v-model="fullname" required />
        </div>
        <div class="cabinet__inp50">
          <label>Контактный телефон:</label>
          <input type="tel" name="mobilephone" v-model="mobilephone" />
        </div>
        <div class="cabinet__inp50">
          <label>E-mail *:</label>
          <input type="email" name="email" v-model="email" required />
        </div>
        <div class="cabinet__inp50">
          <label>Адрес:</label>
          <input type="text" name="address" v-model="address" />
        </div>
        <div class="cabinet__inp100">
          <label>Мой отзыв:</label>
          <textarea name="comment" v-model="comment">
            Ребята молодцы, все на высшем уровне, букеты всегда свежие и безумно красивые.
            Уже не раз заказываю у них на разные события, никогда не подводят.
            Рекомендую!
          </textarea>
        </div>

        <div class="cabinet__action cabinet__inp100">
          <div class="row flex-row flex-row--vcenter flex-row--right">
            <div class="col-auto"
              v-if="message.type === 'info' || message.type === 'success'"
            >
              <b :class="`text-${message.type}`">{{ message.text }}</b>
            </div>
            <div class="col-auto">
              <div class="submit">
                <button type="submit" :disabled="loading">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </InnerPage>
</template>

<script>
import { mapActions } from 'vuex';

import InnerPage from '@/components/InnerPage';
import { messageTypes } from '@/constants';

import './Home.scss';

export default {
  name: 'Home',
  data() {
    return {
      message: {},
    };
  },
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
    address: {
      get() { return this.$store.state.user.address; },
      set(address) { this.$store.commit('setUserState', { address }); },
    },
    comment: {
      get() { return this.$store.state.user.comment; },
      set(comment) { this.$store.commit('setUserState', { comment }); },
    },
  },
  components: {
    InnerPage,
  },
  methods: {
    ...mapActions(['logout', 'updateUser', 'getProfile']),
    handleSubmit() {
      this.message = {
        type: messageTypes.INFO,
        text: 'Сохраняется...',
      };
      this.updateUser({
        email: this.email || '',
        fullname: this.fullname || '',
        mobilephone: this.mobilephone || '',
        address: this.address || '',
        comment: this.comment || '',
        silent: true,
      }).then(() => {
        this.message = {
          type: messageTypes.SUCCESS,
          text: 'Сохранено!',
        };
      }).catch(({ message }) => {
        this.message = {
          type: messageTypes.ERROR,
          text: message,
        };
      });
    },
    handleLogout() {
      this.logout().then(() => {
        this.$router.replace('/lk/login');
      });
    },
  },
  beforeMount() {
    this.getProfile({ silent: true });
  },
};
</script>
