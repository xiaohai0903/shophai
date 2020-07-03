<template>
	<view class="my">
		<view class="my-title">
			<view class="title-top">
				<text style="margin-left:20rpx;">我 的</text>
			</view>
			<view class="my-header">
				<view class="user-main">
					<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
					<view class="user-main-phone">
						<div><text>小海</text>
							<image src="../../static/img/月会员.png" mode=""></image>
						</div>
						<div style="margin-top: 10rpx;">18270112585</div>
					</view>
					<image src="../../static/img/签到.png" style="height: 35rpx;
						width: 35rpx; left: 430rpx;" mode=""></image>
				</view>
			</view>

			<view class="integral">
				<view class="integral-top">
					<view class="left">
						<div style="font-size: 35rpx;">2448份</div>
						<div style="font-size: 28rpx; color: #999999; margin-top: 10rpx;">我的积分</div>
					</view>
					<view class="right">
						<div style="font-size: 35rpx;">4511小时</div>
						<div style="font-size: 28rpx; color: #999999; margin-top: 10rpx;">免费发布时长</div>
					</view>
				</view>
				<view class="integral-bottom">
					<view class="community-service-main">
						<view class="cu-item content">
							<image src="../../static/img/我的发布.png" mode=""></image>
							<p>跑腿服务</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/我的评论.png" mode=""></image>
							<p>教育培训</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/我的认证.png" mode=""></image>
							<p>爱打听</p>
						</view>
						<view class="cu-item content">
							<image src="../../static/img/我的收藏.png" mode=""></image>
							<p>服务分类</p>
						</view>
					</view>
				</view>
			</view>

			<view class="my-main">
				<block>
					<view class="category">
						<view class="left">
							<image src="../../static/img/shouc.png" mode=""></image>
							<p>会员</p>
						</view>
						<view class="right">
							<text>有效期至11111111111111</text>
							<image src="../../static/img/返回.png" mode=""></image>
						</view>
					</view>
					<view class="category">
						<view class="left">
							<image src="../../static/img/shouc.png" mode=""></image>
							<p>会员</p>
						</view>
						<view class="right">
							<text>有效期至11111111111111</text>
							<image src="../../static/img/返回.png" mode=""></image>
						</view>
					</view>
					<view class="category">
						<view class="left">
							<image src="../../static/img/shouc.png" mode=""></image>
							<p>会员</p>
						</view>
						<view class="right">
							<text>有效期至11111111111111</text>
							<image src="../../static/img/返回.png" mode=""></image>
						</view>
					</view>
				</block>
				<view class="category">
					<view class="left">
						<image src="../../static/img/shouc.png" mode=""></image>
						<p>联系客服</p>
					</view>
					<view class="right kefu" >
						<text>有效期至11111111111111</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				istrue:true
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.my {
		.my-title {
			height: 400rpx;
			background-image: url(../../static/img/beij.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;

			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
				color: #FFFFFF;
			}

			.my-header {
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
						color: #FFFFFF;

						image {
							left: 20rpx;
							width: 60rpx;
							height: 30rpx;
						}

						text {
							font-size: 30rpx;
						}

						transform: translateY(10%);

						.bottom {
							margin-top: 10rpx;

							text {
								color: #FFFFFF;
							}

							image {
								width: 20rpx;
								height: 25rpx;
							}
						}
					}
				}
			}

			.integral {
				width: 90%;
				margin: 0 auto;
				height: 360rpx;
				border-radius: 10rpx;
				background-color: #FFFFFF;
				margin-top: 40rpx;

				.integral-top {
					display: flex;
					line-height: 40rpx;
					text-align: center;
					padding-top: 30rpx;

					.left {
						border-right: 1rpx solid #999999;
						height: 80rpx;
						width: 50%;

					}

					.right {
						text-align: center;
						height: 80rpx;
						width: 50%;
					}
				}

				.integral-bottom {
					.community-service-main {
						display: flex;
						text-align: center;
						margin-top: 60rpx;
						margin-bottom: 30rpx;

						.content {
							width: 25%;

							image {
								width: 100rpx;
								height: 100rpx;
							}

							p {
								margin-top: 20rpx;
							}
						}
					}
				}
			}

			.my-main {
				padding-top: 20rpx;
				background-color: #f2f2f2;

				.category {
					display: flex;
					align-items: center;
					width: 90%;
					height: 100rpx;
					background-color: #FFFFFF;
					border-radius: 15rpx;
					margin: 5rpx auto;

					.left {
						width: 350rpx;
						display: flex;
						align-items: center;

						image {
							width: 40rpx;
							margin-left: 25rpx;
							height: 40rpx;
						}

						p {
							margin-left: 20rpx;
						}
					}

					.right {
						display: flex;

						align-items: center;

						image {
							width: 15rpx;
							height: 30rpx;
							left: 10rpx;
						}
					}

					.kefu {
						position: absolute;
						right: 50rpx;
					}
				}
			}
		}
	}
</style>
