new Vue({
	el: "#app",
	data: {
		user: "Franciscoo",
		userAge: 17,
		allowedAge: 18
	},
	methods: {
		checkUser(){
			return this.user === "Francisco" ? true : false;
		}
	}
});