<template>
	<view class="order">
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>确定订单</text>
		</view>

		<!-- 收货地址 -->
		<view class="adress">
			<view class="cu-avatar lg round margin-left bg-gradual-green">
				<view class="cuIcon-location"></view>
			</view>
			<view class="adress-content" @click="goAdressClick">
				<text>欧阳飘絮</text>
				<text style="margin-left: 30rpx;">13876263500</text>
				<view class="adress-main">
					江西省 南昌市 西湖区 朝阳桃花一存
				</view>
			</view>
			<image src="../../static/img/返回.png" mode=""></image>
		</view>

		<!-- 商品交易信息 -->

		<view class="commodities">
			<view class="main">
				<view class="cuIcon-shop">倩倩好点<text class="cuIcon-right" style="margin-left: 521rpx;"></text></view>

				<view class="main-content">
					<view class="left">
						<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-top">
							<text>你是我儿我是你爹，你是我儿我是你爹，你是我儿</text>
						</view>
						<view class="right-bottom">
							<view class="">
								<text style="color: red; font-size: 40rpx;">$30</text><text style="color: red;">.8</text><text>/份</text>
								<text class="old-price">$50</text>
							</view>
							<view class="last">
								<button class="cu-btn">-</button>
								<view class="ao">
									<text>1111</text>
								</view>
								<button class="cu-btn">+</button>
							</view>
						</view>
					</view>
				</view>

				<view class="main-bottom">
					<view class="cu-form-group">
						<view class="title" style="line-height: 0;">配送方式</view>
						<picker @change="PickerChange" :value="index" :range="picker">
							<view class="picker">
								{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
							</view>
						</picker>
					</view>

					<!-- 配送时间  -->
					<view class="row" style="padding-right: 5rpx;">
						<text class="name">配送时间</text>
						<view class="value">
							<biaofun-datetime-picker placeholder="请选择配送时间" start="2020-02-03 02:08" end="2100-10-28 22:58" fields="minute"
							 @change="changeDatetimePicker"></biaofun-datetime-picker>
						</view>
						<text class="cuIcon-right"></text>
					</view>
					<view class="buyers">
						<view class="cu-form-group" style="width: 100%; padding: 0;">
							<view class="title" style="line-height: 0;">买家留言</view>
							<input placeholder="选填内容" name="input"></input>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="oreder-money">
			<view class="goods-money">
				<text>商品金额</text>
				<text>￥38</text>
			</view>
			<view class="goods-ship">
				<text>运费</text>
				<text>+￥0.00</text>
			</view>
		</view>
		
		<view class="order-total">
			<view class="new-price">
				合计:
				<text style="color: red; font-size: 40rpx;">￥30</text><text style="color: red;">.8</text>
				<text class="old-price">￥50</text>
			</view>
			<view class="buy">
				<button class="cu-btn round bg-gradual-green">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import biaofunDatetimePicker from '../../components/biaofun-datetime-picker/biaofun-datetime-picker.vue'
	export default {
		data() {
			return {
				index: 0,
				picker: ['配送员上门', '上门自取'],
				time: '12:01',
				date: '12-25',
				localTime: ''
			}
		},
		components: {
			biaofunDatetimePicker
		},
		async onReady() {
			let timer = setTimeout(() => {
				this.defaultValue = '2018-10-18 18:18';
				clearTimeout(timer);
			}, 3000);
		},
		methods: {
			// 返回按钮
			back() {
				uni.navigateBack({
					
				})
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				console.log(e)
				this.date = e.detail.value
			},
			goAdressClick(){
				uni.redirectTo({
					url:'../adress/shippingaddress/NewAdress'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page {
		padding: 0 30upx;
	}

	.row {
		display: flex;
		height: 100upx;
		align-items: center;
		color: #040506;
		border-bottom: 1upx solid rgba($color: #707070, $alpha: 0.3);
	}

	.row:active {
		opacity: 0.8;
	}

	.name {
		flex-shrink: 0;
	}

	.value {
		flex: 1;
	}

	.right-icon {
		color: #707070;
	}
	.order {
		height: 100%;

		.title {
			height: 140rpx;
			padding-top: 80rpx;

			text:nth-child(2) {
				padding-left: 20rpx;
				font-size: 40rpx;
				line-height: 40rpx;
			}
		}

		.adress {
			width: 100%;
			height: 150rpx;
			background-color: #FFFFFF;
			position: absolute;
			top: 160rpx;
			display: flex;
			align-items: center;
			.adress-content{
				margin-left: 40rpx;
				.adress-main{
					margin-top: 20rpx;
				}
			}
			image{
				width: 15rpx;
				height: 30rpx;
				position: absolute;
				right: 14rpx;
				top: 60rpx;
			}
		}

		.commodities {
			width: 100%;
			background-color: #FFFFFF;
			position: absolute;
			top: 330rpx;

			.main {
				padding-left: 20rpx;

				.cuIcon-shop {
					font-size: 35rpx;
				}

				.main-content {
					display: flex;
					margin-top: 20rpx;

					.left {
						image {
							width: 160rpx;
							height: 160rpx;
							border-radius: 10rpx;
						}
					}

					.right {
						margin-left: 20rpx;
						margin-right: 20rpx;

						.right-top {}

						.right-bottom {
							margin-top: 40rpx;
							display: flex;

							.old-price {
								text-decoration: line-through;
								margin-left: 30rpx;
								font-size: 30rpx;
							}

							.last {
								display: flex;
								border: solid 1px #d9d9d9 ;
								margin-left: 90rpx;
								.ao{
									width: 90rpx;
									text-align: center;
									margin-top: auto;
									margin-bottom: auto;
								}
								button:nth-child(1){
									border-radius: 0;
									border-right: solid 1px #d9d9d9;
									background-color: #FFFFFF;
								}
								button:last-child{
									border-radius: 0;
									border-left: solid 1px #d9d9d9;
									background-color: #FFFFFF;
								}
							}
						}
					}
				}
				.main-bottom{
					.buyers{
						input{
							text-align: center;
							margin-left: 450rpx;
						}
					}
				}
			}

		}
		.oreder-money{
			background-color: #FFFFFF;
			width: 100%;
			position: absolute;
			top: 970rpx;
			padding-left: 20rpx;
			.goods-money{
				height: 90rpx;
				line-height: 90rpx;
				text:last-child{
					margin-left: 544rpx;
				}
			}
			.goods-ship{
				height: 90rpx;
				line-height: 90rpx;
				text:last-child{
					margin-left: 560rpx;
					color: #fe8c76;
				}
			}
		}
		.order-total{
			width: 100%;
			height: 110rpx;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			line-height:110rpx ;
			display: flex;
			.new-price {
				.old-price{
					text-decoration:line-through;
					margin-left: 30rpx;
					font-size: 30rpx;
				}
			}
			.buy{
				margin-left: 30rpx;
				button{
					
				}
			}
		}
	}
</style>
