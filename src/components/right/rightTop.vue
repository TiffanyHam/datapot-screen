<template>
	<div class="box rightTop">
		<!--top-->
		<el-row>
			<el-col :span="24">
				<img src="../../assets/images/rightTop/title.png" width="95%" class="title">
			</el-col>
		</el-row>
		<div class="rt-con">
			<el-row>
				<el-col :span="6">
					<div class="t-type">
						<p class="t-center fs-1">木马</p>
						<div class="t-bg">
							<div v-if="Trojan<=0" class="r-green-bg">
								<span class="num">{{Trojan}}</span>
								<div class="g-round"></div>
							</div>
							<div v-else-if="Trojan<=9&&Trojan>=1" class="r-yellow-bg">
								<span class="num">{{Trojan}}</span>
								<div class="y-round"></div>
							</div>
							<div v-else class="r-red-bg">
								<span class="num">{{Trojan}}</span>
								<div class="r-round"></div>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="t-type">
						<p class="t-center fs-1">暴力破解</p>
						<div class="t-bg">
							<div v-if="BruteForce<=0" class="r-green-bg">
								<span class="num">{{BruteForce}}</span>
								<div class="g-round"></div>
							</div>
							<div v-else-if="BruteForce<=9&&BruteForce>=1" class="r-yellow-bg">
								<span class="num">{{BruteForce}}</span>
								<div class="y-round"></div>
							</div>
							<div v-else class="r-red-bg">
								<span class="num">{{BruteForce}}</span>
								<div class="r-round"></div>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="t-type">
						<p class="t-center fs-1">WEB应用攻击</p>
						<div class="t-bg">
							
							<div v-if="WebAppOfAttack<=0" class="r-green-bg">
								<span class="num">{{WebAppOfAttack}}</span>
								<div class="g-round"></div>
							</div>
							<div v-else-if="WebAppOfAttack<=9&&WebAppOfAttack>=1" class="r-yellow-bg">
								<span class="num">{{WebAppOfAttack}}</span>
								<div class="y-round"></div>
							</div>
							<div v-else class="r-red-bg">
								<span class="num">{{WebAppOfAttack}}</span>
								<div class="r-round"></div>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="t-type">
						<p class="t-center fs-1">安全漏洞</p>
						<div class="t-bg">
							
							<div v-if="SecurityVulnerabilities<=0" class="r-green-bg">
								<span class="num">{{SecurityVulnerabilities}}</span>
								<div class="g-round"></div>
							</div>
							<div v-else-if="SecurityVulnerabilities<=9&&SecurityVulnerabilities>=1" class="r-yellow-bg">
								<span class="num">{{SecurityVulnerabilities}}</span>
								<div class="y-round"></div>
							</div>
							<div v-else class="r-red-bg">
								<span class="num">{{SecurityVulnerabilities}}</span>
								<div class="r-round"></div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>

			<div class="t-pro-bg">
				<el-row>
					<el-col :span="24"><p class="fs-1 t-t2">当日累计防护</p></el-col>
				</el-row>
				<div class="lineh">
					<el-row>
						<el-col :span="5">
							<div class="t-center t-date-bg">
								<p class="fs-1"><span>{{cm}}</span>月</p>
								<p class="fs-2s">{{cd}}</p>
							</div>
						</el-col>
						<el-col :span="5">
							<div class="t-center">
								<p class="fs-1ss c-red">威胁总量</p>
								<p class="fs-1">{{TotalThreat}}</p>
							</div>
						</el-col>
						<el-col :span="14">
							<div class="t-borderl">
								<p class="fs-1">威胁提示信息</p>
								<p class="fs-s c-ptext" v-for="item in threatMsg">{{item}}</p>
								<!-- <p class="fs-s c-ptext">威胁提示信息威胁提示信息威胁提示信息</p>
								<p class="fs-s c-ptext">威胁提示信息威胁提示信息威胁提示信息</p>
								<p class="fs-s c-ptext">威胁提示信息威胁提示信息威胁提示信息</p> -->
							</div>
						</el-col>
					</el-row>
				</div>
			</div>

			<div class="t-threat-bg">
				<i class="z1"></i>
				<el-row>
					<el-col :span="24"><p class="fs-1 t-t2">全网范围告警</p></el-col>
				</el-row>
				<el-row>
					<el-col :span="6">
					  <div class="t-thr-mbg lineh">
						<p class="fs-s">紧急事件</p>
						<p class="fs-2">{{emergency}}</p>
					  </div>
					</el-col>
					<el-col :span="6">
					  <div class="t-thr-mbg lineh">
						<p class="fs-s">高危事件</p>
						<p class="fs-2">{{HighRisk}}</p>
					  </div>
					</el-col>
					<el-col :span="6">
					  <div class="t-thr-mbg lineh">
						<p class="fs-s">中危事件</p>
						<p class="fs-2">{{MiddleRisk}}</p>
					  </div>
					</el-col>
					<el-col :span="6">
					  <div class="t-thr-mbg lineh">
						<p class="fs-s">低危事件</p>
						<p class="fs-2">{{lowRisk}}</p>
					  </div>
					</el-col>
				</el-row>
			</div>

		</div>
	</div>
</template>

<script>
import { getRightTopData } from '../../api/api.js'

export default {

	data() {
		return {
			cm: '',
			cd: '',
			HighRisk: '',
			MiddleRisk: '',
			lowRisk: '',
			emergency: '', //紧急情况
			SecurityVulnerabilities: 0, //安全漏洞
			WebAppOfAttack: 0, //WEB应用攻击
			Trojan: 0, //木马
			BruteForce: 0, //暴力破解
			threatMsg: [], //威胁信息
			Calendar: '', //日历
			TotalThreat: 0, //威胁总量
		}
	},
	mounted() {
		this.getDateNum();
		this.getScreenRTData();
	},
	methods: {
		getDateNum() {
			var date = new Date();
			var m = date.getMonth()+1;
			var d = date.getDate();
			this.cm = (m < 10 ? m="0"+m : m);
			this.cd = (d < 10 ? d="0"+d : d);
		},
		getScreenRTData() {
			var that = this;
			getRightTopData().then(res => {
				that.BruteForce = res.result.BruteForce;
				that.Calendar = res.result.Calendar;
				that.HighRisk = res.result.HighRisk || 0;
				that.MiddleRisk = res.result.MiddleRisk || 0;
				that.lowRisk = res.result.lowRisk || 0;
				that.emergency = res.result.emergency || 0;
				that.SecurityVulnerabilities = res.result.SecurityVulnerabilities;
				that.TotalThreat = res.result.TotalThreat;
				that.Trojan = res.result.Trojan;
				that.WebAppOfAttack = res.result.WebAppOfAttack;

				//威胁信息提示
				that.threatMsg = res.result.ThreatMessage;


				if(that.Calendar != ""){
					that.cm = that.Calendar.split("-")[0];
					that.cd = that.Calendar.split("-")[1];
				}

				//定时任务
				var timer = setTimeout(function() {
				  timer = setTimeout(function() {
				  	that.getScreenRTData();
				  }, 60000);
				}, 60000);

			})
		}
	}

}
</script>

<style scoped>
.fs-s{
	font-size:0.7vw;
}
.fs-1{
	font-size:1vw;
}
.fs-1ss{
	font-size:1.2vw;
}
.fs-2{
	font-size:2vw;
}
.fs-2s{
	font-size:2.5vw;
}
.c-red{
	color:#e81f50;
}
.c-ptext{
	color:#566d7d;
}
.t-center{
	text-align: center;
}
.rightTop{
	overflow:hidden;
	height: 100%;
}
.title{
	display:block;
	margin:2% auto 2% auto;
}
.rt-con{
	padding:2%;
	width: 96%;
	height: 96%;
}

.t-type{
	width: 100%;
	height: 100%;
	text-align: center;
	position: relative;
}
.t-bg{
	width:70%;
	height:13vh;
	line-height: 13vh;
	font-size: 1.5vw;
	background:url(../../assets/images/rightTop/t-bg.png) no-repeat;
	background-size:100% 100%;
	margin:2% auto 0 auto;


}
.r-red-bg, .r-green-bg, .r-yellow-bg{
	width:70%;
	height:100%;
	background:url(../../assets/images/rightTop/round-red.png) center center no-repeat;
	background-size:auto 100%;
	margin:0 auto;
}
.r-green-bg{
	background:url(../../assets/images/rightTop/round-green.png) center center no-repeat;
	background-size:auto 100%;
}
.r-yellow-bg{
	background:url(../../assets/images/rightTop/round-yellow.png) center center no-repeat;
	background-size:auto 100%;
}
.t-bg .num{
	position: absolute;
	top:20%;
	left: 0;
    width: 100%;
    text-align: center;
}
.r-round{
	width:100%;
	height:100%;
	background:url(../../assets/images/rightTop/r-round.png) center center no-repeat;
	background-size:auto 100%;
	-webkit-animation:rotate 2.5s 0s infinite linear;
}
.g-round{
	width:100%;
	height:100%;
	background:url(../../assets/images/rightTop/g-round.png) center center no-repeat;
	background-size:auto 100%;
	-webkit-animation:rotate 2.5s 0s infinite linear;
}
.y-round{
	width:100%;
	height:100%;
	background:url(../../assets/images/rightTop/y-round.png) center center no-repeat;
	background-size:auto 100%;
	-webkit-animation:rotate 2.5s 0s infinite linear;
}

.t-pro-bg, .t-threat-bg{
	width:100%;
	height:23%;
	background:url(../../assets/images/rightTop/t-pro-bg.png) no-repeat;
	background-size:100% 100%;
	margin:2% 0;
	padding:1% 0;
}
.t-threat-bg{
	background:url(../../assets/images/rightTop/t-threat-bg.png) no-repeat;
	background-size:100% 100%;
	position: relative;
}
.z1{
	display: block;
	width: 21%;
    height: 13%;
	background:url(../../assets/images/rightTop/z1.png) right bottom no-repeat;
	background-size:100% auto;
	position: absolute;
	right:0;
	top:0;
}
.t-thr-mbg{
	width:60%;
	height:90%;
	margin:0 auto;
	text-align: center;
	background:url(../../assets/images/rightTop/t-thr-mbg.png) no-repeat;
	background-size:100% 100%;
}
.t-date-bg{
	width:100%;
	height:100%;
	margin:0 auto;
	text-align: center;
	background:url(../../assets/images/rightTop/t-date-bg.png) center 0 no-repeat;
	background-size:26% 100%;
}
.t-borderl{
	border-left:1px solid #0d2850;
	padding-left:8%;
}
.t-t2{
	margin:0 0 0 6%;
}
.lineh{
	margin:2% auto;
}
.lineh p{
	line-height:1.8vw;
}
.lineh .t-date-bg p.fs-1{
	line-height: 2vw;
}
.lineh .t-date-bg p.fs-2s{
	line-height: 3.5vw;
}
.t-thr-mbg.lineh{
	margin:8% auto 0 auto;
	padding:4% 0;
}
.t-thr-mbg.lineh .fs-2{
	color:#7dcaff;
}



@keyframes rotate{
     form {transform:rotate(0deg);}
    to    {transform:rotate(360deg);}
}
@-webkit-keyframes rotate{
     form {transform:rotate(0deg);}
    to    {transform:rotate(360deg);}
}
</style>
