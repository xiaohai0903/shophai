<template>
	<view class="payment">
		<view class="payment-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>支付成功</text>
			</view>
			
			<view class="payment-main">
				<image src="../../static/img/勾.png" mode=""></image>
				<view class="payment-main-pay">
					<text>支付成功！</text>
					<p>感谢成功购买</p>
				</view>
			</view>
			
			<view class="payment-slip">
					<view class="payment-slip-top">
						<p>￥<text style="font-size: 50rpx;">30</text>.8</p>
					</view>
					<view class="payment-slip-bottom">
						<p><text>订单编号:</text>96787878</p>
						<p><text>下单时间:</text>2020-06-12 13:44</p>
						<p><text>送货时间:</text>2020-06-12 13:44</p>
					</view>
			</view>
		</view>
		<view class="payment-completed">
			<button class="cu-btn round bg-gradual-green">查看详情</button>
			<button class="cu-btn round lines-green" @click="backClick">返回首页</button>
		</view>
	</view>
</template>

<script>
	 export default{
		 methods:{
			 backClick(){
				 uni.switchTab({
					url:'../index/index'
				 })
			 }
		 }
	 }
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.payment {
		.payment-title {
			height: 500rpx;
			background-image: url(../../static/img/beij.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;

			.title-top {
				color: #FFFFFF;
				font-size: 35rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}

			.payment-main {
				
				display: flex;
				justify-content: center;
				margin-top: 70rpx;
				image {
					width: 150rpx;
					height: 110rpx;
				}
				.payment-main-pay {
					margin-top: 15rpx;
					text{
						color: #FFFFFF;
						font-size: 35rpx;
					}
					p{
						color: #FFFFFF;
					}
				}
			}
			.payment-slip{
				width: 90%;
				height: 100%;
				background-image: url(../../static/img/支付单.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin: 55rpx  auto 0;
				.payment-slip-top{
					text-align: center;
					width: 627rpx;
					height: 130rpx;
					line-height: 130rpx;
					border-bottom: 4rpx dashed #dbdbdb;
					margin-left: 22rpx;
					p{
						font-size: 40rpx;
					}
				}
				.payment-slip-bottom{
					margin-left: 22rpx;
					p{
						margin-left: 25rpx;
						margin-top: 50rpx;
						font-size: 30rpx;
						color: #000000;
						text{
							color: #666666;
						}
					}
				}
			}
		}
		.payment-completed{
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 900rpx;
			left: 150rpx;
			button{
				width: 450rpx;
				height: 90rpx;
				margin-top: 50rpx;
			}
		}
	}
</style>
