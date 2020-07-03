<template>
	<view class="other-service">
		<view class="other-service-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">其他服务</text>
			</view>
			
			<scroll-view scroll-y="true" class="service-scroll"  >
				<view>
					<swiper class="swiper" @change="swiperChange" :current="swiperCurrent" circular="true" :autoplay="true" :interval="5000"
					 :duration="1000">
						<block v-for="(item,index) in imageList" :key="index">
							<swiper-item class="swiper-item">
								<image :src="item.src" mode=""></image>
							</swiper-item>
						</block>
					</swiper>
					<!-- 广告位 -->
					<view class="Announcement" @click="announClick">
						<image src="../../static/img/公告位.png" mode=""></image>
					</view>
					<view class="dots">
						<view class='cu-tag round'>{{swiperCurrent+1}}/{{imageList.length}}</view>
					</view>
					<view class="house-title">
						<p>免租两个月|瑞鑫猪在|红胶州</p>
						<p>更新: 2020-06-10 <text>浏览: 1次</text></p>
					</view>
					
					<view class="line-one"></view>
					
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="intruduction-title">
							<image src="../../static/img/gang.png" mode=""></image>
							<p style="padding-left: 20rpx; margin-top: -5rpx;">用户介绍</p>
						</view>
						<view class="user-main">
							<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="user-main-phone">
								<p>沙雕</p>
								<p style="color: #999999; margin-top: 10rpx;">18270112582</p>
					
							</view>
							<view class="user-main-img">
								<image src="../../static/img/电话.png" mode=""></image>
							</view>
						</view>
					</view>
					
					<view class="line-one"></view>
					<!-- 套餐项目 -->
					<view class="package-items">
						<view class="intruduction-title">
							<image src="../../static/img/gang.png" mode=""></image>
							<p style="padding-left: 20rpx; margin-top: -5rpx;">套餐项目</p>
						</view>
						<view class="package-main">
							<p>套餐名称<text>￥50</text></p>
						</view>
					</view>
					
					<view class="line-one"></view>
					<!-- 荣誉信息 -->
					<view class="honor-information">
						<view class="intruduction-title">
							<image src="../../static/img/gang.png" mode=""></image>
							<p style="padding-left: 20rpx; margin-top: -5rpx;">荣誉信息</p>
						</view>
						<view class="honor-information-main">
							<text>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</text>
						</view>
					</view>
					<view class="line-one"></view>
					<!-- 推荐服务 -->
					<view class="recommended-service">
						<view class="intruduction-title">
							<image src="../../static/img/gang.png" mode=""></image>
							<p style="padding-left: 20rpx; margin-top: -5rpx;">推荐服务</p>
						</view>
						
						<view class="service-details">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
								<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
								<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text>06-9</text></p>
							</view>
						</view>
						<view class="service-details">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
								<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
								<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text>06-9</text></p>
							</view>
						</view>
						<view class="service-details">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
								<p style="font-size: 15rpx; color: #999999;">祝我 | 精装修 | 巩固中大道</p>
								<p><text style="color: red; font-size:30rpx ;">630</text><text style="font-size: 25rpx;">元/月 </text><text>06-9</text></p>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
			
			<view class="telephone-consultation">
				<view class="consultation-img">
					<image src="../../static/img/shouc.png" mode=""></image>
					<p>收藏</p>
				</view>
				<button class="cu-btn bg-gradual-green lg">电话咨询</button>
			</view>
			
			<view class="announcement-img" :class="{sheetShow:announcement,sheeHide:!announcement}">
				<view class="xiaohai">
					<view class="announcement-x">
						<image src="../../static/img/X (2).png" mode="" @click="closeClick"></image>
					</view>
					<view class="announcement-pop">
						<image src="../../static/img/弹窗.png" mode=""></image>
					</view>
					<view class="announcement-text">
						广告位规则：
					</view>
			
					<view class="announcement-button">
						<view class="cu-btn round bg-gradual-orange button"><text>立即购买</text></view>
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
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
				announcement: false
			}
		},
		methods:{
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			announClick() {
				this.announcement = !this.announcement
			},
			closeClick() {
				this.announcement = !this.announcement
			}
		}
	}
</script>

<style scoped lang="scss">
	.other-service{
		.other-service-title{
			.line-one {
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.swiper {
				width: 100%;
				height: 750rpx;
			
				.swiper-item {
					width: 100%;
					height: 100%;
					image{
						border-radius: 0;
					}
				}
			}
			
			.dots {
				position: absolute;
				right: 0;
				top: 680rpx;
				z-index: 11;
			}
			.Announcement {
				position: absolute;
				top: 20rpx;
				left: 20rpx;
			
				image {
					width: 70rpx;
					height: 70rpx;
				}
			}
			.house-title {
				margin-left: 20rpx;
				margin-top: 40rpx;
				padding-bottom: 20rpx;
			
				p:nth-child(2) {
					font-size: 20rpx;
					color: #999999;
					margin-top: 20rpx;
				}
			
				text {
					position: absolute;
					right: 20rpx;
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
			.user-info {
				width: 90%;
				height: 200rpx;
				margin: 0 auto;
			
				.user-main {
					display: flex;
					margin-top: 20rpx;
			
					.user-main-phone {
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;
						height: 85rpx;
						transform: translateY(10%);
					}
			
					.user-main-img {
						position: absolute;
						right: 20rpx;
			
						image {
							width: 65rpx;
							height: 65rpx;
						}
					}
				}
			}
			.package-items{
				width: 100%;
				margin: 0 auto;
				.intruduction-title{
					padding-left: 40rpx;
				}
				.package-main{
					margin-top: 30rpx;
					width: 100%;
					height: 100rpx;
					background-color: #999999;
					line-height: 100rpx;
					p{
						margin-top: 20rpx;
						margin-left: 20rpx;
					}
					text{
						color: red;
						position: absolute;
						right: 20rpx;
					}
				}
			}
			.honor-information{
				width: 90%;
				margin: 0 auto;
				.honor-information-main{
					text{
						word-break: break-all;
					}
				}
			}
			.recommended-service{
				width: 90%;
				margin: 0 auto;
				.service-details {
					position: relative;
					top: 20rpx;
					height: 180rpx;
					margin: 10rpx auto;
					display: flex;
					border-bottom: 0.01rpx #999999 solid;
				
					.left {
						image {
							position: absolute;
							left: 0;
							border-radius: 10rpx;
							width: 250rpx;
							height: 150rpx;
						}
				
						width: 400rpx;
				
						p {
							margin-top: 15rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				
					.right {
						width: 400rpx;
				
						p {
							margin-top: 15rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
			.telephone-consultation {
				display: flex;
				height: 110rpx;
				.consultation-img{
					background-color: #FFFFFF;
					text-align: center;
					width: 150rpx;
					image{
						margin-top: 18rpx;
						width: 40rpx;
						height: 40rpx;
					}
				}
				position: fixed;
				width: 100%;
				bottom: 0;	
				button {
					flex:1;
					width: 80%;
					height: 110rpx;
					border-radius: 0;
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
					left: 170rpx;
					top: 53%;
					color: #FFFFFF;
					width: 440rpx;
					height: 120rpx;
					word-break: break-all;
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
			.service-scroll{
				height: calc(100vh - 110rpx - 130rpx)
			}
		}
	}
</style>
