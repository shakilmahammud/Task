var button = document.getElementById('add-item');
var text = document.getElementById('text');
var email = document.getElementById('email');
var url = document.getElementById('url');


document.querySelector('button').addEventListener("click", function() {
  // Store results
  var textStored = text.value;
  var emailStored = email.value;
  var urlStored = url.value;
  // Reset value of input
  textStored.value = "";
  emailStored.value="";
  urlStored.value="";

  // Get items container
  var itemsText = document.getElementById('textValue');
  var itemsEmail = document.getElementById('emailValue');
  var itemsUrl = document.getElementById('UrlValue');
  // Add items to container
  itemsText.innerHTML+='</br>'+"your text :" +textStored;
  itemsEmail.innerHTML+='</br>'+"Your Email :" +emailStored;
  itemsUrl.innerHTML+='</br>'+"Url: " +urlStored;
  result.focus();
});