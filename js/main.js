"use strict";

// let Colors = ['#000000', '#ffffff', '#aaadef', '#dd32f2', '#bb4563'];

const dashBoard = document.getElementById('dashBoard');

initBoard();



function initBoard(){
	let Colors = JSON.parse(localStorage.getItem('Colors'));
	for (var i = Colors.length - 1; i >= 0; i--) {
		addElem(Colors[i]);
	}
}

function addElem(name){
	let div = document.createElement('div');
	div.className = "mainBlock-card";
	div.innerHTML =
		"<div class=\"mainBlock-card-colorSquare\" style = \" background:" + name + ";\"></div>" +
  		"<span class=\"mainBlock-card-colorName\">" + name + "</span>" +
  		"<span class=\"mainBlock-card-colorLike\"><button><i class=\"material-icons\">&#xE838;</i></button></span>" + 
  		"<span class=\"mainBlock-card-colorDelete\"><button><i class=\"material-icons\">&#xE872;</i></button></span>";
  	dashBoard.insertBefore(div, dashBoard.firstChild);
}

function newColor(){
	let name = document.forms.newColor.hexValue;
	if(name.value.match(/#[a-f0-9]{6}/gi)){
		addElem(name.value);
		editColors(name.value);
	}
	else{
		alert('Введите HEX значение в формате #******');
	}
}

function editColors(name){
	let Colors = JSON.parse(localStorage.getItem('Colors'));
	if (Colors) {
		Colors.unshift(name);
	}
	else {
		Colors = [];
		Colors.push(name);
	} 
	localStorage.removeItem('Colors');
	localStorage.setItem('Colors', JSON.stringify(Colors));
}