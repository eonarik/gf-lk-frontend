<template>
  <div class="tabs-wrapper">
    <div class="abonement__calend-head-wrapper">
      <div class="abonement__calend-head-mobile">Январь</div>
      <CalendarMonths />
    </div>

    <div class="tab_content">
      <CalendarWeekDays />

      <div class="tab_item abonement__calend-body"
        v-if="days && days.length"
      >
        <div class="abonement__calend-days">
          <div class="abonement__calend-days-row">
            <CalendarDay
              v-for="item in days"
              :key="item.ts"
              v-bind="item"
              :openModal="openModal"
            />
          </div>
        </div>
      </div>
    </div>

    <AddEventModal
      :opened="modalOpened"
      :onClose="closeModal"
      v-bind="currentDayState"
    />
  </div>
</template>

<script>
import AddEventModal from './AddEventModal.vue';
import CalendarMonths from './CalendarMonths.vue';
import CalendarWeekDays from './CalendarWeekDays.vue';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      modalOpened: false,
      currentDayState: {},
    };
  },
  props: {
    days: Array,
  },
  components: {
    AddEventModal,
    CalendarMonths,
    CalendarWeekDays,
    CalendarDay,
  },
  methods: {
    openModal(dayState) {
      this.modalOpened = true;
      this.currentDayState = dayState;
    },
    closeModal() {
      this.modalOpened = false;
    },
  },
};
</script>
