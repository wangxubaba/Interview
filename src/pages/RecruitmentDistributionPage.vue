<template>
    <div>
        <div id="my_chart" style="width: 60%;height:500px;margin-left: 20%">
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import China from '../assets/china'
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
                            symbolSize: 5,
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
                            data: [
                                { name: '北京', value: [116.405285, 39.904989, 24] },
                                { name: '天津', value: [117.190182, 39.125596, 60] },
                                { name: '上海', value: [121.472644, 31.231706, 24] },
                                { name: '重庆', value: [106.504962, 29.533155, 2] },
                                { name: '河北', value: [114.502461, 38.045474, 56] },
                                { name: '河南', value: [113.665412, 34.757975, 5] },
                                { name: '云南', value: [102.712251, 25.040609, 30] },
                                { name: '辽宁', value: [123.429096, 41.796767, 59] },
                                { name: '黑龙江', value: [126.642464, 45.756967, 73] },
                                { name: '湖南', value: [112.982279, 28.19409, 99] },
                                { name: '安徽', value: [117.283042, 31.86119, 24] },
                                { name: '山东', value: [117.000923, 36.675807, 10] },
                                { name: '新疆', value: [87.617733, 43.792818, 87] },
                                { name: '江苏', value: [118.767413, 32.041544, 51] },
                                { name: '浙江', value: [120.153576, 30.287459, 37] },
                                { name: '江西', value: [115.892151, 28.676493, 48] },
                                { name: '湖南', value: [112.982279, 28.19409, 99] },
                                { name: '安徽', value: [117.283042, 31.86119, 24] },
                                { name: '山东', value: [117.000923, 36.675807, 10] },
                                { name: '新疆', value: [87.617733, 43.792818, 87] },
                                { name: '江苏', value: [118.767413, 32.041544, 51] },
                                { name: '浙江', value: [120.153576, 30.287459, 37] },
                                { name: '江西', value: [115.892151, 28.676493, 48] },
                                { name: '湖南', value: [112.982279, 28.19409, 99] },
                                { name: '安徽', value: [117.283042, 31.86119, 24] },
                                { name: '山东', value: [117.000923, 36.675807, 10] },
                                { name: '新疆', value: [87.617733, 43.792818, 87] },
                                { name: '江苏', value: [118.767413, 32.041544, 51] },
                                { name: '浙江', value: [120.153576, 30.287459, 37] },
                                { name: '江西', value: [115.892151, 28.676493, 48] },
                                { name: '湖北', value: [114.298572, 30.584355, 17] },
                                { name: '广西', value: [108.320004, 22.82402, 26] },
                                { name: '甘肃', value: [103.823557, 36.058039, 37] },
                                { name: '山西', value: [112.549248, 37.857014, 18] },
                                { name: '内蒙古', value: [111.670801, 40.818311, 34] },
                                { name: '陕西', value: [108.948024, 34.263161, 64] },
                                { name: '吉林', value: [125.3245, 43.886841, 4] },
                                { name: '福建', value: [119.306239, 26.075302, 41] },
                                { name: '贵州', value: [106.713478, 26.578343, 20] },
                                { name: '广东', value: [113.280637, 23.125178, 10] },
                                { name: '青海', value: [101.778916, 36.623178, 3] },
                                { name: '西藏', value: [91.132212, 29.660361, 4] },
                                { name: '四川', value: [104.065735, 30.659462, 41] },
                                { name: '宁夏', value: [106.278179, 38.46637, 8] },
                                { name: '海南', value: [110.33119, 20.031971, 4] },
                                { name: '台湾', value: [121.509062, 25.044332, 58] },
                                { name: '香港', value: [114.173355, 22.320048, 45] },
                                { name: '澳门', value: [113.54909, 22.198951, 3] },
                                { name: '南海诸岛', value: [114.252615, 15.86029, 271.13] },
                            ],
                        },
                    ],
                });
            },
        }
    }
</script>

<style scoped>
</style>