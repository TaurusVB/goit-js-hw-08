import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';


const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const {form, input, textarea} = refs

form.addEventListener('submit', onSubmitForm)

form.addEventListener('input', throttle(onInputWrite, 500));

function onInputWrite() {
    const storageData = { email: input.value, message: textarea.value };

    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(storageData));
}

function onSubmitForm(evt) {
    evt.preventDefault();

    const getData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

    if (getData) {
        console.log(getData)
    }

    evt.target.reset()

    localStorage.removeItem(FEEDBACK_FORM_STATE)
}

const getDataFromStorage = localStorage.getItem(FEEDBACK_FORM_STATE);

const parseDataFromStorage = JSON.parse(getDataFromStorage);

populateForm();

function populateForm() {
    if (getDataFromStorage) {
        console.log(parseDataFromStorage);

        input.value = parseDataFromStorage.email;

        textarea.value = parseDataFromStorage.message;
   }
}