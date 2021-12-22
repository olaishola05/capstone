import { speakers } from './speakers.js';

const speakerContainer = document.getElementById('speakers');
let speakerItems = '';
for (let i = 0; i < speakers.length; i += 1) {
  speakerItems += `<div class="speaker">
          <img
            src="${speakers[i].checkerUrl}"
            alt="checker background"
            class="checkers"
          />
          <img
            src="${speakers[i].imageUrl}"
            alt="${speakers[i].name} featured speaker""
            class="speaker-image"
          />
          <div class="name-professional">
            <h4>${speakers[i].name}</h4>
            <p class="description">
              ${speakers[i].title}
            </p>
            <hr />
            <p>
              ${speakers[i].specialty}
            </p>
          </div>
        </div>`;
  speakerContainer.innerHTML = speakerItems;
}
