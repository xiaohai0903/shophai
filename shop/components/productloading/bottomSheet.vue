<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}"    @touchmove.stop.prevent="moveHandle"  @click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isShowBottom}"   @click.stop="stopEvent()" >
				<view class="title">
					<p>已选商品</p><text>清空</text>
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
				<view class=" packaging-fee">
					<text>包装费</text> <text style="margin-left: 20rpx;">￥2</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		name : "bottomSheet",
		props: {
			isShowBottom : Boolean
		},
		methods: {
			closeSheet(){					
				this.$emit('closeBottom');
			},
			stopEvent(){						//@click.stop防止事件冒泡
				
			},
			moveHandle(){						//不让页面滚动
				
			}
		}
	}
</script>

<style scoped lang="scss">
	
	/* sheet弹窗 */
	.sheet{
		width: 100%;
		height: 60%;
		position: fixed;
		top: 0rpx;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		background:rgba(0,0,0,0.3);
		z-index: 10000;
		.main-content {
			display: flex;
			margin-top: 20rpx;
			margin-left: 20rpx;
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
	}
	
	/* 显示时候的动画默认0.5s */
	.sheetView{
		width: 100%;
		height: 0rpx;
		position: fixed;
		bottom: 120rpx;
		border-radius: 15rpx;
		background: white;
		z-index: 10001;
		transition: all 0.5s;
		.title{
			margin-left: 20rpx;
			margin-top: 20rpx;
			display: flex;
			text{
				position: absolute;
				right: 20rpx;
			}
		}
		.packaging-fee{
			margin-left: 20rpx;
			height: 100rpx;
			line-height: 100rpx;
		}
	}
	.sheetShow{
		top:0upx !important;
	}
	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide{
		top:120% !important;
		transition: all 0.5s;		
	}
	
	/* 项目需求根据设计稿要展示的高度,超出这个高度就自动滚动*/
	.sheetView_active{
		height: 732rpx;
	}
	
</style>
