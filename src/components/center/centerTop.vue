<template>
  <div class="box" style="width: 100%;height: 100%;position: relative">
    <!--top-->
    <div class="topPart">
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content titleLeft">
            <div class="titleLeft_text">
              <p id="center_top" class="title_one">今日请求总数</p>
              <span class="serTopNum title_two">{{todayVisit}}</span><span class="title_one">(次)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content titleCenter">
            <span>Datapot网络安全态势感知</span>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content titleRight">
            <div class="titleRight_text" style=" color:#92B0BA">
              <p id="center_right" class="title_one">本周请求总数</p>
              <span class="serTopNum title_two">{{weekVisit}}</span>
              <span class="title_one">(次)</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--世界地图center-->
    <div class="middlePart"  :class="{ 'active1':style1,'active2':style2 }">
      <div v-loading="mapLoading" id="worldMap" ref="worldMap"  :style="{height:'100%',width:'100%'}"></div>
    </div>
    <!--bottom-->
    <div class="bottomPart">
      <el-row :gutter="20" style="margin-left: 30px;margin-right: 30px;">
        <el-col :span="6">
          <div class="securityEndLine1 borderName">
            <div class="ruleActe ruleActe2">
              <p class="securityEndTitle">
                <span>地区访问TOP5</span>
                <span style="float: right;margin-right: 1rem">请求量</span>
              </p>
              <ul>
                <li v-for="(item,index) of areaList">
                  <span class="ruleActenum">{{index+1}}</span>
                  <span class="ruleActeLeftCity">{{item.name}}</span>
                  <span class="ruleActeRight ruleActeRightCity">{{item.value}}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="securityEndZXLine borderName">
            <div class="ruleActe1">
              <div v-loading="ruleLoading" id="ruleActeNetwork" ref="ruleActeNetwork"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/world.js' // 引入世界地图数据
  import "../../../src/assets/css/center/centerTop.css";
  import axios from 'axios'
  import {getCenterTopData} from '../../api/api.js'
  export default {
    data(){
      return{
        worldMapCharts:null,
        myChartWebType:null,
        style1:true,
        style2:false,
        todayVisit:'',
        weekVisit:'',
        inVisitSeries:[],
        OutVisitSeries:[],
        axisNetflow:[],
        areaList:[],
        BJData: '',
        mapLoading:false,
        ruleLoading:false
      }
    },
    methods:{
      init(){
        let that = this
        getCenterTopData('').then(res => {
          if(res!= undefined || res!= null) {
            this.mapLoading = false

            this.todayVisit = res.result.TodayVisit
            this.weekVisit = res.result.WeekVisit
            this.areaList = res.result.AreaVisitTopFive

            //折线图
            if ((res.result.Trend != undefined) || (res.result.Trend != null) || (res.result.Trend != [])) {
              this.ruleLoading = false
              let trend = res.result.Trend
              this.inVisitSeries = trend.InVisit
              this.OutVisitSeries = trend.OutVisit
              this.axisNetflow = trend.Time
            }

            //地图
            let maps = res.result.WorldMap.City
            let BJData1 = res.result.WorldMap.Line

            this.worldMapCharts = echarts.init(this.$refs.worldMap); //这里是为了获得容器所在位置
            this.worldMapCharts.on('georoam', function (params) {
               that.style1 = false
               that.style2 = true
            });
            window.onresize = this.worldMapCharts.resize;
            var geoCoordMap = maps;
            /*{
            上海: [121.4648, 31.2891],
            尼日利亚: [-4.388361, 11.186148],
            美国洛杉矶: [-118.24311, 34.052713],
            香港邦泰: [114.195466, 22.282751],
            美国芝加哥: [-87.801833, 41.870975],
            加纳库马西: [-4.62829, 7.72415],
            英国曼彻斯特: [-1.657222, 51.886863],
            德国汉堡: [10.01959, 54.38474],
            哈萨克斯坦阿拉木图: [45.326912, 41.101891],
            俄罗斯伊尔库茨克: [89.116876, 67.757906],
            巴西: [-48.678945, -10.493623],
            埃及达米埃塔: [31.815593, 31.418032],
            西班牙巴塞罗纳: [2.175129, 41.385064],
            柬埔寨金边: [104.88659, 11.545469],
            意大利米兰: [9.189948, 45.46623],
            乌拉圭蒙得维的亚: [-56.162231, -34.901113],
            莫桑比克马普托: [32.608571, -25.893473],
            阿尔及利亚阿尔及尔: [3.054275, 36.753027],
            阿联酋迪拜: [55.269441, 25.204514],
            匈牙利布达佩斯: [17.108519, 48.179162],
            澳大利亚悉尼: [150.993137, -33.675509],
            美国加州: [-121.910642, 41.38028],
            澳大利亚墨尔本: [144.999416, -37.781726],
            墨西哥: [-99.094092, 19.365711],
            加拿大温哥华: [-123.023921, 49.311753]
          };*/
            this.BJData = BJData1;
            /*[
            [{
              name: "尼日利亚",
              value: 9100
            }, {
              name: "上海"
            }],
            [{
              name: "美国洛杉矶",
              value: 2370
            }, {
              name: "上海"
            }],
            [{
              name: "香港邦泰",
              value: 3130
            }, {
              name: "上海"
            }],

          ];*/
            var convertData = function (data) {
              var res = [];
              for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = maps[dataItem[0].Coord];
                var toCoord = maps[dataItem[1].Coord];
                if (fromCoord && toCoord) {
                  res.push([{
                    coord: fromCoord,
                    value: dataItem[0].Value
                  },
                    {
                      coord: toCoord
                    }
                  ]);
                }
              }
              return res;
            };

            var series = [];
            [
              ["深圳", this.BJData]
            ].forEach(function (item, i) {
              series.push({
                  type: "lines",
                  zlevel: 2,
                  effect: {
                    show: true,
                    period:4, //箭头指向速度，值越小速度越快
                    trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: "arrow", //箭头图标
                    symbolSize: 3 //图标大小
                  },
                  lineStyle: {
                    normal: {
                      width: 1, //尾迹线条宽度
                      opacity: 0, //尾迹线条透明度
                      curveness: 0.3 //尾迹线条曲直度
                    }
                  },

                  data: convertData(item[1])
                }, {
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  zlevel: 4,
                  rippleEffect: {
                    //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: "stroke", //波纹绘制方式 stroke, fill
                    scale: 6 //波纹圆环最大限制，值越大波纹越大
                  },
                  label: {
                    normal: {
                      show: true,
                      position: "right", //显示位置
                      offset: [5, 0], //偏移设置
                      formatter: "{b}" //圆环显示文字
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  symbol: "circle",
                  symbolSize: function (val) {
                    return 4 + val[2] / 1000; //圆环大小
                  },
                  itemStyle: {
                    normal: {
                      show: false,
                    }
                  },
                  data: item[1].map(function (dataItem) {
                    return {
                      name: dataItem[0].Coord,
                      value: geoCoordMap[dataItem[0].Coord].concat([dataItem[0].Value])
                    };
                  })
                },
                //被攻击点
                {
                  type: "scatter",
                  coordinateSystem: "geo",
                  zlevel: 2,
                  rippleEffect: {
                    period: 4,
                    brushType: "stroke",
                    scale: 4
                  },
                  label: {
                    normal: {
                      show: true,
                      position: "right",
                      color: "#00ffff",
                      formatter: "{b}",
                      textStyle: {
                        color: "#0bc7f3"
                      }
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  symbol: "pin",
                  symbolSize: 30,
                  itemStyle: {
                    normal: {
                      show: true,
                      color: "#9966cc"
                    }
                  },
                  data: [{
                    name: item[0],
                    //value: geoCoordMap[item[0]].concat([item[0].Value])
                    value: item[1].map(function (dataItem) {
                      return geoCoordMap[item[0]].concat([dataItem[0].Value])
                    })
                  }]
                }
              );
            });


            let worldMapoption = {
              // backgroundColor: '#000',
              tooltip: {
                trigger: "item",
                //  backgroundColor: "#1540a1",
                borderColor: "#FFFFCC",
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: "z-index:100",
                formatter: function (params, ticket, callback) {
                  //根据业务自己拓展要显示的内容
                  var res = "";
                  var name = params.name;
                  //var value = params.Value[params.seriesIndex + 1];
                  var vaule = params.value[params.seriesIndex + 1]
                  res =
                    "<span style='color:#fff;'>" +
                    name +
                    "</span><br/>数据：" +
                    vaule;
                  return res;
                }
              },
              visualMap: {
                //图例值控制
                min: 0,
                max: 10000,
                show: false,
                calculable: true,
                color: ["#0bc7f3"],
                textStyle: {
                  color: "#fff"
                },

              },
              geo: {
                map: "world",
                label: {
                  emphasis: {
                    show: false
                  }
                },
                roam: true, //是否允许缩放
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: "180%",
                itemStyle: {
                  normal: {
                    color: "#04284e", //地图背景色
                    borderColor: "#5bc1c9" //省市边界线
                  },
                  emphasis: {
                    color: "rgba(37, 43, 61, .5)" //悬浮背景
                  }
                }
              },

              series: series
            }
            this.worldMapCharts.setOption(worldMapoption);


            //折线图
            this.myChartWebType = echarts.init(this.$refs.ruleActeNetwork); //这里是为了获得容器所在位置
            window.onresize = this.myChartWebType.resize;
            let WebTypeoption = {
              title: {
                text: '访问次数上下行趋势',
                left: '1%',
                top: '4%',
                textStyle: {
                  color: '#c8f5ff',
                  fontSize: '100%',
                  fontWeight: '800',
                }
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                orient: 'horizontal',
                itemWidth: 30,
                itemHeight: 15,
                icon: "rect",//图例形状
                data: ['访出请求数', '访入请求数'],
                left: '25%',
                top: '5%',
                itemGap: 65,//图例之间的间距
                textStyle: {
                  fontSize: '80%',
                  fontWeight: '800',
                  color: '#92B0BA',
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '19%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: this.axisNetflow,
                  axisLabel: {
                    textStyle: {
                      color: '#6da5b9'
                    },
                    fontSize: '60%',
                  }
                }
              ],
              textStyle: {
                fontSize: 14,
                fontWeight: 'bolder',
              },
              yAxis: [
                {
                  type: 'value',
                  axisLabel: {
                    textStyle: {
                      color: '#6da5b9'
                    },
                    fontSize: '60%',
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: '#081835',
                      type: 'solid'
                    }
                  },
                }
              ],
              series: [
                {
                  name: '访出请求数',    //蓝色
                  type: 'line',
                  data: this.OutVisitSeries,
                  z: 2,
                  color: '#67b8fd',
                },
                {
                  name: '访入请求数',    //红色
                  type: 'line',
                  color: '#c195b3',
                  data: this.inVisitSeries,
                  z: 5,
                }
              ]
            };
            this.myChartWebType.setOption(WebTypeoption);
          }


          //定时任务
          var timer = setTimeout(function() {
            timer = setTimeout(function() {
              that.init()
            }, 60000);
          }, 60000);

        })

      }

    },
    beforeDestroy() {
      this.worldMapCharts.clear();
    },
    mounted(){
      this.init()
    }
  }
</script>

