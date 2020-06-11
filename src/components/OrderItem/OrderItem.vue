<template>
  <!-- item start -->
  <div class="history__item">
    <div class="history__item-top"
      v-on:click="toggleShowItems"
    >
      <p>Заказ № {{ num }}, {{ moment(createdon).format('DD.MM.YYYY') }}</p>
      <p :style="`color: #${status_color};`">
        {{ status_name }}{{ updatedon ? `, ${moment(updatedon).format('DD.MM.YYYY')}` : '' }}
      </p>
    </div>

    <div
      v-if="showItems"
    >
      <OrderItemProduct
        v-for="product in products"
        :key="product.id"
        v-bind="product"
        :delivery_address="delivery_address"
      />
    </div>
  </div>
  <!-- item end -->
</template>

<script>
import moment from 'moment';

import OrderItemProduct from './OrderItemProduct';

export default {
  name: 'OrderItem',
  data() {
    return {
      showItems: true,
    };
  },
  props: {
    num: String,
    createdon: String,
    updatedon: String,
    cart_cost: Number,
    status_name: String,
    status_color: String,
    delivery_address: String,
    products: Array,
  },
  methods: {
    toggleShowItems() {
      this.showItems = !this.showItems;
    },
    moment,
  },
  components: {
    OrderItemProduct,
  },
};
</script>
