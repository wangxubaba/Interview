
<template>
  <div class="hello" v-bind:style="{width:window_width/2+'px',height:window_height/2-40+'px'}">
    <div id="app">
      <wordcloud
          :data="defaultWords"
          nameKey="name"
          valueKey="value"
          :color="myColors"
          :showTooltip="false"
          :wordClick="wordClickHandler">
      </wordcloud>
    </div>
  </div>
</template>
<script>
    import wordcloud from 'vue-wordcloud'
    export default {
        name: "KeyWordsPage",
        components: {
          wordcloud
        },
        methods: {
          wordClickHandler(name, value, vm) {
            console.log('wordClickHandler', name, value, vm);
          }
        },
      data() {
        return {
          window_width:window.innerWidth-40,
          window_height:window.innerHeight-20,
          myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
          defaultWords: [{
            "name": "Cat",
            "value": 26
          },
            {
              "name": "fish",
              "value": 19
            },
            {
              "name": "things",
              "value": 18
            },
            {
              "name": "look",
              "value": 16
            },
            {
              "name": "two",
              "value": 15
            },
            {
              "name": "fun",
              "value": 100
            }
          ]
        }
      }
    }

</script>

<style scoped>
.hello{
  background-color: rgb(51,51,51);
}
</style>