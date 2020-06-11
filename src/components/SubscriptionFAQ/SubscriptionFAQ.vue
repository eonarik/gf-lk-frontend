<template>
  <div class="abonement-faq">
    <div class="abonement-faq__title">Вопросы-ответы</div>
    <div class="abonement-faq__content">
      <SubscriptionFAQItem
        v-for="(item, index) in faqJson"
        :key="index"
        v-bind="item"
        :opened="openedIndex === index"
        v-on:setOpened="setOpenedIndex(index)"
      />
    </div>
    <!-- <a href="#" class="abonement__btn">Оформить подписку</a> -->
  </div>
</template>

<script>
import faqJson from './faq.json';
import SubscriptionFAQItem from './SubscriptionFAQItem.vue';
import './SubscriptionFAQ.scss';

export default {
  name: 'SubscriptionFAQ',
  data() {
    return {
      openedIndex: 0,
      faqJson,
    };
  },
  methods: {
    setOpenedIndex(index) {
      this.openedIndex = index;
    },
  },
  components: {
    SubscriptionFAQItem,
  },
};
</script>
