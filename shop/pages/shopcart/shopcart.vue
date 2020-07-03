<template>
	<view class="shop-cart">
		<view class="shop-cart-title">
			<view class="title-top">
				<text style="margin-left:20rpx;">购物车</text>
			</view>
			<!-- 没有商品时候显示 -->
			<view class="shippingAddress-image" v-if="false">
				<image src="../../static/img/空空如也.png" mode=""></image>
				<p>空空如也</p>
				<button class="cu-btn round lines-green">去看看</button>
			</view>
			<!-- 有商品的时候显示 -->
			<view class="shop-user">
				<p>周小海</p>
				<p @click=editClick>编辑商品</p>
			</view>
			<view class="line-one"></view>
			<view class="store-goods">
				<view class="goods-top">
					<view class="left">
						<image v-if="allChecked" src="../../static/img/勾3.png" mode=""></image>
						<image v-else src="../../static/img/勾2.png" mode=""></image>
						<p>芊芊好店</p>
					</view>
					<image src="../../static/img/返回.png" mode="" style="height: 30rpx; width: 20rpx;"></image>
				</view>
				
				<view class="main-content">
					<view class="main-image" @click="goodsClick">
						<image v-if="ischecked" src="../../static/img/勾2.png" mode=""></image>
						<image v-else src="../../static/img/勾3.png" mode=""></image>

					</view>
					<view class="left">
						<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-top">
							<text>你是我儿我是你爹，你是我儿我是你爹，你是我儿</text>
						</view>
						<view class="right-bottom">
							<view class="">
								<text style="color: red; font-size: 40rpx;">$30</text><text style="color: red;">.8</text><text>/份</text>
								<text class="old-price">$50</text>
							</view>
							<view class="last">
								<button class="cu-btn">-</button>

									<text>1111</text>

								<button class="cu-btn">+</button>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="line-one"></view>
			<view class="store-goods">
				<view class="goods-top">
					<view class="left" @click="allsChecked">
						<image v-if="allChecked" src="../../static/img/勾3.png" mode=""></image>
						<image v-else src="../../static/img/勾2.png" mode=""></image>
						<p>芊芊好店</p>
					</view>
					<image src="../../static/img/返回.png" mode="" style="height: 30rpx; width: 20rpx;"></image>
				</view>
				
				<view class="main-content">
					<view class="main-image" @click="goodsClick">
						<image v-if="ischecked" src="../../static/img/勾2.png" mode=""></image>
						<image v-else src="../../static/img/勾3.png" mode=""></image>
			
					</view>
					<view class="left">
						<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-top">
							<text>你是我儿我是你爹，你是我儿我是你爹，你是我儿</text>
						</view>
						<view class="right-bottom">
							<view class="">
								<text style="color: red; font-size: 40rpx;">$30</text><text style="color: red;">.8</text><text>/份</text>
								<text class="old-price">$50</text>
							</view>
							<view class="last">
								<button class="cu-btn">-</button>
			
									<text>1111</text>
			
								<button class="cu-btn">+</button>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="line-one"></view>
			<view class="intruduction-title">
				<image src="../../static/img/gang.png" mode=""></image>
				<p style="padding-left: 20rpx; margin-top: -5rpx;">精品推荐</p>
			</view>
			<view class="products-featured">
				<image src="../../static/img/banner.png" mode=""></image>
			</view>
			
			<view class="settlement">
				<view class="left">
					<image v-if="ischecked" src="../../static/img/勾2.png" mode=""></image>
					<image v-else src="../../static/img/勾3.png" mode=""></image>
					<text>全选</text>
				</view>
				<view class="right">
					<view class="box1">
						<view class="right-top">
							<text>合计:<text style="color:#ff4a12; font-size: 40rpx;margin-left: 20rpx;">￥30</text><text style="color: red;">.8</text></text>						
						</view>
						<view class="right-bottom">
							<text>￥50</text>
							<text>优惠￥20</text>
						</view>
					</view>
					<button v-if="editChecked" class="cu-btn round bg-gradual-green">去 结 算(1)</button>
					<button v-else class="cu-btn round line-black" @click="deleteClick">删 除(3)</button>
				</view>
			</view>
			
			
			<view class="announcement" :class="{sheetShow:announcement,sheeHide:!announcement}">
				<view class="announcement-main">
					<view class="main-top">
						<text>确定删除这1件宝贝吗</text>
					</view>
					<view class="main-bottom">
						<view class="left" @click="closeClick">
							<text>取消</text>
						</view>
						<view class="right bg-gradual-green">
							<text>确定</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ischecked:false,
				allChecked:true,
				editChecked:true,
				announcement:false
			}
		},
		methods:{
			goodsClick(){
				this.ischecked=!this.ischecked
			},
			editClick(){
				this.editChecked = !this.editChecked
			},
			closeClick() {
				this.announcement = !this.announcement
			},
			deleteClick(){
				this.announcement = !this.announcement
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.shop-cart{
		.shop-cart-title{
			.line-one{
				margin-top: 40rpx;
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.intruduction-title {
				display: flex;
				padding: 20rpx 30rpx;			
				image {
					width: 8rpx;
					height: 30rpx;
				}
			}
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.shippingAddress-image{
				text-align: center;
				
				image{
					margin-left: 90rpx;
				}
				button{
					margin-top: 80rpx;
					height: 70rpx;
					width: 320rpx;
				}
			}
			.shop-user{
				display: flex;
				justify-content: space-between;
				margin-left: 30rpx;
				margin-right: 30rpx;
				margin-top: 30rpx;
				p:nth-child(2){
					color: #fe8872;
				}
			}
			.store-goods{
				.goods-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 30rpx;
					margin-right: 20rpx;
					.left{
						image{
							width: 40rpx;
							height: 40rpx;
						}
						p{
							margin-left: 25rpx;
						}
						margin-left: 20rpx;
						display: flex;
					}
				}
				.main-content {
					display: flex;
					margin-top: 20rpx;
					.main-image{
						margin: auto 20rpx;
						image{
							width: 40rpx;
							height: 40rpx;
						}
					}
					.left {
						image {
							width: 160rpx;
							height: 160rpx;
							border-radius: 10rpx;
						}
					}
				
					.right {
						margin-left: 20rpx;
						margin-right: 20rpx;
				
						.right-top {}
				
						.right-bottom {
							margin-top: 40rpx;
							display: flex;
				
							.old-price {
								text-decoration: line-through;
								margin-left: 30rpx;
								font-size: 30rpx;
							}
				
							.last {
								display: flex;
								border: solid 1px #d9d9d9 ;
								margin-left: 50rpx;
								text{									
									width: 90rpx;
									text-align: center;
									margin-top: auto;
									margin-bottom: auto;
								}
								button:nth-child(1){
									border-radius: 0;
									border-right: solid 1px #d9d9d9;
									background-color: #FFFFFF;
									width: 50rpx;
									height: 50rpx;
								}
								button:last-child{
									border-radius: 0;
									width: 50rpx;
									height: 50rpx;
									border-left: solid 1px #d9d9d9;
									background-color: #FFFFFF;
								}
							}
						}
					}
				}
			}
			.products-featured{
				background-color: #f2f2f2;
				text-align: center;
				image{
					margin-top: 20rpx;
					width: 700rpx;
					height: 500rpx;
				}
			}
			.settlement{
				position: fixed;
			  bottom: 94rpx;
				height: 100rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				background-color: #FFFFFF;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.left{
					line-height: 100rpx;
					text{
						margin-left: 20rpx;
					}
					image{
						top: 10rpx;
						height: 40rpx;
						width: 40rpx;
					}
				}
				.right{
					display: flex;
					width: 70%;
					button{
						width: 220rpx;
						height: 80rpx;
					}
					.box1{
						width: 70%;
						.right-top{
							margin-left: 65rpx;
						}
						.right-bottom{
							margin-left: 65rpx;
							text:nth-child(1){
								text-decoration: line-through;
								margin-left: 15rpx;
								font-size: 30rpx;
								color: #999999;
							}
							text:nth-child(2){
								margin-left: 10rpx;
								color: #999999;
							}
						}
					}
					button{
						margin:auto 0;
					}
				}
			}
			.announcement{
				width: 100%;
				height: 100%;
				position: fixed;
				top: 50%rpx;
				left: 50%rpx;
				bottom: 0upx;
				right: 0upx;
				background: rgba(0, 0, 0, 0.3);
				z-index: 10000;
				transition: all 0.2s ease-in;
				margin: auto;
				.announcement-main{
					position: absolute;
					top: 40%;
					transform: translateX(25%);
					width: 500rpx;
					height: 250rpx;
					border-radius: 25rpx;
					background-color: #FFFFFF;
					.main-top{
						line-height: 160rpx;
						text-align: center;
						height: 160rpx;
						border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
						text{
							font-size: 35rpx;
						}
					}
					.main-bottom{
						display: flex;
						.left{
							flex: 1;
						}
						.right{
							flex: 1;
							border-radius: 0 0 25rpx 0;
						}
						height: 90rpx;
						line-height: 90rpx;
						text-align: center;
					}
				}
			}
			.sheetShow {
				top: 0rpx ;
			}
			
			/* 关闭时的动画，时间自己可以设置0.5s*/
			.sheeHide {
				top: 200% ;
				transition: all;
			}
		}
	}
</style>
