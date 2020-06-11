<template>
  <dl
    :class="cn(
      'abonement-faq__item',
      {
        'abonement-faq__item--opened': opened,
      },
    )"
  >
    <dt class="abonement-faq__item__title" @click="$emit('setOpened')">
      <span>{{ title }}</span>
      <span class="abonement-faq__item__toggle" />
    </dt>
    <dd ref="text" class="abonement-faq__item__text">
      <p class="abonement-faq__item__text-inner">{{ text }}</p>
    </dd>
  </dl>
</template>

<script>
import { cn } from '@/utils';

export default {
  name: 'SubscriptionFAQItem',
  props: {
    opened: Boolean,
    title: String,
    text: String,
  },
  methods: {
    cn,
  },
};
</script>
