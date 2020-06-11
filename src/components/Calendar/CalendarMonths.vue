<template>
  <div class="tab_header abonement__calend-head">
    <span
      v-for="(month, index) in ruMonths"
      :key="index"
      v-on:click.prevent="setMonth(index)"
      :class="cn(
        'tab',
        {
          'active': index === currentMonth,
        },
      )"
    >{{ month }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { cn } from '@/utils';

export default {
  name: 'CalendarMonths',
  data() {
    return {
      ruMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
    };
  },
  computed: {
    currentMonth() { return this.$store.state.subscriptions.currentMonth; },
  },
  methods: {
    ...mapActions(['getSubscriptions']),
    setMonth(month) {
      this.getSubscriptions({ month, silent: true });
    },
    cn,
  },
};
</script>
