const baseUrl = ""


export default class Requset{
	http(url,data={},method){
		return new Promise((resolve, reject) =>{
			uni.request({
				url:`${baseUrl}${url}`,
				data:data,
				method:method,
				success: (res) => {
					resolve(res.data)
				},
				fail: (rej) => {
					reject(rej)
				}
			},)
		})
	}
}

