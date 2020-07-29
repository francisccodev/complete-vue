new Vue({
	el: "#app",
	data: {
		name: "Francisco"
	},
	methods: {
		update(){
			setTimeout(()=>{
				this.name = "Steve";
			},2000);
		}
	}
});