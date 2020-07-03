<template>
	<view class="evaluation">
		<view class="evaluation-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">评价</text>
			</view>
			
			<view class="inquire-message">
				<view class="user-info">
					<view class="user-main">
						<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="user-main-phone">
							<view class="top">
								<p>沙雕</p>
								<p>2020/10/10</p>
							</view>
							<view class="bottom">
								<image src="../../static/img/星.png" mode=""></image>
							</view>		
						</view>
					</view>
					<view class="user-bottom">
						<text>11111111111</text>
					</view>
					<view class="user-img">
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
					</view>
					<view class="line-four"></view>
				</view>
			</view>
			
			<view class="inquire-message">
				<view class="user-info">
					<view class="user-main">
						<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="user-main-phone">
							<view class="top">
								<p>沙雕</p>
								<p>2020/10/10</p>
							</view>
							<view class="bottom">
								<image src="../../static/img/星.png" mode=""></image>
							</view>		
						</view>
					</view>
					<view class="user-bottom">
						<text>11111111111</text>
					</view>
					<view class="user-img">
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
					</view>
					<view class="line-four"></view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
</script>


<style scoped lang="scss">
	.evaluation{
		.evaluation-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.inquire-message{
				.user-info {
					width: 90%;
					margin: 0 auto;
					.user-main {
						display: flex;
						margin-top: 30rpx;
						width: 100%;
						.user-main-phone {
							margin-left: 20rpx;
							width: 80%;
							display: flex;
							flex-direction: column;
							height: 85rpx;
							transform: translateY(10%);
							.top{
								display: flex;
								justify-content: space-between;
								p{
									font-size: 30rpx;
								}
								p:nth-child(2){
									margin-right: -30rpx;
									color: #999999;
								}
							}
							.bottom{
								margin-top: 10rpx;
								text{
									margin-left: 20rpx;
									color: #999999;
								}
								image{
									width: 20rpx;
									height: 25rpx;
								}
							}
						}
					}
					.user-bottom{
						margin-left: 10rpx;
						margin-top: 30rpx;
						text{
							font-size: 40rpx;
							width: 100%;
							word-break: break-all;
							height: 100rpx;
						}
					}
					.user-img{
						image{
							width: 33%;
							height: 220rpx;
						}
					}
					.line-four{
						width: 100% !important;
						height: 8rpx;
						background-color: #f2f2f2;
					}
				}
			}
		}
	}
</style>
