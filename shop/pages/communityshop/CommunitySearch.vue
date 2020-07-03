<template>
	<view class="community-search">
		<view class="community-search-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">1111</text>
			</view>
			<!-- 搜索框 -->
			<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
				<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;border-radius: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
					<text class="cuIcon-search" style="padding-right: 20rpx;"></text>
				</view>
				<button @click="search_bt" class="cu-btn round" style="margin-right: 20rpx;">搜索</button>
			</view>
			<view class="line-one"></view>
			
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
</template>

<script>
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.community-search{
		.community-search-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.line-one {
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
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
