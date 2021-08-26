<template>
  <div class="m-10">
    <div class="m-3">
      <h1 class="text-5xl italic font-bold text-center">
        Shop Now<i class="fa fa-shopping-cart" style="font-size: 36px"></i>
      </h1>
      <div
        class="items-center justify-end m-5 text-xl  lg:flex sm:flex-col md:flex-row"
      >
        <h1 class="mx-1 text-xl font-bold underline">Added Items:</h1>

        <h1
          class="p-3 m-1 text-white bg-green-600"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <b>
            {{ item.title }}
            :
            {{ item.quantity2 }}
          </b>
        </h1>
        <router-link
          to="/productlist"
          class="flex p-3 m-2 text-xl font-bold text-white bg-pink-600 rounded-md  hover:bg-pink-900"
          >Checkout <i class="fa fa-shopping-cart" style="font-size: 30px"></i>
        </router-link>
      </div>
      <ul class="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
        <li v-for="(item, index) in allItems" :key="index">
          <div class="container">
            <img
              class="opacity-70 hover:opacity-100 rounded-2xl"
              :src="item.photo"
              :alt="item.photo"
            />
          </div>
          <h1 class="my-2 text-2xl font-bold">
            {{ item.title }}
          </h1>
          <p
            class="text-xl font-semibold text-red-800"
            v-show="item.avail == 0"
          >
            Soryy! We out of stock
          </p>
          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold">${{ item.amount }}</p>
            <button
              @click="add(item)"
              :disabled="!item.avail"
              :class="{ disabledButton: !item.avail }"
              class="p-2 text-xl text-white bg-blue-600 hover:bg-blue-800"
            >
              add to cart<i
                class="fa fa-shopping-cart"
                style="font-size: 20px"
              ></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['add', 'remove']),
  },
  computed: {
    ...mapGetters(['allItems', 'cartItems']),
  },
}
</script>
<style scoped>
.disabledButton {
  background-color: #d8d8d8;
}
</style>
