<template>
	<view class="my-post">
		<view class="my-post-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>我的发布</text>
			</view>
			
			<view class="cu-timeline">
				<view class="cu-time">昨天</view>
				<view class="cu-item cur ">
				    <view class="content shadow-blur">
				     
				    </view>
				  </view>
					<view class="cu-item cur ">
					    <view class="content shadow-blur">
					     
					    </view>
					  </view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.cu-timeline>.cu-item:not([class*="cuIcon-"])::before{
		color: green;
		font-size: 10rpx;
	}
	.my-post{
		.my-post-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>
