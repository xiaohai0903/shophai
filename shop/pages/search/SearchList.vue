<template>
	<view class="search-list">
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>{{title}}</text>
			
			<!-- 搜索 -->
			<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
				<view class="search-form round search-box" style="width: 550rpx;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
					<text class="cuIcon-search"></text>
				</view>
				<button @click="search_bt" class="cu-btn round">搜索</button>
			</view>
		</view>
		<view class="ordering">
			<view class="ordering-left">
				<text>销量</text>
			</view>
			<view class="ordering-right">
				<text>价格</text>
			</view>
		</view>
		
		<!-- 商品展示 -->
		<view class="cu-card case shop">
			<view class="cu-item shadow">
				<view class="main" @click="searchListItem">
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
		
		<view class="cu-card case shop">
			<view class="cu-item shadow">
				<view class="main" @click="searchListItem">
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
			}
		},
		// 获取搜索的值
		onLoad(options) {
			this.title = options.value
		},
		methods:{
			back(){
				uni.navigateTo({
					url:'./search'
				})
			},
			goTo(url){
				uni.navigateTo({
					url
				})
			},
			searchListItem(){
				uni.navigateTo({
					url:'./SearchListItem?value='+this.title
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.search-list {
		height: 330rpx;
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
			.lookup {
				position: absolute;
				top: 165rpx;
				text {
					padding-right: 25rpx;
				}
			}
		}
		.ordering {
			width: 100%;
			position: absolute;
			top: 285rpx;
			display: flex;
			justify-content: space-around;
			.ordering-left{

			}
			.ordering-right{

			}
		}
		.shop {
			position: relative;
			top: 360rpx;
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
