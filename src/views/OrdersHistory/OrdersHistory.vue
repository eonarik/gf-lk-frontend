<template>
  <InnerPage :pagetitle="pagetitle">
    <div class="history__wrap"
      v-if="items.length"
    >
      <OrderItem
        v-for="item in items"
        :key="item.id"
        v-bind="item"
      />
    </div>
    <div class="alert alert-default"
      v-if="!loading && !items.length"
    >
      Вы еще ничего не заказывали. Может уже пора?
    </div>
  </InnerPage>
</template>

<script>
import { mapActions } from 'vuex';

import InnerPage from '@/components/InnerPage';
import OrderItem from '@/components/OrderItem';

import './OrdersHistory.scss';

export default {
  name: 'OrdersHistory',
  props: {
    pagetitle: String,
  },
  computed: {
    loading() { return this.$store.state.loading; },
    items() { return this.$store.state.orders.items; },
  },
  methods: {
    ...mapActions(['getOrders']),
  },
  components: {
    InnerPage,
    OrderItem,
  },
  beforeMount() {
    this.getOrders();
  },
};
</script>
