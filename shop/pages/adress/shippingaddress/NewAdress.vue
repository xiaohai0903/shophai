<template>
	<view class="new-adress">
		<view class="title">
			<view class="title-top">
				<text @click="back" class="cuIcon-back"></text>
				<text>收货地址</text>
			</view>
		</view>

		<form class="new-adress-main">
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title" style="padding-top: 40rpx;">收 货 人</view>
				<input placeholder="请填写收货人姓名"></input>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title" style="padding-top: 40rpx;">手机号码</view>
				<input placeholder="请填写收货人手机号"></input>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;" @click="btnClick">
				<view class="title" style="padding-top: 40rpx;">所在地区</view>
				<view class="xiaohai">
					<text style="margin-left: -140rpx;">
						{{this.adressData[0]}} {{this.adressData[1]}} {{this.adressData[2]}}
					</text>					
				</view>
				<image src="../../../static/img/点.png" mode=""></image>
			</view>
			<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
			
			<view class="cu-form-group align-start" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title">详细地址</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="请输入详细地址"></textarea>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb; border-bottom: 1rpx solid #dbdbdb;">
				<view class="title" style="padding-top: 40rpx;">默认地址</view>
				<!-- #ifdef MP-ALIPAY -->
				<switch class='green' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#4CD964"></switch>
				<!-- #endif -->

				<!-- #ifndef MP-ALIPAY -->
				<switch @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
				<!-- #endif -->
			</view>
		</form>
		<view class="new-adress">
			<button class="cu-btn round lg bg-gradual-green" >保存</button>
			<button class="cu-btn round lg "  style="background-image: linear-gradient(to right, #dbdbdb ,#dbdbdb); margin-top: 30rpx;">删除</button>
		</view>
	</view>
</template>

<script>
	import selectAddress from '../../../components/yixuan-selectAddress/yixuan-selectAddress.vue'
	export default {
		components:{
			selectAddress
		},
		data() {
			return {
				modalName: null,
				switchB: true,
				adressData:[],
			}
		},
		methods: {
			back(){
				uni.redirectTo({
					url:'../../order/Order'
				})
			},
			RegionChange(e) {
				this.region = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			btnClick() {
				this.$refs.selectAddress.show()
			},
			successSelectAddress(e){
				this.adressData=e
				console.log(this.adressData)
			}
		}
	}
</script>

<style scoped lang="scss">
	.new-adress {
		.title {
			height: 140rpx;
			.title-top{
				margin-left: 10rpx;
				padding-top: 80rpx;
			}
		}
		.new-adress-main {
			image{
				height: 16rpx;
				width: 40rpx;
			}
			.xiaohai{
				width: 240rpx;
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
		.row{
			height: 150rpx;
			line-height: 150rpx;
			padding-left: 25rpx;
			display: flex;
			.value{
				margin-left: 20rpx;
			}
			.row-img{
				margin-left: 250rpx;
				image{
					width: 40rpx;
					height: 20rpx;
				}
			}
		}
	}
</style>
