function validate() {
  var fname = document.contactForm.fname;
  var lname = document.contactForm.lname;
  var email = document.contactForm.email;
  var number = document.contactForm.number;

  if (LetterOnlyTestFirst(fname)) {
    if (LetterOnlyTestLast(lname)) {
      if (mailFiller(email)) {
        if (Mobile(number)) {
        }
      }
    }
  }
  return false;
}

function LetterOnlyTestFirst(fname) {
  var letters = /^[A-Za-z]+$/;
  if (fname.value.length == "") {
    alert("Please enter first name");
    fname.focus();
    return false;
  } else if (fname.value.match(letters)) {
    return true;
  } else {
    alert("First name must have alphabet characters only");
    fname.focus();
    return false;
  }
}

function LetterOnlyTestLast(lname) {
  var letters = /^[A-Za-z]+$/;
  if (lname.value.length == "") {
    alert("Please enter last name");
    fname.focus();
    return false;
  } else if (lname.value.match(letters)) {
    return true;
  } else {
    alert("last name must have alphabet characters only");
    fname.focus();
    return false;
  }
}

function mailFiller(email) {
  var mails =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.length == "") {
    alert("please enter email");
    email.focus();
    return false;
  } else if (email.value.match(mails)) {
    return true;
  } else {
    alert("enter valid email");
    email.focus();
    return false;
  }
}

function Mobile(number) {
  var numbers = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
  if (number.value.length == "") {
    alert("Please enter contact number");
    email.focus();
    return false;
  } else if (number.value.length > 10 || number.value.length < 9) {
    alert("Please enter a valid contact number");
    email.focus();
    return false;
  } else if (number.value.match(numbers)) {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  } else {
    alert("Please check your contact number");
    return false;
  }
}