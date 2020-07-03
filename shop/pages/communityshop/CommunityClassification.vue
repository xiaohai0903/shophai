<template>
	<view class="community-cs">
		<view class="community-cs-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">分类</text>
			</view>
			
			<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
				<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;border-radius: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
					<text class="cuIcon-search" style="padding-right: 20rpx;"></text>
				</view>
				<button @click="search_bt" class="cu-btn round" style="margin-right: 20rpx;">搜索</button>
			</view>
			
			<view class="community-sort">
				<view class="community-sort-left">
					<text>距离</text>
				</view>
				<view class="community-sort-right">
					<text>销量</text>
				</view>
			</view>
			
			<view class="line-one"></view>
			
			<view class="community-shop-list">
				<view class="left">
					<image src="../../static/img/发布商品.png" mode=""></image>
				</view>
				<view class="right">
					<p>四季鲜果</p>
					<image src="../../static/img/星.png" mode=""></image><text style="margin-left: 10rpx; color: #fe5022;">4.5</text><text style="margin-left: 20rpx;">月售1122</text><text style="margin-left: 180rpx;">距离 1.3km</text>
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
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.community-cs{
		.community-cs-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
			.community-sort{
				background-color: #FFFFFF;
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				display: flex;
				justify-content: space-around;
			}
			.line-one{
				width: 100%;
				height: 20rpx;
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
