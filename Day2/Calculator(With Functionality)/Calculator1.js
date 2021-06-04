class Calculator {
  constructor(calPreviousResults, calCurrentResults) {
    this.calCurrentResults = calCurrentResults;
    this.calPreviousResults = calPreviousResults;
  }
  clearDisplay() {}
  Displaynumbers(number) {
    this.CurrentResults = number;
  }
  DisplayOperators(operations) {}
  ComputeValues() {}
  UpdateDisplay() {
    this.calCurrentResults.innerText = this.CurrentResults;
  }
}

const calNumbers = document.querySelectorAll('[cal-numbers]');
const calOperators = document.querySelectorAll('[cal-operators]');
const calClear = document.querySelector('[cal-clear]');
const calCompute = document.querySelector('[cal-compute]');
const calPreviousResults = document.querySelector('[cal-previous-results]');
const calCurrentResults = document.querySelector('[cal-current-results]');

const calculator = new Calculator(calPreviousResults, calCurrentResults);

calNumbers.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.Displaynumbers(button.innerText);
    calculator.UpdateDisplay();
  });
});
