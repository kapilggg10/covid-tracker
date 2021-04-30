<template>
  <div class="fixed bottom-0 w-full">
    <footer
      class="text-center bg-blue-400 text-white p-4 flex flex-col lg:flex-row justify-between"
    >
      <div id="info p-3"><span>&#169; Kapil Goyal</span></div>
      <div id="icons flex flex-col">
        <div class="icon">
          <a href="https://twitter.com/kapilggg10" target="_blank" class="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21.76 18"
              height="24"
              width="24"
            >
              <path
                class="icon-part"
                d="M-1080.21,554.12a9,9,0,0,1-3.22.53h0a4.44,4.44,0,0,0-3.3-1.48,4.47,4.47,0,0,0-4.47,4.47,4.42,4.42,0,0,0,.19,1.22h0a14.05,14.05,0,0,1-9.47-4.93,5,5,0,0,0,1.78,6l-2.36.11s-.37,2.63,3.65,3.64a6,6,0,0,1-3.18,1,7,7,0,0,0,5,2.32,6.68,6.68,0,0,1-6.34,2.24c-.6-.09,8.6,5,15.19-.89,4-3.54,4.5-8.79,4.56-10.59A4.49,4.49,0,0,0-1080.21,554.12Z"
                transform="translate(1101.97 -553.17)"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/tech_boy_kapil/"
            target="_blank"
            class="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.5 19.5"
              height="24"
              width="24"
            >
              <path
                class="icon-part"
                d="M18.75,9.5H13.6c0,.08,0,.16,0,.25a4,4,0,0,1-8,0c0-.09,0-.17,0-.25H0v4.19A5.82,5.82,0,0,0,5.81,19.5h7.88a5.82,5.82,0,0,0,5.81-5.81V9.5Z"
              ></path>
              <path
                class="icon-part"
                d="M13.69,0H5.81A5.82,5.82,0,0,0,0,5.81V8H6a4,4,0,0,1,7.16,0H19.5V5.81A5.82,5.82,0,0,0,13.69,0Zm1.06,5.75a1,1,0,1,1,1-1A1,1,0,0,1,14.75,5.75Z"
              ></path>
              <path class="icon-part" d="M5.65,9.5h.1"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kapil-goyal-7244b214b/"
            target="_blank"
            class="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.25 19.5"
              height="24"
              width="24"
            >
              <circle class="icon-part" cx="2.34" cy="2.34" r="2.34"></circle>
              <rect
                class="icon-part"
                x="0.17"
                y="6.36"
                width="4.35"
                height="13.14"
              ></rect>
              <path
                class="icon-part"
                d="M16.88,6.36a4.9,4.9,0,0,0-5.62,1.9V6.36H6.91V19.5h4.35V11.93a2.6,2.6,0,0,1,2.6-2.42c2.35,0,2,4.33,2,4.33V19.5h4.35V13.84S21,7.38,16.88,6.36Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
svg {
  display: inline-block;
}
</style>