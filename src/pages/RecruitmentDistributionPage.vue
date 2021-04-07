<template>
    <div>
        <div id="my_chart" style="width: 60%;height:500px;margin-left: 20%">
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import China from '../assets/china'
    // eslint-disable-next-line no-unused-vars
    import overall from '../assets/recruitment/17、招商银行天津分行2021.json'
    export default {
        name: "RecruitmentDistributionPage",
        mounted(){
          this.draw()
        },
        methods:{
            draw(){
                let myChart = this.$echarts.init(document.getElementById('my_chart'))
                // 绘制图表
                myChart.setOption({
                    // title: {
                    //     text: '在线率', // 主标题文本，支持使用 \n 换行
                    //     top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
                    //     left: 'center', // 值: 'left', 'center', 'right' 同上
                    //     textStyle: { // 文本样式
                    //         fontSize: 24,
                    //         fontWeight: 600,
                    //         color: '#fff',
                    //     },
                    // },
                    // 提示框组件
                    tooltip: {
                        trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
                        // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                        // 使用函数模板  传入的数据值 -> value: number | Array
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        formatter: function (e) {
                            let context = `
              <div class="showTool">
                <div class="title">${ e.data.name} </div>
                <div class="rate">在线率：${ (e.data.value[2]).toFixed(0) }%</div>
              </div>
            `
                            return context
                        },
                    },
                    geo: {
                        map: 'china', // 地图类型
                        show: true, // 是否显示地理坐标系组件
                        // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，
                        // 可以设置成 'scale' 或者 'move' 设置成 true 为都开启
                        roam: false,
                        // 图形上的文本标签
                        label: {
                            show: false, // 是否显示对应地名
                        },
                        // 地图区域的多边形 图形样式
                        itemStyle: {
                            areaColor: '#333333', // 地图区域的颜色
                            borderColor: 'gray', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                            borderType: 'dotted', // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                        },
                        // 高亮状态下的多边形和标签样式
                        emphasis: {
                            label: {
                                show: true, // 是否显示标签
                                color: '#17233d', // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                            },
                            itemStyle: {
                                areaColor: '#ed4014', // 地图区域的颜色
                            },
                        },
                    },
                    series: [
                        {
                            type: 'effectScatter', // 类型
                            symbolSize: 4,
                            zoomScale: 0.2,
                            blendMode: 'lighter',
                            large: true,
                            coordinateSystem: 'geo', // 该系列使用的坐标系 可选: 'cartesian2d','polar','geo'
                            // 标记的图形, 标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond',
                            // 'pin', 'arrow', 'none'
                            symbol: 'circle',
                            // 图形的样式
                            itemStyle: {
                                color: 'rgb(20,15,2)',
                            },
                            // 系列中的数据内容数组, 数组项通常为具体的数据项
                            data: overall
                        },
                    ],
                });
            },
        }
    }
</script>

<style scoped>
</style>