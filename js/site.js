//get the values from the user. 
//We need to get the drip and the drop value.
//starts or controller function
function getValues() {
   //get the user values from the page
   let dripValue = document.getElementById("dripValue").value;
   let dropValue = document.getElementById("dropValue").value;
  
   //parse for numbers
   dripValue = parseInt(dripValue);
   dropValue = parseInt(dropValue);

    //check that the numbers are integers
   if(Number.isInteger(dripValue) && Number.isInteger(dropValue)){
   //call dripDrop parameters
   let dDArray = dripDrop(dripValue, dropValue);
   //cal displayData and write the values to the screen
   displayData(dDArray);
   }else {
      alert("You must enter an integers");
   } 
}
//Do drip drop 
//logic function(s)
function dripDrop(dripValue, dropValue)
{
   let returnArray =[];

   //loop from 1 to 100
   for (let i = 1; i <= 100; i++) {

   //check to see if divisible by Both (3 and 5)
   //check to see if divisible by drip value (3)
   //check to see if divisible by drop value (5)
   if(i % dripValue == 0 && i % dropValue == 0){
     returnArray.push('DripDrop');
   }else if (i % dripValue == 0) {
      returnArray.push('Drip')
   }else if (i % dropValue == 0){
      returnArray.push('Drop')
   }else{
      returnArray.push(i);
     } 
   }
   return returnArray;
}

// loop over the array and create a tablerow for each item
function displayData(dDArray){

   //get the table body element from the page
   let tableBody = document.getElementById("results");

   //get the template row
   let templateRow = document.getElementById("dDTemplate");

   //clear table first
   tableBody.innerHTML = "";

   for (let index = 0; index < dDArray.length; index += 5) {
      let tableRow = document.importNode(templateRow.content, true);

      //grab the table data and put to use in array
      let rowCols = tableRow.querySelectorAll("td");

      rowCols[0].classList.add(dDArray[index]);
      rowCols[0].textContent = dDArray[index];

      rowCols[1].classList.add(dDArray[index + 1]);
      rowCols[1].textContent = dDArray[index+1];

      rowCols[2].classList.add(dDArray[index + 2]);
      rowCols[2].textContent = dDArray[index+2];

      rowCols[3].classList.add(dDArray[index + 3]);
      rowCols[3].textContent = dDArray[index+3];

      rowCols[4].classList.add(dDArray[index + 4]);
      rowCols[4].textContent = dDArray[index+4];

      tableBody.appendChild(tableRow);

   }

}