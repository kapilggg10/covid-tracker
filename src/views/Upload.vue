<template>
  <div>
    <Modal @closeModal="closeModal" v-if="impModalvisible" />
    <div class="parent-container w-full shadow-lg bg-blue-100 rounded-md p-6">
      <span
        class="p-4 block bg-blue-200 text-center text-xl md:text-2xl rounded-lg"
      >
        Share Information about Resources
      </span>
      <div class="form-container">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div class="flex flex-col">
            <label class="py-3" for="nameInput">Your Name</label>
            <input
              class="p-3 rounded-md"
              type="text"
              placeholder="Enter Your Name"
              v-model="formData.name"
            />
            <small class="text-red-500" v-show="formErrors.name">
              Required
            </small>
          </div>
          <div class="flex flex-col">
            <label class="py-3" for="nameInput"> Source Name </label>
            <input
              class="p-3 rounded-md"
              type="text"
              placeholder="Enter Display Name of source"
              v-model="formData.sourceName"
            />
            <small class="text-red-500" v-show="formErrors.sourceName">
              Required
            </small>
          </div>
          <div class="flex flex-col">
            <label class="py-3" for="nameInput">Resource Type</label>
            <select
              class="p-3 rounded-md"
              name="categoryDropdown"
              id="dwopdown"
              v-model="formData.category"
            >
              <option value="">--Select a category--</option>
              <option value="1">Top</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <small class="text-red-500" v-show="formErrors.category">
              Required
            </small>
          </div>
          <div class="flex flex-col">
            <label class="py-3" for="nameInput">Source Link</label>
            <input
              class="p-3 rounded-md"
              type="text"
              placeholder="Enter URL/Link of Resource"
              v-model="formData.sourceLink"
            />
            <small class="text-red-500" v-show="formErrors.sourceLink">
              Required
            </small>
          </div>
        </div>
        <div class="grid justify-items-center grid-cols-1 pt-4">
          <div>
            <button
              class="py-3 px-8 bg-blue-600 text-white rounded-md"
              type="primary"
              @click="onSubmit"
            >
              Submit
            </button>
            <div v-if="loading"><Spinner /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultFormErrors = () => ({
  name: false,
  sourceLink: false,
  sourceName: false,
  category: false,
});
import Modal from "@/components/ImportantModal";
import moment from "moment";
import Spinner from "@/components/CenterSpinner";
import router from "@/router";
export default {
  name: "Upload",
  data() {
    return {
      impModalvisible: true,
      formData: {
        name: "",
        sourceName: "",
        category: "",
        sourceLink: "",
      },
      formErrors: defaultFormErrors(),
      loading: false,
    };
  },
  components: {
    Modal,
    Spinner,
  },
  methods: {
    closeModal() {
      this.impModalvisible = false;
    },
    isValid() {
      this.formErrors = defaultFormErrors();
      let valid = true;
      Object.keys(this.formErrors).forEach((key) => {
        if (!this.formData[key] || this.formData[key].trim() === "") {
          valid = false;
          this.formErrors[key] = true;
        }
      });
      return valid;
    },
    async onSubmit() {
      if (!this.isValid()) {
        return;
      }
      this.loading = true;
      const newRef = window.dbRef.child("data").child("resources").push();
      await newRef.set({
        displayName: this.formData.sourceName,
        uploadedBy: {
          name: this.formData.name,
        },
        updatedAt: moment().unix() * 1000,
        category: this.formData.category,
        source: this.formData.sourceLink,
      });
      this.loading = false;
      router.push({ path: "/resources" });
    },
  },
};
</script>

<style scoped>
.parent-container {
  max-height: 70vh;
  overflow-y: auto;
}
@media screen and (max-height: 700px) {
  .parent-container {
    max-height: 65vh;
  }
}
</style>