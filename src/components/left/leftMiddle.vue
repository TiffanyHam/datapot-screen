<template>
  <div class="leftMiddle box">
    <!--top-->
    <el-col :span="24" class="topPart1">
      <img src="../../assets/images/leftMiddle/title.png" class="title">
    </el-col>
    <!--middle-->
    <el-row :gutter="20" class="midPart1" style="margin-left: 0px; margin-right: 0px; ">
      <el-col :span="8">
        <div class="lPart">
          <el-row :gutter="20">
            <el-col :span="8" style="margin-top: 5%;">
              <el-row class="text1">
                <el-col :span="24" class="distance"><span class="txtFont">攻击者</span></el-col>
                <el-col :span="24"><img src="../../assets/images/leftMiddle/attact1.png" width="100%"></el-col>
                <el-col :span="24"><span class="txtNum">{{Attacker}}</span></el-col>
                <el-col :span="24"><span class="txtFont">人</span></el-col>
              </el-row>
            </el-col>
            <el-col :span="6" style="margin-top: 26%;">
              <el-row class="text1">
                <el-col :span="24" class="dis-one">
                  <img src="../../assets/images/leftMiddle/index3.png" width="50%">
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="10">
              <el-row class="text1">
                <el-col :span="24"><span class="txtFont">针对性</span></el-col>
                <el-col :span="24"><span class="txtFont">暴力破解攻击</span></el-col>
                <el-col :span="24">
                  <div style="position: relative">
                    <img src="../../assets/images/leftMiddle/beattact.png" width="100%">
                    <div class="text2">
                      <span class="txtNum">{{target}}</span><br><span class="txtFont">次</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

        </div>
      </el-col>
      <el-col :span="8">
        <el-row class="text1">
          <el-col :span="24"><span class="txtFont">今日暴力破解攻击次数</span></el-col>
          <el-col :span="24">
            <div style="position: relative">
              <img src="../../assets/images/leftMiddle/attact2.png" width="40%">
              <div class="text2">
                <span class="txtNum">{{violent}}</span><br><span class="txtFont">次</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row class="text1">
          <el-col :span="24"><span class="txtFont">暴力破解等级分类</span></el-col>
          <!--环状图-->
          <el-col :span="24">
            <div v-loading="attackLoading" id="attackCharts" ref="attackCharts"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--bottom-->
    <div style="width: 95%;height: 50%;margin: 0 auto">
      <div class="bt_bg">
        <el-col :span="24"><p class="fs-1 t-t2">最近90天暴力破解趋势</p></el-col>
        <!--折线图-->
        <el-col :span="24">
          <div id="trendCharts" ref="trendCharts" v-loading="trendLoading"></div>
        </el-col>
        <el-col class="endDefense">
          <ul>
            <li>
              <p class="text_name">今日链接异常</p>
              <div v-if ="link == 0">
                <div  class="defenseNum  leftMiddleNum1">
                  <div class="text_name">{{link}}个</div>
                </div>
              </div>
              <div v-else-if ="link >0 && link < 10">
                <div class="defenseNum  leftMiddleNum2">
                  <div class="text_name">{{link}}个</div>
                </div>
              </div>
              <div v-else ="link > 10">
                <div class="defenseNum  leftMiddleNum3">
                  <div class="text_name">{{link}}个</div>
                </div>
              </div>
            </li>
            <li>
              <p class="text_name">今日DDoS攻击</p>
              <div v-if ="DosToday == 0">
                <div class="defenseNum leftMiddleNum1">
                  <div class="text_name">{{DosToday}}个</div>
                </div>
              </div>
              <div v-else-if ="DosToday >0 && DosToday < 10">
                <div class="defenseNum  leftMiddleNum2">
                  <div class="text_name">{{DosToday}}个</div>
                </div>
              </div>
              <div v-else ="DosToday > 10">
                <div class="defenseNum  leftMiddleNum3">
                  <div class="text_name">{{DosToday}}个</div>
                </div>
              </div>
            </li>
            <li>
              <p class="text_name">今日未授权下载</p>
              <div v-if ="download == 0">
                <div class="defenseNum leftMiddleNum1">
                  <div class="text_name">{{download}}个</div>
                </div>
              </div>
              <div v-else-if ="download >0 && download < 10">
                <div class="defenseNum  leftMiddleNum2">
                  <div class="text_name">{{download}}个</div>
                </div>
              </div>
              <div v-else ="download > 10">
                <div class="defenseNum  leftMiddleNum3">
                  <div class="text_name">{{download}}个</div>
                </div>
              </div>
            </li>
            <li>
              <p class="text_name">今日非法登录</p>
              <div v-if ="llegal == 0">
                <div class="defenseNum leftMiddleNum1">
                  <div class="text_name">{{llegal}}个</div>
                </div>
              </div>
              <div v-else-if ="llegal >0 && llegal < 10">
                <div class="defenseNum  leftMiddleNum2">
                  <div class="text_name">{{llegal}}个</div>
                </div>
              </div>
              <div v-else ="llegal > 10">
                <div class="defenseNum  leftMiddleNum3">
                  <div class="text_name">{{llegal}}个</div>
                </div>
              </div>
            </li>
            <li>
              <p class="text_name">今日页面被篡改</p>
              <div class="defenseNum leftMiddleNum2">
                <div class="text_name">1个</div>
              </div>

            </li>
          </ul>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../../src/assets/css/left/leftMiddle.css";
  import echarts from 'echarts'
  import axios from 'axios'
  import {getLeftCenterData} from '../../api/api.js'
  export default {
    name: "attackCharts",
    data(){
      return{
        attCharts:null,
        treCharts:null,
        cHeight:'',
        tHeight:'',
        attHeight:'',
        treHeight:'',
        Attacker:0,
        target:0,
        violent:0,
        link:0,
        DosToday:0,
        download:0,
        llegal:0,
        detecteName:[],
        detecteValue:[],
        seriesNetflow:[],
        axisNetflow:[],
        trendLoading:false,
        attackLoading:false
      }
    },
    methods:{
      resizeContainer() {
        // 环状图
        this.cHeight = ((document.documentElement.clientHeight)/3.6)+'px'
        this.attHeight = this.cHeight
        //折线图
        this.tHeight = ((document.documentElement.clientHeight)/3.3)+'px'
        this.treHeight = this.cHeight
        this.$nextTick(function() {
          this.initCharts()
        })

      },
      initCharts(){
        var that = this;
        getLeftCenterData('').then(res =>{
          if(res!= undefined || res!= null) {
            this.Attacker = res.result.Attacker   //攻击者
            this.target = res.result.NumberOfTargetedAttacks   //针对性
            this.violent = res.result.NumberOfViolentCrackdownsToday  //今日暴力破解攻击次数


            /*环图*/
            if((res.result.BreakdownProtocolClassification != undefined)||(res.result.BreakdownProtocolClassification != null)) {
              this.attackLoading = false
              let breakdown = res.result.BreakdownProtocolClassification
              var name = [], value = [];
              for (let i = 0; i < breakdown.length; i++) {
                 /* this.detecteName.push(breakdown[i].name);
                  this.detecteValue.push({
                    name: breakdown[i].name,
                    value: breakdown[i].value
                  });*/
                  name.push(breakdown[i].name);
                  value.push({
                    name: breakdown[i].name,
                    value: breakdown[i].value
                  });
              }
              this.detecteName = name;
              this.detecteValue = value;
            }
            /*折线图*/
            if((res.result.Trend != undefined)||(res.result.Trend != null)){
              this.trendLoading = false
              let trend = res.result.Trend
              num.push(trend.num);
              time.push(trend.time);
              this.seriesNetflow = trend.num
              this.axisNetflow = trend.time
            }



            /*今日*/
            this.link = res.result.LinkTodayException     //链接异常
            this.DosToday = res.result.DosTodayException   //Dos攻击
            this.download = res.result.UnauthTodayDownload  //未授权下载
            this.llegal = res.result.IllegalTodayLogin    //非法登录
          
          }

          /*环状图*/
          this.attCharts = echarts.init(this.$refs.attackCharts); //这里是为了获得容器所在位置
          // 获取浏览器可视区域高度
          let attOption ={
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:this.detecteName,
              //['中危','高危'],
              show:false
            },
            series: [
              {
                name:'暴力破解协议分类',
                type:'pie',
                radius: ['60%', '76%'],
                center:['50%', '45%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#fff',
                      fontSize:'60%'
                    }
                  },
                  emphasis: {
                    show: true,
                  }
                },
                labelLine: {
                  normal: {
                    show: true,
                    length:0.001,
                    lineStyle: {
                      color: '#fff'
                    },
                  }
                },
                color: ['#2562ab', '#123057', '#3892fa'],
                data:this.detecteValue
                /*[ {value:335, name:'中危'},
                     {value:310, name:'高危'},]*/

              }
            ]
          }
          this.attCharts.setOption(attOption,true);

          /*折线图*/
          this.treCharts = echarts.init(this.$refs.trendCharts); //这里是为了获得容器所在位置
          let trendOption ={
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              show:false,
              data:['web攻击趋势'],
              textStyle:{
                fontSize:'14',fontWeight:'normal',color:'#92B0BA',
              }
            },

            grid: {
              left: '3%',
              right: '3%',
              bottom: '5%',
              top:'8%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data : this.axisNetflow,
                axisLabel: {
                  textStyle: {
                    color: '#6da5b9'
                  },
                  fontSize:'60%',
                }

              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLabel: {
                  textStyle: {
                    color: '#6da5b9'
                  },
                  fontSize:'60%',
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:'#081835',
                    type:'solid',
                  }
                },
              }
            ],
            series : [
              {
                name:'web攻击趋势',
                type:'line',
                stack: '总量',
                itemStyle:{
                  normal:{
                    color:'#1573cd'
                  }
                },
                data : this.seriesNetflow,
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(40, 182, 252, 0.85)'
                    }, {
                      offset: 1,
                      color: 'rgba(28, 159, 255, 0.2)'
                    }])
                  }
                }
              }
            ]
          }
          this.treCharts.setOption(trendOption);

          //定时任务
          var timer = setTimeout(function() {
            timer = setTimeout(function() {
              that.resizeContainer()
            }, 120000);
          }, 120000);

        })

      },

    },
    mounted(){
      this.resizeContainer()
      window.onresize = () => {
        //环状
        this.cHeight = ((document.documentElement.clientHeight)/3.6)+'px';
        this.attHeight = this.cHeight
        //折线
        this.tHeight = ((document.documentElement.clientHeight)/3.3)+'px'
        this.treHeight = this.cHeight

        this.$nextTick(function() {
          this.attCharts.resize();
          this.treCharts.resize()
        })

      }

    }
  }
</script>

<style>

</style>
