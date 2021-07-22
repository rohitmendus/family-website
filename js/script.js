// Sign in page start



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
  		if (!form.checkValidity()) {
  			event.preventDefault()
  			event.stopPropagation()
  		}

  		form.classList.add('was-validated')
  	}, false)
  })
})()




// Sign in page end


// Main Page Start
var signIn = false;

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


// Gallery viewer 
var images = document.querySelectorAll('#gallery .img-fluid');
var gallery = document.querySelector("#gallery")

for (let i of images) {
	i.addEventListener("click", view_image);
}

function view_image(e) {
	console.log(e.target);
	document.body.style.overflowY = "hidden";
	let img_viewer = document.getElementById("image-viewer");
	img_viewer.style.display = "block"
	let file_name = e.target.src.split("images/")[1];
	let file_text = document.querySelector("#image-viewer p");
	file_text.textContent = file_name;	
}


function img_back() {
	document.body.style.overflowY = "auto";
	document.getElementById("image-viewer").style.display = "none";
}


function sign_out() {
	signIn = !(signIn);
	check_login();
}

check_login();
// Main Page End