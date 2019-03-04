<template>
  <div class="screen" style="width: 100%;height: 100%;">
    <el-row>
      <el-col :span="6">
        <div class="s-f-model s-br s-bt">
          <!--左上-->
          <router-link  tag="a" target="_blank" :to="{name:'leftTop'}" class="plink"></router-link>
          <leftTop class="ltSize"></leftTop>
        </div>
        <div class="s-f-model s-br s-bt">
          <!--左中-->
          <router-link  tag="a" target="_blank" :to="{name:'leftMiddle'}" class="plink"></router-link>
          <leftMiddle class="lmSize"></leftMiddle>
        </div>
        <div class="s-f-model s-br">
          <!--左下-->
          <router-link  tag="a" target="_blank" :to="{name:'leftBottom'}" class="plink"></router-link>
          <leftBottom class="lbSize"></leftBottom>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="s-f-model s-f-mBig s-bt">
          <!--中上-->
  				<router-link  tag="a" target="_blank" :to="{name:'centerTop'}" class="plink"></router-link>
				  <centerTop class="ctSize"></centerTop>
			</div>
			<el-row>
				<el-col :span="12">
          <div class="s-f-model">
            <!--中左-->
            <router-link  tag="a" target="_blank" :to="{name:'centerLeft'}" class="plink"></router-link>
            <centerLeft class="clSize"></centerLeft>
          </div>
        </el-col>
				<el-col :span="12">
          <div class="s-f-model s-bl">
            <!--中右-->
            <router-link  tag="a" target="_blank" :to="{name:'centerRight'}" class="plink"></router-link>
            <centerRight class="crSize" ref="crElem"></centerRight>
          </div>
        </el-col>
			</el-row>
		</el-col>
		<el-col :span="6">
			<div class="s-f-model s-bl s-bt">
        <!--右上-->
        <router-link  tag="a" target="_blank" :to="{name:'rightTop'}" class="plink"></router-link>
        <rightTop class="rtSize"></rightTop>
      </div>
			<div class="s-f-model s-bl s-bt">
        <!--右中-->
        <router-link  tag="a" target="_blank" :to="{name:'rightMiddle'}" class="plink"></router-link>
        <rightMiddle class="rmSize"></rightMiddle>
      </div>
			<div class="s-f-model s-bl">
        <!--右下-->
				<router-link  tag="a" target="_blank" :to="{name:'rightBottom'}" class="plink"></router-link>
				<rightBottom class="rbSize"></rightBottom>
			</div>
		</el-col>
	</el-row>
  </div>
</template>

<script>
  import leftMiddle from './components/left/leftMiddle.vue'
  import leftTop from './components/left/leftTop.vue'
  import leftBottom from './components/left/leftBottom.vue'
  import centerTop from './components/center/centerTop.vue'
  import centerLeft from './components/center/centerLeft.vue'
  import centerRight from './components/center/centerRight.vue'
  import rightBottom from './components/right/rightBottom.vue'
  import rightTop from './components/right/rightTop.vue'
  import rightMiddle from './components/right/rightMiddle.vue'


  export default {
    data () {
      return {
        cwidth: document.documentElement.clientWidth/3
      }
    },
    methods: {
     /* timeDSize() {
        var timer = setTimeout(function() {
          timer = setTimeout(function() {
            this.$refs.crElem.defaultSize = 3;
          }, 59000);
          }, 59000);
      }*/
    },
    mounted() {

      //中右屏图表刷新
      //this.$refs.crElem.resizeChart();
      this.$refs.crElem.defaultSize = 3;

    },
    updated:function(){

      console.log("com-updated");

    },
    components: { leftTop, leftMiddle,leftBottom, centerTop, centerLeft, centerRight,  rightBottom, rightTop, rightMiddle }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .s-f-model{
    height:33.2vh;position:relative;overflow: hidden;
  }
  .s-f-mBig{
    height:66.5vh;
  }
  .s-br{
    border-right:1px solid #31333A;
  }
  .s-bl{
    border-left:1px solid #31333A;
  }
  .s-bt{
    border-bottom:1px solid #31333A;
  }
  .screen{
    width:100%;height:100%;background:url(./assets/images/bg.png) no-repeat;background-size:100% 100%;color:rgb(146, 176, 186);
  }
  .plink{
    position:absolute;
    top: 1%;
    right: 1%;
    display:block;
    width: 1vw;
    height: 2vh;
    background:url(./assets/images/datapot-logo.png) no-repeat;
    background-size:100% auto;
    z-index: 999;
  }

  body .screen{
    font-size:0.4vw;
  }
  .over-c{
    width:100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  }

  /**rightBottom**/
  .rbSize /deep/ .title{
    margin:2% auto 7% auto;
  }
  .rbSize /deep/ .boderX{
    height:1.5vh;
    margin:0.7vw 0 0 0;
  }
  .rbSize /deep/ .boderY{
    height:3vh;
  }
  .rbSize /deep/ .title{
     /* margin:6% auto 10% auto;  */
  }
  .rbSize /deep/ .bx-singe{
    margin:0.8vw 0 0 0;
  }
  .rbSize /deep/ .fxline{
    height:1vh;
    background:url(./assets/images/rightBottom/fx.png) no-repeat;
    background-size:1vh auto;
  }
  .rbSize /deep/ .fxline-fn{
    height:1vh;
    background:url(./assets/images/rightBottom/fx_fn.png) right 0 no-repeat;
    background-size:1vh auto;
  }
  .rbSize /deep/ .fxline-y{
    height:1vh;
    background:url(./assets/images/rightBottom/fx_y.png) no-repeat;
    background-size:auto 1vh;
  }
  .rbSize /deep/ .fxline-fn-y{
    height:1vh;
    background:url(./assets/images/rightBottom/fx_fn_y.png) no-repeat;
    background-size:auto 1vh;
  }
  .rbSize /deep/ .pleft{
    left:93%;
  }
  .rbSize /deep/ .pRight{
    left:-9%;;
  }

  /**rightTop**/
  .rtSize /deep/ .title{
    margin:2% auto 6% auto;
  }
  .rtSize /deep/ .t-bg{
    height:4vh;
  }
  .rtSize /deep/ .fs-s{
    font-size:0.1vw;
  }
  .rtSize /deep/ .fs-1{
    font-size:0.3vw;
  }
  .rtSize /deep/ .fs-1ss{
    font-size:0.4vw;
  }
  .rtSize /deep/ .fs-2{
    font-size:0.6vw;
  }
  .rtSize /deep/ .fs-2s{
    font-size:0.7vw;
  }
  .rtSize /deep/ .lineh p{
    line-height:0.7vw;
  }
  .rtSize /deep/ .lineh .t-date-bg p.fs-1{
    line-height: 1vw;
  }
  .rtSize /deep/ .lineh .t-date-bg p.fs-2s{
    line-height: 1.5vw;
  }
  .rtSize /deep/ .t-bg{
    font-size:0.7vw;
  }
  .rtSize /deep/ .t-bg .num{
    top:-70%;
  }
  .rtSize /deep/ .t-t2{
    margin:0 0 0 2%;
  }
  .lineh .t-date-bg p.fs-1{
    line-height: 1vw;
  }

  /**rightMiddle**/
  .rmSize /deep/ .round-ld{
    width:14vh;
    height:14vh;
  }
  .rmSize /deep/ .m-info{
    line-height:0.7vw;
  }
  .rmSize /deep/ .fs-1{
    font-size:0.4vw;
  }
  .rmSize /deep/ .tbl-th{
    line-height: 1vw;
  }
  .rmSize /deep/ .tbl-tr{
    line-height: 0.6vw;
  }
  .rmSize /deep/ .icon-r{
    width:0.2vw;
    height:0.2vw;
  }
  .rmSize /deep/ .m-dot-1{
    top: 4vh;
    left: 3vh;
    width: 0.1vw;
    height: 0.1vw;
  }
  .rmSize /deep/ .m-dot-2{
    top: 2vh;
    left: 4vh;
    width: 0.2vw;
    height: 0.2vw;
  }
  .rmSize /deep/ .m-dot-3{
    top: 2.5vh;
    left: 5vh;
    width: 0.1vw;
    height: 0.1vw;
  }
  .rmSize /deep/ .m-dot-4{
    top: 4.5vh;
    left: 6vh;
    width: 0.2vw;
    height: 0.2vw;
  }

  .rmSize /deep/ .m-tbl-bg{
    height: 14vh;
  }

  .rmSize /deep/ .icon-r{
    margin-top:0.2vh;
    margin-right:0.2vh;
  }


  /**centerTop**/
  .ctSize /deep/ .title_one{
    font-size:0.8vw;
  }
  .ctSize /deep/ .title_two{
    font-size:1.1vw;
  }
  .ctSize /deep/ .titleCenter{
    font-size:1.5vw;
  }
  .ctSize /deep/ .securityEndTitle {
    font-size: 0.5vw;
  }
  .ctSize /deep/ .ruleActe ul li {
     font-size: 0.5vw!important;
  }
  .ctSize /deep/ .borderName .ruleActe {
    padding: 0.5vw 0.5vw;
  }
  .ctSize /deep/ .ruleActe ul li{
    height: 1.4vw;
    line-height: 1.4vw;
    font-size: 0.8vw;
  }
  .ctSize /deep/ #ruleActeNetwork{
    height: 18vh;
  }
  .ctSize /deep/ .ruleActe{
  height: 18vh;
}

  /**centerRight**/
  .crSize /deep/ .c-num{
    height:4vw;
  }

  .crSize /deep/ .c-num-i{
    top: 52%;
    left: 30%;
    font-size:0.05vw;
  }
  .crSize /deep/ .c-chart{
    height:13vw;
  }
  .crSize /deep/ .fs-2{
    font-size:0.6vw;
  }
  .crSize /deep/ .fs-1s{
    font-size:0.2vw;
  }
  .crSize /deep/ .c-num-i .fs-2{
    font-size:0.5vw;
    color:#3892fa;
  }
  .crSize /deep/ .c-tbl{
    height: 17vh;
  }
  .crSize /deep/ .boxIcon, .crSize /deep/ .boxIcon2{
    width:1.8vh;
    height:0.8vh;
    margin-bottom:-0.1vh;
  }

  /**centerLeft**/
  .clSize /deep/ #chinaMap{
    height:25vh;
  }
  .clSize /deep/ #cityMapBox, .clSize /deep/ #reqMapBox, .clSize /deep/ #httpMapBox{
    height:8.3vh;
  }
  .clSize /deep/ .chartList{
    height:8.5vh;
  }

  /**leftTop**/
   .ltSize /deep/ .part_four{
    padding-top: 2rem;
}
  .ltSize /deep/ .part_three{
    height: 30%
  }
  .ltSize /deep/ .part_one{
  height: 19%
}
  .ltSize /deep/ .secPart{
  height:54%;
}
  .ltSize /deep/ .txt1 {
    left:16%;
  }
   .ltSize /deep/ .txt2 {
    left:49%;
  }
   .ltSize /deep/ .txt3 {
    left:82%;
  }
  .ltSize /deep/ .txt4 {
    top:63%;
  }
  .ltSize /deep/ .txt5 {
    top:63%;
  }
  .ltSize /deep/ .title {
    margin: 2% auto 5% auto;
  }
  .ltSize /deep/ #top5 {
    font-size: 0.3vw;
  }
  .ltSize /deep/ .txt_name1 {
  font-size: 0.1vw;
}
 .ltSize /deep/ .txtNum{
  font-size: 0.5vw;
}
 .ltSize /deep/ .title_three{
  font-size: 0.3vw;
}
.ltSize /deep/ .txt_name3 span{
  font-size: 0.5vw;
}
.ltSize /deep/ .txt_name3{
  font-size: 0.3vw;
}
.ltSize /deep/ .imgs_six{width: 30%}
.ltSize /deep/ .txt6{
  font-size: 0.4vw;
}
.ltSize /deep/ .gatherOfDefFood_end ul li{
  width: 16%;
}
.ltSize /deep/ .gatherOfDefFood_end ul li p {
  font-size: 0.3vw;
}

.ltSize /deep/ .topTxt{
  font-size: 0.3vw;
}
.ltSize /deep/ .gatherOfDefFood_end ul li{
  padding-top: 0rem;

}
/* leftMidle */
.lmSize /deep/ .txtFont{
  font-size: 0.3vw;
}
.lmSize /deep/ .txtNum{
  font-size: 0.5vw;
}
.lmSize /deep/ .huzMap{
  height: 80px
}
.lmSize /deep/ .lPart{
  width:100%
}
.lmSize /deep/  .netChart{
  height: 100px
}
.lmSize /deep/  .text_name{
  font-size: 0.3vw
}
.lmSize /deep/  .endDefense .defenseNum {
  height:2.5vh;
}
.lmSize /deep/ #attackCharts{
  width: 100%;
  height: 8vh
}
.lmSize /deep/  #trendCharts{
   width: 100%;
   height: 9vh
}
.lmSize /deep/ .bt_bg .fs-1 {
    font-size: 0.3vw;
}
/*leftBottom*/
.lbSize /deep/ .el-table__empty-text {
    font-size: 0.3vw
}
.lbSize /deep/ .ft-9 {
    font-size: 0.3vw;
}
.lbSize /deep/ .ft-1 {
    font-size: 0.3vw;
}
.lbSize /deep/ #bottomPart2 .fs-1 {
    font-size: 0.4vw;
}
.lbSize /deep/ #charts{
  width:100%;
  left: 19%;
  top: 18%;
  height: 9vh
}
.lbSize /deep/ .tabList .el-table tr {
    font-size: 0.3vw;

}
.lbSize /deep/ .echBg {
    width: 43%;
}
.lbSize /deep/ .dist_one{margin-top: 1%}

.lbSize /deep/ .tabList .el-table td, .lbSize /deep/ .tabList .el-table th{
  padding: 0rem!important
}
</style>
