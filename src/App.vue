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
    ...mapActions(['getFavouritesTotal']),
    cn,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    isAuth() { return this.$store.state.isAuth; },
    user() { return this.$store.getters.getUser(); },
  },
  beforeMount() {
    if (this.isAuth) {
      this.getFavouritesTotal({ silent: true });
    }
  },
};
</script>
