<template>
  <header class="app-header">
    <div class="container header-content">
      <NuxtLink to="/" class="logo">
        <NuxtImg
          src="/images/logo.png"
          alt="Merkle Gaming logo"
          class="logo-img"
          width="160"
          height="160"
          sizes="80px"
          format="webp"
          quality="80"
          loading="eager"
        />
        <span class="header-logo-brand">
          <span class="header-logo-brand-main">Merkle</span>
          <span class="header-logo-brand-subtitle">Gaming</span>
        </span>
      </NuxtLink>
      <div class="header-actions">
        <button v-if="theme === 'dark'" @click="toggleTheme" class="theme-toggle day" aria-label="Switch to Light Mode">
          ☀️
        </button>
        <button v-else @click="toggleTheme" class="theme-toggle night" aria-label="Switch to Dark Mode">
          🌙
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">


const { theme, toggleTheme } = useTheme()
</script>
<style lang="scss" scoped>
.app-header {
  border-bottom: 1px solid $border-color;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      color: $primary-color;

      .logo-img {
        width: 80px;
        height: 80px;
      }
      .header-logo-brand {
        display: flex;
        flex-direction: column;
        gap: 0;
        .header-logo-brand-main {
          font-size: $text-xl;
          font-weight: 700;
          color: $primary-color;
        }
        .header-logo-brand-subtitle {
          font-size: $text-lg;
          font-weight: 400;
          color: $secondary-color;
        }
      }
    }
    .header-actions {
      .theme-toggle {
        border-radius: 100px;
        border: 1px solid $border-color;
        padding: 10px;
        height: 40px;
        width: 40px;
        cursor: pointer;
        box-shadow: 0px 4px 15px 0px $box-shadow-color;
      }
      .theme-toggle.day {
        background-color: black;
      }
      .theme-toggle.night {
        background-color: white;
      }
    }
  }
}
</style>
