<template>
  <transition name="fade">
    <div
      class="items-center overflow-y-scroll z-1200 flex justify-center fixed top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-full"
      @click.self="closeModal"
    >
      <div
        class="p-2 absolute rounded-lg custom-modal-content bg-blue-100"
        role="dialog"
      >
        <div
          id="modal-header"
          class="p-3 rounded-lg grid grid-cols-12 bg-blue-400 text-white"
        >
          <div class="col-start-6 col-span-6">
            <span class="text-xl font-bold">Important !</span>
          </div>
          <div class="col-span-1">
            <span
              class="header__close-button fa fa-times"
              @click="closeModal"
              role="button"
            />
          </div>
        </div>
        <div class="text-center text-2xl pt-6 mt-5">
          <p>
            Please fill this form with good intent and right information, these
            details can save lives.
          </p>
          <p class="rounded-lg py-3 font-bold bg-blue-200">
            Please Don't spam!
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CustomModal",
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.custom-modal-content {
  top: 35vh;
  max-width: 400px;
  min-height: 250px;
}
</style>
