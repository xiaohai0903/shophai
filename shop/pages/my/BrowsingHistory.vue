<template>
	<view class="browsing-history">
		<view class="browsing-history-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>浏览记录</text>
			</view>
			
			<view class="community-sort">
				<view class="community-sort-left" @click="shopClick" :class="{'underline': currendIndex==0}">
					<text>商品</text>
				</view>
				<view class="community-sort-right" @click="serviceClick" :class="{'underline': currendIndex==1}">
					<text>服务</text>
				</view>
			</view>
			
			<view class="shop-message" v-if="this.currendIndex==0">
				<view class="message">
					<image src="../../static/img/二维码.png" mode=""></image>
					<text style="margin-left: 10rpx;">我家玉米好吃又好玩嘻嘻嘻嘻嘻嘻</text>
					<view class="message-bottom">
							<p><text style="color: #ff4a12; font-size: 35rpx;">￥30</text><text style="color: red;">.8</text><text>/份</text></p>
							<p style="color: #999999;">233人付款</p>
					</view>
				</view>				
				<view class="message">
					<image src="../../static/img/二维码.png" mode=""></image>					
				</view>
				<view class="message">
					<image src="../../static/img/二维码.png" mode=""></image>
				</view>
			</view>
			
			<view class="service-message" v-if="this.currendIndex==1">
				<view class="service-details">
					<view class="left">
						<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
					</view>
					<view class="right">
						<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
						<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
						<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text style="margin-left: 20rpx;font-size: 20rpx; color: #999999;">06-9</text></p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				currendIndex:0
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
	page{
		background-color: #FFFFFF;
	}
	.browsing-history-title{
		.underline{
			text-align: center;
				width: 100rpx;
				border-bottom: #4CD964 1rpx solid;
				color:#31c27e ;
		}
		.title-top {
			font-size: 40rpx;
			margin-left: 10rpx;
			padding-top: 80rpx;
			padding-bottom: 20rpx;
		}
		.community-sort{
			background-color: #FFFFFF;
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			display: flex;
			justify-content: space-around;
		}
		.shop-message{
			padding-top: 30rpx;
			background-color: #f2f2f2;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.message{
				height: 480rpx;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				margin-top: 20rpx;
				border-radius: 20rpx;
				text{
					margin-top: 20rpx;
					width: 340rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				image{
					width: 340rpx;
					height: 340rpx;
					border-radius: 20rpx;
				}
				.message-bottom{
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}
		.service-message{
			.service-details {
				position: relative;
				width: 90%;
				top: 20rpx;
				height: 180rpx;
				margin: 20rpx auto;
				display: flex;
				border-bottom: 0.01rpx #999999 solid;
			
				.left {
					image {
						position: absolute;
						left: 0;
						border-radius: 10rpx;
						width: 250rpx;
						height: 150rpx;
					}
			
					width: 400rpx;
			
					p {
						margin-top: 15rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			
				.right {
					width: 400rpx;
			
					p {
						margin-top: 15rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
