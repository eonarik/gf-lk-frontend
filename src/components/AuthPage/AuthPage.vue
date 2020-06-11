<template>
  <div class="container">
    <h2 class="text-center">{{ pagetitle }}</h2>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  props: {
    pagetitle: String,
  },
};
</script>
