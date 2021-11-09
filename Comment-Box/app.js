var comentsList = [
    createComment("drink water", true),
    createComment("shoping", false),
    createComment("alt ceva", false)
    
  ];

  var inputCommentHtml = document.getElementById("inputComment");
  var addBtnComment = document.getElementById("addBtnComment");

  var ulCommentsList = document.getElementById("commentsList");

  displayComentsList(comentsList);


function createComment(commentValue, doneValue) {
    return {
      email: "email@gmail.com",
      text: commentValue,
      
    };
  }
  

  
  function createCommentItem(commentText) {
    var addCommentLiHtml = document.createElement("li");
    addCommentLiHtml.className = "comment"
    addCommentLiHtml.innerHTML = `

    Email: ${commentText.email}
    <br />
    text: ${commentText.text}
    
    `;
  
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn"
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function () {
      
      console.log("sterge", addCommentLiHtml);
      console.log("parent = ", addCommentLiHtml.parentElement);
      addCommentLiHtml.parentElement.removeChild(addCommentLiHtml);
    });
    addCommentLiHtml.appendChild(deleteBtn);
    return addCommentLiHtml;
  }
  
  
  function displayComentsList(comentsList) {
    
    for (var i = 0; i < comentsList.length; i++) {
      var comentItem = comentsList[i];
      var commentItemHtml = createCommentItem(comentItem);
      ulCommentsList.appendChild(commentItemHtml);
    }
    return ulCommentsList;
  }
  


  addBtnComment.addEventListener("click", function () {
    console.log("Valoare input: ", inputCommentHtml.value);

    var commentObject = createComment(inputCommentHtml.value, false);
    comentsList.push(commentObject); 
  
    console.log(comentsList);
    
    //var ulCommentsList = createCommentItem(commentObject);
    //ulCommentsList.appendChild(liCommentHtmlCreated);
    ulCommentsList.innerHTML = "";
    displayComentsList(comentsList);
  });