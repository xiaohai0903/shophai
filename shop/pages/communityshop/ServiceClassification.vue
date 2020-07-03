<template>
	<view class="service-classification">
		<view class="service-classification-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">服务分类</text>
			</view>
			
			<view class="line-one"></view>
			
			<view class="service-details">
				<view class="left">
					<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
					<p style="font-size: 20rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
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
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.service-classification{
		.service-classification-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
			.line-one{
				margin-top: 30rpx;
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
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
