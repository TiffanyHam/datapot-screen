<template>
  <div class="box leftBottom" style="width: 100%;height: 100%;position: relative">
    <!--top-->
    <el-col :span="24" style="height: 19%;">
      <img src="../../assets/images/leftBottom/title.png" class="title">
    </el-col>
    <!--middle-->
    <el-row id="midPart2">
      <el-col :span="8" style="height: 45%">
        <div class="left_bgs">
          <el-col :span="24">
           <span class="echBg"><img src="../../assets/images/leftBottom/huan2.png" width="100%"></span>
          <div v-loading="chartLoading" id="charts" ref="charts"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="16" style="height: 42%">
        <div class="right_bgs" style="text-align:center ;">
          <el-row class="dist_one">
            <el-col :span="6" style="margin: 3% 0 0 7%;">
              <div style="text-align: left">
                <el-row class="ft-9">
                  <el-col :span="24" class="txt_name5"><p class="">{{assetName}}</p></el-col>
                  <el-col :span="24" class="txt_name5"><p class="">主机IP：{{assetIP}}</p></el-col>
                  <el-col :span="24" class="txt_name5"><p class="">数据源：{{assetSource}}</p></el-col>
                  <el-col :span="24" class="txt_name5"><p class="">状态：{{assetStatus == 1 ? "活动的":"非活动的"}}</p></el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8" class="dist_one">
              <div class="huan_two">
                <img v-if="stageNum == 1" src="../../assets/images/leftBottom/stage1.png" width="100%"/>
                <img v-else-if="stageNum == 2" src="../../assets/images/leftBottom/stage2.png" width="100%"/>
                <img v-else-if="stageNum == 3" src="../../assets/images/leftBottom/stage3.png" width="100%"/>
                <img v-else-if="stageNum == 4" src="../../assets/images/leftBottom/stage4.png" width="100%"/>
                <img v-else-if="stageNum == 5" src="../../assets/images/leftBottom/stage5.png" width="100%"/>
                <img v-else-if="stageNum == 6" src="../../assets/images/leftBottom/stage6.png" width="100%"/>
                <img v-else-if="stageNum == 7" src="../../assets/images/leftBottom/stage7.png" width="100%"/>
                <img v-else src="../../assets/images/leftBottom/stage0.png" width="100%"/>
              </div>
            </el-col>
            <el-col :span="4" style=" margin: 3% 0px 0px 0;">
              <div class="huan_one">
                <img src="../../assets/images/leftBottom/huan.png" width="100%" style="position: relative">
                <el-row class="huan_txt" style="position:absolute">
                  <el-col :span="24" class="ft-1">{{assetThreat}}</el-col>
                  <el-col :span="24" class="ft-9">威胁度</el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="4" style="margin: 3% 0px 0px 0;">
              <div class="huan_one">
                <img src="../../assets/images/leftBottom/huan.png" width="100%" style="position: relative">
                <el-row class="huan_txt1" style="position:absolute">
                  <el-col :span="24" class="ft-1">{{assetCertainty}}</el-col>
                  <el-col :span="24" class="ft-9">可信度</el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!--bottom-->
    <el-row class="bottomPart3">
      <el-col :span="24" id="bottomPart2">
        <span class="biao"><img src="../../assets/images/leftBottom/biaoshi.png" width="100%"></span>
        <el-row>
          <el-col :span="24"><p class="fs-1 t-t2">核心资产</p></el-col>
        </el-row>
        <el-row class="tabList">
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 100%;height: 100%">
              <el-table-column
                prop="hostName"
                min-width="30%"
                label="主机名"
              >
              </el-table-column>
              <el-table-column
                min-width="10%"
                label="侦查">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 1"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="10%"
                label="武装">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 2"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                min-width="10%"
                label="投递">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 3"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                min-width="10%"
                label="突破">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 4"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="10%"
                label="安装">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 5"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="10%"
                label="控制">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 6"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="10%"
                label="攻击">
                <template slot-scope="scope">
                  <div v-for="i in stageArr">
                    <div v-if="i == 7"><p class="circle"></p></div>
                  </div>
                </template>
              </el-table-column>

            </el-table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import  axios from 'axios'
  import "../../../src/assets/css/left/leftBottom.css";
  import echarts from 'echarts'
  import {getLeftBottomData} from '../../api/api.js'

  export default {
    name: "leftBottom",
    data(){
      return{
        _charts:null,
        cHeight:'',
        chaHeight:'',
        tableData: [],
        stageArr:'',
        assetIP:'',
        assetSource:'',
        assetName:'',
        assetStatus:'',
        assetCertainty:'',
        assetThreat:'',
        detecteName:[],
        detecteValue:[],
        total:0,
        stageNum:'',
        chartLoading:false

      }
    },
    methods:{
      resizeContainer() {
        // 环状图
        this.cHeight = ((document.documentElement.clientHeight)/4.1)+'px'
        this.chaHeight = this.cHeight
        this.$nextTick(function() {
          this.initCharts()
        })

      },
      initCharts(){
        var that = this;
        getLeftBottomData('').then(res => {
          if(res!= undefined || res!= null) {
            let _AssetsDetail = res.result.AssetsDetail
            for (let i = 0; i < _AssetsDetail.length; i++) {
              this.assetIP = _AssetsDetail[i].hostIp
              this.assetSource = _AssetsDetail[i].source
              this.assetName = _AssetsDetail[i].hostName
              this.assetStatus = _AssetsDetail[i].hostStatus
              this.assetCertainty = _AssetsDetail[i].certainty
              this.assetThreat = _AssetsDetail[i].threat
              this.stageNum = _AssetsDetail[i].stage
            }

            //核心资产
            let coreAsset = res.result.CoreAssets
            coreAsset == undefined ? this.tableData = [] : this.tableData = coreAsset;
            for (let x = 0; x < coreAsset.length; x++) {
              coreAsset[x].stages = '1'
              this.stageArr = coreAsset[x].stages;//状态
            }
            //环状图
            if((res.result.DataSort != undefined)||(res.result.DataSort != null)||(res.result.DataSort != [])) {
              this.chartLoading = false
              let breakdown = res.result.DataSort
              for (let y = 0; y < breakdown.length; y++) {
                this.detecteName.push(breakdown[y].dealStatus);
                this.detecteValue.push({
                  name: breakdown[y].dealStatus,
                  value: breakdown[y].num
                });
                this.total += breakdown[y].num
              }
            }
          }
          this._charts = echarts.init(this.$refs.charts);
          //环状图
          let dotTxt_x = 0, dotNum_y = 0, dotTxt_y = 0, dotNum_x = 0, dot_x = 0, position_x = 0, legend_y = 0,
            dot_y = 0
          dotTxt_x = 147;//180-(26/2)
          dotNum_x = dotTxt_x - 5;
          dot_x = 180, position_x = dot_x + 80
          dot_y = this.$refs.charts.offsetHeight / 2;
          dotTxt_y = dot_y + 0; //50/2
          dotNum_y = dotTxt_y - 25;
          let chartOption = {
            title: [{
              text: this.total,
              //left: dotTxt_x, //'24%',
              // top: dotNum_y, //'42%',
              left: '21%', //'24%',
              top: '23%', //'42%',
              textAlign: 'center',
              textBaseline: 'middle',
              textStyle: {
                color: '#fff',
                fontSize:'120%',
                position: 'center'
              }
            }, {
              text: '发现',
              //left: dotTxt_x,
              //top: dotTxt_y,
              left: '21%',
              top: '30%',
              textAlign: 'center',
              textBaseline: 'middle',
              textStyle: {
                color: '#fff',
                position: 'center',
                fontSize: '60%'
              }
            }],
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}",
              show: true           //取消 鼠标滑过的提示框

            },
            color: ["#ac2a5f", "#076689", "#6d7b8a"],
            legend: {
              itemWidth: 12,// 标志图形的长度
              itemHeight: 12,// 标志图形的宽度
              icon: "circle",//图例形状
              orient: 'vertical',
              selectedMode: false, //取消图例的点击事件
              // left: position_x,
              left: '50%',
              top: '17%',
              data:this.detecteName,
              // ['中危','高危'],
              textStyle: {
                fontSize: '60%',
                color: "#fff"
              }

            },
            calculable: false,
            series: [{
              name: '检测处理分类',
              type: 'pie',
              //center: [150, 100],
              //  radius: [81, 96],
              center: ['22%','30%'],
              radius: ['48%', '59%'],
              hoverAnimation: false, //关闭 hover 在扇区上的放大动画效果。
              cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
              itemStyle: {
                normal: {
                  label: {
                    show: false,//显示中间数据
                    position: 'center',

                  },

                  labelLine: {
                    show: false
                  },

                },

              },
              data:this.detecteValue
              // [ {value:335, name:'中危'},
              //  {value:310, name:'高危'},]

            }]
          }
          this._charts.setOption(chartOption)


          //定时任务
          var timer = setTimeout(function() {
            timer = setTimeout(function() {
              that.resizeContainer()
            }, 60000);
          }, 60000);


        });
      }

    },
    mounted(){
      this.resizeContainer()
      window.onresize = () => {
        //环状
        this.cHeight = ((document.documentElement.clientHeight)/4.1)+'px'
        this.chaHeight = this.cHeight

        this.$nextTick(function() {
          this._charts.resize();
        })

      }
    }
  }
</script>

<style scoped>

</style>
