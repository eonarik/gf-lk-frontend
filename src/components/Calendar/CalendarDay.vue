<template>
  <div
    :class="cn(
      'abonement__calend-days-i',
      {
        'not-active': disabled,
        'with-detail': detailed,
      },
    )"
    v-on:click.prevent="!detailed && !disabled && openModal({
      day,
      month,
      year,
      week_day,
    })"
  >
    <div class="abonement__calend-days-plan">
      <template
        v-if="events && events.length"
      >
        <p
          v-for="event in events"
          :key="event.id"
        >{{ event.description }}</p>
      </template>
    </div>

    <div class="abonement__calend-days-num">
      <span>{{ day }}</span>
      <span class="week-day">{{ week_day }}</span>
    </div>

    <div class="abonement__calend-days-detail"
      v-if="detailed"
    >
      <div class="abonement__calend-days-date">{{ formattedDate }}</div>
      <ul class="abonement__calend-days-detail-wrap"
        v-if="events && events.length"
      >
        <li
          v-for="event in events"
          :key="event.id"
        >{{ event.description }}</li>
      </ul>
      <div class="abonement__calend-days-add-event"
        v-on:click.prevent="!disabled && openModal({
          day,
          month,
          year,
          week_day,
        })"
      />
    </div>
  </div>
</template>

<script>
import { cn, getLocaleMonth } from '@/utils';

export default {
  name: 'CalendarDay',
  props: {
    disabled: Boolean,
    detailed: Boolean,
    day: Number,
    month: Number,
    year: Number,
    week_day: Number,
    events: Array,
    openModal: Function,
  },
  computed: {
    formattedDate() {
      return [
        this.day,
        getLocaleMonth(this.month, 'decl').toLowerCase(),
        this.year,
      ].join(' ');
    },
  },
  methods: {
    cn,
    getLocaleMonth,
  },
};
</script>
