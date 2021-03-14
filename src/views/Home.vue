<template>
  <div class="home">
    <List></List>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "@/components/List.vue";

export default defineComponent({
  name: "Home",
  components: { List }
});
</script>
