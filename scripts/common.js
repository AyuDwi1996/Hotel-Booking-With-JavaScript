let headerTemplate = `<img src="assests/images/logo.png" class="logo" id="logo-image" alt="logo"/>
        <button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false"  data-target= "#login-modal">LOGIN</button>
        
        <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="login-form">
                            <div class="login-field">
                                <label for="username">Username: </label>
                                <input type="text" id="username" name="username" placeholder="Enter Username" required />
                            </div>
                            <div class="login-field">
                                <label for="password">Password: </label>
                                <input type="password" id="password" name="password" placeholder="Enter Password" required />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" >Login</button>
                    </div>
                </div>
            </div>
        </div>`;

let footerTemplate = `<div id="contact">
        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact Us</button>
        
        <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <p>
                                Thank you for reaching out!!! <br>
                                Please enter you email and we will get back to you.
                            </p>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="Enter your email id" required>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="copyright-text">
        ?? 2020 ROOM SEARCH PVT. LTD.
    </div>
    <div id="social-media-images">
        <a href="https://www.facebook.com" target="_blank">
            <img src="assests/images/facebook.png" class="social-media-image">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="assests/images/instagram.png" class="social-media-image">
        </a>
        <a href="https://twitter.com" target="_blank">
            <img src="assests/images/twitter.png" class="social-media-image">
        </a>
    </div>`;
document.getElementById("h").innerHTML = headerTemplate;
document.getElementById("f").innerHTML = footerTemplate;

/* For reference
 Array.from(document.getElementsByClassName("header-footer")).forEach(element => {
     element.innerHTML = headerTemplate;
 });
 
 */
// Name and Password from the register-form
var username = document.getElementById('username');
var pw = document.getElementById('password');
localStorage.setItem('isLogin', false);
// storing input from register-form
function store() {
    //console.log(username.value);
    
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
    if (username.value === "admin" && pw.value === "admin" && document.getElementById("login").innerText === "LOGIN") {
        document.getElementById("login").innerText = `LOGOUT`;
        localStorage.setItem('isLogin', true);
        document.getElementsByClassName("btn btn-light btn-sm")[0].dataset["target"] = "#login-modal";
        alert("Successfully LoggedIn");
    }

}
function logout() {
    if (document.getElementById("login").innerText === "LOGOUT") {
        localStorage.removeItem('username');
        localStorage.removeItem('pw');
        document.getElementById("login").innerText = `LOGIN`;
        localStorage.setItem('isLogin', false);
        alert("Successfully LoggedOut");
        document.getElementsByClassName("btn btn-light btn-sm")[0].dataset["target"] = "";
    }
}

document.getElementById("login-button").addEventListener("click", store);
document.getElementById("login").addEventListener("click", logout);
