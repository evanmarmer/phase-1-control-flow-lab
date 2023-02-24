function scuberGreetingForFeet(distance) {
  let a
  if (distance <= 400) {
    a = 'This one is on me!'
  } if (distance > 400 && distance <= 2000) {
    a = 'That will be twenty bucks.'
  } if (distance > 2000 && distance <= 2500) {
    a = 'I will gladly take your thirty bucks.'
  } if (distance > 2500) {
    a = 'No can do.'
  }

  return a
}


function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
  
}


function switchOnCharmFromTip(tip) {
  
  switch (tip){
    case 'generous' :
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default:
      return 'Bye.';
    

  }


}