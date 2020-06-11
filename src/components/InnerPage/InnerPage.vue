<template>
  <div class="container">
    <Breadcrumbs :pagetitle="pagetitle" />

    <LkNav />

    <h2 class="text-center" v-if="pagetitle">{{ pagetitle }}</h2>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import LkNav from '@/components/LkNav';

import { cn } from '@/utils';

import './InnerPage.scss';

export default {
  name: 'InnerPage',
  props: {
    pagetitle: String,
  },
  computed: {
    loading() { return this.$store.loading; },
  },
  components: {
    Breadcrumbs,
    LkNav,
  },
  methods: {
    cn,
  },
};
</script>
