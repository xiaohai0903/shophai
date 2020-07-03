<template>
	<view class="love-inquire-two">
		<view class="love-inquire-two-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">1111</text>
			</view>
			<view class="line-one"></view>
			<!-- 评价信息 -->
			<view class="inquire-message">
				<view class="user-info">
					<view class="user-main">
						<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="user-main-phone">
							<view class="top">
								<p>沙雕</p>
								<p>2020/10/10</p>
							</view>
							<view class="bottom">
								<image src="../../static/img/dingwei3.png" mode=""></image>
								<text>江西省 南昌市 湾里区 </text>
							</view>
						</view>
					</view>
					<view class="user-bottom">
						<textarea value="" />
						</view>
					<view class="user-img">
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
						<image src="../../static/img/dfk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="line-one"></view>
			
			<view class="coustomer-Evaluation">
				<view class="intruduction-title">
					<image src="../../static/img/gang.png" mode=""></image>
					<p style="padding-left: 20rpx; margin-top: -5rpx;">用户评论</p>
				</view>
				
				<view class="coustomer-message">
					<view class="user-info">
						<view class="user-main">
							<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="user-main-phone">
								<view class="top">
									<p>沙雕</p>
									<p>2020/10/10</p>
								</view>
								<view class="bottom">
									<image src="../../static/img/星.png" mode=""></image>
								</view>		
							</view>
						</view>
						<view class="user-bottom">
							<text>卧槽卧槽卧槽卧槽</text>
						</view>
						<view class="line-four"></view>
					</view>
				</view>
				</view>
				<view class="line-one"></view>
				<!-- 收起评论 -->
				<view class="collapse-comments" v-show="false">
					<text>收起评论</text>
					<image src="../../static/img/下.png" mode=""></image>
				</view>
				<view class="collapse-comments">
					<text>更多评论</text>
					<image src="../../static/img/上.png" mode=""></image>
				</view>
				<view class="line-one"></view>
				<!-- 发表评论框 -->
				<view class="cu-bar search lookup" @click="goTo('/pages/search/search')">
					<view class="search-form round left" style="width: 550rpx; background-color: #f2f2f2;">
						<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;border-radius: 30rpx;" type="text" placeholder="请输入你要说的话" confirm-type="search"></input>
						<image src="../../static/img/笑脸.png" mode=""></image>
					</view>
					<button @click="search_bt" class="cu-btn bg-gradual-green" style="margin-right: 20rpx;">发送</button>
				</view>
			</view>
		</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.love-inquire-two{
		.love-inquire-two-title{
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}
			.intruduction-title {
				display: flex;
				margin-top: 20rpx;
			
				image {
					width: 8rpx;
					height: 30rpx;
				}
			}
			.line-one{
				width: 100%;
				height: 20rpx;
				background-color: #f2f2f2;
			}
			.inquire-message{
				.top{
					display: flex;
					justify-content: space-between;
					p{
						font-size: 30rpx;
					}
					p:nth-child(2){
						margin-right: -230rpx;
						color: #999999;
					}
				}
				.user-info {
					width: 90%;
					margin: 0 auto;
					.line-one{
						width: 100%;
						height: 20rpx;
						background-color: #f2f2f2;
					}
					.user-main {
						display: flex;
						margin-top: 30rpx;
				
						.user-main-phone {
							margin-left: 20rpx;
							display: flex;
							flex-direction: column;
							height: 85rpx;
							transform: translateY(10%);
							.bottom{
								margin-top: 10rpx;
								text{
									margin-left: 20rpx;
									color: #999999;
								}
								image{
									width: 20rpx;
									height: 25rpx;
								}
							}
						}
					}
					.user-bottom{
						margin-left: 40rpx;
						margin-top: 30rpx;
						textarea{
							height: 200rpx;
						}
					}
					.user-img{
						image{
							width: 33%;
							height: 220rpx;
						}
					}
				}
			}
			.coustomer-Evaluation{
				width: 90%;
				margin: 0 auto;
				.coustomer-message{
					.user-info {
						margin: 0 auto;
						.user-main {
							display: flex;
							margin-top: 30rpx;
							width: 100%;
							.user-main-phone {
								margin-left: 20rpx;
								width: 80%;
								display: flex;
								flex-direction: column;
								height: 85rpx;
								transform: translateY(10%);
								.top{
									display: flex;
									justify-content: space-between;
									p{
										font-size: 30rpx;
									}
									p:nth-child(2){
										margin-right: -30rpx;
										color: #999999;
									}
								}
								.bottom{
									margin-top: 10rpx;
									text{
										margin-left: 20rpx;
										color: #999999;
									}
									image{
										width: 20rpx;
										height: 25rpx;
									}
								}
							}
						}
						.user-bottom{
							margin-left: 10rpx;
							margin-top: 30rpx;
							padding-bottom: 20rpx;
							text{
								font-size: 30rpx;
								width: 100%;
								word-break: break-all;
								height: 100rpx;
							}
						}
						.user-img{
							image{
								width: 33%;
								height: 220rpx;
							}
						}
						.line-four{
							width: 100% !important;
							height: 8rpx;
							background-color: #f2f2f2;
						}
					}
				}
			}
			.collapse-comments{
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				image{
					height: 20rpx;
					width: 25rpx;
				}
			}
			.lookup{
				.left{
					image{
						margin-right: 20rpx;
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
		}
	}
</style>
