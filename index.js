function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}
function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
      case 'generous':
          response = 'Thank you so much.';
          break;
      case 'not as generous':
          response = 'Thank you.';
          break;
      default:
          response = 'Bye.';
          break;
  }
  return response;
}
function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
      response = 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
      response = 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
      response = 'I will gladly take your thirty bucks.';
  } else {
      response = 'No can do.';
  }
  return response;
}
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


