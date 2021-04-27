<template>
  <select
    v-model="selected"
    class="form-select mb-10 block w-full border p-3 rounted"
    @change="onChange"
  >
    <option value="0">--Select a country--</option>
    <option v-for="country in countries" :value="country.ID" :key="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>
<script>
export default {
  name: "CountrySelect",
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const selectedCountry = this.countries.find(
        (item) => item.ID === this.selected
      );
      this.$emit("on-country-selected", selectedCountry);
    },
  },
};
</script>