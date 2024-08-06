<script>
import feather from "feather-icons";
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    ThemeSwitcher,
  },
  data: () => {
    return {
      appTheme: localStorage.getItem("theme"),
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
	
  <div :class="appTheme" class="pt-0.5 bg-blue-150">
	<ThemeSwitcher />

    <!-- App header -->
    <AppHeader />

    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <router-view :theme="appTheme" />
    </transition>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <!-- attach to bottom -->
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #eff4f7;
}

.vue-back-to-top {
  @apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.vue-back-to-top {
  color: #fff;
  background-color: rgb(38 79 107 / var(--tw-text-opacity));
}
.vue-back-to-top::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4745e4;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
