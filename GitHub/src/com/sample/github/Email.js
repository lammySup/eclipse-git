// For Salesforce we will be using the basic EmailID Validation
var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/gm;

//RFC 2822 standard email validation
// var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm;

// Read from JSON to the emailId variable
var emailId = 'email@example.com,firstname.lastname@example.com,email@subdomain.example.com,firstname+lastname@example.com,email@123.123.123.123,email@[123.123.123.123],"email"@example.com,1234567890@example.com,email@example-one.com,_______@example.com,email@example.name,email@example.museum,email@example.co.jp,firstname-lastname@example.com';

var counter = 0;
let Join_CCEmailID = [];
let Invalid_EmailId = [];
var arrayOfEmailId = emailId.split(',');
for (var i = 0; i < arrayOfEmailId.length; i++) {
   var email = arrayOfEmailId[i];
   if (email.match(mailformat)) {
      counter = counter + arrayOfEmailId[i].length;
      if (counter < 255) {
         Join_CCEmailID.push(arrayOfEmailId[i]);
      }
   } else {
      Invalid_EmailId.push(arrayOfEmailId[i])
   }
}

//Set the join to the CC Email ID Field
var Final_CCEmailID = Join_CCEmailID.join();
console.log('Valid Email ID List(Text Field Under 255 Character) = ' + Final_CCEmailID);
console.log('Invalid Email ID List = ' + Invalid_EmailId.join());