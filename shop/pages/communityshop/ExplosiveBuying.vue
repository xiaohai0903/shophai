<template>
	<view class="explosive-buying">
		<view class="explosive-buying-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">爆款抢购</text>
			</view>
			<!-- 搜索框 -->
			<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
				<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;border-radius: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
					<text class="cuIcon-search" style="padding-right: 20rpx;"></text>
				</view>
				<button @click="search_bt" class="cu-btn round" style="margin-right: 20rpx;">搜索</button>
			</view>
			
			<view class="explosive-top">
				<view class="box bg-gradual-green">
					<text>正在抢购</text>
				</view>
				<view class="box">
					<text>即将开枪</text>
				</view>
				<view class="box-right">
					<p>仅剩</p><text>12</text>: <text>12</text>:<text>12</text>
				</view>
			</view>
			
			<view class="line-four bg-gradual-green"></view>
		
		
		</view>
		
		<view class="service-details">
			<view class="details-top">
				<view class="left">
					<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
				</view>
				<view class="right">
					<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
					<p style="font-size: 15rpx; color: #999999;">图片参考</p>
					<view class="cu-capsule round">
									<view class='cu-tag bg-gradual-orange'>
														已售111份
													</view>
													<view class="cu-tag line-orange">
														仅剩一份
													</view>
								</view>
					<view class="new-price">
						<text style="color: red; font-size: 40rpx;">￥30</text><text style="color: red;">.8</text><text>/份</text>
						<text class="old-price">$50</text>
					</view>
				</view>
			</view>
			<view class="detaill-bottom">
				<p>预售时间:<text>2020-06-17</text></p>
				<p>提货时间:<text>2020-06-17</text></p>
			</view>
		</view>
		<view class="service-details">
			<view class="details-top">
				<view class="left">
					<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
				</view>
				<view class="right">
					<p style="font-size: 30rpx;">免租二个月万达形成东区二十接1111</p>
					<p style="font-size: 15rpx; color: #999999;">图片参考</p>
					<view class="cu-capsule round">
									<view class='cu-tag bg-gradual-orange'>
														已售111份
													</view>
													<view class="cu-tag line-orange">
														仅剩一份
													</view>
								</view>
					<view class="new-price">
						<text style="color: red; font-size: 40rpx;">￥30</text><text style="color: red;">.8</text><text>/份</text>
						<text class="old-price">$50</text>
					</view>
				</view>
			</view>
			<view class="detaill-bottom">
				<p>预售时间:<text>2020-06-17</text></p>
				<p>提货时间:<text>2020-06-17</text></p>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	page{
		background-color: #f2f2f2;
	}
	.explosive-buying{
		.service-details {
			.details-top{
				padding-bottom: 20rpx;
				display: flex;
				border-bottom: 1rpx solid #999999;
				.left {
					margin-left: 15rpx;
					margin-top: 25rpx;
					image {
						border-radius: 20rpx;
						width: 230rpx;
						height: 230rpx;
					}
				}						
				.right {
					display: flex;
					flex-direction: column;
					margin-left: 30rpx;
					margin-top: 20rpx;
					width: 400rpx;
						.new-price {
							flex: 1;
							margin-top: 5rpx;
							.old-price{
								text-decoration:line-through;
								margin-left: 30rpx;
								font-size: 30rpx;
								color: #999999;
							}
						}
					p {
						flex: 1;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
			.detaill-bottom{
				margin-top: 25rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
				display: flex;
				justify-content: space-between;
				p{
					color: #999999;
				}
				text{
					color:#48c689;
				}
			}
			border-radius: 20rpx;
			background-color: #FFFFFF;
			position: relative;
			width: 90%;
			height: 370rpx;
			top: 20rpx;
			margin: 20rpx auto;
		}
		.explosive-buying-title{
			background-color: #FFFFFF;
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			
			.explosive-top{
				width: 90%;
				margin: 0 auto;
				display: flex;
				.box{
					width:190rpx ;
					height: 70rpx;
					border-radius: 10rpx;
					background:linear-gradient(-115deg, transparent 42rpx, #932323 0) top right;
					background-size: 100% 100%;
					background-repeat: no-repeat;
				}
				.box-right{
					display: flex;
					p{
						margin-right: 10rpx;
					}
					text{
						
						color: #FFFFFF;
						height: 35rpx;
						line-height: 35rpx;
						text-align: center;
						width: 40rpx;
						background-color: #333333;
					}
					position: absolute;
					margin-top: 15rpx;
					right: 45rpx;
				}
			}
			
			.line-four{
				width: 90% !important;
				height: 3rpx;
				margin: 0 auto;
			}
		}
		
	}

</style>
