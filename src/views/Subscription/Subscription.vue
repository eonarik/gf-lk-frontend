<template>
  <InnerPage :pagetitle="pagetitle">
    <div class="abonement"
      v-if="subscriptions && subscriptions.length"
    >
      <div class="abonement__title">Ваш календарь доставки цветов</div>

      <div class="abonement__calend abonement__calend-not-registr">
        <Calendar :days="subscriptions" />
      </div>
    </div>

    <!-- конец календаря десктоп -->

    <SubscriptionFAQ />
  </InnerPage>
</template>

<script>
import { mapActions } from 'vuex';

import Calendar from '@/components/Calendar';
import InnerPage from '@/components/InnerPage';
import SubscriptionFAQ from '@/components/SubscriptionFAQ';

import './Subscription.scss';

export default {
  name: 'Subscription',
  props: {
    pagetitle: String,
  },
  computed: {
    subscriptions() { return this.$store.state.subscriptions.items; },
  },
  methods: {
    ...mapActions(['getSubscriptions']),
  },
  components: {
    Calendar,
    InnerPage,
    SubscriptionFAQ,
  },
  beforeMount() {
    this.getSubscriptions();
  },
};
</script>
