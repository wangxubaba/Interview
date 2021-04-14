
<template>
  <div class="hello" v-bind:style="{width:window_width/2+'px',height:window_height/2-40+'px'}">
<!--    <div class="hello" v-bind:style="{width:window_width+'px',height:window_height+'px'}">-->
    <div id="app">
      <wordcloud
          :data="defaultWords"
          nameKey="name"
          valueKey="value"
          :color="myColors"
          :showTooltip="false"
          :wordClick="wordClickHandler" v-bind:style="{width:window_width/2 + 30+'px',height:window_height/2 - 10+'px'}"></wordcloud>
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
          // window_width:window.innerWidth-40,
          // window_height:window.innerHeight-20,
          myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
          defaultWords: [
            {"name": "职业规划", "value": 123},
            {"name": "社会现象", "value": 86},
            {"name": "观点态度", "value": 121},
            {"name": "组织管理", "value": 79},
            {"name": "人际关系", "value": 128},
            {"name": "自我认识", "value": 90},
            {"name": "情绪管理", "value": 60},
            {"name": "算法", "value": 160},
            {"name": "数据结构", "value": 86},
            {"name": "操作系统", "value": 93},
            {"name": "计算机网络", "value": 83},
            {"name": "数组", "value": 54},
            {"name": "动态规划", "value": 62},
            {"name": "字符串", "value": 76},
            {"name": "数学", "value": 190},
            {"name": "树", "value": 84},
            {"name": "贪心", "value": 89},
            {"name": "分治", "value": 71},
            {"name": "图", "value": 86},
            {"name": "递归", "value": 81},
            {"name": "链表", "value": 73},
            {"name": "并查集", "value": 76},
            {"name": "队列", "value": 68},
            {"name": "排序", "value": 78},
            {"name": "位运算", "value": 87},
            {"name": "个人性格", "value": 74},
            {"name": "堆", "value": 86},
            {"name": "指针", "value": 68},
            {"name": "哈希表", "value": 54},
            {"name": "拓扑", "value": 73},
            {"name": "滑动窗口", "value": 43},
            {"name": "查找", "value": 46},
            {"name": "快速排序", "value": 56},
            {"name": "设计", "value": 60},
            {"name": "数据库", "value": 20},
            {"name": "事务", "value": 75},
            {"name": "JAVA", "value": 43},
            {"name": "服务器", "value": 53},
            {"name": "记忆化", "value": 43},
            {"name": "脑筋急转弯", "value": 80},


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