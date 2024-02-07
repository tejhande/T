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



function form_submit(){
    var form=document.getElementById("myForm");
    //console.log(form);
    form.onsubmit=function(){
        alert("Form Submitted Successfully!");
    } 
    
}

function goToResume(){
	alert(`Redirecting to Resume Page...`);
}


// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734


