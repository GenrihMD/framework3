<template>
  <div class="list">
    <ul>
      <li v-for="sub in subs" :key="sub.start">
        {{ sub.start }} -- {{ sub.end }} : {{ sub.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const subList = [
  {
    start: "00:00:03,400",
    end: "00:00:06,177",
    text: `In this lesson, we're going to
be talking about finance. And`
  },
  {
    start: "00:00:06,177",
    end: "00:00:10,009",
    text: `one of the most important aspects
of finance is interest.`
  },
  {
    start: "00:00:10,009",
    end: "00:00:13,655",
    text: `When I go to a bank or some
other lending institution`
  },
  {
    start: "00:00:13,655",
    end: "00:00:17,720",
    text: `to borrow money, the bank is happy
to give me that money. But then I'm`
  },
  {
    start: "00:00:17,900",
    end: "00:00:21,480",
    text: `going to be paying the bank for the
privilege of using their money. And that`
  },
  {
    start: "00:00:21,660",
    end: "00:00:26,440",
    text: `amount of money that I pay the bank is
called interest. Likewise, if I put money`
  },
  {
    start: "00:00:26,620",
    end: "00:00:31,220",
    text: `in a savings account or I purchase a
certificate of deposit, the bank just`
  },
  {
    start: "00:00:31,300",
    end: "00:00:35,800",
    text: `doesn't put my money in a little box
and leave it there until later. They take`
  },
  {
    start: "00:00:35,800",
    end: "00:00:40,822",
    text: `my money and lend it to someone
else. So they are using my money.`
  },
  {
    start: "00:00:40,822",
    end: "00:00:44,400",
    text: `The bank has to pay me for the privilege
of using my money.`
  },
  {
    start: "00:00:44,400",
    end: "00:00:48,700",
    text: `Now what makes banks
profitable is the rate`
  },
  {
    start: "00:00:48,700",
    end: "00:00:53,330",
    text: `that they charge people to use the bank's
money is higher than the rate that they`
  },
  {
    start: "00:00:53,510",
    end: "00:01:00,720",
    text: `pay people like me to use my money. The
amount of interest that a person pays or`
  },
  {
    start: "00:01:00,800",
    end: "00:01:06,640",
    text: `earns is dependent on three things. It's
dependent on how much money is involved.`
  },
  {
    start: "00:01:06,820",
    end: "00:01:11,300",
    text: `It's dependent upon the rate of interest
being paid or the rate of interest being`
  },
  {
    start: "00:01:11,480",
    end: "00:01:17,898",
    text: `charged. And it's also dependent upon
how much time is involved. If I have`
  },
  {
    start: "00:01:17,898",
    end: "00:01:22,730",
    text: `a loan and I want to decrease the amount
of interest that I'm going to pay, then`
  },
  {
    start: "00:01:22,800",
    end: "00:01:28,040",
    text: `I'm either going to have to decrease how
much money I borrow, I'm going to have`
  },
  {
    start: "00:01:28,220",
    end: "00:01:32,420",
    text: `to borrow the money over a shorter period
of time, or I'm going to have to find a`
  },
  {
    start: "00:01:32,600",
    end: "00:01:37,279",
    text: `lending institution that charges a lower
interest rate. On the other hand, if I`
  },
  {
    start: "00:01:37,279",
    end: "00:01:41,480",
    text: `want to earn more interest on my
investment, I'm going to have to invest`
  },
  {
    start: "00:01:41,480",
    end: "00:01:46,860",
    text: `more money, leave the money in the
account for a longer period of time, or`
  },
  {
    start: "00:01:46,860",
    end: "00:01:49,970",
    text: `find an institution that will pay
me a higher interest rate.`
  }
];

export default defineComponent({
  name: "List",

  setup() {
    const subs = ref(subList);

    return {
      subs
    };
  }
});
</script>
