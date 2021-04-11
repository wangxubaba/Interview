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
                window_width:window.innerWidth-40,
                window_height:window.innerHeight-20
            }
        },

        methods:{
            draw(){
                let myChart = this.$echarts.init(document.getElementById('my_chart3'),"dark")
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '晋级状态',
                        left: 'left',
                        top:10
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [
                        {
                            name: '参赛状态',
                            type: 'pie',
                            radius: ['45%', '80%'],
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
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 14342, name: '通过'},
                                {value: 8068, name: '淘汰'},
                                {value: 9793, name: '待选'},
                                {value: 1464, name: '仲裁'},
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