var signIn = false;

function check_login() {
	let sign_in_nav = document.getElementById('signed-in-nav');
	let not_sign_in_nav = document.getElementById('not-signed-in-nav');
	let sign_in_pro = document.getElementById('signed-in-pro');
	let not_sign_in_pro = document.getElementById('not-signed-in-pro');
	console.log(sign_in_nav, sign_in_pro);
	console.log(not_sign_in_nav, not_sign_in_pro);
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

check_login();