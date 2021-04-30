<template>
  <div class="sticky top-0">
    <header class="text-center bg-blue-800 text-white p-4 mb-5 md:mb-10">
      <div
        class="text-3xl md:text-5xl font-bold mb-3 flex flex-row justify-between"
      >
        <button
          class="border-none w-8 h-8 p-0 bg-none relative"
          type="button"
          @click="showSidebar"
        >
          <span
            class="menu__inner absolute h-1 bg-white rounded-sm block w-full left-0"
          ></span>
        </button>
        <div>
          <i class="fa fa-viruses hidden md:inline" />
          Covid-19 Tracker
        </div>
        <div />
      </div>
      <p>
        API by
        <a target="_blank" href="https://covid19api.com" class="text-blue-300">
          covid19api.com</a
        >
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    showSidebar() {
      this.$emit("show-sidebar");
    },
  },
};
</script>
<style scoped lang="scss">
.menu__inner::before,
.menu__inner::after {
  position: absolute;
  height: 0.25rem;
  background-color: white;
  border-radius: 2px;
  display: block;
  width: 100%;
  left: 0;
  content: "";
}

.menu__inner::before {
  top: -0.75rem;
}

.menu__inner::after {
  top: 0.75rem;
}
</style>