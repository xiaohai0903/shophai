<template>
	<view class="store-information" :style="{backgroundImage:'url('+backgroundImage+')'}">
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>{{title}}</text>
		</view>
		<!-- 店铺信息 -->
		<view class="shop-name">
			<image src="../../static/img/dbdh.png" mode=""></image>
			<text class="shop-title">{{title}}</text>
			<text class="shop-concern">3000人关注</text>
			<button class="cu-btn round bg-gradual-orange" @click="collection">收藏</button>
			<button class="cu-btn round bg-gradual-orange">客服 </button>
		</view>
		<!-- 搜索 -->
		<view class="cu-bar search lookup">
			<view class="search-form round search-box" style="width: 550rpx;">
				<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
				<text class="cuIcon-search"></text>
			</view>
			<button @click="search_bt" class="cu-btn round">搜索</button>
		</view>

		<view class="ordering">
			<text>销量</text>
			<text style="margin-left: 300rpx ;">价格</text>
		</view>
		<!-- 商品信息 -->
		<view class="cu-card case shop">
			<view class="cu-item shadow">
				<view class="main">
					<view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
					</view>
					<view class="content">
						<view class="left">
							<view class="shop-goods">
								精品大番茄
							</view>
							<view class="cu-progress round sm striped" style="width:270rpx; margin-top: 10rpx;">
								<view class="bg-red" style="width: 60%;"></view>
							</view>
							<text>仅剩一份</text>
						</view>
						<view class="right" style="border-left: solid 1rpx;">
							<text class="first">次日到达</text>
							<view class="second">
								预计到货
							</view>
						</view>
					</view>
				</view>
				<view class="underside">
					<view class="price">
						<text style="color: red;
					font-size: 40rpx;">￥14.8</text>
						<text>￥18</text>
					</view>
					<button class="cu-btn round bg-gradual-green">立即购买</button>
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
				backgroundImage: [
					'../../static/img/banner.png'
				],
				collect:false
			}
		},
		onLoad(options) {
			// 获取当前跳转的页面值
			this.title = options.value
		},
		methods: {
			//回退
			back() {
				uni.navigateTo({
					url: './search'
				})
			},
			collection(e){
				this.collect =! this.collect
				if(this.collect==true){
					uni.showToast({
						title:"收藏成功",
						icon:'success',
						duration:1000,
						image:'../../static/img/dian.png'
					})
				}else{
					uni.showToast({
						title:'已取消',
						icon:'success',
						duration:1000,
						image:''
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.store-information {
		height: 330rpx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		.title {
			position: absolute;
			left: 20rpx;
			padding-top: 80rpx;

			text:nth-child(2) {
				padding-left: 20rpx;
				font-size: 40rpx;
				line-height: 40rpx;
			}
		}

		.shop-name {
			width: 100%;
			position: absolute;
			left: 25rpx;
			top: 170rpx;
			button{
				width: 140rpx;
			}
			image {
				height: 120rpx;
				width: 120rpx;
				
			}

			.shop-title {
				position: absolute;
				left: 160rpx;
				top: 20rpx;

			}

			.shop-concern {
				position: absolute;
				left: 300rpx;
				top: 70rpx;
			}

			.collection {
				position: absolute;
				left: 590rpx;
				top: -10rpx;
			}

			.customer {
				position: absolute;
				left: 590rpx;
				top: 75rpx;
			}

		}

		.lookup {
			position: absolute;
			top: 350rpx;

			text {
				padding-right: 25rpx;
			}
		}

		.ordering {
			position: absolute;
			top: 460rpx;
			left: 150rpx;
		}

		.shop {
			position: relative;
			top: 550rpx;
		}

		.content {
			padding-top: 10rpx;
			display: flex;
			.left{
				width: 70%;
				margin-left: 25rpx;
			}
			.right{
				padding-left: 10rpx;
				text-align: center;
				.first{
					color: red;
					font-size: 40rpx;
				}
				.second{
					margin-top: 5rpx;
				}
			}
		}
		.underside{
			padding-bottom: 20rpx;
			display: flex;
			margin-top: 20rpx;
			.price{
				
				text{
					margin-left: 20rpx;
				}
			}
			button{
				margin-left: 300rpx;
			}
		}
	}
</style>
