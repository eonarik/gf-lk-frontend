<template>
  <section :class="cn(
    'inner',
    {
      'inner--loading': loading,
    }
  )">
    <router-view />
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import { cn } from '@/utils';

import './App.scss';

export default {
  name: 'App',
  methods: {
    ...mapActions(['getFavourites']),
    cn,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    isAuth() { return this.$store.state.isAuth; },
    user() { return this.$store.getters.getUser(); },
  },
  beforeMount() {
    if (this.isAuth) {
      // TODO: получим избранное, чтобы получить его кол-во?
      // стоит зарефакторить
      this.getFavourites({ silent: true });
    }
  },
};
</script>
