function testaFormulario(e){
  e.preventDefault();

  var peopleRaw = localStorage.getItem('people');
  if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw);
  }
  else {
    var people = [];
  }

  /* people.push({
    name: e.target.elements['name'].value,
    tel: e.target.elements['name'].value,
    xp: ,
  }); */

  console.log(e.target.elements['name'].value);
}