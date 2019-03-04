<template>
	<div class="box centerRight">
		<!--top-->
		<el-row>
			<el-col :span="24">
				<img src="../../assets/images/centerRight/title.png" width="95%" class="title">
			</el-col>
		</el-row>
		<div class="c-content">
			<el-row>
				<el-col :span="8">
					<div class="c-num">
						<div class="c-num-i">
							<p>当前一分钟在线人数</p>
							<p class="fs-2">{{CurOnLineNum}}</p>
						</div>
					</div>
					<div class="c-tbl">
						<p class="t-center">TOP访问IP</p>
						<ul>
							<li class="c-th">
								<el-row>
									<el-col :span="14">来访IP</el-col>
									<el-col :span="10" class="t-right">访问次数</el-col>
								</el-row>
							</li>
							<li class="c-td" v-for="(item,index) in topTen">
								<el-row>
									<el-col :span="14">{{item.visitIp}}</el-col>
									<el-col :span="10" class="t-right">{{item.visitNum}}</el-col>
								</el-row>
							</li>

							<!-- <li class="c-td">
								<el-row>
									<el-col :span="14">192.168.10.2</el-col>
									<el-col :span="10" class="t-right">112512</el-col>
								</el-row>
							</li>
							<li class="c-td">
								<el-row>
									<el-col :span="14">192.168.12.1</el-col>
									<el-col :span="10" class="t-right">1512</el-col>
								</el-row>
							</li> -->
						</ul>
					</div>
				</el-col>
				<el-col :span="16">
					<div class="c-chart">
						<p style="position: relative;left: 3%;top: 12%;">
							<span class="fs-1s"><i class="boxIcon"></i>内网IP</span>
							<span class="fs-1s" style="color:#d48265"><i class="boxIcon2"></i>外网IP</span>
						</p>
						<div id="flowView" v-loading="loadding" ref="flowView" style="width: 95%;height:76%;overflow:hidden;position:relative;top:14%;left: 2%;"></div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import echarts from "echarts"
import { getCenterRightData } from '../../api/api.js'

export default {

	data() {
		return {
			loadding: false,
			charts: '',
			categories: [{name: '内网IP'},{name: '外网IP'}],
        	graph: [],
        	defaultSize: 10,
        	CurOnLineNum: 0,
        	topTen: []
		}
	},
	methods: {
		getScreenCRData() {
			var that = this;
			getCenterRightData().then(res => {
				if (res.result.VisitIPTopTen) {
					if (res.result.VisitIPTopTen.length > 10) {
						res.result.VisitIPTopTen.splice(10, res.result.VisitIPTopTen.length)
					}
					that.topTen = res.result.VisitIPTopTen
				}
				if (res.result.CurOnLineNum) {
					that.CurOnLineNum = res.result.CurOnLineNum
				}
				var data = res.result.FlowView;
				//数据
				that.graph = [];
				that.twoWay = [];
				var nodes = [], links = [];

			    //去重
			    var dataArr = [];

			    //数据填充
				for (var j = 0; j < data.length; j++) {

					//数据去重
					var flag1 = false, flag2 = false;
					for (var i in dataArr) {
						if (data[j].src == dataArr[i]) {
							flag1 = true;
							data[j]
						}
						if (data[j].dst == dataArr[i]) {
							flag2 = true;
						}
					}

					//源IP
					if (flag1 === false) {

						//内网IP or 外网IP
						var cName = "";
						if (data[j].localSrc === true) {
							cName = 0
						} else {
							cName = 1
						}
						var src = {
							category: cName,
							name: data[j].src,
							value: data[j].connectionCount,
							symbolSize: this.defaultSize,
		                    itemStyle: null,
		                    draggable: true
						}

						dataArr.push(data[j].src)
						nodes.push(src)
					}

					//目标IP
					if (flag2 === false) {

						//内网IP or 外网IP
						var cName = "";
						if (data[j].dst === true) {
							cName = 0
						} else {
							cName = 1
						}
						var det = {
							category: cName,
							name: data[j].dst,
							value: data[j].connectionCount,
							symbolSize: this.defaultSize,
		                    itemStyle: null,
		                    draggable: true
						}

						dataArr.push(data[j].dst)
						nodes.push(det)
					}


					//线
					var des1 = {};
					var isTWay = false;

					for (var k in data) {
						if (data[j].src == data[k].dst) {
							isTWay = true;
							des1 = {
							  "源IP": data[k].src,
		                      "目标IP": data[k].dst,
		                      "总流量": (data[k].totalBytes).toFixed(2)+'k',
		                      "平均流量": (data[k].avgBytes).toFixed(2)+'k',
		                      "时长": (data[k].totalDuration).toFixed(2)+'s',
		                      "连接数": (data[k].connectionCount).toFixed(2)
							}
						}
					}

					if (isTWay === true) {
						links.push({
		                    source: data[j].src,
		                    target: data[j].dst,
		                    isTwoWay: data[j].isTwoWay,
		                    des1: des1,
		                    des: {
		                      "源IP": data[j].src,
		                      "目标IP": data[j].dst,
		                      "总流量": (data[j].totalBytes).toFixed(2)+'k',
		                      "平均流量": (data[j].avgBytes).toFixed(2)+'k',
		                      "时长": (data[j].totalDuration).toFixed(2)+'s',
		                      "连接数": (data[j].connectionCount).toFixed(2)
		                    }

						})
					} else {
						links.push({
		                    source: data[j].src,
		                    target: data[j].dst,
		                    isTwoWay: data[j].isTwoWay,
		                    des: {
		                      "源IP": data[j].src,
		                      "目标IP": data[j].dst,
		                      "总流量": (data[j].totalBytes).toFixed(2)+'k',
		                      "平均流量": (data[j].avgBytes).toFixed(2)+'k',
		                      "时长": (data[j].totalDuration).toFixed(2)+'s',
		                      "连接数": (data[j].connectionCount).toFixed(2)
		                    }

						})
					}



				}

				that.graph.nodes = nodes;
				that.graph.links = links;


				//console.log(that.graph.nodes)
				//console.log(that.graph.links)
				that.setChart();

				//定时任务
				var timer = setTimeout(function() {
				  timer = setTimeout(function() {
				  	that.getScreenCRData();
				  }, 60000);
				}, 60000);
			})

		},
		setChart() {

			this.charts = echarts.init(document.getElementById('flowView'));
            this.charts.setOption({
		        title: {
		            text: '',
		            subtext: '',
		            top: 'bottom',
		            left: 'right'
		        },
		        tooltip: {
		        	formatter: function (params, ticket, callback) {
		        		var result = '';
		        		if (params.dataType == "edge" && params.data.des) {
		        			if (params.data.isTwoWay === true) {
		        				result += "<div class='fl'>"
		        				for (var i in params.data.des) {
			        				result += "<div>"+i+"："+params.data.des[i]+"&nbsp;</div>";
			        			}
			        			result += "</div><div class='fr'>"
			        			for (var i in params.data.des1) {
			        				result += "<div>"+i+"："+params.data.des1[i]+"&nbsp;</div>";
			        			}
			        			result += "</div>";
		        			} else {
		        				for (var i in params.data.des) {
			        				result += "<div>"+i+"："+params.data.des[i]+"</div>";
			        			}
		        			}

		        		} else if(params.dataType == "node") {
		        			result = params.name+"<div>关联IP："+params.data.value+"</div>";
		        		}
				   		return result
					}
				},
		        color: [ '#4a88a5', '#d48265', '#c23531', '#6e7074', '#d48265' ],
		        /*legend: [{
		            data: this.categories.map(function (a) {
		                return a.name;
		            }),
		            textStyle: {
		            	color: '##c8f5ff'
		            },
		            left: 10,
		        }],*/
		        animation: false,
		        series : [
		            {
		                name: '',
		                type: 'graph',
		                layout: 'force',
		                data: this.graph.nodes,
		                links: this.graph.links,
		                categories: this.categories,
		                roam: 'move',
		                //expandAndCollapse: false,
		                //focusNodeAdjacency: true,
		                label: {
		                    normal: {
		                    	show: false,
		                        position: 'right',
		                    }
		                },
		                force: {
		                    repulsion: this.defaultSize, //距离
		                    initLayout: 'circular', //环形布局
		                    edgeLength: 10,
		                    //layoutAnimation: false //引导布局动画
		                }
		            }
		        ]
		    })

            this.$nextTick(function() {
	          this.loadding = false;
	        })

		},
		resizeChart() {
			if (this.charts != '') {
				this.defaultSize = 3;
				this.charts.resize();
			}
		}
	},
	mounted() {

		this.getScreenCRData();


	},

}

</script>

<style scoped>
.fs-2{
	font-size:2vw;
}
.fs-1s{
	font-size:0.8vw;
}
.t-right{
	text-align: right;
}
.centerRight, .c-content{
	overflow:hidden;
	height: 100%;
}
.title{
	display:block;
	margin:2% auto 2% auto;
}
.c-content{
	padding:0 2%;
	width:96%;
}
.c-num{
	width:100%;
	height:35vh;
	background:url(../../assets/images/centerRight/c-num-bg.png) center center no-repeat;
	background-size:auto 100%;
	position: relative;
	text-align: center;
}
.c-num-i{
	position: absolute;
	top: 52%;
    left: 34%;
}
.c-num-i .fs-2{
	font-size:2vw;
	color:#3892fa;
}


.c-tbl{
	width:80%;
	/* height:auto; */
	padding:5% 2%;
	background:url(../../assets/images/centerRight/c-tbl-bg.png) 0 0 no-repeat;
	background-size:100% 100%;
	margin:5% auto 0 auto;
	height: 35vh;
    overflow: hidden;
}
.c-th, .c-td{
	padding:2%;
	opacity: 0.5;
}
.c-th{
	color:#cff7ff;
	background-color:#031b42;
}
.c-td{
	background-color:#03152f;
	margin-top:1%;
}
.c-td:hover{
	background-color:#02204b;
	color:#cff7ff;
}

.c-chart{
	width:98%;
	height:80vh;
	background:url(../../assets/images/centerRight/c-chart-bg.png) 0 0 no-repeat;
	background-size:100% 100%;
}

.el-loading-mask{
	background-color: rgba(0,2,18,.7)!important;
}
.boxIcon, .boxIcon2{
	display: inline-block;
	width:4vh;
	height:2vh;
	background:#4a88a5;
	border-radius: 3px;
	margin-bottom:-0.5vh;
	margin-right:5px;
	margin-left:5px;
}
.boxIcon2{
	background:#d48265;
	color:#d48265;
}
</style>
