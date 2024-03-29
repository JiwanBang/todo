const listElem = document.getElementsByClassName("menuBar")[0];

class Todo {
  static #count = 1;
  #id;
  #title;
  #createdAt;
  #posting;
  #deadline;
  #isWorked = false;

  constructor(title, posting, deadline) {
    this.id = Todo.#count++;
    this.#title = title;
    this.#createdAt = this.#createdDate();
    this.#posting = posting;
    this.#deadline = deadline;
  }

  #createdDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  getTitle = () => this.#title;
  getCreatedAt = () => this.#createdAt;
  getPosting = () => this.#posting;
  getDeadline = () => this.#deadline;
  getisWorked = () => this.#isWorked;
}

const list = [];

console.log(list);

const reRender = () => {
  console.log(list);
  console.log(listElem);
  list.forEach((item) => {
    listElem.innerHTML += `<ul class="work-item">
    <br />
    <li>${item.getCreatedAt()}</li>
    <li>제목: ${item.getTitle()}</li>
    <li>내용: ${item.getPosting()}</li>
    <br />
  </ul>
  `;
  });
};

reRender();

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  const todoList = new Todo(
    e.target.form.title.value,
    e.target.form.posting.value
  );
  list.push(todoList);

  e.target.form.title.value = e.target.form.posting.value = "";
  reRender();
};
