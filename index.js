var contact = document.getElementById('contact');
var title = document.getElementById('title');

var contactMe = function(){
  if(title){
    title.innerHTML = "<h2>Let's get <br>in touch!</h2>";
    title.setAttribute('class', 'newTitle');
    return title.innerHTML;
  }
}

contact.addEventListener('click', function(event){
  contactMe();
});
