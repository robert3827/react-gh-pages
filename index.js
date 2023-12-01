function generateProjList() {
  console.log(projectsList);

  // console.log("ProjListParent"+document.getElementById("projListParent"));
  var parent = document.getElementById("projListParent");    

  for (let i = 0; i < projectsList.length; i++) {
    


    let id = projectsList[i].id;
    let title = projectsList[i].title;
    let className = projectsList[i].class;
    let description = projectsList[i].description;

    if (description.length > 100) {
      description = description.substring(0, 97) + "...";
    }

    console.log(description);
    let techstack = projectsList[i].techstack;
    let time = projectsList[i].time;

    console.log(`ID: ${id} 
                          \nTitle: ${title}`)

    let projCard = document.createElement("div");
    

    projCard.innerHTML = `<div class="col-md-3">
    <div class="h-100 p-5 bg-body-tertiary border rounded-3 ">
      <h2>${title}</h2>
      <p>During my education I have had the opportunity to contribute to Software Projects in a variety of industries. </p>
      <a href="./workHistory.html" class="btn btn-outline-light" type="button" aria-label="Learn more about Prior Word Experience">Learn More</a>
    </div>
  </div>`
   
      
    console.log("ProjCard" + projCard);
    // parent.appendChild(projCard);
    



  }

}



function openPopup(card) {
  let popup =  document.getElementById('popup' + card);
  let overlay =  document.getElementById('overlay'+ card);

  

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup(card) {

  let popup =  document.getElementById('popup' + card);
  let overlay =  document.getElementById('overlay'+ card);

 popup.style.display = 'none';
 overlay.style.display = 'none';
}

generateProjList();