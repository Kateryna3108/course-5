import addStudent from './addStudent.js';
import createTemplate from './createTemplate.js';
import changeSpeakers from './formValidation/changeSpeakers.js';
import createFormValidation from './formValidation/createFormValidation.js';
import { addStudentClassName, removeCourseClassName } from './vars/variables.js';


const addStudentForm = document.querySelector('.add-student-form');
const courseListElement = document.querySelector('.course-list tbody');
let courseList = [];
let courseId = 0;


changeSpeakers(addStudentForm);

createFormValidation(addStudentForm, createCourse);


function createCourse(data) {
    const courseData = Object.fromEntries([...data]);

    courseData.id = ++courseId;
    courseData.studentList = [];
    courseList.push(courseData);

    courseListElement.insertAdjacentHTML('beforeend', createTemplate(courseData));

    // console.log(createTemplate(courseData));
}

courseListElement.addEventListener('click', function (e) {
    const addStudentBtn = e.target.closest(`.${addStudentClassName}`);
    const removeCourseBtn = e.target.closest(`.${removeCourseClassName}`);

    if (addStudentBtn) {
        addStudents(addStudentBtn);
    }

    if (removeCourseBtn) {
        removeCuorse(removeCourseBtn);
        removeCourseHtml(removeCourseBtn);
    }
});


function removeCuorse(removeCourseBtn) {
    const courseId = getDataAttrIdCourse(removeCourseBtn);

    courseList = courseList.filter((course) => course.id !== courseId);

    console.log(courseList);
}

function removeCourseHtml(removeCourseBtn) {
    const courseWrapper = removeCourseBtn.closest('tr.inner-box');

    if (courseWrapper) courseWrapper.remove();

}

function addStudents(addStudentBtn) {
    const courseId = getDataAttrIdCourse(addStudentBtn);

    const course = findCourseById(courseId);
    const student = prompt('Add students', 'Petya');

    course.studentList.push(student);

    const studentHtml = addStudent(student, course.studentList.length - 1, courseId);

    addStudentHtml(studentHtml, addStudentBtn);
}

function addStudentHtml(html, addStudentBtn) {
    const studentsListUl = addStudentBtn.closest('td')?.querySelector('.students-list');

    studentsListUl.insertAdjacentHTML('beforeend', html);
}

function findCourseById(id) {
    return courseList.find((course) => course.id === id);
}

function getDataAttrIdCourse(element) {
    return +element.dataset.courseId;
}
