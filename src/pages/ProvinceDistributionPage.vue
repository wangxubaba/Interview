<template>
    <div id="my_chart1" v-bind:style="{width:window_width/6+'px',height:window_height/4+'px'}">
    </div>
</template>

<script>
    import province from '../assets/province/province_count.json'
    export default {
        name: "ProvinceDistributionPage",
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
                let myChart = this.$echarts.init(document.getElementById('my_chart1'),"dark")
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '候选分布',
                        left: 'left',
                        top:10
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '姓名',
                            type: 'pie',
                            radius: '80%',
                            center: ['50%', '50%'],
                            data: province,
                            label: {
                                show: false
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
        }
    }
</script>

<style scoped>

</style>