const list = document.getElementById("list");

function setList(group) {
  clearList();
  for (let i = 0; i < group.length; i++) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    item.addEventListener("click", function () {
      window.location = `../html/productDetails.html?id=${group[i].imgSourceName}`;
    });
    const text = document.createTextNode(group[i].name);
    item.appendChild(text);
    list.appendChild(item);
  }
  if (group.length === 0) {
    setNotResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setNotResults() {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  document.getElementById("list").style.color = "#383838";
  document.getElementById("list").style.backgroundColor = "#fff";
  document.getElementById("list").style.listStyle = "none";
  document.getElementById("list").style.width = "500px";
  document.getElementById("list").style.position = "absolute";
  document.getElementById("list").style.marginTop = "40px";
  document.getElementById("list").style.padding = "10px";
  document.getElementById("list").style.display = "block";

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      allProducts
        .filter((person) => {
          return person.name.toLowerCase().startsWith(value);
        })
        .sort((personA, personB) => {
          return (
            getRelevancy(personB.name, value) -
            getRelevancy(personA.name, value)
          );
        })
    );
  } else {
    clearList();
  }
});
