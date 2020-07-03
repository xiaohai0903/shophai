<template>
	<view class="message-center">
		<view class="message-center-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>消息中心</text>
			</view>
			
			<view class="line-one"></view>
			<view class="user-main">
				<view class="cu-avatar lg round header" style="background-image:url();"></view>
				<view class="user-main-phone">
					<view class="top">
						<p>沙雕</p>
						<p>2020/10/10</p>
					</view>
					<view class="bottom">
						<text>111</text>
						<view class="cu-tag round bg-red sm">1</view>

					</view>
				</view>
			</view>
			
			<view class="user-main">
				<view class="cu-avatar lg round header" style=" background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
				<view class="user-main-phone">
					<view class="top">
						<p>沙雕</p>
						<p>2020/10/10</p>
					</view>
					<view class="bottom">
						<text>11</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.message-center-title .user-main[data-v-68d29597]{
		border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
	}
	.message-center-title{
		.line-one{
			width: 100%;
			height: 20rpx;
			background-color: #f2f2f2;
		}
		.title-top {
			font-size: 40rpx;
			margin-left: 10rpx;
			padding-top: 80rpx;
			padding-bottom: 20rpx;
		}
		 .user-main{
			display: flex;
			margin-top: 30rpx;
			width: 90%;
			height: 150rpx;
			align-items: center;
			margin: 0 auto;
			.header{
				width: 120rpx;
			}
			.user-main-phone {
				margin-left: 20rpx;
				margin-top: -15rpx;
				width: 100%;
				display: flex;
				flex-direction: column;
				transform: translateY(10%);
				.top{
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					p{
						font-size: 30rpx;
					}
					p:nth-child(2){
						color: #999999;
					}
				}
				.bottom{
					.cu-tag.sm{
						width: 40rpx;
						height: 40rpx;
					}
					margin-top: 15rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					text{
						color: #999999;
					}
				}
			}
		}
	}
</style>
