<template>
	<view class="love-inquire">
		<view class="love-inquire-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">1111</text>
			</view>
			<view class="line-one"></view>
			<!-- 评价信息 -->
			<view class="inquire-message">
				<view class="user-info">
					<view class="user-main">
						<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="user-main-phone">
							<p>沙雕</p>
							<view class="bottom">
								<image src="../../static/img/dingwei3.png" mode=""></image>
								<text>江西省 南昌市 湾里区 </text>
							</view>		
						</view>
					</view>
					<view class="user-bottom">
						<textarea value="" />
					</view>
					<view class="user-img">
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
					</view>
				</view>
				<view class="line-three"></view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.love-inquire{
		.love-inquire-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.line-three{
				width: 100% !important;
				height: 30rpx;
				background-color: #f2f2f2;
			}
			.line-one{
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.inquire-message{
				.user-info {
					width: 90%;
					margin: 0 auto;
				
					.user-main {
						display: flex;
						margin-top: 30rpx;
				
						.user-main-phone {
							margin-left: 20rpx;
							display: flex;
							flex-direction: column;
							height: 85rpx;
							transform: translateY(10%);
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
						margin-left: 40rpx;
						margin-top: 30rpx;
						textarea{
							height: 200rpx;
						}
					}
					.user-img{
						image{
							width: 33%;
							height: 220rpx;
						}
					}
				}
			}
			.intruduction-title {
				display: flex;
				margin-top: 20rpx;
			
				image {
					width: 8rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>
