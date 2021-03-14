<template>
  <div class="list">
    <ul>
      <li v-for="sub in subs" :key="sub.time">
        {{ sub.time }} : {{ sub.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const subList = [
  {
    time: new Date(),
    text: "luhgkgvb"
  }
];

export default defineComponent({
  name: "List",

  setup() {
    const subs = ref(subList);

    setInterval(() => {
      subs.value.push({
        time: new Date(),
        text: "luhgkgvb"
      });
    }, 1000);

    return {
      subs
    };
  }
});
</script>
