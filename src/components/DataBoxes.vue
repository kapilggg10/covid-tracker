<template>
  <div class="grid md:grid-cols-3 gap-4 mb-10 md:mb-0">
    <!-- Box 1 -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ newCases }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ totalCases }}
      </div>
    </div>

    <!-- Box 2 -->
    <div class="shadow-md bg-green-300 p-10 text-center rounded">
      <h3 class="text-3xl text-green-900 font-bold mb-4">Recovered</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ newRecovered }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ totalRecovered }}
      </div>
    </div>

    <!-- Box 3 -->
    <div class="shadow-md bg-red-200 p-10 text-center rounded">
      <h3 class="text-3xl text-red-900 font-bold mb-4">Deaths</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ newDeaths }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ totalDeaths }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    newCases() {
      return this.numberWithCommas(this.stats.NewConfirmed);
    },
    totalCases() {
      return this.numberWithCommas(this.stats.TotalConfirmed);
    },
    newDeaths() {
      return this.numberWithCommas(this.stats.NewDeaths);
    },
    totalDeaths() {
      return this.numberWithCommas(this.stats.TotalDeaths);
    },
    newRecovered() {
      return this.numberWithCommas(this.stats.NewRecovered);
    },
    totalRecovered() {
      return this.numberWithCommas(this.stats.TotalRecovered);
    },
  },
};
</script>