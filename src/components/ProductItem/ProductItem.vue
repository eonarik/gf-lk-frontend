<template>
  <div class="ms2_product catalog-item">
    <div class="catalog-item__head">
      <a :href="`/${uri}`">
        <img
          :src="image"
          :alt="pagetitle"
          class="img-responsive"
        />
      </a>
    </div>
    <div class="catalog-item__body">
      <p class="catalog-item__name">{{ pagetitle }}</p>
      <div class="catalog-item__prop">
        <p>{{ tvs.product_pack.caption }}: {{ tvs.product_pack.value }}</p>
        <p>{{ tvs.product_count.caption }}: {{ tvs.product_count.value }}</p>
      </div>
    </div>
    <div class="catalog-item__footer">
      <div class="catalog-item__price">
        Цена:&nbsp;
        <span class="bouquet-item__sum">
          {{ price.format }}&nbsp;
          <span class="rub">Р</span>
        </span>
      </div>

      <form method="post" class="catalog-item__action ms2_form form">
        <button
          type="button"
          :class="cn(
            'hart-btn',
            'button--add-favorite',
            {
              'button--add-favorite--active': is_favourite,
            },
          )"
        >
          <i aria-hidden="true"
            :class="cn(
              'fa',
              {
                'fa-heart': is_favourite,
                'fa-heart-o': !is_favourite,
              },
            )"
            :title="is_favourite ? 'Удалить из избранного' : 'Добавить в избранное'"
            v-on:click.prevent="toggleFavourite"
          ></i>
        </button>

        <button
          type="submit"
          class="btn btn-warning btn-cart"
          name="ms2_action"
          value="cart/add"
        >Заказать</button>

        <input type="hidden" name="id" :value="id" />
        <input type="hidden" name="count" value="1" />
        <input type="hidden" name="options" value="[]" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { cn } from '@/utils';

export default {
  name: 'ProductItem',
  props: {
    id: Number,
    pagetitle: String,
    uri: String,
    image: String,
    tvs: Object,
    is_favourite: Boolean,
    price: Object,
  },
  methods: {
    ...mapActions([
      'addFavourite',
      'removeFavourite',
      'getFavourites',
    ]),
    toggleFavourite() {
      if (this.is_favourite) {
        this.removeFavourite(this.id).then(() => {
          this.getFavourites({ silent: true });
        });
      } else {
        this.addFavourite(this.id).then(() => {
          this.getFavourites({ silent: true });
        });
      }
    },
    cn,
  },
};
</script>
