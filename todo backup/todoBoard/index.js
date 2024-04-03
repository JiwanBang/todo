let page = 1;
let count = 4;
let title = "";
let posting = "";

const getBoards = async () => {
  try {
    const boardsRes = await fetch("http://localhost:3080", {
      method: "post",
      mode: "no-cors",
      body: `title=${title}&posting=${posting}`,
    });
    const boardsData = await boardsRes.text();
    const boardsArr = JSON.parse(boardsData);

    const boradsElem = document.getElementById("posttest");
    (boradsElem.innerHTML = ""),
      boardsArr.forEach((item) => {
        boradsElem.innerHTML += `<div>${item.title} ${item.posting}`;
      });
  } catch (err) {
    console.error(err);
  }
};

const writeBtn = document.getElementById("writebtn1");
const modalArea = document.getElementById("writebox");
writeBtn.onclick = () => {
  modalArea.classList.remove("modaloff");
  modalArea.classList.add("modalon");
  console.log("something");
};

getBoards();
