<template>
  <div class="parent-container w-full shadow-lg bg-blue-100 rounded-lg p-6">
    <span class="p-4 block bg-blue-200 text-center text-xl font-bold">
      About
      <a
        href="https://ifennz-covidtracker.web.app/"
        class="text-blue-500 underline"
        target="_blank"
      >
        ifennz-covidtracker
      </a>
    </span>
    <div class="p-8 text-md md:text-lg">
      <p>
        In this critical pandemic situation, everyone have some needs as well as
        some information about the available resources.
      </p>
      <br />
      <p>
        There are a lot of websites on which you will get leads about the
        available resources like oxygen, hospital beds, Ramdesivir, Plasma etc.,
        Why not we try to put all that resources on one page, I am trying to
        compile a list where people can get good amount of information about the
        available resources in there area.
      </p>
      <br />
      <p>
        Here, Aim is to put all information of yours and mine together and
        provide a platfrom which can give you a list of websites in which they
        are trying to give leads about the available resource in our area.
      </p>
      <br />
      <p>
        In this situation people are dying because lack of resources and I am
        trying to give information about people/websites that can give us
        information about the available resources.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped>
.parent-container {
  max-height: 70vh;
  overflow-y: auto;
}
</style>