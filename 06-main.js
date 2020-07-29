new Vue({
	el: "#app",
	data: {
		name: "Francisco",
		x: 0,
		y: 0
	},
	methods: {
		updateName1(){
			this.name = "Steve";
		},
		updateName2(){
			this.name = "John";
		},
		getCoordinates(event){
			this.x = event.clientX;
			this.y = event.clientX;
		}
	}
});