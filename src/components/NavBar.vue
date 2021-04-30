<template>
  <!-- <button
    class="border-none w-8 h-8 p-0 bg-none relative"
    type="button"
    @click="showSidebar = true"
  >
    <span
      class="menu__inner absolute h-1 bg-white rounded-sm block w-full left-0"
    ></span>
  </button> -->
  <transition name="slide-fade">
    <div
      id="sidebar-container"
      class="w-screen z-1200 h-screen top-0 left-0 fixed bg-gray-500 bg-opacity-50"
      @click.self="closeSideBar"
    >
      <div id="sidebar" class="w-60 h-full bg-blue-100 pt-16">
        <a
          href="javascript:void(0)"
          class="text-5xl absolute top-0 left-0 pl-6 pt-2 pb-2 text-gray-600"
          @click="closeSideBar"
        >
          X
        </a>
        <div class="pt-10">
          <router-link to="/" v-slot="{ isActive }">
            <span
              class="link pl-3 pt-5 pb-6 hover:bg-blue-500"
              :class="{ 'bg-blue-400': isActive }"
              :style="[isActive ? activeStyle : null]"
              @click="closeSideBar"
            >
              Home
            </span>
          </router-link>
          <router-link to="/resources" v-slot="{ isActive }">
            <span
              class="link pl-3 pt-5 pb-6 hover:bg-blue-500"
              :class="{ 'bg-blue-400': isActive }"
              :style="[isActive ? activeStyle : null]"
              @click="closeSideBar"
            >
              Resources
            </span>
          </router-link>
          <router-link to="/upload-resources" v-slot="{ isActive }">
            <span
              class="link pl-3 pt-5 pb-6 hover:bg-blue-500"
              :class="{ 'bg-blue-400': isActive }"
              :style="[isActive ? activeStyle : null]"
              @click="closeSideBar"
            >
              Upload Resources
            </span>
          </router-link>
          <router-link to="/about" v-slot="{ isActive }">
            <span
              class="link pl-3 pt-5 pb-6 hover:bg-blue-500"
              :class="{ 'bg-blue-400': isActive }"
              :style="[isActive ? activeStyle : null]"
              @click="closeSideBar"
            >
              About
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showSidebar: false,
      activeStyle: {
        color: "white",
      },
    };
  },
  methods: {
    closeSideBar() {
      this.$emit("close-sidebar");
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

#sidebar .link {
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  @apply text-blue-900;
}
#sidebar .closebtn {
  font-size: 36px;
}
</style>