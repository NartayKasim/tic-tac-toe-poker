let combiner = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];



function play(num) {
    let turn = document.getElementById("player");
    let commit = document.getElementById(num);

    if (turn.innerText === "X") {
        if (commit.innerText.length === 0) {
            commit.innerText = "X"
            inserter(num+1, "X")
            turn.innerText = "O"
        }

    } else {
        if (commit.innerText.length === 0) {
            commit.innerText = "O"
            inserter(num+1, "O")
            turn.innerText = "X"
        }
    }

    function inserter(num, XorO) {
        for (let i = 0 ; i < combiner.length; i++) {
            for (let j = 0; j < combiner[i].length; j++) {
                if (combiner[i][j] === num) {
                    combiner[i][j] = XorO;
                }
            }
        }
      checker(combiner)
    }
    
    function checker(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].join('') === "OOO") {
                alert("O's win!")
            }
            else if (arr[i].join('') === "XXX") {
                alert("X's win!")
            }
        }
    }

}