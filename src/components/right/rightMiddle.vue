<template>
	<div class="box rightMiddle">
		<!--top-->
		<el-row>
			<el-col :span="24">
				<img src="../../assets/images/rightTop/title.png" width="95%" class="title">
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="10">
				<div class="round-ld">
					<div class="r-l-a"></div>
					<i class="m-dot-1"></i>
					<i class="m-dot-2"></i>
					<i class="m-dot-3"></i>
					<i class="m-dot-4"></i>
				</div>
			</el-col>
			<el-col :span="14">
				<!--上-->
				<el-row>
					<el-col :span="6">
						<img src="../../assets/images/rightMiddle/perception_hacker.png" width="70%">
					</el-col>
					<el-col :span="18">
						<p class="fs-1">感知信息详情</p>
						<div class="m-info fs-1">
							<el-row>
								<el-col :span="12">
									<p>来访IP：{{itemInfo.ipSrc}}</p>
									<p>事件时间：{{itemInfo.atkTime}}</p>
								</el-col>
								<el-col :span="12">
									<p>受影响资产：{{itemInfo.ipDst}}</p>
									<p>事件类别：{{itemInfo.category}}</p>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<p>事件描述：{{itemInfo.description}}</p>
								</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>

				<!--下-->
				<el-row>
					<el-col :span="24">
						<div class="m-tbl-bg">
							<div class="m-tbl-b fs-1">
								<div class="tbl-th">
									<el-row>
										<el-col :span="6">攻击者IP</el-col>
										<el-col :span="6">受影响资产</el-col>
										<el-col :span="6">事件时间</el-col>
										<el-col :span="6">事件类别</el-col>
									</el-row>
								</div>
								<div class="tbl-tr" v-for="(item,index) in tableData">
									<el-row>
										<el-col :span="6">
											<div  class="over-c">
												<i class="icon-r fl"></i>
												<span>{{item.hackerIp}}</span>
											</div>
										</el-col>
										<el-col :span="6">
											<div  class="over-c">{{item.affectedAssets}}</div>
										</el-col>
										<el-col :span="6">
											<div  class="over-c">{{item.eventTime}}</div>
										</el-col>
										<el-col :span="6" style="text-align: center">
											<div  class="over-c">{{item.category}}</div>
										</el-col>
									</el-row>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { getRightCenterData } from '../../api/api.js'

export default {

	data() {
		return {
			itemInfo: {
				ipSrc: '',
				description: '',
				atkTime: '',
				ipDst: '',
				category: ''
			},
			tableData: [],
		}
	},
	mounted() {

		this.getScreenRMData();

	},
	methods: {
		getScreenRMData() {
			var that = this;
			getRightCenterData().then(res => {

				if (res.result.OneSensoryInformation != null) {
					that.itemInfo = res.result.OneSensoryInformation;
				}

				//列表
				if (res.result.ManySensoryInformation != null) {
					if (res.result.ManySensoryInformation.length > 10) {
						res.result.ManySensoryInformation.splice(10, res.result.ManySensoryInformation.length)
					}
					that.tableData = res.result.ManySensoryInformation;
				}

				//定时任务
				var timer = setTimeout(function() {
				  //that.getScreenRMData()
				  timer = setTimeout(function() {
				  	that.getScreenRMData()
				  }, 60000);
				}, 60000);

			})
		},
	}

}
</script>

<style scoped>
.rightMiddle{
	overflow:hidden;
	height: 100%;
}
.title{
	display:block;
	margin:2% auto 5% auto;
}
.round-ld{
	width:40vh;
	height:40vh;
	border-radius: 100%;
	background:url(../../assets/images/rightMiddle/leida_dian.png) no-repeat;
	background-size:100% 100%;
	margin:5% auto;
	position: relative;
}
.r-l-a{
	width:100%;
	height:100%;
	background:url(../../assets/images/rightMiddle/leida_x.png) no-repeat;
	background-size:100% 100%;
	-webkit-animation:rotate 2.5s 0s infinite linear;
}
.m-dot-1, .m-dot-2, .m-dot-3, .m-dot-4{
	display: block;
	background:url(../../assets/images/rightMiddle/leida_dot.png) no-repeat;
	background-size:100% auto;
	position: absolute;
	opacity: 0;
}
.m-dot-1{
	top: 21vh;
    left: 24vh;
	width: 0.6vw;
    height: 0.6vw;
    animation:fadeIn 1.5s infinite;
	-webkit-animation:fadeIn 1.5s infinite;
}
.m-dot-2{
	top: 5.5vh;
    left: 16vh;
	width: 0.5vw;
    height: 0.5vw;
    animation:fadeIn 1s infinite;
	-webkit-animation:fadeIn 1s infinite;
	-webkit-animation-delay:3s;
    animation-delay:3s;
}
.m-dot-3{
	top: 8vh;
    left: 28.5vh;
	width: 1vw;
    height: 1vw;
    animation:fadeIn 2s infinite;
	-webkit-animation:fadeIn 2s infinite;
	-webkit-animation-delay:4s;
    animation-delay:4s;
}
.m-dot-4{
	top: 18vh;
    left: 13vh;
	width: 0.5vw;
    height: 0.5vw;
    animation:fadeIn 3s infinite;
	-webkit-animation:fadeIn 3s infinite;
	-webkit-animation-delay:2s;
    animation-delay:2s;
}
.m-tbl-bg{
	width:90%;
	/* height:auto; */
	padding:3% 1%;
	background:url(../../assets/images/rightMiddle/m-tbl-bg.png) no-repeat;
	background-size:100% 100%;
	margin:4% 0 0 0;
	height:41vh;
	overflow:hidden;
}
.m-tbl-b{
	border:1px solid #0a2248;
}
.tbl-th{
	background:#0a2248;
	line-height:4vh;
	text-align: center;
}
.tbl-tr{
	border-bottom:1px solid #0a2248;
	line-height:3.5vh;
	padding-left:1%;
	text-align: left;
}
.icon-r{
	display: inline-block;
	width:0.6vw;
	height:0.6vw;
	background:#505c71;
	border-radius: 100%;
	margin-top:0.6vw;
	margin-right:2%;
}
.m-info{
	line-height:1.7vw;
	margin-top:1%;
}
.fs-1{
	font-size: 1vw;
}
.over-c{
	width:97%;
	overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
}
</style>
