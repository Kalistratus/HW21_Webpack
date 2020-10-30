import template from "lodash.template";
import html from "./index.html";


// Список фильмов
const filmsList = [{
    name: "Гори, гори ясно",
    description: "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
    rating: "6.60 (6688)",
    photo: "http://d.radikal.ru/d23/1908/79/bd235b2d56c4.jpg"
  },
  {
    name: "Проект Power",
    description: "В Новом Орлеане появляется странная пилюля, способная подарить суперспособности любому желающему. За появлением пилюли на улицах города стоит некая таинственная организация.",
    rating: "6.00 (59878)",
    photo: "https://i1.imageban.ru/out/2020/08/10/38454d727a2f33d5c7f4c2bd93c84c74.jpg"
  },
  {
    name: "Неистовый",
    description: "Нет ничего опаснее человека, доведенного до точки кипения. Особенно, если жизнь обошлась с ним несправедливо и теперь ему нечего терять...",
    rating: "6.10 (14781)",
    photo: "https://b.radikal.ru/b31/2010/11/64d7a3edd175.jpg"
  },
  {
    name: "Дьявол всегда здесь",
    description: "Безутешный Уиллард Рассел готов на всё, лишь бы спасти умирающую жену. Он начинает молить небеса о спасении, забыв об остальном мире. Но у него ещё есть сын Элвин..",
    rating: "7.10 (66561)",
    photo: "https://c.radikal.ru/c12/2009/c9/4bd9049f6a88.jpg"
  }
]


const templateRenderer = template(html);

class List {
  constructor() {

    this.films = [];

    for (let i = 0; i < 4; i++) {
      const film = filmsList[i];
      this.films.push(film);
    }
  }

  render() {
    const layout = templateRenderer({
      films: this.films
    });

    const container = document.createElement("div");
    container.className = "card_items";
    container.innerHTML = layout;

    document.addEventListener('click', (event) => {
      switch (event.target.dataset.id) {
        case "edit":
          console.log("Edit");
          break;
        case "delete":
          console.log("Delete");
          break;
        case "more":
          console.log("More");
          break;
        default:
          console.log("Error");
      }
    });

    document.body.appendChild(container);
  }
}

export default List;