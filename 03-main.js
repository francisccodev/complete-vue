new Vue({
	el: "#app",
	data: {
		user: "Franciscoo",
		userAge: 17,
		allowedAge: 18,
		isBannerVisible: true
	},
	methods: {
		checkUser(){
			return this.user === "Francisco" ? true : false;
		}
	}
});