<template>
	<view class="publish-project">
		<view class="publish-project-title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text style="margin-left:20rpx;">1111</text>
			</view>

			<view class="line-one"></view>

			<view class="cu-form-group top">
				<view class="title">标题</view>
				<input placeholder="请输入标题" name="input"></input>
			</view>
			<!-- 上传图片 -->
			<view class="upload-image">
				<view class="upload-top">
					<textarea placeholder="这里输入正文哦~" placeholder-style="font-size: 30rpx;" maxlength="10rpx"></textarea>
				</view>
				<view class="upload-bottom">
					<image src="../../static/img/相机.png" mode=""></image>
					<p>添加图片</p>
				</view>
			</view>
			
			<!-- 信息发布 -->
			<view class="information-release" v-show="false">
				<view class="ad-slot">
					<view class="title" style="font-size: 30rpx;">广告位</view><text v-show="this.switchB " :style="switchB? 'color:red':''">￥20</text>
					<switch class="green" @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#39B54A"></switch>
				</view>
				<view class="line-one"></view>
				<!-- 手机号 -->
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
			</view>
			
			<!-- 家政服务 -->
			<view class="Housekeeping" v-show="false">
				<!-- 标签填写 -->
				<view class="cu-form-group top">
					<view class="title">标签填写</view>
					<input placeholder="如:工作勤快/吃苦耐劳等" name="input"></input>
				</view>
				<!-- 荣誉填写 -->
				<view class="cu-form-group honor">
					<view class="title">荣誉填写</view>
					<textarea placeholder="这里输入正文哦~" placeholder-style="font-size: 30rpx;" maxlength="10rpx"></textarea>
				</view>
				<view class="line-one"></view>
				<!-- 手机号 -->
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
				<view class="line-one"></view>
				<!-- 期望价格 -->
				<view class="cu-form-group">
					<view class="title">期望价格</view>
					<input placeholder="请填写期望价格" name="input"></input>
				</view>
			</view>
			
			<!-- 二手交易 -->
			<view class="second-hand-trading" v-show="false">
				<!-- 标签填写 -->
				<view class="cu-form-group top">
					<view class="title">标签填写</view>
					<input placeholder="如:工作勤快/吃苦耐劳等" name="input"></input>
				</view>
				<view class="line-one"></view>
				<!-- 手机号 -->
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
				<view class="line-one"></view>
				<!-- 期望价格 -->
				<view class="cu-form-group">
					<view class="title">期望价格</view>
					<input placeholder="请填写期望价格" name="input"></input>
				</view>
			</view>
			
			<!-- 房屋租凭 -->
			<view class="house-lease" v-show="false">
				<view class="cu-form-group">
					<view class="title">标签填写</view>
					<input placeholder="如:精装修等" name="input"></input>
				</view>
				<view class="line-one"></view>
				<view class="cu-form-group top">
					<view class="title">户型</view>
					<input placeholder="如三室两卫一厅" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">小区</view>
					<input placeholder="请填写小区名字" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">楼层</view>
					<input placeholder="如:7楼" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">朝向</view>
					<input placeholder="如:南" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">类型</view>
					<input placeholder="如:普通住宅" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">面积</view>
					<input placeholder="如:16m" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">付款</view>
					<input placeholder="如:押一付一" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">装修</view>
					<input placeholder="如:精装修" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">楼梯</view>
					<input placeholder="如:精装修" name="input"></input>
				</view>
				<view class="cu-form-group top">
					<view class="title">地址</view>
					<input placeholder="请填写详细地址" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">租金</view>
					<input placeholder="请填写期望价格" name="input"></input>
				</view>
				<view class="line-one"></view>
				<!-- 手机号 -->
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
			</view>
			
			<!-- 跑腿服务 -->
			<view class="errand-service" v-show="false">
				<!-- 标签填写 -->
				<view class="cu-form-group top">
					<view class="title">标签填写</view>
					<input placeholder="如:工作勤快/吃苦耐劳等" name="input"></input>
				</view>
				<view class="line-one"></view>
				<!-- 手机号 -->
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
				<view class="line-one"></view>
				<view class="cu-form-group">
					<view class="title">跑腿价格</view>
					<input placeholder="请填写跑腿价格" name="input"></input>
				</view>
			</view>
			
			<!-- 爱打听 -->
			<view class="love-to-inquire" v-show="false">
				<!-- 标签填写 -->
				<view class="cu-form-group">
					<view class="title">标签填写</view>
					<input placeholder="如:工作勤快/吃苦耐劳等" name="input"></input>
				</view>
				<view class="line-one"></view>
				<view class="cu-form-group">
					<view class="title">地址</view>
					<input placeholder="请填写详细地址" name="input"></input>
				</view>
			</view>
			
			<!-- 教育培训 -->
			<view class="education-and-training" v-show="false">
				<!-- 标签填写 -->
				<view class="cu-form-group">
					<view class="title">标签填写</view>
					<input placeholder="如:工作勤快/吃苦耐劳等" name="input"></input>
				</view>
				<view class="line-one"></view>
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input placeholder="请填写手机号" name="input"></input>
				</view>
				<view class="line-one"></view>
				<view class="cu-form-group">
					<view class="title">培训价格</view>
					<input placeholder="请填写培训价格" name="input"></input>
				</view>
			</view>

			<!-- 发布按钮 -->
			<view class="announcement-button">
				<view class="cu-btn round bg-gradual-green button"><text>确定发布</text></view>
			</view>


			<view class="announcement-img" :class="{sheetShow:announcement,sheeHide:!announcement}">
				<view class="xiaohai">
					<view class="announcement-x">
						<image src="../../static/img/X (2).png" mode="" @click="closeClick"></image>
					</view>
					<view class="announcement-pop">
						<image src="../../static/img/弹窗.png" mode=""></image>
					</view>
					<view class="announcement-text">
						广告位规则：
					</view>

					<view class="announcement-button">
						<view class="cu-btn round bg-gradual-orange button"><text>立即购买</text></view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switchB: false,
				announcement: false
			}
		},
		methods: {
			SwitchB(e) {
				this.switchB = e.detail.value
				this.announcement = true
				if(this.switchB ==false){
					this.announcement =false
				}
			},
			closeClick() {
				this.announcement = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.publish-project {
		.publish-project-title {
			.title-top {
				font-size: 40rpx;
				margin-left: 10rpx;
				padding-top: 80rpx;
				padding-bottom: 20rpx;
			}

			.line-one {
				width: 100%;
				height: 20rpx;
				background-color: rgba($color: #f6f5f7, $alpha: 1);
			}
			.cu-form-group+.cu-form-group{
				border-top: 0;
			}
			.top {
				border-bottom: 1rpx rgba($color: #999999, $alpha: 0.3) solid;
			}

			.upload-image {
				width: 100%;
				height: 450rpx;
				padding-left: 25rpx;
				border-bottom: 1rpx rgba($color: #999999, $alpha: 0.5) solid;

				.upload-top {
					margin-top: 30rpx;

					textarea {
						width: 700rpx;
						height: 250rpx;
					}
				}

				.upload-bottom {
					width: 160rpx;
					height: 160rpx;
					border-radius: 10rpx;
					margin-top: 10rpx;
					border: 1rpx dashed rgba($color: #999999, $alpha: 0.5);
					text-align: center;

					image {
						margin-top: 35rpx;
						width: 60rpx;
						height: 50rpx;
					}

					p {
						color: #999999;
					}
				}
			}

			.ad-slot {
				height: 100rpx;
				line-height: 100rpx;
				display: flex;
				margin-left: 32rpx;

				switch {
					position: absolute;
					right: 20rpx;
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

			.announcement-img {

				width: 100%;
				height: 100%;
				position: fixed;
				top: 50%rpx;
				left: 50%rpx;
				bottom: 0upx;
				right: 0upx;
				background: rgba(0, 0, 0, 0.3);
				z-index: 10000;
				transition: all 0.5s ease-out;

				.announcement-pop {
					width: 100%;
					position: absolute;
					top: 20%;
					text-align: center;

					image {
						width: 640rpx;
						height: 640rpx;
					}

					transition: all 0.5s;
				}

				.announcement-x {
					position: absolute;
					top: 18%;
					left: 85%;

					image {
						width: 50rpx;
						height: 50rpx;
					}
				}

				.announcement-button {
					width: 100%;
					margin-left: 10rpx;
					position: absolute;
					top: 71%;
					text-align: center;

					.button {
						width: 504rpx;
						height: 80rpx;
					}
				}

				.announcement-text {
					position: absolute;
					left: 170rpx;
					top: 53%;
					color: #FFFFFF;
					width: 440rpx;
					height: 120rpx;
					word-break: break-all;
				}
			}
			.honor{
				.title{
					margin-top: -95rpx;
				}
			}
			.sheetShow {
				top: 0rpx ;
			}
			
			/* 关闭时的动画，时间自己可以设置0.5s*/
			.sheeHide {
				top: 100% ;
				transition: all 0.5s;
			}
		}
		.information{
			
		}
		/deep/ uni-switch .uni-switch-input:after {
			width: 22rpx;
			height: 22rpx;
		}

		/deep/ uni-switch .uni-switch-input:before {
			width: 20rpx;
			height: 20rpx;
		}

		/deep/ uni-switch::before {
			display: none;
		}

		/deep/ uni-switch .uni-switch-input:after {
			height: 20rpx;
			width: 20rpx;
		}

		/deep/ uni-switch::after {
			display: none;
		}

		/deep/ .uni-switch-input-checked:after {
			transform: translateX(25rpx);

		}

		/deep/uni-switch .wx-switch-input,
		/deep/ uni-switch .uni-switch-input {
			height: 35rpx;
		}
	}
</style>
