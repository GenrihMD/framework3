import { ref, watch } from "vue";

// создаём реактивную херню
const counter = ref(0); // 0(нуль) - инит значение

// вочим херню и выводим при изменении
watch(counter, function() {
  console.log(counter.value);
});

// интервалим инкремент (+1 раз в сек)
setInterval(function() {
  counter.value++;
}, 1000);
