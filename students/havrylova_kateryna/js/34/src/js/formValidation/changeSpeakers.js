import authors from "../authors.js";
import { imgPath } from "../vars/variables.js";

function changeSpeakers(addStudentForm) {

    const select = addStudentForm.querySelector('#speakers');
    const speakerWrapper = addStudentForm.querySelector('#card_prev');

    select.addEventListener('change', renderSpeaker);

    function renderSpeaker() {
        const speaker = select.value.trim();

        console.log(authors[speaker]);

        if (speaker && authors[speaker]) {
            const img = speakerWrapper.querySelector('img');
            img.setAttribute('src', imgPath + authors[speaker].img);
            img.setAttribute('alt', authors[speaker].name);

            speakerWrapper.querySelector('.card-title').textContent = authors[speaker].name;
            speakerWrapper.querySelector('.card-text').textContent = authors[speaker].text;


            toggleCardPrev(true);
        } else {
            toggleCardPrev(false);
        }
    }

    function toggleCardPrev(trigger) {
        if (trigger) speakerWrapper.style.display = '';
        else speakerWrapper.style.display = 'none';
    }

    console.log(select, speakerWrapper);
}

export default changeSpeakers;
