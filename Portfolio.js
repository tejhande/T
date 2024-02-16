const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});



// function form_submit(){
//     var form=document.getElementById("myForm");
//     //console.log(form);
//     form.onsubmit=function(){
//         alert("Form Submitted Successfully!");
//     } 
// }



function form_submit(event) {
    event.preventDefault(); 
    var form = document.getElementById("myForm");
    if (form.checkValidity()) {
        window.location.href = '404.html';
    } else {
        alert("Please fill out all required fields correctly.");
    }
    
    return false; 
}




function goToResume() {
    var ans = confirm(`Downloading Resume`);
    if  (ans == true) {
    } else {
        resumeLink.removeAttribute("download");
        resumeLink.removeAttribute("href");
        return false; 
    }
}
// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734


