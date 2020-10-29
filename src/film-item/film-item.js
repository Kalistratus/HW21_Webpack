import html from "./index.html";
import "./style.css";

class FilmCardItem {
  constructor() {

  }

  render() {
    // console.log("Render2", html);
    const container = document.createElement("div");
    container.innerHTML = html;

    // return container;
    document.body.appendChild(container.firstChild);
  }
}

export default FilmCardItem;