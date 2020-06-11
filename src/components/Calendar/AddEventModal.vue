<template>
  <Modal v-bind="$props">
    <div class="subscribe-popup">
      <div class="subscribe-popup__head">
        <div class="subscribe-popup__head-title">{{ formattedDate }}</div>
        <div class="subscribe-popup__head-subtitle">
          {{ getLocaleWeekDay(week_day).toLowerCase() }}
        </div>
      </div>
      <form id="form-add-event" class="subscribe-popup__form"
        v-on:submit.prevent="handleSubmit"
      >
        <div class="subscribe-popup__body">
          <div class="subscribe-popup__sbscr">
            Для того чтобы иметь возможность заполнять календарь
            <br />и прочувствовать все преимущества нашей услуги
            <a href="#">оформите подписку</a>
          </div>

          <FormGroup
            id="form-add-event-description"
            label="Опишите событие:"
            name="description"
            hint="Например, день рождени мамы, юбилей коллеги
              Веры Ивановны, доставка цветов на дом и т.д."
            v-model="description"
            required
          />

          <FormGroup
            id="form-add-event-iam"
            label="Получатель:"
            type="checkbox"
            name="iam"
            :options="[
              {
                label: 'Я получатель',
                value: 'self',
              },
            ]"
            v-model="iam"
          />

          <template v-if="!iam">
            <FormGroup
              id="form-add-event-recipient-name"
              label="Имя получателя"
              name="recipient-name"
              v-model="recipientName"
              withoutLabel
            />

            <FormGroup
              id="form-add-event-recipient-phone"
              label="Телефон получателя"
              name="recipient-phone"
              v-model="recipientPhone"
              withoutLabel
            />
          </template>

          <FormGroup
            id="form-add-event-delivery-address"
            label="Адрес доставки"
            name="delivery-address"
            v-model="deliveryAddress"
            withoutLabel
          />

          <div class="row flex-row flex-row--vcenter">
            <div class="col-xs-12 col-md-6">
              <FormGroup
                id="form-add-event-delivery-time"
                label="Во сколько доставить?"
                name="delivery-time"
                v-model="deliveryTime"
                type="time"
              />
            </div>
            <div class="col-xs-12 col-md-6">
              <div style="margin-top: 30px;" />
              <FormGroup
                id="form-add-event-postcard"
                type="checkbox"
                name="postcard"
                :options="[
                  {
                    label: 'Открытка',
                    value: 'yes',
                  },
                ]"
                v-model="postcard"
              />
            </div>
          </div>

          <FormGroup
            v-if="postcard"
            id="form-add-event-postcard-text"
            label="Текст в открытке"
            name="postcard-text"
            v-model="postcardText"
            withoutLabel
          />
        </div>
        <div class="subscribe-popup__footer">
          <button type="submit" class="subscribe-popup__submit btn-success">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script>
import FormGroup from '@/components/FormGroup';
import Modal from '@/components/Modal';

import { getLocaleMonth, getLocaleWeekDay } from '@/utils';

import './AddEventModal.scss';
import { mapActions } from 'vuex';

export default {
  name: 'AddEventModal',
  data() {
    return {
      description: '',
      iam: false,
      recipientName: '',
      recipientPhone: '',
      deliveryAddress: '',
      deliveryTime: '',
      postcard: false,
      postcardText: '',
    };
  },
  props: {
    opened: Boolean,
    onClose: Function,
    day: Number,
    month: Number,
    year: Number,
    week_day: Number,
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
  components: {
    FormGroup,
    Modal,
  },
  methods: {
    ...mapActions(['addSubscription', 'getSubscriptions']),
    handleSubmit() {
      this.addSubscription({
        description: this.description,
        day: this.day,
        month: this.month,
        iam: this.iam,
        recipientName: this.recipientName,
        recipientPhone: this.recipientPhone,
        deliveryAddress: this.deliveryAddress,
        deliveryTime: this.deliveryTime,
        postcardText: this.postcardText,
        silent: true,
      }).then(() => {
        this.onClose();
        this.getSubscriptions({ silent: true });
      });
    },
    getLocaleMonth,
    getLocaleWeekDay,
  },
};
</script>
