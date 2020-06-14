<template>
  <div class="left-panel">
    <LkNavLink :to="{ name: 'OrdersHistory' }" icon="/assets/images/icons/clock-back.svg">
      История заказов
    </LkNavLink>
    <LkNavLink :to="{ name: 'Favourites' }" icon="/assets/images/icons/heart.svg"
      :count="favouritesTotal"
    >
      Избранное
    </LkNavLink>
    <LkNavLink :to="{ name: 'MySales' }" icon="/assets/images/icons/gift.svg">
      Мои скидки
    </LkNavLink>
    <LkNavLink :to="{ name: 'Subscription' }" icon="/assets/images/icons/sert.svg">
      Абонемент
    </LkNavLink>
    <LkNavLink :to="{ name: 'Home' }" icon="/assets/images/icons/user.svg">
      Персональные данные
    </LkNavLink>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import LkNavLink from './LkNavLink';

import './LkNav.scss';

export default {
  name: 'LkNav',
  computed: {
    isAuth() { return this.$store.state.isAuth; },
    favouritesTotal() { return this.$store.state.favourites.total; },
  },
  components: {
    LkNavLink,
  },
  methods: {
    ...mapActions(['getFavouritesTotal']),
  },
  beforeMount() {
    if (this.isAuth) {
      this.getFavouritesTotal({ silent: true });
    }
  },
};
</script>
