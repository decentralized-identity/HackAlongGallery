<script>
import feather from "feather-icons";
export default {
  name: "Home",

  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="flex flex-col lg:justify-between items-center lg:flex-row mt-12 lg:mt-12"
  >
    <!-- Banner left contents -->
    <div class="w-full">
      <img
        src="@/assets/images/self-sovereign-identity-by-dif-and-extrimian.-hack-along-ssi-1.png"
        alt=""
        srcset=""
      />
    </div>
  </section>
</template>

<style scoped></style>
