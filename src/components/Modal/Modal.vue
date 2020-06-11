<template>
  <div class="modal" tabindex="-1" role="dialog" :style="{ display: opened ? 'block' : 'none' }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { cn } from '@/utils';

import './Modal.scss';

const body = window.document.getElementsByTagName('body')[0];

export default {
  name: 'Modal',
  data() {
    return {
      backgropEl: null,
    };
  },
  props: {
    opened: Boolean,
    onClose: Function,
  },
  methods: {
    addBackdrop() {
      const backdrop = window.document.createElement('div');
      backdrop.classList.add('modal-backdrop');
      backdrop.onclick = this.closeModal;
      body.appendChild(backdrop);
      this.backgropEl = backdrop;
    },
    removeBackdrop() {
      this.backgropEl.remove();
      this.backgropEl = null;
    },
    openModal() {
      this.addBackdrop();
      body.classList.add('modal-open');
    },
    closeModal() {
      body.classList.remove('modal-open');
      setTimeout(() => {
        this.removeBackdrop();
        this.onClose();
      }, 350);
    },
    cn,
  },
  watch: {
    opened(newValue) {
      if (newValue) {
        this.openModal();
      } else {
        this.closeModal();
      }
    },
  },
};
</script>
