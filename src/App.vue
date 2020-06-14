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
import { cn } from '@/utils';

import './App.scss';

export default {
  name: 'App',
  methods: {
    cn,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    user() { return this.$store.getters.getUser(); },
  },
};
</script>
