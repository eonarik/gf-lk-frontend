<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="/">Главная</a>
    </li>
    <li class="breadcrumb-item active">
      {{ pagetitle }}
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    pagetitle: String,
  },
};
</script>
