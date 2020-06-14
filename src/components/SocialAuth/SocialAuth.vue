<template>
  <div>
    <label style="display: block; margin-bottom: 52px; font-size: 24px;">
      Или войти через соц. сети
    </label>
    <div class="auth-providers">
      <a target="_blank"
        :href="`${$router.history.current.fullPath}?hauth_action=login&amp;provider=Google`"
      >
        <i class="fa fa-google-plus"></i>
      </a>
      <a target="_blank"
        :href="`${$router.history.current.fullPath}?hauth_action=login&amp;provider=Vkontakte`"
      >
        <i class="fa fa-vk"></i>
      </a>
      <a target="_blank"
        :href="`${$router.history.current.fullPath}?hauth_action=login&amp;provider=Instagram`"
      >
        <i class="fa fa-instagram"></i>
      </a>
      <a target="_blank"
        :href="`${$router.history.current.fullPath}?hauth_action=login&amp;provider=Facebook`"
      >
        <i class="fa fa-facebook"></i>
      </a>
    </div>
  </div>
</template>
