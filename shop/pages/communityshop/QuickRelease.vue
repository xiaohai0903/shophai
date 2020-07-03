<template>
	<view class="quick-release">
		<view class="quick-release-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">快捷发布</text>
			</view>
			<view class="quick-main">
				<view class="quick-release-main">
					<image src="../../static/img/竖线.png" mode=""></image>
					<text>请选择发布的项目</text>
					<image src="../../static/img/竖线2.png" mode=""></image>
				</view>
				
				<view class="community-service" style="margin-top: 60rpx;">
						<view class="cu-item content">
							<image src="../../static/img/二手交易.png" mode=""></image>
							<p>二手交易</p>
						</view>
						<view class="cu-item content" >
							<image src="../../static/img/家政服务.png" mode=""></image>
							<p>家政服务</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/信息发布.png" mode=""></image>
							<p>信息发布</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/房屋租赁.png" mode=""></image>
							<p>房屋租赁</p>
						</view>
				</view>
				<view class="community-service">
						<view class="cu-item content">
							<image src="../../static/img/跑腿服务.png" mode=""></image>
							<p>分类</p>
						</view>
						<view class="cu-item content" >
							<image src="../../static/img/教育培训.png" mode=""></image>
							<p>教育培训</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/爱打听.png" mode=""></image>
							<p>爱打听</p>
						</view>				
				</view>
				
				<view class="quick-release-cross">
					<image src="../../static/img/发布.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	page{
		background: #FFFFFF;
	}
	.quick-release{
		.quick-release-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
			.quick-release-main{
				display: flex;
				justify-content: center;
				width: 100%;
				image{
					transform: translateY(30%);
					width: 30rpx;
					height: 30rpx;
				}
				text{
					margin: 0 20rpx;
				}
			}
			.community-service{
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
			.quick-release-cross{
				text-align: center;
				margin-top: 120rpx;
				image{
					width: 90rpx;
					height: 90rpx;
				}
			}
			.quick-main{
				width: 100%;
				position: fixed;
				bottom: 50rpx;
			}
		}
	}
</style>
