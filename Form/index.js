
let enrollments = [];


function Clear() {
	var enrollments = document.getElementsByClassName("Enrollments");	
    const myNode = document.getElementById("studentList");
    while (myNode.lastElementChild) {
    myNode.removeChild(studentList.lastElementChild);
    }
}

function Enroll () {
const name = document.createElement("h5");
const web = document.createElement("h5");
const email = document.createElement("h5");
const skill = document.createElement("h5");
const gender = document.createElement("h5");
const cardBody = document.createElement("div");
const img = document.createElement("img");
const card = document.createElement("div");
const node = document.getElementById("Enrollments");
const divA = document.createElement("div");
const divB = document.createElement("div");
const divC = document.createElement("div");


divC.setAttribute("display","flex");
divA.classList.add("row");
divA.classList.add("divA");
divB.classList.add("divB");
divC.classList.add("divC");
name.innerHTML = "<span><strong>Name: </strong></span>" + document.getElementById("nameField").value;
web.innerHTML = "<span><strong>Website: </strong></span>" + document.getElementById("emailField").value;
email.innerHTML = "<span><strong>Email: </strong></span>" + document.getElementById("webField").value;
const imageT = document.getElementById("imgLinkField").value
img.setAttribute("src", imageT );
img.setAttribute("alt" , "student-image");
img.classList.add("ir");
const skillCheck = document.querySelectorAll('input[name="skill"]:checked');
if(skillCheck.length == 0  ){
skill.innerHTML = "<span><strong>Skills: </strong></span>" + "None" ;
}else{
var e = [];

for(var i = 0, l = skillCheck.length; i < l;  i++)
{
		console.log(skillCheck);
    e.push(skillCheck[i].value);
    skillCheck[i].checked=false;
}
var str = e.join(', ');

	skill.innerHTML = "<span><strong>Skills: </strong></span>" + str;

	
}


if (document.getElementById("maleField").checked) {
  gender.innerHTML = "<span><strong>Gender: </strong></span>" + document.getElementById("maleField").value;
}else if (document.getElementById("femaleField").checked) {
  gender.innerHTML = "<span><strong>Gender: </strong></span>" + document.getElementById("femaleField").value;
}

divB.appendChild(img);
divC.appendChild(name);
divC.appendChild(email);
divC.appendChild(web);
cardBody.appendChild(divA);
divC.appendChild(gender);
divC.appendChild(skill);
divA.appendChild(divB);
divA.appendChild(divC);
card.appendChild(cardBody);
card.classList.add("Enrollments");

document.getElementById("studentList").appendChild(card);

document.getElementById("nameField").value = "";
document.getElementById("emailField").value = ""; 
document.getElementById("webField").value = "";
document.getElementById("imgLinkField").value = "";
document.getElementById("maleField").checked = false;
document.getElementById("femaleField").checked = false;

document.querySelectorAll('input[name="skill"]').checked = false;  
}


