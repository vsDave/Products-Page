<template>
  <div class="m-10 text-2xl font-bold">
    <h1>
      Your Cart <i class="fa fa-shopping-cart" style="font-size: 36px"></i>
    </h1>
    <ul class="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
      <li
        v-for="(item, index) in cartItems"
        v-show="item.quantity2 != 0"
        :key="index"
      >
        <img class="border border-black" :src="item.photo" :alt="item.photo" />
        <h1 class="my-2 text-2xl font-bold">product : {{ item.title }}</h1>
        <p class="text-xl">Amount : ${{ item.amount }}</p>
        <p class="text-xl">
          Quantity :{{ item.quantity2 }}
          <button
            class="m-1 text-xl font-bold bg-red-700 rounded-md w-7 text-red"
            v-if="item.quantity2 != 0"
            @click="item.quantity2--, item.avail++"
          >
            -
          </button>
        </p>
      </li>
    </ul>
    <p>Total:${{ total }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['add', 'remove']),
  },

  computed: {
    ...mapGetters(['cartItems', 'total']),
  },
}
</script>

<style></style>
