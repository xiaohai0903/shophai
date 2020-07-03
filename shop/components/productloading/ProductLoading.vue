<template>
	<view class="wrapper">			
			<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}">
				<view class="title">
					<p>已选商品</p><text>清空</text>
				</view>
					<scroll-view scroll-y="true" class="sheetView" :class="{sheetView_active:isShowBottom}" >
						<view class="main-content">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<view class="right-top">
									<text>排骨 300g</text>
									<p>(冰鲜)精品带肉汤骨</p>
								</view>
								<view class="right-bottom">
									<view class="price">
										<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
										<text class="old-price">￥50</text>
									</view>
									<view class="last">
										<button>-</button>
										<view class="ao">
											<text>1</text>
										</view>
										<button>+</button>
									</view>
								</view>
							</view>
						</view>
						
						<view class="main-content">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<view class="right-top">
									<text>排骨 300g</text>
									<p>(冰鲜)精品带肉汤骨</p>
								</view>
								<view class="right-bottom">
									<view class="price">
										<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
										<text class="old-price">￥50</text>
									</view>
									<view class="last">
										<button>-</button>
										<view class="ao">
											<text>1</text>
										</view>
										<button>+</button>
									</view>
								</view>
							</view>
						</view>
						
						<view class="main-content">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<view class="right-top">
									<text>排骨 300g</text>
									<p>(冰鲜)精品带肉汤骨</p>
								</view>
								<view class="right-bottom">
									<view class="price">
										<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
										<text class="old-price">￥50</text>
									</view>
									<view class="last">
										<button>-</button>
										<view class="ao">
											<text>1</text>
										</view>
										<button>+</button>
									</view>
								</view>
							</view>
						</view>		
						<view class="main-content">
							<view class="left">
								<image src="../../static/img/微信截图_20200528094801.png" mode=""></image>
							</view>
							<view class="right">
								<view class="right-top">
									<text>排骨 300g</text>
									<p>(冰鲜)精品带肉汤骨</p>
								</view>
								<view class="right-bottom">
									<view class="price">
										<text style="color: red; font-size: 30rpx;">￥30</text><text style="color: red;">.8</text>
										<text class="old-price">￥50</text>
									</view>
									<view class="last">
										<button>-</button>
										<view class="ao">
											<text>1</text>
										</view>
										<button>+</button>
									</view>
								</view>
							</view>
						</view>	
					</scroll-view>
				</view>
					
					<view class=" packaging-fee">
						<text>包装费</text> <text style="margin-left: 20rpx;">￥2</text>
					</view>
				
			</view>
			
	</view>
</template>

<script>
	export default{
		props:{
			isShowBottom : true
		},
		methods:{
			closeSheet(){
				this.$emit('closeBottom');
			},
		}
	}
</script>

<style scoped lang="scss">
	.wrapper{
		.sheet{
			width: 100%;
			height: 90%;
			position: fixed;
			top: 0rpx;
			left: 0rpx;
			bottom: 10rpx;
			padding-left: 25rpx;
			.title{
				display: flex;
				text{
					position: absolute;
					right: 20rpx;
				}
			}
			.main-content {
				display: flex;
				margin-top: 20rpx;
				border-bottom: 1rpx solid #999999;
				.left {
					image {
						width: 160rpx;
						height: 160rpx;
						border-radius: 10rpx;
					}
				}
			
				.right {
					width: 370rpx;
					margin-left: 20rpx;
					margin-right: 20rpx;

			
					.right-top {
						text {
							font-size: 30rpx;
						}
			
						p {
							margin-top: 10rpx;
							color: #999999;
						}
					}
			
					.right-bottom {
						margin-top: 30rpx;
						display: flex;
			
						.old-price {
							text-decoration: line-through;
							margin-left: 15rpx;
							font-size: 25rpx;
							color: #999999;
						}
			
						.last {
			
							width: 200rpx;
							height: 50rpx;
							display: flex;
							border: solid 1px #d9d9d9;
							margin-left: 173rpx;
							margin-bottom: 10rpx;
			
							.ao {
								width: 90rpx;
								height: 46rpx;
								line-height: 46rpx;
								text-align: center;
								margin-top: auto;
								margin-bottom: auto;
								border-left: solid 1px #d9d9d9;
								border-right: solid 1px #d9d9d9;
							}
			
							button::after {
								display: none
							}
			
							button:nth-child(1) {
								line-height: 50rpx;
								background-color: #FFFFFF;
							}
			
							button:last-child {
								line-height: 50rpx;
								background-color: #FFFFFF;
							}
						}
					}
				}
			}
			.packaging-fee{
				height: 100rpx;
				line-height: 100rpx;
			}
		}
	}
</style>
