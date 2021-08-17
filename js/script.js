// common script
let url_link = window.location.href.length;
let link = window.location.href.slice(url_link-12, url_link+1);


if (link==="sign-in.html") {
	// Sign in page start

	var tab = localStorage['tab_type'];
	// localStorage.removeItem("tab_type");
	if (tab === "reg") {
		var trigger_reg = document.querySelector('#register-tab');
		var reg_tab = new bootstrap.Tab(trigger_reg)
		reg_tab.show()
	}


	// Customising google sign in button
	function onSuccess(googleUser) {
		console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
	}
	function onFailure(error) {
		console.log(error);
	}
	function renderButton() {
		gapi.signin2.render('my-signin2', {
			'scope': 'profile email',
			'width': 320,
			'font-size': 16,
			'height': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': onSuccess,
			'onfailure': onFailure
		});
	}

	var is_validated;
	// Validation of sign-in
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
		'use strict'

	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.querySelectorAll('.needs-validation')

	  // Loop over them and prevent submission
	  Array.prototype.slice.call(forms)
	  .forEach(function (form) {
	  	form.addEventListener('submit', function (event) {
	  		is_validated = form.checkValidity();
	  		if (!is_validated) {
	  			event.preventDefault()
	  			event.stopPropagation()
	  		}

	  		form.classList.add('was-validated')
	  	}, false)
	  })
	})()


	// Sign In continuation redirect
	document.querySelector("#sign-in form").addEventListener("submit", redirectSignIn);

	function redirectSignIn(e) {
		e.preventDefault();
		console.log(is_validated);
		if (is_validated) {
			signIn = true;
			let url = window.location.href.split("/sign-in.html")[0];
			window.location.href = url + "/dashboard.html";
		}
	}


	// Sign in page end
} else{
	console.log('In main page');
	// Main Page Start
	url_link = window.location.href.length;
	link = window.location.href.slice(url_link-10, url_link+1);
	console.log(link);
	if (link === "index.html"|link === "y-website/") {
		var signIn = false;
	} else {
		signIn = true;
	}

	function check_login() {
		let sign_in_nav = document.getElementById('signed-in-nav');
		let not_sign_in_nav = document.getElementById('not-signed-in-nav');
		let sign_in_pro = document.getElementById('signed-in-pro');
		let not_sign_in_pro = document.getElementById('not-signed-in-pro');
		if (signIn) {
			sign_in_nav.style.display = "block";
			sign_in_pro.style.display = "block";
			not_sign_in_nav.style.display = "none";
			not_sign_in_pro.style.display = "none";
		} else {
			sign_in_nav.style.display = "none";
			sign_in_pro.style.display = "none";
			not_sign_in_nav.style.display = "block";
			not_sign_in_pro.style.display = "block";
		}
	}


	function sign_out() {
		signIn = !(signIn);
		check_login();
	}

	check_login();


	// Gallery viewer 
	var images = document.querySelectorAll('#gallery .img-fluid');
	var gallery = document.querySelector("#gallery")

	for (let i of images) {
		i.addEventListener("click", view_image);
	}

	var clicked_image;

	function view_image(e) {
		clicked_image = e.target;
		display_img(clicked_image);
	}

	function display_img(img) {
		document.body.style.overflowY = "hidden";
		let img_viewer = document.getElementById("image-viewer");
		img_viewer.style.display = "block"
		let file_name = img.src.split("images/")[1];
		let file_text = document.querySelector("#image-viewer p").childNodes[0];
		file_text.nodeValue = file_name;
		let desc = img.nextElementSibling.innerHTML;
		document.getElementById("img-desc").textContent = desc;
		document.getElementById("view_img").src = img.src;
	}


	function next_img() {
		if (clicked_image.parentNode.nextElementSibling !== null) {
			clicked_image = clicked_image.parentNode.nextElementSibling.firstElementChild;
			display_img(clicked_image);
		}
	}

	function prev_img() {
		if (clicked_image.parentNode.previousElementSibling !== null) {
			clicked_image = clicked_image.parentNode.previousElementSibling.firstElementChild;
			display_img(clicked_image);
		}
	}

	function img_back() {
		document.body.style.overflowY = "auto";
		document.getElementById("image-viewer").style.display = "none";
	}



	// Open register tab
	function open_reg_tab() {
		var tab = "reg";
		localStorage.setItem('tab_type', tab);
		window.location.href = "sign-in.html";
	}


	// Main Page End
}