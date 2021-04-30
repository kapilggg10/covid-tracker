<template>
  <main v-if="!loading" class="home-container">
    <DataTitle :text="title" :dataDate="dataDate" />
    <CountrySelect
      :countries="countries"
      @on-country-selected="onCountryChanged"
    />
    <DataBoxes :stats="stats" />
    <button
      class="bg-green-700 text-white rounded p-3 mt-10 focus:outine-none hover:bg-gree-600 mb-10"
      @click="clearCountry"
      v-if="stats.Country"
    >
      Show Global
    </button>
  </main>
  <main v-else>
    <Spinner />
  </main>
</template>

<script>
import { fetchCovidData } from "@/api";
import Spinner from "@/components/CenterSpinner";
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";

export default {
  name: "Home",
  components: {
    Spinner,
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const data = await fetchCovidData();
      this.dataDate = data.Date;
      this.stats = data.Global;
      this.countries = data.Countries;
      this.loading = false;
      return data;
    },
    onCountryChanged(country) {
      this.title = country.Country;
      this.stats = country;
    },
    clearCountry() {
      this.fetchData();
      this.title = "Global";
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style scoped lang="scss">
.home-container {
  height: 75vh;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
@media screen and (max-height: 700px) {
  .home-container {
    max-height: 68vh;
  }
}
</style>