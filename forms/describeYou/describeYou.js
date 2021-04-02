rdoChars.onchange=function(){
   let userChoice = $("input[name=rdoChars]:checked").prop("value")
   lblChoice.textContent =(`I would agree that you are a ${userChoice} person too.`)
}

btnToFavExercises.onclick=function(){
    ChangeForm(favExercises)
}