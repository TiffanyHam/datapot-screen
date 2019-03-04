<template>
  <div class="box leftTop" style="width: 100%;height: 100%;position: relative">
    <!--top-->
    <el-col :span="24" class="part_one">
      <img src="../../assets/images/leftTop/title.png" class="title">
    </el-col>
    <div class="secPart">
      <!-- <img src="../../assets/images/leftTop/line.png" class="line"> -->
      <el-row :gutter="20">
        <el-col :span="9">
          <div style="position: relative;">
            <img src="../../assets/images/leftTop/txt_bg2.png" class="imgs_two">
            <img src="../../assets/images/leftTop/imgs1.png" class="imgs_five">
            <div class="txt_name4">
              <div class=""><img src="../../assets/images/leftTop/security.png" class="imgs_six"></div>
              <div class="txt6">安全</div>
            </div>
          </div>
        </el-col>
        <el-col :span="15">
          <el-row :gutter="20">
            <el-col :span="8">
              <img src="../../assets/images/leftTop/txt_bg1.png" class="imgs_one">
              <div class="txt_name1 txt1">
                <div class="txt_name2">日志文件大小</div>
                <span class="txtNum">{{a_num}}</span>
                <span>{{a_unit}}</span>
              </div>
            </el-col>
            <el-col :span="8">
              <img src="../../assets/images/leftTop/txt_bg1.png" class="imgs_one">
              <div class="txt_name1 txt2">
                <div class="txt_name2">日志存储天数</div>
                <span class="txtNum">{{Logdays}}</span>
                <span>天</span>
              </div>
            </el-col>
            <el-col :span="8">
              <img src="../../assets/images/leftTop/txt_bg1.png" class="imgs_one">
              <div class="txt_name1 txt3">
                <div class="txt_name2">剩余存储空间</div>
                <span class="txtNum">{{b_num}}</span>
                <span>{{b_unit}}</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="15">
          <el-row :gutter="20" style=" margin-top: 7%;">
            <el-col :span="8">
              <img src="../../assets/images/leftTop/txt_bg3.png" class="imgs_three">
            </el-col>
            <el-col :span="8">
              <span class="title_three">当日访出IP数</span>
              <img src="../../assets/images/leftTop/txt_bg4.png" class="imgs_four">
              <div class="txt_name3 txt4"><span>{{outIP}}</span>个</div>
            </el-col>
            <el-col :span="8">
              <span class="title_three">当日访入IP数</span>
              <img src="../../assets/images/leftTop/txt_bg4.png" class="imgs_four">
              <div class="txt_name3 txt5"><span>{{inIp}}</span>个</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="part_three">
      <div class="gatherOfDefFood">
        <p style="" id="top5">TOP5黑客最感兴趣的资产</p>
        <div class="gatherOfDefFood_end" v-loading="topLoading">
          <ul>
            <li v-for="(item,index) of topData"><span class="topTxt">TOP{{index+1}}</span>
              <div class="gatherEnd_title">
                <p><span>服务器：</span><span id="sevenServer1">{{item}}</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part_four">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="imgs_left"><img src="../../assets/images/leftTop/imgs_left.png" width="50%"></div>
        </el-col>
        <el-col :span="12">
          <div class="imgs_right"><img src="../../assets/images/leftTop/imgs_right.png" width="50%"></div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import "../../../src/assets/css/left/leftTop.css";
  import axios from 'axios'
  import {getLeftTopData} from '../../api/api.js'
  export default {
    name: "leftTop",
    data(){
      return{
        a_unit:'',
        a_num:'',
        Logdays:'',
        b_unit:'',
        b_num:'',
        outIP:'',
        inIp:'',
        topData:[],
        topLoading:false,

      }
    },
    methods:{
      initPage(){
        var that = this;
        getLeftTopData('').then(res =>{
          if(res!= undefined || res!= null) {

            let filesize = res.result.LogFileSize  //日志文件大小
            let a_length = filesize.length;//字符长度
            this.a_unit = filesize.substring(a_length - 1, a_length);//截取字符单位
            this.a_num = filesize.substring(0, a_length - 1);//截取数字

            this.Logdays = res.result.LogStorageDays  //日志存储天数
            let space = res.result.RemainingStorageSpace  //剩余存储空间
            let b_length = space.length;//字符长度
            this.b_unit = space.substring(b_length - 1, b_length);//截取字符单位
            this.b_num = space.substring(0, b_length - 1);//截取数字
            this.outIP = res.result.OutIPNumberThatDay  //当日访出ip
            this.inIp = res.result.InIPNumberThatDay  //当日访入ip
            if((res.result.Top!= undefined) || (res.result.Top!= null)){
              this.topLoading = false
              this.topData = res.result.Top
            }

          }

          //定时任务
          var timer = setTimeout(function() {
            timer = setTimeout(function() {
              that.initPage()
            }, 60000);
          }, 60000);

        })
      }
    },
    mounted(){
      this.initPage()
    }
  }
</script>

<style scoped>

</style>
