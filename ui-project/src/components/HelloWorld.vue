<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ambition Can't Wait! What project will start today?</h2>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to DragInspire!',
      items: [
        {
          src: '/static/drexel4.jpg'
        },
        {
          src: '/static/drexel8.jpg'
        },
        {
          src: '/static/drexel12.jpg'
        },
        {
          src: '/static/drexel7.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
