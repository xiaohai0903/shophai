<template>
	<view class="shipping-address">
		
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>收货地址</text>
		</view>
		
		<view class="shipping-main">
			<view class="adress-content" @click="defaultClick">
				<view class="adress-title">
					<text>欧阳飘絮</text>
					<text style="margin-left: 30rpx;">13876263500</text>
					<button class="cu-btn round bg-gradual-green">默认</button>
				</view>
				<view class="adress-main">
					江西省 南昌市 西湖区 朝阳桃花一存
					<image src="../../../static/img/bi.png" mode=""></image>
				</view>
			</view>
			<view class="adress-content" @click="defaultClick">
				<view class="adress-title">
					<text>欧阳飘絮</text>
					<text style="margin-left: 30rpx;">13876263500</text>
					<button class="cu-btn round bg-gradual-green">默认</button>
				</view>
				<view class="adress-main">
					江西省 南昌市 西湖区 朝阳桃花一存
					<image src="../../../static/img/bi.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="shippingAddress-image" v-if="false">
			<image src="../../../static/img/空空如也.png" mode="" class="xiaohai"></image>
			<view class="" style="text-align: center;">
				空空乳液
			</view>
		</view>
		
		<view class="new-adress">
			<button class="cu-btn round lg bg-gradual-green" @click="newAdress">新建地址</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					
				})
			},
			newAdress(){
				uni.navigateTo({
					url:'./NewAdress'
				})
			},
			defaultClick(){
				
			}
		}
	}
</script>

<style scoped lang="less">
	.shipping-address{
		position: relative;
		height: 100vh;
		.title {
			height: 140rpx;
			padding-top: 80rpx;
		
			text:nth-child(2) {
				padding-left: 20rpx;
				font-size: 40rpx;
				line-height: 40rpx;
			}
		}
		.shipping-main{
			margin-top: 30rpx;
			border-top: solid 1rpx #dbdbdb;
			.adress-content{
				height: 160rpx;
				border-bottom:solid 1rpx #dbdbdb ;
				padding-left: 25rpx;
				padding-top: 20rpx;
				.adress-title{
					button{
						margin-left: 90rpx;
						height: 45rpx;
						weight: 90rpx;
					}
				}
				.adress-main{
					margin-top: 20rpx;
					image{
						margin-left: 200rpx;
						width: 36rpx;
						height: 36rpx;
					}
				}
			}
		}
		.shippingAddress-image{
			position: absolute;
			right: 1em;
			left: 1em;
			margin: 50rpx auto;
			image{
				width: 100%;
			}
		}
		.new-adress{
			width: 100%;
			position: fixed;
			bottom: 30rpx;
			text-align: center;
			button{
				width: 90%;
			}
		}
	}
</style>
