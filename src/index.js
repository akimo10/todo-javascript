import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから対象の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div generate
  const div = document.createElement("div");
  div.className = "list-row";

  //li generate
  const li = document.createElement("li");
  li.innerText = text;

  // button generate
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // クリックされた完了ボタンの親タグ(div)を未完了リストから削除する。
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // divi以下を初期化
    addTarget.textContent = null;

    // li generate
    const li = document.createElement("li");
    li.innerText = text;

    // button generate
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;

      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了リストに対象の要素を追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //クリックされた削除ボタンの親タグ(div)を未完了リストから削除する。
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
