<template>
	<view class="community-shop">
		<view class="community-shop-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>社区店铺</text>
			</view>
			<!-- 搜索框 -->
			<view class="search" @click="goTo('/pages/search/search')">
				<view class="cu-bar search">
					<view class="search-form round search-box">
						<input style="padding-left: 9rpx;" type="text" placeholder="搜索" placeholder-style="margin-left:30rpx; margin-top:3rpx"
						 confirm-type="search"></input>
						<text class="cuIcon-search" style="padding-right: 20rpx;"></text>
					</view>
				</view>
			</view>

			<!-- 轮播图 -->
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
			<!-- 分类服务 -->
			<view class="community-service">
					<view class="cu-item content">
						<image src="../../static/img/服务分类.png" mode=""></image>
						<p>分类</p>
					</view>
					<view class="cu-item content" >
						<image src="../../static/img/服务分类.png" mode=""></image>
						<p>分类</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类.png" mode=""></image>
						<p>分类</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类.png" mode=""></image>
						<p>分类</p>
					</view>
			</view>
			
			<view class="line-one"></view>
			<!-- 排序 -->
			<view class="community-sort">
				<view class="community-sort-left">
					<text>销量</text>
				</view>
				<view class="community-sort-right">
					<text>价格</text>
				</view>
			</view>
			
			<view class="line-two"></view>
			<!-- 商品列表展示 -->
			<view class="community-shop-list">
				<view class="left">
					<image src="../../static/img/服务分类.png" mode=""></image>
				</view>
				<view class="right">
					<p>四季鲜果</p>
					<image src="../../static/img/星.png" mode=""></image><text style="margin-left: 10rpx; color: #fe5022;">4.5</text><text style="margin-left: 20rpx;">月售1122</text><text style="margin-left: 190rpx;">距离 1.3km</text>
					<view class="right-label">
						<view class='cu-tag light bg-orange label'>食材新鲜</view>
						<view class='cu-tag light bg-green label'>种类多</view>
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
			}
		},
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			back(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.community-shop {
		.community-shop-title {
			height: 360rpx;
			background-image: url(../../static/img/beij.png);
			background-size: 100%;
			background-repeat: no-repeat;
			.title-top {			
				font-size: 35rpx;
				color: #FFFFFF;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
			.search{
				margin-top: 20rpx;
			}
			.swiper {
				width: 90%;
				position: relative;
				margin: 0 auto;

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
			.community-service{
				display: flex;
				text-align: center;
				margin-top: 40rpx;
				margin-bottom: 30rpx;
				.content{
					width: 25%;
					image{
						width: 90rpx;
						height: 90rpx;
					}
				}
			}
			.line-one{
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.community-sort{
				background-color: #FFFFFF;
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				display: flex;
				justify-content: space-around;
			}
			.line-two{
				width: 100%;
				height: 10rpx;
				background-color: #f2f2f2;
			}
			.community-shop-list{
				width: 100%;
				height: 210rpx;
				display: flex;
				.left{
					margin-left: 25rpx;
					margin-top: 25rpx;
					image{
						width: 160rpx;
						height: 160rpx;
					}
				}
				.right{
					margin-left: 30rpx;
					border-bottom: 2px solid #f2f2f2;
					padding-top: 35rpx;
					image{
						margin-top: 25rpx;
						width: 20rpx;
						height: 20rpx;
					}
					.right-label{
						margin-top: 25rpx;
						.label{
							width: 100rpx;
							height: 37rpx;
						}
					}
				}
			}
		}
	}
</style>
