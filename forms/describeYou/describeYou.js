let userChoice = ""

rdoChars.onchange=function(){
   userChoice = $("input[name=rdoChars]:checked").prop("value")
   lblChoice.value =(`I would agree that you are a ${userChoice} person too.`)
}

btnToFavExercises.onclick=function(){
    ChangeForm(favExercises)
}