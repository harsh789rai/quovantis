
let atm = {
    2000: 5,
    500: 7,
    200: 2,
    100: 4
};

let returnedNotes = {};

function minNotes (initalVal) {
    let value = initalVal;

  let notesArr = Object.keys(atm).sort((a,b) => b-a);

  for (let i=0 ; i< notesArr.length; i++) {
    
      if(value >= notesArr[i]) {
        let count = Math.floor(parseInt(value) / parseInt(notesArr[i]));
        count = atm[notesArr[i]] >= count ? count : atm[notesArr[i]]; 
        returnedNotes[notesArr[i]] = count;
        value = value - (notesArr[i] * count);
      }
      
      if(value === 0) {
          return returnedNotes;
      }
  }
};

let notesCount = minNotes(2600);
console.log(notesCount);