<template>
  <div class="history__item-cont">
    <div class="history__item-left">
      <img :src="image" :alt="name" />
    </div>
    <div class="history__item-right">
      <div class="history__item-col1">
        <div class="history__item-product-title">{{ name }}</div>
        <p>Упаковка: {{ product_pack }}</p>
        <p>Количество: {{ product_count }}</p>
      </div>
      <div class="history__item-col2">
        <div class="history__item-product-title">Адрес доставки</div>
        <p>{{ delivery_address }}</p>
      </div>
      <div class="history__item-col3">
        <div class="history__item-price">{{ price_formatted }}</div>
      </div>
      <div class="history__item-col4">
        <a :href="uri" target="_blank" class="history__item-order">Заказать повторно</a>
        <button
          type="button"
          :class="cn(
            'history__item-like',
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
      </div>
      <div class="history__item-bot"
        v-if="options.postcard"
      >
        <div class="history__item-otkritka"
          v-on:click="toggleShowPostcard"
        >Открытка</div>
        <div class="history__item-bot-cont"
          v-if="showPostcard"
        >
          <div class="history__item-product-title">Текст на открытке</div>
          <p>{{ options.postcard.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { cn } from '@/utils';

export default {
  name: 'OrderItemProduct',
  data() {
    return {
      showPostcard: false,
    };
  },
  props: {
    id: Number,
    image: String,
    name: String,
    product_pack: String,
    product_count: String,
    price_formatted: String,
    uri: String,
    is_favourite: Boolean,
    options: Object,
    delivery_address: String,
  },
  methods: {
    ...mapActions([
      'addFavourite',
      'removeFavourite',
      'getOrders',
    ]),
    toggleShowPostcard() {
      this.showPostcard = !this.showPostcard;
    },
    toggleFavourite() {
      if (this.is_favourite) {
        this.removeFavourite(this.id).then(() => {
          this.getOrders({ silent: true });
        });
      } else {
        this.addFavourite(this.id).then(() => {
          this.getOrders({ silent: true });
        });
      }
    },
    cn,
  },
};
</script>
