<template>
  <div class="side-bar-menu">
    <u>
      <li v-for="item in sidebarItems" :key="item.id"></li>
    </u>
  </div>
</template>

<script>

export default {
  data(){
    const data = {
      sidebarItems: [

      ]
    }

    data.itemsMap = {
      round: {
        routeName: 'round'
      }
    };

    return data
  }
}
</script>

<style scoped>

</style>
