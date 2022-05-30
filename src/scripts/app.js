document.addEventListener('DOMContentLoaded', function(){
  const ratingButtons = document.querySelectorAll('.ratingForm_button');
  const ratingForm = document.querySelector('.ratingForm');
  const ratingResultForm = document.querySelector('.formResult');
  const formValue = document.querySelector('.formResult__value');
  const ratingSubmit = document.querySelector('.ratingForm_submit');
  let rationValue = "";


  ratingButtons.forEach(function(ratingButton){
    ratingButton.addEventListener("click", changeButton)
  })

  ratingSubmit.addEventListener("click", formResult);

  function changeButton(event){
    rationValue = event.target.outerText;
    const button = event.target;

    ratingButtons.forEach(function(bt){
      bt.style.backgroundColor="";
    })

    button.style.backgroundColor="#fb7413";
  }

  function formResult(event){

    if (rationValue === ""){
      alert("You must select a value")
      return
    }

    event.preventDefault();
    formValue.innerText = rationValue;
    ratingResultForm.style.display = "flex";
    ratingForm.style.display = "none";
  }
})
