<template>
	<view class="adress">
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>定位</text>
		</view>

		<view class="skip">
			<button class="cu-btn btn1">跳过</button>
		</view>

		<view class="location">
			<text>你所在的地区</text>
			<button>
				<image src="../../static/img/dingwei2.png" mode=""></image>
				<text>{{Areaaddress}}</text>
			</button>
		</view>
		<view class="city">
			<text>热门城市</text>
			<button>社区名称</button>
		</view>
	</view>
</template>

<script>
		export default {
			   data() {
					return {
						Areaaddress:'' //当前位置
					}
				},
				mounted() {
					this.getAuthorizeInfo()
					this.getLocationInfo()
				},
				methods: {
					back(){
						uni.navigateBack({
							
						})
					},
					//获取当前位置城市
					getAuthorizeInfo(a="scope.userLocation"){  //1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
						var _this=this;
						uni.authorize({
							scope: a,
							success() { //1.1 允许授权
								_this.getLocationInfo();
							},
							fail(){    //1.2 拒绝授权
								console.log("你拒绝了授权，无法获得周边信息")
							}
						})
					},
					getLocationInfo(){  //2. 获取地理位置
						var _this=this;
						uni.getLocation({
							type: 'wgs84',
							success (res) {
							    console.log("你当前经纬度是：");
								console.log(res)
								let latitude,longitude;
								latitude = res.latitude.toString();
								longitude = res.longitude.toString();
								uni.request({
									header:{
										"Content-Type": "application/text"
									},
									url:'http://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
									success(re) {
										console.log("中文位置")
										console.log(re)	   
										_this.Areaaddress  = re.data.result.address_component.city;
										uni.setStorageSync('city',_this.Areaaddress)
										console.log(uni.getStorageSync('city'))
										console.log(re.data.result)
										if(re.statusCode === 200){
											console.log("获取中文街道地理位置成功")
										}else{
											console.log("获取信息失败，请重试！")
										}
									 }
								});
							}
						});
					}
				}
			}
</script>

<style scoped lang="scss">
	.adress {
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

		.skip {
			position: absolute;
			right: 30rpx;
			top: 170rpx;

			button {
				background-color: #e4fff2;
				color: #31c27e;
			}
		}

		.location {
			position: absolute;
			top: 240rpx;
			left: 20rpx;

			button {
				width: 200rpx;
				height: 80rpx;
				line-height: 80rpx;
				margin-top: 25rpx;

				image {
					width: 40rpx;
					height: 30rpx;
				}

				text {
					margin-left: 20rpx;
					font-size: 30rpx;
				}
			}
		}

		.city {
			position: absolute;
			top: 425rpx;
			left: 20rpx;

			button {
				margin-top: 10rpx;
			}
		}
	}
</style>
