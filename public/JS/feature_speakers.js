import { speakers } from "./speakers.js";

const speakerContainer = document.getElementById("speakers");
let speakerItems = "";
for (let i = 0; i < speakers.length; i += 1) {
  console.log(speakers[i]);
  speakerItems = `<div class="speaker">
          <img
            src="${speakers[i].checkerUrl}"
            alt=""
            class="checkers"
          />
          <img
            src="${speakers[i].imageUrl}"
            alt="Bishop David Oyedepo"
            class="speaker-image"
          />
          <div class="name-professional">
            <h4>${speakers[i].name}</h4>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aliquid.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, quidem.
            </p>
          </div>
        </div>`;
}

speakerContainer.innerHTML = speakerItems;
