<template>
  <div>
    <div id="my_chart9" v-bind:style="{width:window_width/2+'px',height:window_height/2-40+'px'}">
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateAndInterviewerPage",
  mounted(){
    this.draw()
  },
  data(){
    return{
      window_width:window.innerWidth-40,
      window_height:window.innerHeight-20
    }
  },
  methods:{
    draw(){
      let myChart = this.$echarts.init(document.getElementById('my_chart9'),"dark")
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar = params[0];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        legend: {
          data: ['评审人数','面试人数']
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: {show: false},
          data: function () {
            var list = [];
            for (var i = 24; i <= 31; i++) {
              list.push('3月' + i + '日');
            }
            for (var j = 1; j <= 7; j++) {
              list.push('4月' + j + '日');
            }
            return list;
          }()
        },
        yAxis: {
          type: 'value',
          scale : true,
          max : 2000,
          min : 0,
          splitNumber : 5
        },
        series: [
          {
            name: '待评审人数',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [149, 212, 420, 665, 1355, 1604, 1599, 1369, 834, 692, 1295, 1373, 1435, 1444, 1444]
          },
          {
            name: '面试人数',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: ''
            },
            color:'#61a0a8',
            data: [149, 63, 252, 245, 692, 425, 74, 158, 43, 24, 603, 78, 154, 52, '-']
          },
          {
            name: '评审人数',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: ''
            },
            color:'#d48265',
            data: ['-', '-', 44, '-', 2, 176, 79, 388, 578, 166, '-', '-', 92, 42, '-']
          }
        ]
      })
    }

  }
}
</script>

<style scoped>

</style>
