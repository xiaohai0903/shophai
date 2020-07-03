<template>
	<view class="find">
		<view class="title">
			<text @click="back" class="cuIcon-back" style="font-size:40rpx;"></text>
			<text>搜索</text>
		</view>
		
		<view class="cu-bar search lookup">
			<view class="search-form round search-box" style="width: 550rpx;">
				<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;" type="text" placeholder="搜索" confirm-type="search"></input>
				<text class="cuIcon-search"></text>
			</view>
			<button @click="search_bt" class="cu-btn round">搜索</button>
		</view>
				
		<view class="hotSearch">
			<text>热门搜索</text>
			<view class="">
				<button class="cu-btn round">鞋子</button>
			</view>
		</view>
		
		<view class="historySearch">
			<text>历史搜索</text>
			<text @tap="del" class="cuIcon-delete cutOff"></text>
			<block v-for="(item,index) in historySearch" :key="index" >
				<button class="cu-btn round button_history" @tap="historyButton(item)">{{item}}</button>
			</block>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				historySearch:[],
				inputValue:''
			}
		},
		created() {
			this.historySearch= [...new Set(this.$store.state.historySearch)]
			console.log(this.historySearch)
		},
		methods:{
			back(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			getHistorySearch(){
			},
			search_bt(){
				if(!this.inputValue){
					uni.showToast({
						title:"请输入搜索内容",
						icon:'none',
						duration:2000
					})
				}else{
					this.$store.dispatch('setHistorySearch',this.inputValue)
					console.log(this.inputValue)
					uni.navigateTo({
						url:'/pages/search/SearchList?value='+this.inputValue
					})
				}
			},
			historyButton(item){
				uni.navigateTo({
					url:'/pages/search/SearchList?value='+item
				})
			},
			getHotSearch(){
				
			},
			inputvalue(e){
					this.inputValue =e.detail.value.trim()
			},
			del(){
				this.$store.state.historySearch =[]
				this.historySearch=[]
				uni.showToast({
					title:'已经清楚搜索记录',
					icon:'none',
					duration:2000
				})
			}
		}
	}

</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.find{
		background-color: #FFFFFF;
		position: relative;
		.title{
			position: absolute;
			left: 20rpx;
			padding-top: 80rpx;
			text:nth-child(2){
				padding-left: 20rpx;
				font-size: 40rpx;
				line-height: 40rpx;
			}
		}
		.lookup{
			position: absolute;
			top: 165rpx;
			text{
				padding-right: 25rpx;
			}
		}
		.hotSearch{
			position: absolute;
			top:290rpx ;
			left: 20rpx;
			button{
				margin-top: 10rpx;
			}
		}
		.historySearch{
			position: absolute;
			top: 450rpx;
			left: 20rpx;
			button{
				margin-top: 10rpx;
			}
			.cutOff{
				margin-right: 0;
				margin-left: 550rpx;
			}
			.button_history{
				margin-left:25rpx;
			}
			
		}
	}
</style>
