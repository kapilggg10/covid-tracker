<template>
  <main>
    <div class="w-full table-container">
      <table class="w-full border-collapse z-0" v-if="!loading">
        <thead>
          <tr
            class="bg-gradient-to-r from-blue-500 to-blue-800 text-white text-lg"
          >
            <th>Resource Link</th>
            <th class="hidden sm:inline">Uploaded By</th>
            <th class="hidden md:inline">Uploaded At</th>
            <th>Resource Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(resource, index) in resources" :key="index">
            <td>
              <a
                target="_blank"
                :href="resource.source"
                class="text-blue-500 underline"
              >
                {{ resource.displayName || "Resource Link" }}
              </a>
            </td>
            <td class="hidden sm:inline">{{ resource.uploadedBy.name }}</td>
            <td class="hidden md:inline">
              {{ formatDate(resource.updatedAt) }}
            </td>
            <td>
              <span
                class="category"
                :class="{
                  category__top: resource.category == '1',
                  category__medium: resource.category == '2',
                  category__low: resource.category == '3',
                }"
              >
                {{ categories[resource.category] }}
                <i class="fa fa-star" v-if="resource.category == '1'"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else><Spinner /></div>
    </div>
  </main>
</template>

<script>
import { getDateWithoutTime } from "@/shared/time";
import { CATEGORY } from "@/shared/constants";
import Spinner from "@/components/CenterSpinner";

export default {
  name: "Resources",
  data() {
    return {
      resources: [],
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    const res = await window.dbRef.child("data").child("resources").get();
    this.resources = res.val();
    this.loading = false;
  },
  methods: {
    formatDate(date) {
      return getDateWithoutTime(date);
    },
  },
  computed: {
    categories() {
      return CATEGORY;
    },
  },
  components: {
    Spinner,
  },
};
</script>

<style scoped lang="scss">
.table-container {
  table-layout: fixed;
  border-collapse: collapse;
}
.table-container table {
  @apply shadow-lg;
  border-spacing: 0 0.5rem;
  thead {
    tr {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      width: 100%;
      @apply rounded-l-lg;
      @apply rounded-r-lg;
      th {
        @apply p-5;
      }
    }
  }
  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    max-height: 65vh;
    tr {
      border: 1px solid #60a5fa;
      margin: 0.25rem 0;
      border-radius: 10px;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      @apply rounded-lg;
      td {
        padding: 1rem 0.3rem;
        text-align: center;
      }
    }
  }
}
.category {
  padding: 0.3rem;
  @apply rounded-md;
  &__top {
    color: white;
    @apply bg-green-500;
  }
  &__medium {
    @apply bg-yellow-100;
  }
  &__low {
    @apply bg-blue-100;
  }
}
@media screen and (max-width: 767px) {
  .table-container table thead tr,
  .table-container table tbody tr {
    grid-template-columns: 33% 33% 33%;
  }
}

@media screen and (max-width: 640px) {
  .table-container table thead tr,
  .table-container table tbody tr {
    grid-template-columns: 50% 50%;
  }
}
@media screen and (max-height: 700px) {
  .table-container table {
    thead {
      tr {
        th {
          padding: 0.5rem;
          font-size: 16px;
        }
      }
    }
    tbody {
      max-height: 60vh;
    }
  }
}
@media screen and (max-height: 840px) and (min-width: 767px) {
  .table-container table {
    tbody {
      max-height: 55vh;
    }
  }
}
</style>