<template>
  <div class="form-group">
    <template v-if="type === 'checkbox' && options && options.length">
      <label
        v-for="option in options"
        :key="option.value"
      >
        <input
          :id="`${id}-${option.value}`"
          class="checkbox"
          type="checkbox"
          :name="name"
          :value="option.value"
          v-on:input="$emit('input',
            $event.target.checked
              ? $event.target.value
              : false
          )"
        />
        <span class="checkbox-custom"></span>
        <span class="label">{{ option.label }}</span>
      </label>
    </template>

    <template v-if="type !== 'checkbox'">
      <label :for="id" v-if="!withoutLabel">{{ label }}</label>
      <div class="form-group__input">
        <input class="form-control"
          :id="id"
          :type="type"
          :name="name"
          v-on:input="$emit('input', $event.target.value)"
          :value="value"
          :placeholder="withoutLabel ? label : placeholder"
          :required="required"
        />

        <div class="form-group__hint" v-if="hint">
          <span class="form-group__hint-text">{{ hint }}</span>
          <span class="form-group__hint-triangle">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              filter="drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))"
            >
              <path d="M0.5 0L20.5 0L0.5 15.5" fill="#F9EBB2" />
            </svg>
          </span>
        </div>
      </div>
    </template>

    <slot />
  </div>
</template>

<script>
import './FormGroup.scss';

export default {
  name: 'FormGroup',
  props: {
    id: { type: String, default: `input-${Date.now()}` },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: `name-${Date.now()}` },
    value: { default: '' },
    options: { type: Array, default: null },
    hint: { type: String, default: null },
    placeholder: { type: String, default: '' },
    withoutLabel: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
};
</script>
