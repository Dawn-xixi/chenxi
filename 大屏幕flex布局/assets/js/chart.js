    var chart_l1=function (pxdata,pydata) {
        var myChart = echarts.init(document.getElementById('chart-l1'));
        var xdata = pxdata||S_mock.xdata(2013,2019,'年');
        var ydata = pydata||S_mock.array(7,100,200);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '2%',
                top: "22%",
                right: '4%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{
                nameLocation: "start",
                nameTextStyle: {
                    color: "#fff",
                },
                nameGap: '1',
                type: 'category',
                data: xdata,
                axisLabel: {
                    interval: 0,
                    color: "#fff",
                    fontSize: getSize(0.2),
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#579dff",
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                },
            }],
            yAxis: [{
                // show:false,
                type: 'value',
                name: '单位：万人次',
                nameTextStyle: {
                    color: "#fff",
                    fontSize: getSize(0.24),
                },
                axisLabel: {
                    interval: 0,
                    color: "#fff",
                    fontSize: getSize(0.24),
                },
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#10447C',
                        opacity: 1,
                        width: 1,
                        type: 'solid',
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#579dff",
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            series: [{
                type: 'bar',
                barGap: 0,
                barWidth: "40%",
                label: {
                    show: true,
                    position: 'top',
                    color: '#facc14'
                },

                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#01F1FC'
                                },
                                {
                                    offset: 1,
                                    color: '#1B729E'
                                }
                            ]
                        )
                    },
                },
                data: ydata
            }, ]
        };
        myChart.setOption(option);
    }