const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

rl.question('Which test do you want to select? (1, 2 or 3) \n', (answer) => {
    answer = parseInt(answer);
    selectTest(answer);
});

function selectTest(answer) {
    switch (answer) {
        case 1:
            filmsTest();
            rl.close();
            break;

        case 2:
            fibonacciTest();
            break;
        
        case 3:
            wordsTest();
            rl.close();
            break;
        
        default:
            console.log('Select either 1, 2 or 3 \n');
            rl.close();
            break;
    }
}

function filmsTest() {
    var filmsSells = [
        { id: 4, name: "Star Wars", price: 8 },
        { id: 6, name: "Indiana Jones", price: 11 },
        { id: 29, name: "The Godfather", price: 8.95 },
        { id: 30, name: "Akira", price: 21.5 },
      ];
      
      var totalFilmsSells = 0;
      
      filmsSells.forEach((elem) => {
        totalFilmsSells += elem.price;
      });
      
      console.log(`Total Film sum: ${totalFilmsSells}`);
}

function fibonacciTest() {
    var precedentNumber = 0;
    var currentNumber = 1;
    var tempNumber;
    rl.question('How many Fibonacci numbers? : ', (fibonacciNumber) => {
        fibonacciNumber = parseInt(fibonacciNumber)
        if (isNaN(fibonacciNumber)) {
            console.log('Not a number OR undefined');
            rl.close();
        }
        else {
        fibonacciAuto(fibonacciNumber);       
        }
        rl.close();
    });
    
    function fibonacciAuto(qttyOfNumbers)
    {
            for (let i = 0; i < qttyOfNumbers; i++) {
                if (i < 10) {
                    fibonacci();
                } else {
                    console.log(undefined);                    
                }
            }
    }

    function fibonacci() {
        console.log(precedentNumber);
        tempNumber = precedentNumber + currentNumber;
        precedentNumber = currentNumber;
        currentNumber = tempNumber;
    }
}

function wordsTest() {
    
    var words = ["bhSDF843", 'hH2a8eDS', "id8SDG83", "psadi8ED93", "dfdsfsdf", "382733", "SKHSGS"] 

    words.forEach(word => {
        insertToDatabase(word);
    });

    async function insertToDatabase(word) {
        setTimeout(() => {
            sanitiseWord(word)
                .then(
                result => {
                    console.log(result);
                })
                .catch(result => {
                    console.log('failed:', result)
                });
            }, 1000);
    }

    async function sanitiseWord(word) {

        word = word.replace(/[0-9]/g, '');
        word = word.toLowerCase();

        const random = Math.random() < 0.5

        if (random) {
            return new Promise(resolve => {
                setTimeout(() => {
                  resolve(`${word} : true`);
                }, 2000);
              });
        }
        else {
            return new Promise(reject => {
                setTimeout(() => {
                  reject(`${word} : false`);
                }, 2000);
              });
        }
      };
}