<template>
    <div>
      <div id="my_chart6" v-bind:style="{width:window_width/3+'px',height:window_height/4+'px'}">
      </div>
    </div>
</template>

<script>
    export default {
        name: "InterviewerEvaluationPage",
      mounted() {
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
          let myChart = this.$echarts.init(document.getElementById('my_chart6'),"dark")
          myChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: ['评审人数','待评审人数']
            },
            grid: {
              left: '8%',
              right: '8%',
              bottom: '7%',
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
              max : 1700,
              min : 0,
              splitNumber : 5
            },
            series: [
              {
                name: '评审人数',
                type: 'bar',
                barWidth: '60%',
                label: {
                  show: false,
                  position: ''
                },
                data: ['-', '-', 44, '-', 2, 176, 79, 388, 578, 166, '-', '-', 92, 42, '-']
              },
              {
                name: '待评审人数',
                type: 'line',
                label: {
                  show: false,
                  position: ''
                },
                data: [0, 149, 212, 420, 665, 1355, 1604, 1599, 1369, 834, 692, 1295, 1373, 1435, 1444]
              }
            ]

          })
        }
          }
    }
</script>

<style scoped>

</style>
