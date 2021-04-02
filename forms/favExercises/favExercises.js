var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++)
        selExercises.addItem(exercises[i])     
}

let sel1 = ""
let sel2 = ""

btnDone.onclick=function(){
    sel1 = coreExercises.includes(selExercises.text[0])
    sel2 = coreExercises.includes(selExercises.text[1])
    
    if (sel1 == true) {
        if (sel2 == true) 
            NSB.MsgBox(`You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`)
        else 
            NSB.MsgBox(`You did not pick the two core exercises.`)
    } else 
        NSB.MsgBox(`You did not pick the two core exercises.`)
}

btnToMobileNav.onclick=function(){
    ChangeForm(mobileNav)
}


