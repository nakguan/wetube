import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteComments = document.querySelectorAll("#jsCommentDelete");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const addComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const removeComment = deleteId => {
  const deleteLi = document.getElementById(deleteId);
  commentList.removeChild(deleteLi);

  decreaseNumber();
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  console.log(videoId);
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleDelete = async event => {
  const videoId = window.location.href.split("/videos/")[1];
  const deleteId = event.target.parentNode.id;
  const response = await axios({
    url: `/api/${videoId}/comment/delete`,
    method: "POST",
    data: {
      deleteId
    }
  });

  if (response.status === 200) {
    removeComment(deleteId);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  addCommentForm.addEventListener("submit", handleSubmit);
  deleteComments.forEach(delBtn => {
    delBtn.addEventListener("click", handleDelete);
  });
};

if (addCommentForm) {
  init();
}
