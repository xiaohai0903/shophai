<template>
	<view class="community-service">
		<view class="community-service-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>社区店铺</text>
			</view>
			
			<!-- 搜索框 -->
			<view class="right" @click="goTo('/pages/search/search')">
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
			<view class="community-service-main">
					<view class="cu-item content">
						<image src="../../static/img/二手交易.png" mode=""></image>
						<p>二手交易</p>
					</view>
					<view class="cu-item content" @click="houseClick" >
						<image src="../../static/img/家政服务.png" mode=""></image>
						<p>家政服务</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/信息发布.png" mode=""></image>
						<p>信息发布</p>
					</view>
					<view class="cu-item content" @click="houseleaseClick">
						<image src="../../static/img/房屋租赁.png" mode=""></image>
						<p>房屋租凭</p>
					</view>
			</view>
			<view class="community-service-main">
					<view class="cu-item content">
						<image src="../../static/img/跑腿服务.png" mode=""></image>
						<p>跑腿服务</p>
					</view>
					<view class="cu-item content" >
						<image src="../../static/img/教育培训.png" mode=""></image>
						<p>教育培训</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/爱打听.png" mode=""></image>
						<p>爱打听</p>
					</view>
					<view class="cu-item content">
						<image src="../../static/img/服务分类.png" mode=""></image>
						<p>服务分类</p>
					</view>
			</view>
			
			<view class="line-one"></view>
			<!-- 全部服务 -->
			<view class="community-service-all">
				<view class="service" style="">
					房屋租凭
				</view>
				<view class="service" style="">
					房屋租凭
				</view>
			</view>
			
			<view class="line-two"></view>
			<!-- 详细信息 -->
			<view class="service-details">
				<view class="left">
					<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
					<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
					<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text>06-9</text></p>
				</view>
				<view class="right">
					<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
				</view>
			</view>
			
			<view class="add" @click="addClick">
				<image src="../../static/img/加.png" mode=""></image>
			</view>
			
			
			<view class="announcement-img" :class="{sheetShow:announcement,sheeHide:!announcement}">
				<view class="xiaohai">
					<view class="announcement-x">
						<image src="../../static/img/X (2).png" mode="" @click="closeClick"></image>
					</view>
					<view class="announcement-pop">
						<image src="../../static/img/好友邀请活动.png" mode=""></image>
					</view>
					<view class="announcement-text">
						<block v-for="(item, index) in 5" :key="index">
							<view class="announcemen-avatar">
								
							</view>
						</block>
					</view>
			
					<view class="announcement-button">
						<view class="cu-btn round bg-gradual-orange button"><text>邀请好友参团</text></view>
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
				announcement: false
			}
		},
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			back(){
				uni.navigateBack({
					
				})
			},
			houseClick(){
				uni.navigateTo({
					url:'Housekeeping'
				})
			},
			houseleaseClick(){
				uni.navigateTo({
					url:'HouseLease'
				})
			},
			closeClick() {
				this.announcement = !this.announcement
			},
			addClick(){
				this.announcement = !this.announcement
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.community-service{
		.community-service-title{
			height: 360rpx;
			background-image: url(../../static/img/beij.png);
			background-size: 100%;
			background-repeat: no-repeat;
			.line-one{
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.line-two{
				width: 100%;
				height: 10rpx;
				background-color: #f2f2f2;
			}
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
			.community-service-main{
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
			.community-service-all{
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				display: flex;
				justify-content: space-around;
				.service{
					height: 100%;
					width: 130rpx;
				}
			}
			.service-details{
				position: relative;
				top: 20rpx;
				width: 90%;
				height: 180rpx;
				margin: 0 auto;
				display: flex;
				border-bottom: 0.01rpx #999999 solid;
				.left{
					width: 400rpx;
					p{
						margin-top: 15rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.right{
					image{
						position: absolute;
						right: 0;
						border-radius: 10rpx;
						width: 250rpx;
						height: 150rpx;
					}
				}
			}
			.add{
				position: fixed;
				right: 20rpx;
				image{
					width: 90rpx;
					height: 90rpx;
				}
			}
			
			.announcement-img {
			
				width: 100%;
				height: 100%;
				position: fixed;
				top: 50%rpx;
				left: 50%rpx;
				bottom: 0upx;
				right: 0upx;
				background: rgba(0, 0, 0, 0.3);
				z-index: 10000;
				transition: all 0.5s ease-out;
			
				.announcement-pop {
					width: 100%;
					position: absolute;
					top: 20%;
					text-align: center;
			
					image {
						width: 640rpx;
						height: 640rpx;
					}
			
					transition: all 0.5s;
				}
			
				.announcement-x {
					position: absolute;
					top: 18%;
					left: 85%;
			
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
			
				.announcement-button {
					width: 100%;
					margin-left: 10rpx;
					position: absolute;
					top: 71%;
					text-align: center;
			
					.button {
						width: 504rpx;
						height: 80rpx;
					}
				}
			
				.announcement-text {
					position: absolute;
					left: 210rpx;
					top: 60%;
					color: #FFFFFF;
					width: 440rpx;
					height: 120rpx;
					display: flex;
					.announcemen-avatar{
						margin-left: 10rpx;
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
						border: 1px dashed #999999;
					}
				}
			}
			.sheetShow {
				top: 0rpx ;
			}
			
			/* 关闭时的动画，时间自己可以设置0.5s*/
			.sheeHide {
				top: 100% ;
				transition: all 0.5s;
			}
			
		}
	}
</style>
