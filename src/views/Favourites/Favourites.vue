<template>
  <InnerPage :pagetitle="pagetitle">
    <div class="favorite">
      <div class="row flex-row" v-if="items.length">
        <div class="col-xs-12 col-sm-6 col-md-4"
          v-for="item in items"
          :key="item.id"
        >
          <ProductItem
            v-bind="item"
          />
        </div>
      </div>
      <div class="alert alert-default"
        v-if="!loading && !items.length"
      >
        В избранном ничего нет
      </div>
    </div>
  </InnerPage>
</template>

<script>
import { mapActions } from 'vuex';

import InnerPage from '@/components/InnerPage';
import ProductItem from '@/components/ProductItem';

export default {
  name: 'Favourites',
  props: {
    pagetitle: String,
  },
  computed: {
    items() { return this.$store.state.favourites.items; },
    loading() { return this.$store.state.loading; },
  },
  components: {
    InnerPage,
    ProductItem,
  },
  methods: {
    ...mapActions(['getFavourites']),
  },
  beforeMount() {
    this.getFavourites();
  },
};
</script>
