import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

populateTextarea();

formRef.form.addEventListener('submit', onFormSubmit);
formRef.textarea.addEventListener('input', throttle(onTextareaInput, 500));

formRef.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
});

function onTextareaInput (evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
    console.log(message);
};

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log("отправляем форму");
};

function populateTextarea () {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
        formRef.textarea.value = saveMessage;
    };
    console.log(saveMessage);
};

