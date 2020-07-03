<template>
	<view class="house-keeping">
		<view class="house-keeping-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">家政服务</text>
			</view>
			<!-- 搜索框 -->
			<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
				<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;border-radius: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
					<text class="cuIcon-search" style="padding-right: 20rpx;"></text>
				</view>
				<button @click="search_bt" class="cu-btn round" style="margin-right: 20rpx;">搜索</button>
			</view>
			<!-- 服务分类 -->
			<view class="community-service-main">
					<view class="cu-item content" @click="serviceClick">
						<image src="../../static/img/服务分类 (2).png" mode=""></image>
						<p>二手交易</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类 (2).png" mode=""></image>
						<p>家政服务</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类 (2).png" mode=""></image>
						<p>信息发布</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类 (2).png" mode=""></image>
						<p>房屋租凭</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类 (2).png" mode=""></image>
						<p>房屋租凭</p>
					</view>
			</view>
			
			<view class="community-sort">
				<view class="community-sort-left">
					<text>距离</text>
				</view>
				<view class="community-sort-right">
					<text>销量</text>
				</view>
			</view>
			
			<view class="line-one"></view>
			
			<view class="service-details">
				<view class="left">
					<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
					<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
					<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text style="margin-left: 20rpx; font-size: 15rpx; color: #999999;">06-9</text></p>
				</view>
				<view class="right">
					<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			serviceClick(){
				uni.navigateTo({
					url:'ServiceClassification'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.house-keeping{
		.house-keeping-title{
			.line-one{
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
			.community-service-main{
				display: flex;
				text-align: center;
				margin-top: 40rpx;
				margin-bottom: 30rpx;
				.content{
					width: 25%;
					image{
						width: 90rpx;
						height: 90rpx;
					}
				}
			}
			.community-sort{
				background-color: #FFFFFF;
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				display: flex;
				justify-content: space-around;
			}
			.service-details{
				position: relative;
				top: 20rpx;
				width: 90%;
				height: 180rpx;
				margin: 0 auto;
				display: flex;
				border-bottom: 0.01rpx #999999 solid;
				.left{
					width: 400rpx;
					p{
						margin-top: 15rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.right{
					image{
						position: absolute;
						right: 0;
						border-radius: 10rpx;
						width: 250rpx;
						height: 150rpx;
					}
				}
			}
		}
	}
</style>
