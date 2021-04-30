<template>
  <Header @showSidebar="showSidebar" />
  <NavBar v-if="sidebarVisible" @closeSidebar="closeSideBar" />
  <div class="container mx-auto">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    NavBar,
  },
  data() {
    return {
      sidebarVisible: false,
      impModalvisible: true,
    };
  },
  methods: {
    closeSideBar() {
      this.sidebarVisible = false;
    },
    showSidebar() {
      this.sidebarVisible = true;
    },
  },
};
</script>
<style>
#app {
  font-family: "Maven Pro", sans-serif;
  font-weight: 500;
}
</style>