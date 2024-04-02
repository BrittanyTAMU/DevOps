class Calculator {
    constructor() {
      this.inputElement = document.getElementById('input');
      this.reset();
      this.setupEventListeners();
    }
  
    reset() {
      this.currentInput = '0';
      this.previousInput = null;
      this.operation = null;
      this.updateDisplay();
    }
  
    appendNumber(number) {
      if (this.currentInput === '0') {
        this.currentInput = number.toString();
      } else {
        this.currentInput += number.toString();
      }
      this.updateDisplay();
    }
  
    selectOperation(operation) {
      this.operation = operation;
      this.previousInput = this.currentInput;
      this.currentInput = '0';
      this.updateDisplay();
    }
  
    compute() {
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);
      let result;
      switch (this.operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          if (current !== 0) {
            result = prev / current;
          } else {
            result = 'Error';
          }
          break;
        default:
          return;
      }
      this.currentInput = result.toString();
      this.previousInput = null;
      this.operation = null;
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.inputElement.value = this.currentInput;
    }
  
    setupEventListeners() {
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.textContent.trim(); // Trim whitespace
          if (!isNaN(parseFloat(value)) || value === '.') {
            this.appendNumber(value);
          } else if (value === '=') {
            this.compute();
          } else {
            this.selectOperation(value);
          }
        });
      });
    }
  }
  
  const calculator = new Calculator();
  