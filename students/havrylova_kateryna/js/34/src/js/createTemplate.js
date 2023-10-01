import { imgPath } from "./vars/variables.js";
import authors from "./authors.js";

function createTemplate(courseData) {
    const durationText = `${courseData['duration']} ${(+courseData['duration'] === 1 ? 'day' : 'days')}`;
    const author = authors[courseData['speakers']];

    return (`
        <tr class="inner-box">
    <th scope="row">
        <div class="event-date">
            <p>${courseData['start-date']}</p>
            <p>Duration: ${durationText}</p>
            <p>Course Name: ${courseData['course-name']} </p>
        </div>
    </th>
    <td>
        <div class="card course-list__card">
            <img width="150" class="card-img-top" src="${imgPath}${author?.img}"
                alt="${author.name}">
            <div class="card-body">
                <p class="card-title">${author.name}</p>
            </div>
        </div>
    </td>
    <td>
        <ul class="students-list"></ul>
        <div class="primary-btn">
            <button data-course-id="${courseData.id}" class="btn btn-primary add-student">
                <span>Add Students</span>
            </button>
        </div>
    </td>
    <td class="align-middle">
        <button data-course-id="${courseData.id}" type="button"
            class="btn btn-danger remove-course">Remove Course</button>
    </td>
</tr>
        `);
}

export default createTemplate;
