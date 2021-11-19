function replaceGrades(grade){
    if (grade === -1){
        return
    }

    while(grade != -1){
        if (grade < 60){
            window.alert("Number grade = " + grade + "\nLetter grade = F")
        } else if (grade <= 69){
            window.alert("Number grade = " + grade + "\nLetter grade = D")
        } else if (grade <= 79){
            window.alert("Number grade = " + grade + "\nLetter grade = C")
        } else if (grade <= 99){
            window.alert("Number grade = " + grade + "\nLetter grade = B")
        } else if (grade <= 120){
            window.alert("Number grade = " + grade + "\nLetter grade = A")
        }
    }

}

var grade = Number(window.prompt("Enter number grade from 0 through 120\nOr enter -1 to end entries"));
replaceGrades(grade);