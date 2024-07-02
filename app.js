function login() {
    document.getElementsByClassName("items-3")[0].style.textDecoration = "underline";
    document.getElementsByClassName("items-2")[0].style.textDecoration = "none";
    document.getElementsByClassName("items-4")[0].style.textDecoration = "none";
    document.getElementsByClassName("container-2")[0].style.display = "block";
    document.getElementsByClassName("container-1")[0].style.display = "none";
    document.getElementsByClassName("container-3")[0].style.display = "none";
    document.getElementsByClassName("greatdeals")[0].style.display = "none";
}
function home() {
    document.getElementsByClassName("items-2")[0].style.textDecoration = "underline";
    document.getElementsByClassName("items-3")[0].style.textDecoration = "none";
    document.getElementsByClassName("items-4")[0].style.textDecoration = "none";
    document.getElementsByClassName("container-2")[0].style.display = "none";
    document.getElementsByClassName("container-1")[0].style.display = "block";
    document.getElementsByClassName("container-3")[0].style.display = "block";
    document.getElementsByClassName("greatdeals")[0].style.display = "block";
}
function contact() {
    document.getElementsByClassName("items-4")[0].style.textDecoration = "underline";
    document.getElementsByClassName("items-2")[0].style.textDecoration = "none";
    document.getElementsByClassName("items-3")[0].style.textDecoration = "none";
    document.getElementsByClassName("container-2")[0].style.display = "none";
    document.getElementsByClassName("container-1")[0].style.display = "block";
    document.getElementsByClassName("container-3")[0].style.display = "block";
    document.getElementsByClassName("greatdeals")[0].style.display = "block";
}
function register() {
    document.getElementsByClassName("register-class")[0].innerHTML = "Account Registered Successfully!!";
}
function signupBox() {
    document.getElementsByClassName("items-8")[0].style.display = "block";
    document.getElementsByClassName("items-8")[1].style.display = "block";
    document.getElementsByClassName("items-8")[2].style.display = "block";
    document.getElementsByClassName("items-8")[3].style.display = "block";
    document.getElementsByClassName("items-7")[0].style.display = "none";
    document.getElementsByClassName("items-7")[1].style.display = "none";
    document.getElementsByClassName("items-7")[2].style.display = "none";
    document.getElementsByClassName("tag")[0].innerHTML = "Sign Up";
    document.getElementById("verified1").style.display = "none";
    document.getElementById("verified2").style.display = "none";
    document.getElementsByClassName("otpverified")[0].innerHTML="";
}
function verifiedbutton() {
    document.getElementsByClassName("otpverified")[0].innerHTML = "OTP Verified Successfully!!!";
}
function otpbtn() {
    document.getElementById("verified1").style.display = "block";
    document.getElementById("verified2").style.display = "block";
}
function loginBox() {
    document.getElementsByClassName("items-8")[0].style.display = "none";
    document.getElementsByClassName("items-8")[1].style.display = "none";
    document.getElementsByClassName("items-8")[2].style.display = "none";
    document.getElementsByClassName("items-8")[3].style.display = "none";
    document.getElementsByClassName("items-7")[0].style.display = "block";
    document.getElementsByClassName("items-7")[1].style.display = "block";
    document.getElementsByClassName("items-7")[2].style.display = "block";
    document.getElementsByClassName("tag")[0].innerHTML = "Log in";
    document.getElementsByClassName("register-class")[0].style.display = "none";
}
function apple1() {
    document.getElementsByClassName("groceries")[0].innerHTML = "Rs: 129";
}
function apple2() {
    document.getElementsByClassName("groceries")[0].innerHTML = "Rs: 79";
}
function biscuit1() {
    document.getElementsByClassName("groceries")[1].innerHTML = "Rs: 53";
}
function biscuit2() {
    document.getElementsByClassName("groceries")[1].innerHTML = "Rs: 32";
}
function cococola1() {
    document.getElementsByClassName("groceries")[2].innerHTML = "Rs: 90";
}
function cococola2() {
    document.getElementsByClassName("groceries")[2].innerHTML = "Rs: 50";
}
function kurkure1() {
    document.getElementsByClassName("groceries")[3].innerHTML = "Rs: 10";
}
function kurkure2() {
    document.getElementsByClassName("groceries")[3].innerHTML = "Rs: 20";
}
function oil1() {
    document.getElementsByClassName("groceries")[4].innerHTML = "Rs: 139";
}
function oil2() {
    document.getElementsByClassName("groceries")[4].innerHTML = "Rs: 89";
}
function rice1() {
    document.getElementsByClassName("groceries")[5].innerHTML = "Rs: 95";
}
function rice2() {
    document.getElementsByClassName("groceries")[5].innerHTML = "Rs: 59";
}
function apple3() {
    document.getElementsByClassName("order")[0].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[0].style.display = "none";
}
function biscuit3() {
    document.getElementsByClassName("order")[1].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[1].style.display = "none";
}
function cococola3() {
    document.getElementsByClassName("order")[2].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[2].style.display = "none";
}
function kurkure3() {
    document.getElementsByClassName("order")[3].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[3].style.display = "none";
} function oil3() {
    document.getElementsByClassName("order")[4].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[4].style.display = "none";
}
function rice3() {
    document.getElementsByClassName("order")[5].innerHTML = "Order Placed Successfully!!!";
    document.getElementsByClassName("btn-order")[5].style.display = "none";
}
