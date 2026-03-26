function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate(names, adjectives, nouns) {
  return `${pick(names)}@${pick(adjectives)}${pick(nouns)}`;
}

function render(names, adjectives, nouns) {
  const list = document.getElementById("hostname-list");
  const items = Array.from({ length: 10 }, (_, i) => {
    const num = document.createElement("span");
    num.className = "item-number";
    num.textContent = i + 1;

    const host = document.createElement("span");
    host.className = "hostname";
    host.textContent = generate(names, adjectives, nouns);

    const li = document.createElement("li");
    li.appendChild(num);
    li.appendChild(host);
    return li;
  });
  list.replaceChildren(...items);
}

Promise.all([
  fetch("data/names.json").then(r => r.json()),
  fetch("data/adjectives.json").then(r => r.json()),
  fetch("data/nouns.json").then(r => r.json()),
]).then(([names, adjectives, nouns]) => {
  render(names, adjectives, nouns);
  document.getElementById("regenerate-btn")
    .addEventListener("click", () => render(names, adjectives, nouns));
});
