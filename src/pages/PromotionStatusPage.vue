<template>
    <div id="my_chart3" v-bind:style="{width:window_width/6+'px',height:window_height/4+'px'}">
    </div>
</template>

<script>
    export default {
        name: "PromotionStatusPage",
        mounted(){
            this.draw()
        },
        data(){
            return{
                window_width:window.innerWidth-20,
                window_height:window.innerHeight-20
            }
        },

        methods:{
            draw(){
                let myChart = this.$echarts.init(document.getElementById('my_chart3'),"dark")
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 1048, name: '搜索引擎'},
                                {value: 735, name: '直接访问'},
                                {value: 580, name: '邮件营销'},
                                {value: 484, name: '联盟广告'},
                                {value: 300, name: '视频广告'}
                            ]
                        }
                    ]
                });
            },
        }
    }
</script>

<style scoped>

</style>