window.onload = function () {

  /* ######################
  ## Sum All Numbers App ##
  #######################*/

  // Initialize JQuery selectors
  const start = $('#numberSumStart');
  const end = $('#numberSumEnd');
  const sumOutput = $('#sumTotal')
  const sumOutputLabel = $('#sumTotalLabel')

  // Initialize Variables
  let num1 = parseInt(start.val());
  let num2 = parseInt(end.val());
  let sum = sumAll([num1, num2]);
  sumOutput.val(sum);

  // Helper function to update the current numbers and sum
  const update = function() {
    num1 = parseInt(start.val());
    num2 = parseInt(end.val());
    sum = sumAll([num1, num2]);
    sumOutputLabel.html(`Sum of numbers from ${num1} to ${num2}`);
  }

  // On change of the starting number input, calculates and updates app
  start.change(function() {
    update();
    sumOutput.val(sum);
  });

  // On change of the ending number input, calculates and updates app
  end.change(function() {
    update();
    sumOutput.val(sum);
  });

  /* ######################
  ## Sum All Numbers App ##
  #######################*/
  const arrayDiffInput1 = $('#arrayDiff1');
  const arrayDiffInput2 = $('#arrayDiff2');
  const diffArrayBtn = $('#diffArrayBtn');

  let arr = arrayDiffInput1.val().split(",");


  diffArrayBtn.click(function(){alert(arr);});
}
