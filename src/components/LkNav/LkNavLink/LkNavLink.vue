<template>
  <router-link :to="to" v-slot="{ href, route, navigate, isActive, isExactActive }">
    <a
      :href="href"
      @click="navigate"
      :class="cn(
        'left-panel__item',
        {
          'active': isActive || isExactActive,
        },
      )"
    >
      <span>
        <slot />
      </span>
      <div class="left-panel__item-icon">
        <img :src="icon" alt="">
        <div class="left-panel__item-new" v-if="count">
          {{ count }}
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
import { cn } from '@/utils';

export default {
  name: 'NavLink',
  props: {
    to: undefined,
    icon: String,
    count: Number,
  },
  methods: {
    cn,
  },
};
</script>
