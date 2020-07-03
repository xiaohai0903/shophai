<template>
	<view class="my-certification">
		<view class="my-certification-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>个人中心</text>
			</view>
			<view class="avatar">
				<view class="cu-avatar xl round" style="width: 180rpx; height: 180rpx; background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);border: 5rpx solid #FFFFFF;"></view>
			</view>

			<view class="community-sort">
				<view class="community-sort-left" @click="shopClick" :class="{'underline': currendIndex==0}">
					<text>个人认证</text>
				</view>
				<view class="community-sort-right" @click="serviceClick" :class="{'underline': currendIndex==1}">
					<text>企业服务</text>
				</view>
			</view>

			<view class="line-one"></view>

			<view class="personal-main" v-show="this.currendIndex==0">
				<view class="cu-form-group message">
					<view class="title">真实姓名</view>
					<input placeholder="请输入真实姓名" name="input"></input>
				</view>
				<view class="cu-form-group message">
					<text class="title">身份证号</text>
					<input placeholder="请输入有效公民身份证" name="input"></input>
				</view>
				<view class="cu-form-group message">
					<view class="title">开户银行</view>
					<input placeholder="请输入开户银行" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title" style="width: 200rpx;">银行开号</view>
					<input placeholder="请输入有效本人银行卡" name="input"></input>
				</view>
			</view>
			
			
			<view class="personal-main" v-show="this.currendIndex==1">
				<view class="cu-form-group message">
					<view class="title">企业名称</view>
					<input placeholder="请输入企业名称" name="xx" v-model="qy"></input>
				</view>
				<view class="cu-form-group message">
					<text class="title">企业注册号</text>
					<input placeholder="填写统一社会信用代码" name="input"></input>
				</view>
				<view class="cu-form-group message">
					<view class="title">法人姓名</view>
					<input placeholder="请输入法人姓名" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title" style="width: 200rpx;">法人身份证好</view>
					<input placeholder="请输入法人身份证号" name="input"></input>
				</view>
			</view>
			
			<view class="announcement-button">
				<view class="cu-btn round bg-gradual-green button"><text>立即授权</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currendIndex: 0,
				qy:''
			}
		},
		methods:{
			shopClick(){
				this.currendIndex =0
			},
			serviceClick(){
				this.currendIndex =1
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.my-certification-title {
		height: 300rpx;
		background-image: url(../../static/img/beij.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		z-index: 111;

		.underline {
			text-align: center;
			border-bottom: #4CD964 1rpx solid;
			color: #31c27e;
		}

		.line-one {
			width: 100%;
			height: 20rpx;
			background-color: #f2f2f2;
		}

		.title-top {
			font-size: 40rpx;
			margin-left: 10rpx;
			padding-top: 80rpx;
			padding-bottom: 20rpx;
			color: #FFFFFF;
		}

		.avatar {
			margin-top: 55rpx;
			text-align: center;
		}

		.community-sort {
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			display: flex;
			justify-content: space-around;
		}

		.personal-main {
			width: 90%;
			margin: 0 auto;
			.cu-form-group .title{
				padding-right: 0;
			}
			.cu-form-group{
				background-color: initial;
			}
			.cu-form-group+.cu-form-group{
				border-top: 0;
			}
			.message {
				.title{
					width: 200rpx;
				}
				input{
					width: 200rpx;
				}
				border-bottom: 1rpx solid #999999;
			}
			
		}
		.announcement-button {
			width: 100%;
			margin-left: 10rpx;
			position: fixed;
			bottom: 20rpx;
			text-align: center;
		
			.button {
				width: 90%;
				height: 80rpx;
			}
		}
	}
</style>
