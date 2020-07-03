<template>
	<view class="community-store">
		<view class="community-store-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>芊芊好店</text>
			</view>
			<!-- 商铺信息 -->
			<view class="community-store-name">
				<view class="left">
					<image src="../../static/img/特权1.png" mode=""></image>
				</view>
				<view class="middle">
					<p>芊芊好店</p>
					<view class="middle-start">
						<image src="../../static/img/关注.png" mode=""></image>
						<image src="../../static/img/关注.png" mode=""></image>
						<image src="../../static/img/关注.png" mode=""></image>
						<image src="../../static/img/关注.png" mode=""></image>
						<image src="../../static/img/关注.png" mode=""></image>
					</view>
					<text class="shop-concern">3000人关注</text>
				</view>
				<view class="right">
					<button class="cu-btn round bg-gradual-orange" @click="collection">
						<image src="../../static/img/shouc.png" mode=""></image>收藏
					</button>
					<button class="cu-btn round bg-gradual-orange" style="margin-top: 25rpx;">
						<image src="../../static/img/kefu.png" mode="">客服
					</button>
				</view>
			</view>

			<!-- 商品信息 -->
			<view class="community-shop-message">
				<scroll-view class="message-left">
					<view class="category">
						<image src="../../static/img/火.png" mode=""></image>
						<text>热销</text>
					</view>
					<view class="category">
						菜品分类
					</view>
					<view class="category">
						菜品分类
					</view>
					<view class="category">
						菜品分类
					</view>
				</scroll-view>

				<view class="message-right">
					热销
					<scroll-view scroll-y="true">
						<block>
							<view class="main-content">
								<view class="left">
									<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
								</view>
								<view class="right">
									<view class="right-top">
										<text>排骨 300g</text>
										<p>(冰鲜)精品带肉汤骨</p>
									</view>
									<view class="right-bottom">
										<view class="price">
											<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
											<text class="old-price">￥50</text>
										</view>
										<view class="last">
											<button>-</button>
											<view class="ao">
												<text>1</text>
											</view>
											<button>+</button>
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>

				</view>
			</view>
			<!-- 结算外卖商品 -->
			<view class="community-settlement" v-if="this.commodity==false">
				<view class="settlement-left">
					<image src="../../static/img/商品.png" mode=""></image>
					<view class="left-shop">
						<text>未选购商品</text>
						<p>另需配送费 ￥0</p>
					</view>
				</view>
				<view class="settlement-right">
					<button class="cu-btn round">35起送</button>
				</view>
			</view>

			<view class="community-settlement" v-if="this.commodity == true">
				<view class="settlement-left" @click="showBottom()">
					<button class="cu-btn cuIcon total ">
						<text>13</text>
					</button>
					<image src="../../static/img/商品2.png" mode=""></image>
					<view class="left-shop">
						<view class="price">
							<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
							<text class="old-price">￥50</text>
						</view>
						<p>另需配送费 ￥0</p>
					</view>
				</view>
				<view class="settlement-right">
					<button class="cu-btn round bg-gradual-green" >去结算</button>
				</view>
			</view>
			<bottomSheet :isShowBottom="isShowBottom"  @closeBottom="closeBottom"></bottomSheet>
		</view>
	</view>
</template>

<script>
	import bottomSheet from '../../components/productloading/bottomSheet.vue'
	export default {
		components: {
			bottomSheet
		},
		data() {
			return {
				commodity: true,
				isShowBottom : false,
			}
		},
		methods:{
		showBottom(){
			this.isShowBottom = true;
		},
		closeBottom(){
			this.isShowBottom = false;
		},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.community-store {
		.community-store-title {
			height: 360rpx;
			background-image: url(../../static/img/banner.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			position: relative;

			.title-top {
				font-size: 40rpx;
				color: #FFFFFF;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}

			.community-store-name {
				display: flex;
				margin-top: 60rpx;

				p {
					color: #FFFFFF;
					font-size: 40rpx;
				}

				.left {
					image {
						margin-left: 25rpx;
						width: 120rpx;
						height: 120rpx;
					}
				}

				.middle {
					width: 300rpx;
					margin-left: 20rpx;

					text {
						color: #FFFFFF;
						font-size: 25rpx;
					}

					.middle-start {
						display: inline-block;
						margin-top: 15rpx;
						width: 150rpx;
						height: 30rpx;
						background-color: #38070f;
						border-radius: 50rpx;
						opacity: 0.5;

						image {
							text-align: center;
							margin-left: 12rpx;
							width: 17rpx;
							height: 17rpx;
						}
					}
				}

				.right {
					margin-left: 110rpx;
					display: flex;
					flex-direction: column;

					image {
						width: 25rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}

					button {
						width: 150rpx;
					}
				}
			}

			.community-shop-message {
				margin-top: 50rpx;
				height: 830rpx;
				display: flex;

				.message-left {
					width: 160rpx;
					height: 100%;

					.category {
						image {
							width: 25rpx;
							height: 25rpx;
						}

						text {
							margin-left: 10rpx;
						}

						height: 80rpx;
						line-height: 80rpx;
						width: 160rpx;
						padding-left: 30rpx;
					}
				}

				.message-right {
					margin-left: 20rpx;

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
							width: 370rpx;
							margin-left: 20rpx;
							margin-right: 20rpx;
							border-bottom: 1rpx solid #999999;

							.right-top {
								text {
									font-size: 30rpx;
								}

								p {
									margin-top: 10rpx;
									color: #999999;
								}
							}

							.right-bottom {
								margin-top: 30rpx;
								display: flex;

								.old-price {
									text-decoration: line-through;
									margin-left: 15rpx;
									font-size: 25rpx;
									color: #999999;
								}

								.last {

									width: 200rpx;
									height: 50rpx;
									display: flex;
									border: solid 1px #d9d9d9;
									margin-left: 18rpx;
									margin-bottom: 10rpx;

									.ao {
										width: 90rpx;
										height: 46rpx;
										line-height: 46rpx;
										text-align: center;
										margin-top: auto;
										margin-bottom: auto;
										border-left: solid 1px #d9d9d9;
										border-right: solid 1px #d9d9d9;
									}

									button::after {
										display: none
									}

									button:nth-child(1) {
										line-height: 50rpx;
										background-color: #FFFFFF;
									}

									button:last-child {
										line-height: 50rpx;
										background-color: #FFFFFF;
									}
								}
							}
						}
					}
				}
			}

			.community-settlement {
				width: 100%;
				position: fixed;
				bottom: 0;
				border-top: 1px solid #999999;
				display: flex;
				height: 120rpx;

				.settlement-left {
					margin-top: 20rpx;
					height: 100%;
					display: flex;

					image {
						margin-left: 20rpx;
						margin-top: 20rpx;
						width: 45rpx;
						height: 45rpx;
					}

					.total {
						position: absolute;
						left: 44rpx;
						background-color: red;
						z-index: 3;
						height: 33rpx;
						width: 33rpx;

						text {
							color: #FFFFFF;
						}
					}

					.left-shop {
						margin-left: 20rpx;
						color: #999999;

						.old-price {
							text-decoration: line-through;
							margin-left: 15rpx;
							font-size: 25rpx;
							color: #999999;
						}
					}
				}

				.settlement-right {
					position: absolute;
					top: 20rpx;
					right: 20rpx;
					button {
						width: 250rpx;
						height: 80rpx;
						margin-left: 10rpx;
						background-color: #999999;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
