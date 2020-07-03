<template>
	<view class="search-list-item">
		<scroll-view scroll-y="true" class="scroll">
			<view class="title">
				<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
				<text>{{title}}</text>
			</view>
			<!-- 轮播图 -->
			<view>
				<swiper class="swiper" @change="swiperChange" :current="swiperCurrent" circular="true" :autoplay="true" :interval="5000"
				 :duration="1000">
					<block v-for="(item,index) in imageList" :key="index">
						<swiper-item class="swiper-item">
							<image :src="item.src" mode=""></image>
						</swiper-item>
					</block>
				</swiper>
				<view class="dots">
					<view class='cu-tag round'>{{swiperCurrent+1}}/{{imageList.length}}</view>
				</view>
			</view>

			<view class="list-message">
				<text>啊1111111爱思打是的阿斯顿爱思打算打算打是的阿斯顿阿斯顿阿斯顿</text>
				<view class="price">
					<text>$30.8/份</text>
					<text>$45</text>
					<text>111人付款</text>
				</view>
			</view>


			<!-- 商品评价 -->
			<view class="evaluation">
				<view class="evaluation-top">
					<text>商品评价</text>
					<text @click="moreEvaluation">更多</text><text class="cuIcon-right"></text>
				</view>
				<view class="evaluation-content">
					<text>倩倩</text>
					<text>2020/10/10</text>
				</view>
				<view class="evaluation-bottom">
					<text>景色不错</text>
				</view>
			</view>

			<!-- 店铺商品 -->
			<view class="shop-goods">
				<view class="shop-goods-top">
					<text>店铺商品</text>
					<text @click="shopName">进店逛逛</text><text class="cuIcon-right"></text>
				</view>
				<view class="goods">
					<view class="shop-goods-content">
						<image src="../../static/img/dfk.png" mode=""></image>
						<text>1111111111111111111111111111111111111111111</text>
						<text>$30/份</text>
					</view>
					<view class="shop-goods-content">
						<image src="../../static/img/dfk.png" mode=""></image>
						<text>111111111111111111111111111111111111111111</text>
						<text>$30/份</text>
					</view>
					<view class="shop-goods-content">
						<image src="../../static/img/dfk.png" mode=""></image>
						<text>111111111111111111111111111111111111111111</text>
						<text>$30/份</text>
					</view>
				</view>
			</view>

			<!-- 商品详情 -->
			<view class="product-details">
				<view class="product-details-top">
					<text>商品详情</text>
				</view>
			</view>
		</scroll-view>

		<!-- 购买 -->
		<view class="buy-list-item">
			<view class="cu-bar bg-white tabbar border shop">
				<button class="action" open-type="contact" @click="collect()">
					<view :class="[collection ? 'cuIcon-favor' :'cuIcon-favorfill']">
					</view>
					收藏
				</button>
				<view class="action" @click="business">
					<view class="cuIcon-service">
					</view>
					客服
				</view>
				<view class="cu-capsule round bottom">
					<view class='cu-tag bg-gradual-orange' @click="addCart">
						加入购物车
					</view>
					<view class="cu-tag  bg-gradual-green" @click="buyNow">
						立即购买
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: [],
				imageList: [{
						src: '../../static/img/banner.png'
					},
					{
						src: '../../static/img/banner.png'
					},
					{
						src: '../../static/img/banner.png'
					}
				],
				swiperCurrent: 0,
				collection:false
			}
		},
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			back() {
				uni.navigateBack({

				})
			},
			moreEvaluation() {
				// 跳转更多评价
				uni.navigateTo({
					url: '../evaluation/Evaluation'
				})
			},
			shopName() {
				uni.navigateTo({
					url: './StoreInformation'
				})
			},
			// 收藏按钮的变化
			collect(){
				this.collection=!this.collection
			},
			// 跳转客服页面
			business(){
				uni.navigateTo({
					url:'../chat/HM-chat'
				})
			},
			// 加入购物车
			addCart(){
				
			},
			// 立即购买
			buyNow(){
				uni.navigateTo({
					url:'../order/Order'
				})
			}
		},
		onLoad(options) {
			this.title = options.value
		}
	}
</script>

<style scoped lang="scss">
	.search-list-item {
		position: relative;
		height: 100vh;

		.scroll {
			height: 100vh;
		}

		.title {
			position: relative;
			top: 80rpx;

			text:nth-child(2) {
				padding-left: 20rpx;
				font-size: 40rpx;
				line-height: 40rpx;
			}
		}

		.swiper {
			margin-top: 100rpx;
			width: 100%;
			height: 750rpx;

			.swiper-item {
				width: 100%;
				height: 100%;
			}
		}

		.dots {
			position: absolute;
			right: 0;
			top: 800rpx;
			z-index: 11;
		}

		.list-message {
			position: absolute;
			top: 890rpx;
			margin: 40rpx 20rpx 20rpx;

			.price {
				margin-top: 20rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}

				text:nth-child(3) {
					margin-left: 400rpx;
				}
			}
		}

		.evaluation {
			position: absolute;
			top: 1100rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;
			border-bottom: 1px solid;

			.evaluation-top {
				border-left: solid 2px #4cc876;
				padding-left: 20rpx;

				text:nth-child(2) {
					margin-left: 480rpx;
				}
			}

			.evaluation-content {
				margin-top: 20rpx;

				text:nth-child(3) {
					margin-left: 390rpx;
				}
			}

			.evaluation-bottom {
				margin-left: 30rpx;
				margin-top: 20rpx;
				margin-bottom: 20rpx;

			}
		}

		.shop-goods {
			position: absolute;
			top: 1350rpx;
			margin-left: 20rpx;
			width: 100%;

			.shop-goods-top {
				border-left: solid 2px #4cc876;
				padding-left: 20rpx;

				text:nth-child(2) {
					margin-left: 450rpx;
				}
			}

			.goods {
				display: flex;

				.shop-goods-content {
					display: flex;
					flex-direction: column;
					width: 33%;

					text {
						width: 100%; //宽度要定义好
						word-break: break-all;
						overflow: hidden;
						display: -webkit-box; //必须结合的属性，将对象作为弹性伸缩盒子模型显示
						-webkit-line-clamp: 2; //控制文本的行数
						-webkit-box-orient: vertical; //必须结合的属性，设置或检索伸缩盒对象的子元素的排列方式

					}
				}
			}

		}

		.product-details {
			position: absolute;
			top: 1980rpx;
			margin-left: 20rpx;
			margin-bottom: 150rpx;

			.product-details-top {
				padding-left: 20rpx;
				border-left: solid 2px #4cc876;
			}
		}

		.buy-list-item {
			width: 100%;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			display: flex;

			.bottom {
				margin-left: 20rpx;
				margin-right: 30rpx;
				.cu-tag {
					width: 225rpx;
					height: 90rpx;
				}
			}
		}

	}
</style>
