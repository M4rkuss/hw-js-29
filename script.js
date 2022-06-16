class Comment {
  constructor (nam, dat, comm) {
    this.name = nam;
    this.date = dat;
    this.comment = comm;
  }
}

let comments = []

document.getElementById('btnOk').addEventListener('click', function () {
  let date = new Date();
  let commentObj = new Comment(document.getElementById("inputName").value, date.toLocaleTimeString() + " - " + date.toLocaleDateString(), document.getElementById("inputText").value);
  comments = [];
  comments.push(commentObj);
  for (let key of comments) {
    document.getElementById('commentWrap').insertAdjacentHTML('beforeend', `<div class="comment-wrap" id="commentWrap"><h2>${key.name}</h2><p>${key.date}</p><p>${key.comment}</p></div>`);
  }
})
