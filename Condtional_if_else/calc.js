const calculator = {
        add: function(a, b) {
          return a + b;
        },
        subtract: function(a, b) {
          return a - b;
        },
        multiply: function(a, b) {
          return a * b;
        },
        divide: function(a, b) {
          if (b === 0) {
            console.log("Cannot divide by 0.");
          } else {
            return a / b;
          }
        }
      };
      console.log(calculator.add(4,6));
      console.log(calculator.subtract(20,10));
      console.log(calculator.multiply(5,2));
      console.log(calculator.divide(50,5));