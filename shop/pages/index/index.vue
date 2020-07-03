<template>
	<scroll-view scroll-y="true" class="scroll-Y">
		<view class="box">
			<view class="title">
				<text style="color: white; font-size: 33rpx;">社区</text>
			</view>
			<view class="top">
				<view class="left" @click="goTo('/pages/adress/adress')">
					<text style="color: white;" class="cuIcon-location"></text>
					<text style="color: white; padding-left: 10rpx; white-space: nowrap;">{{city}}</text>
				</view>
				<view class="right" @click="goTo('/pages/search/search')">
					<view class="cu-bar search">
						<view class="search-form round search-box">
							<input style="padding-left: 9rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
							<text class="cuIcon-search"></text>
						</view>
					</view>
				</view>
			</view>
			<!-- 轮播图部分 -->
			<view>
				<swiper class="swiper" :current="swiperCurrent" @change="swiperChange" circular="true" :autoplay="true" :interval="5000"
				 :duration="1000">
					<block v-for="(item,index) in imageList" :key="index">
						<swiper-item class="swiperItem">
							<image :src="item.src" mode=""></image>
						</swiper-item>
					</block>
				</swiper>
				<view class="dots">
					<block v-for="(item,index) in imageList" :key="index">
						<view class="dot" :class="index == swiperCurrent ?' active' : ''"> </view>
					</block>
				</view>
			</view>

			<!-- tabber -->
			<view class="tabbar main" style="margin-top: 30rpx;">
				<view class="cu-item content">
					<image src="../../static/img/全网购.png" mode=""></image>
					<text style="text-align: center;">全网购</text>
				</view>
				<view class="cu-item content" @click="shopClick">
					<image src="../../static/img/社区店铺.png" mode=""></image>
					<text style="text-align: center;">社区店铺</text>
				</view>
				<view class="cu-item content" @click="serviceClick">
					<image src="../../static/img/社区服务.png" mode=""></image>
					<text style="text-align: center;">社区服务</text>
				</view>
				<view class="cu-item content">
					<image src="../../static/img/成为会员.png" mode=""></image>
					<text style="text-align: center;">成为会员</text>
				</view>
			</view>

			<view class="tabbar-bottom">
				<view class="cu-item content">
					<image src="../../static/img/爆款活动.png" mode=""></image>
				</view>
				<view class="cu-item content">
					<image src="../../static/img/预售活动.png" mode=""></image>
				</view>
			</view>

			<!-- 商品展示部分 -->
			<view class="cu-card article shop">
				<view class="cu-item shadow">
					<view class="title1">
						<image style="width: 100%; height: 360rpx;" src="../../static/img/微信截图_20200527105752.png" mode=""></image>
					</view>
					<view class="content">
						<view class="left">
							<view class="content-top">
								精品带肉汤骨滋补
							</view>
							<view class="cu-progress round sm striped bg-red" style="width: 250rpx;" >
								<view style="width: 100%;">
									已销售1111
								</view>
							</view>
							仅剩一份
						</view>
						<view class="right">
							<view class="next-day">
								次日到达
							</view>
							<view class="arrival">
								预计到货
							</view>
						</view>
					</view>
					<view class="bottom">
						<view class="new-price">
							<text style="color: red; font-size: 40rpx;">$30</text><text style="color: red;">.8</text><text>/份</text>
							<text class="old-price">$50</text>
						</view>
						<view class="buy">
							<button class="cu-btn round" @click="orderClick">立即购买</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
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
				city: '南昌市'
			}
		},
		onLoad() {
			this.getCity()
		},
		methods: {
			// 自定义轮播指示点
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			goTo(url) {
				uni.navigateTo({
					url
				})
			},
			//获取当前city值
			getCity() {
				this.city = uni.getStorageSync('city')
			},
			orderClick(){
				uni.navigateTo({
					url:'../order/Order'
				})
			},
			//社区店铺跳转
			shopClick(){
				uni.navigateTo({
					url:'../communityshop/CommunityShop'
				})
			},
			serviceClick(){
				uni.navigateTo({
					url:"../communityshop/CommunityService"
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-Y {
		height: 100vh;
	}

	.box {
		height: 500rpx;
		background-image: url(../../static/img/beij.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;

		.title {
			position: relative;
			left: 30rpx;
			top: 80rpx;
		}

		.top {
			display: flex;
			margin-top: 160rpx;
			margin-left: 20rpx;

			.left {
				width: 200rpx;
				margin-top: 30rpx;
			}

			.right {
				.search-box {
					width: 550rpx;
					border-radius: 25rpx;
				}
			}
		}
	}

	.swiper {
		width: 100%;
		position: relative;

		.swiperItem {
			width: 700rpx;
			height: 300rpx;
			text-align: center;

			image {
				width: 700rpx;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}

	.dots {
		position: relative;
		left: 0;
		right: 0;
		bottom: 20rpx;
		display: flex;
		justify-content: center;

		.dot {
			margin: 0 8rpx;
			width: 14rpx;
			height: 14rpx;
			background: #EEEEEE;
			border-radius: 8rpx;
			transition: all .6s;
		}

		.active {
			width: 24rpx;
			background: #DDDDDD
		}
	}

	.shop {
		.content {
			margin-top: 20rpx;
			.left {
				width: 100%;
			}

			.right {
				width: 200rpx;
				border-left: 1rpx solid;
				padding-left: 20rpx;
				text-align: center;
				.next-day{
					font-size: 32rpx;
					color: red;
				}
			}
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;
			.new-price {
				.old-price{
					text-decoration:line-through;
					margin-left: 30rpx;
					font-size: 30rpx;
				}
			}
		}
	}

	.main {
		width: 100%;
		display: flex;
		
		.content {
			display: flex;
			flex-direction: column;
			text-align: center;
			width: 25%;
			image {
				margin: 0 auto;
				width: 100rpx;
				height: 100rpx;
			}
		}
	}

	.tabbar-bottom {
		width: 100%;
		margin-top: 40rpx;
		display: flex;
		.content {
			display: flex;
			flex-direction: column;
			text-align: center;
			width: 50%;
			image {
				margin: 0 auto;
				width: 340rpx;
				height: 170rpx;
			}
		}
	}
</style>
