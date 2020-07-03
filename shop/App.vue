<script>
	import { mapState, mapMutations} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getStorage({
				key:'historySearch',
				success:(res)=>{
					this.$store.state.historySearch=res.data
				}
			})
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(['SETHISTORYSEARCH'])
		}
	}
</script>
<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style>
	@import "colorui/main.css";
	
	@import "colorui/icon.css";
	/*每个页面公共css */
</style>
