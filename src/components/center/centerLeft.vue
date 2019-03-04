<template>
	<div class="box centerLeft">
		<!--top-->
		<el-row>
			<el-col :span="24">
				<img src="../../assets/images/centerLeft/title.png" width="95%" class="title">
				<p class="t-center">中国境内访问量（TOP5）过去60分钟</p>
			</el-col>


			<div>
				<el-col :span="12">
					<div id="chinaMap" ref="chinaMap" style=""></div>
				</el-col>
				<el-col :span="12">
					<div class="chartList">
						<div id="cityMapBox" ref="cityMapBox"></div>
					</div>
					<div class="chartList">
						<div id="reqMapBox" ref="reqMapBox"></div>
					</div>
					<div class="chartList">
						<div id="httpMapBox" ref="httpMapBox"></div>
					</div>
				</el-col>
			</div>
		</el-row>

	</div>
</template>

<script>
	import echarts from "echarts"
	import '../../../node_modules/echarts/map/js/china.js'
	import { getCenterLeftData } from '../../api/api.js'

    export default {
        name: "centerLeft",
        data() {
        	return {
        		cMap: '',  //中国地图
        		cityM: '', //城市请求数量
        		reqM: '',  //请求类别
        		httpM: '', //http请求类型
        	}
        },
        mounted() {

        	this.init();
        },
        methods: {

        	init() {
        		var that = this;
        		getCenterLeftData().then(res => {

        			var data = res.result;

        			//中国地图
        			var cd = data.VisitorsInChina;
	        		that.chinaMap(cd);

	        		//城市请求数量(访入请求、访出请求)
	        		var cyd = data.CityVisit.CityName;
	        		var cxd1 = data.CityVisit.InVisitNum;
	        		var cxd2 = data.CityVisit.OutVisitNum;
	        		that.cityMap(cyd, cxd1, cxd2);

	        		//请求类别
	        		var qyd = data.RequestCategory.RequestCategory
	        		var qxd = data.RequestCategory.RequestNum
	        		that.reqMap(qyd, qxd);

	        		//http请求
	        		var yd = data.HttpRequestCategory.HttpRequestCategory
	        		var xd = data.HttpRequestCategory.HttpRequestNum;
	        		that.httpMap(yd, xd);

					//定时任务
					var timer = setTimeout(function() {
					  timer = setTimeout(function() {
					  	that.init();
					  }, 60000);
					}, 60000);

        		})
		    },
		    cityMap(cyd, cxd1, cxd2) {
		    	var legend = ['访入请求','访出请求'];
		    	var ydata = cyd;
		    	var d1 = cxd1;
		    	var d2 = cxd2;
		    	var option = this.setOptionFun(legend, ydata, d1, d2);
		    	this.cityM = echarts.init(this.$refs.cityMapBox);
		    	this.cityM.setOption(option);
		    },
		    reqMap(qyd, qxd) {
		    	var legend = ['请求类别'];
		    	var ydata = qyd;
		    	var d1 = qxd;
		    	var d2 = [];
		    	var option = this.setOptionFun(legend, ydata, d1, d2);
		    	this.reqM = echarts.init(this.$refs.reqMapBox);
		    	this.reqM.setOption(option);
		    },
		    httpMap(yd, xd) {
		    	var legend = ['HTTP请求类型'];
		    	var ydata = yd;
		    	var d1 = xd;
		    	var d2 = [];
		    	var option = this.setOptionFun(legend, ydata, d1, d2);
		    	this.httpM = echarts.init(this.$refs.httpMapBox);
		    	this.httpM.setOption(option);
		    },
		    setOptionFun(legend, ydata, d1, d2) {
		    	var ser = [];
		    	if (legend.length > 1) {
		    		ser = [{
				            name: legend[0],
				            type: 'bar',
				            data: d1,//[18203, 23489, 29034, 104970, 131744, 630230],
				            barWidth: '15%',
				            itemStyle:{
				            	normal:{
				            		color:'#028c9d'
				            	}
				            }
				        },
				        {
				            name: legend[1],
				            type: 'bar',
				            data: d2,//[19325, 23438, 31000, 121594, 134141, 681807],
				            barWidth: '15%',
				            itemStyle:{
				            	normal:{
				            		color:'#2665af'
				            	}
				            },
				        }]
		    	} else {
		    		ser = [{
				            name: legend[0],
				            type: 'bar',
				            data: d1,//[18203, 23489, 29034, 104970, 131744, 630230],
				            /*barWidth: 10, //'25%'*/
				            barWidth: '15%',
				            barGap:'10%',
				            itemStyle:{
				            	normal:{
				            		color:'#028c9d'
				            	}
				            }
				        }]
		    	}
		    	var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    legend: {
				        data: legend,//['电信', '联通'],
				        right:'2%',
				        top:'20%',
				        itemGap:30,
				        itemWidth: 12,// 标志图形的长度
              			itemHeight: 12,// 标志图形的宽度
				        textStyle: {
				            color: '#6da5b9',
			            	fontSize: '60%',
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '13%',
				        top:'20%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01],
			        	splitLine:{
		                    show:true,
		                    lineStyle:{
		                        color:'#081835',
		                        type:'solid'
		                    }
		                },
		                axisLabel: {
				            textStyle: {
				                color: '#6da5b9'
				            },
				            fontSize:'60%',
				        }
				    },
				    yAxis: {
				        type: 'category',
				        data: ydata,//['巴西','印尼','美国','印度','中国','世界人口(万)'],
				        axisLabel: {
				            textStyle: {
				                color: '#6da5b9'
				            },
				            fontSize:'60%',
				        }
				    },
				    series: ser
				}
				return option;
		    },
        	chinaMap(cd) {
        		if (this.cMap != '') {
        			this.cMap.clear();
        		}
        		this.cMap = echarts.init(this.$refs.chinaMap);
	        	var option = {
				    tooltip: {
				    	show:true,
				    	formatter: function (params, ticket, callback) {
							if(!params.data.value){
								return "<span>"+params.data.name +":"+"</span></br>-MS"
							}else{
								return "<span>"+params.data.name +":"+"</span></br>"+params.data.value+"MS"
							}
						 }
				    },
		    	    visualMap: {
				        show:true,
				        itemGap:4,
				        type: 'piecewise',
				        min: 0,
				        max: 1500,
				        top:'40%',
				        left: '2%',
				        text: [],//['多','少'],
				        realtime: false,
				        calculable : true,
				        color:['#FC2A4C','#FFBC2B','#FEFE20','#00B0EA','#00E17F',],
				        dimension:0,
				        itemWidth: 15,
              			itemHeight: 10,
		    		},
				    geo: {
				        map: 'china',
				        roam: false,
				        itemStyle: {
				            normal: {
				                areaColor: '#0c4c88',
				                borderColor: 'black'
				            },
				            emphasis: {
				                areaColor: '#EDF286'   //鼠标覆盖颜色
				            }
				        }
				    },
				    series: [
				        {
				           type: 'scatter',
				           coordinateSystem: 'geo',
				           symbolSize: 20,
				           symbolRotate: 35,
				           label: {
				               normal: {
				                   formatter: '{b}',
				                   position: 'right',
				                   show: false
				               },
				               emphasis: {
				                   show: true
				               }
				           },
				           itemStyle: {
				               normal: {
				                    color: '#F06C00'
				               }
				           }
				        },
				        {
				            name: 'categoryA',
				            type: 'map',
				            geoIndex: 0,
				            data:cd
				        }
				    ]
				}
				this.cMap.setOption(option);
        	}
        },

    }
</script>

<style scoped>
.t-center{
	text-align: center;
}
.centerLeft{
	overflow:hidden;
	height: 100%;
}
.title{
	display:block;
	margin:2% auto 1% auto;
}
.chartList{
	width:90%;
	height:24vh;
	background:url(../../assets/images/centerLeft/bg02.png) center center no-repeat;
	background-size:100% 100%;
	margin:2% auto 2% auto;
}
#chinaMap{
	width:100%;height:80vh;
}
#cityMapBox, #reqMapBox, #httpMapBox{
	width:98%;height:25vh;
}
</style>
