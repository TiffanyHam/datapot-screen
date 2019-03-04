<template>
	<div class="box rightBottom">
		<!--top-->
		<el-row>
			<el-col :span="24">
				<img src="../../assets/images/rightBottom/title.png" width="95%" class="title">
			</el-col>
		</el-row>
		<!--center-->
		<div style="width:96%;margin:0 auto;padding:2%;">
			<el-row>
				<el-col :span="4">
					<el-row>
						<el-col :span="12">
							<img src="../../assets/images/rightBottom/i1.png" width="98%"></el-col>
						<el-col :span="12">
							<div class="boderX"><i class="fxline"></i><i class="fxline-fn"></i></div>
						</el-col>
					</el-row>
				</el-col>
				<el-col :span="20">
					<el-row>
						<el-col :span="10">
							<img src="../../assets/images/rightBottom/i2.png" width="100%" style="margin-top:4%">
						</el-col>
						<el-col :span="2">
							<div class="boderX"><i class="fxline"></i><i class="fxline-fn"></i></div>
						</el-col>
						<el-col :span="12">
							<img src="../../assets/images/rightBottom/i3.png" width="70%" class="fl" style="margin-top:2%">
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<div class="boderY fr" style="margin-right:26%;">
								<i class="fxline-y"></i>
								<i class="fxline-fn-y"></i>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							<img src="../../assets/images/rightBottom/i4.png" width="100%" style="margin-top:4%;">
						</el-col>
						<el-col :span="2">
							<div class="boderX bx-singe"><i class="fxline"></i><i class="fxline-fn"></i></div>
						</el-col>
						<el-col :span="12">
							<img src="../../assets/images/rightBottom/i5.png" width="94%" class="fl">
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							<div class="boderY" style="width: 31%;">
								<i class="fxline-y pleft"></i>
								<i class="fxline-fn-y pRight"></i>
							</div>
							<img src="../../assets/images/rightBottom/i6.png" width="100%">
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>
		<!--bottom-->
		<div>
				<img src="../../assets/images/rightBottom/b1.png" width="15%" style="position: absolute;bottom:4%;left:2%;">
				<img src="../../assets/images/rightBottom/b2.png" width="15%" style="position: absolute;bottom:4%;right:2%;">
		</div>
	</div>
</template>

<script>
    export default {
        name: "rightBottom"
    }
</script>

<style scoped>
.rightBottom{
	/* padding:2%; */
	overflow:hidden;
	height: 100%;
	background:url(../../assets/images/bg.png) no-repeat;
	background-size:100% 100%;
}
.title{
	display:block;
	margin:2% auto 5% auto;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.boderX{
	border-top:1px solid #32628f;
	border-bottom:1px solid #32628f;
	height:7vh;
	width:100%;
    margin: 2.5vw 0 0 0;
    position: relative;
}
.boderY{
	border-left:1px solid #32628f;
	border-right:1px solid #32628f;
	height:8vh;
	width:13%;
    margin:0 auto;
    position: relative;
}
.fxline, .fxline-fn{
	display: block;
	width:100%;
	height:5vh;
	background:url(../../assets/images/rightBottom/fx.png) no-repeat;
	background-size:5vh auto;
	position: absolute;
	left:-5%;
	top:-28%;
	-webkit-animation:slideRight 1.5s 0s infinite linear;
}
.fxline-fn{
	left:9%;
	top:73%;
	background:url(../../assets/images/rightBottom/fx_fn.png) right 0 no-repeat;
	background-size:5vh auto;
	-webkit-animation:slideLeft 4s 0s infinite both;
}
.fxline-y{
	display: block;
	width:5vh;
	height:100%;
	background:url(../../assets/images/rightBottom/fx_y.png) no-repeat;
	background-size:auto 5vh;
	position: absolute;
	left:92%;
	top:55%;
	-webkit-animation:slideBottom 1.5s 0s infinite both;
}
.fxline-fn-y{
	display: block;
	width:5vh;
	height:100%;
	background:url(../../assets/images/rightBottom/fx_fn_y.png) no-repeat;
	background-size:auto 5vh;
	position: absolute;
	left:-9.5%;
	top:55%;
	-webkit-animation:slideUp 4s 0s infinite both;
	
}
.bx-singe{
	margin:3.5vw 0 0 0;
}
/* .pleft{
	left:92%;
}
.pRight{
	left:-9%;
} */
@keyframes slideRight{
    30%{
        transform: translate(30%,0);
    }
    60%{
        transform: translate(60%,0);
    }
    80%{
        transform: translate(80%,0);
        opacity: 1;
    }
    100%{
        transform: translate(90%,0);
        opacity: 0;
    }
}
@keyframes slideLeft{
	0%{
		opacity:100;
		filter:alpha(opacity=100);
		-webkit-transform:translateX(0%);
		transform:translateX(0%)
	}
	100%{
		opacity:0;
		filter:alpha(opacity=0);
		-webkit-transform:translateX(-90%);
		transform:translateX(-90%)
	}
}
@keyframes slideUp{
	0%{
		opacity:100;
		filter:alpha(opacity=100);
		-webkit-transform:translateY(0%);
		transform:translateY(0%)
	}
	100%{
		opacity:0;
		filter:alpha(opacity=0);
		-webkit-transform:translateY(-90%);
		transform:translateY(-90%)
	}
}
@keyframes slideBottom{
	0%{
		opacity:100;
		filter:alpha(opacity=100);
		-webkit-transform:translateY(-90%);
		transform:translateY(-90%)
	}
	100%{
		opacity:0;
		filter:alpha(opacity=0);
		-webkit-transform:translateY(0%);
		transform:translateY(0%)
	}
}
</style>
