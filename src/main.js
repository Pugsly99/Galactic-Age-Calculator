import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  let person = new Person(name, age);
  
  $("form#newPerson").submit(function(event) {
    event.preventDefault();
  
  //   let person = new Person(name, age);
  //   this.name = $("input#name").val();
  //   this.age = $("input#num").val();

  //   let venus = person.venusAge;

  //   console.log(venus);
  //   console.log(this.name);
  //   console.log(this.age);
  
  });
})



