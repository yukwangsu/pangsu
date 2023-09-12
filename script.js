const smallBox1 = document.querySelector("#sb1");
const smallBoxText1 = document.querySelector("#sbt1");
const img1 = document.querySelector("#github_img");
function mouseon1() {
    smallBox1.style.backgroundColor = "dimgray";
    smallBoxText1.classList.remove("hidden");
    img1.classList.add("dark");
}
function mouseout1() {
    smallBox1.style.backgroundColor = "white";
    smallBoxText1.classList.add("hidden");
    img1.classList.remove("dark");
}
function clickSmallBox1() {
    window.open("https://github.com/yukwangsu");
}
smallBox1.addEventListener("mouseover", mouseon1);
smallBox1.addEventListener("mouseout", mouseout1);
smallBox1.addEventListener("click", clickSmallBox1);


const smallBox2 = document.querySelector("#sb2");
const smallBoxText2 = document.querySelector("#sbt2");
const img2 = document.querySelector("#baekjoon_img");
function mouseon2() {
    smallBox2.style.backgroundColor = "dimgray";
    smallBoxText2.classList.remove("hidden");
    img2.classList.add("dark");
}
function mouseout2() {
    smallBox2.style.backgroundColor = "white";
    smallBoxText2.classList.add("hidden");
    img2.classList.remove("dark");
}
function clickSmallBox2() {
    window.open("https://www.acmicpc.net/user/yumm0987");
}
smallBox2.addEventListener("mouseover", mouseon2);
smallBox2.addEventListener("mouseout", mouseout2);
smallBox2.addEventListener("click", clickSmallBox2);


const smallBox3 = document.querySelector("#sb3");
const smallBoxText3 = document.querySelector("#sbt3");
const img3 = document.querySelector("#js_img");
function mouseon3() {
    smallBox3.style.backgroundColor = "dimgray";
    smallBoxText3.classList.remove("hidden");
    img3.classList.add("dark");
}
function mouseout3() {
    smallBox3.style.backgroundColor = "white";
    smallBoxText3.classList.add("hidden");
    img3.classList.remove("dark");
}
function clickSmallBox3() {
    window.open("https://momentumpangsu.netlify.app/");
}
smallBox3.addEventListener("mouseover", mouseon3);
smallBox3.addEventListener("mouseout", mouseout3);
smallBox3.addEventListener("click", clickSmallBox3);


const smallBox4 = document.querySelector("#sb4");
const smallBoxText4 = document.querySelector("#sbt4");
const img4 = document.querySelector("#instagram_img");
function mouseon4() {
    smallBox4.style.backgroundColor = "dimgray";
    smallBoxText4.classList.remove("hidden");
    img4.classList.add("dark");
}
function mouseout4() {
    smallBox4.style.backgroundColor = "white";
    smallBoxText4.classList.add("hidden");
    img4.classList.remove("dark");
}
function clickSmallBox4() {
    window.open("https://www.instagram.com/u.glossu/");
}
smallBox4.addEventListener("mouseover", mouseon4);
smallBox4.addEventListener("mouseout", mouseout4);
smallBox4.addEventListener("click", clickSmallBox4);


const smallBox5 = document.querySelector("#sb5");
const smallBoxText5 = document.querySelector("#sbt5");
const img5 = document.querySelector("#trashpang_img");
function mouseon5() {
    smallBox5.style.backgroundColor = "dimgray";
    smallBoxText5.classList.remove("hidden");
    img5.classList.add("dark");
}
function mouseout5() {
    smallBox5.style.backgroundColor = "white";
    smallBoxText5.classList.add("hidden");
    img5.classList.remove("dark");
}
function clickSmallBox5() {
    window.open("https://play.google.com/store/apps/details?id=com.pangsu.trashpang&hl=ko&gl=US");
}
smallBox5.addEventListener("mouseover", mouseon5);
smallBox5.addEventListener("mouseout", mouseout5);
smallBox5.addEventListener("click", clickSmallBox5);


const smallBox6 = document.querySelector("#sb6");
const smallBoxText6 = document.querySelector("#sbt6");
const img6 = document.querySelector("#blog_img");
function mouseon6() {
    smallBox6.style.backgroundColor = "dimgray";
    smallBoxText6.classList.remove("hidden");
    img6.classList.add("dark");
}
function mouseout6() {
    smallBox6.style.backgroundColor = "white";
    smallBoxText6.classList.add("hidden");
    img6.classList.remove("dark");
}
function clickSmallBox6() {
    window.open("https://blog.naver.com/pangsu_dev");
}
smallBox6.addEventListener("mouseover", mouseon6);
smallBox6.addEventListener("mouseout", mouseout6);
smallBox6.addEventListener("click", clickSmallBox6);

window.addEventListener("contextmenu", e => e.preventDefault());
