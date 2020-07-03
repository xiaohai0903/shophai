const mutations ={
	SETHISTORYSEARCH(state,data){
		state.historySearch.push(data)
		console.log(state.historySearch)
		uni.setStorage({
		                key: 'historySearch',
		                data: state.historySearch
		            })
	}
}

export default mutations