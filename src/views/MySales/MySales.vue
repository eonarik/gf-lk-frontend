<template>
  <InnerPage :pagetitle="pagetitle">
    <div class="alert alert-default">
      Скидок пока не имеется
    </div>
  </InnerPage>
</template>

<script>
import InnerPage from '@/components/InnerPage';

export default {
  name: 'MySales',
  props: {
    pagetitle: String,
  },
  components: {
    InnerPage,
  },
};
</script>
