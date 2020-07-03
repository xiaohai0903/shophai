<template>
	<view class="personal-center">
		<view class="personal-center-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>个人中心</text>
			</view>

			<view class="avatar">
				<view class="cu-avatar xl round" style="width: 180rpx; height: 180rpx; background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);border: 5rpx solid #FFFFFF;"></view>
			</view>

			<view class="personal-main">
				<view class="cu-form-group" style="border-bottom: 10prx solid #999999;">
					<view class="title">昵&ensp;&ensp;&ensp;&ensp;称</view>
					<input value="xiaohai" name="input"></input>
				</view>
				<view class="cu-form-group">
					<text class="title">手&ensp;机&ensp;号</text>
					<input value="18270112528" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">我的地址</view>
					<input value="江西省 南昌" name="input"></input>
				</view>
			</view>
			<view class="announcement-button">
				<view class="cu-btn round bg-gradual-green button"><text>保存</text></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.personal-center {
		.personal-center-title {
			height: 300rpx;
			background-image: url(../../static/img/beij.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			z-index: 111;

			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
				color: #FFFFFF;
			}

			.avatar {
				margin-top: 55rpx;
				text-align: center;
				z-index: 1;

			}

			.personal-main {
				margin-top: 80rpx;
				width: 90%;
				margin: 0 auto;

				.personal-message {
					border-bottom: 1prx solid #999999;
				}

				.title {
					color: #999999;
				}
			}

			.announcement-button {
				width: 100%;
				margin-left: 10rpx;
				position: fixed;
				bottom: 20rpx;
				text-align: center;

				.button {
					width: 90%;
					height: 80rpx;
				}
			}
		}
	}
</style>
