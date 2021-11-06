import throttle from 'lodash/throttle';


const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formInput = {};
initForm();

formRef.addEventListener('input', throttle(onMessageInput, 500));

function onMessageInput(evt) {
formInput[evt.target.name] = evt.target.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formInput));
};

function initForm() {
    let keepForm = localStorage.getItem('STORAGE_KEY');
    if (keepForm) {
        keepForm = JSON.parse(keepForm);
        Object.entries(keepForm).forEach(([name, value]) => {
            formInput[name] = value;
            formRef.elements[name].value = value;
        });
    };
};

formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    if (localStorage.getItem('STORAGE_KEY')) {
        console.log(localStorage.getItem('STORAGE_KEY'));
    }
    localStorage.removeItem('STORAGE_KEY');
};


// const formRef = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     input: document.querySelector('.feedback-form input'),
// };

// const storageInputValue = {
//     email: "",
//     message: '',
// };


// formRef.form.addEventListener('submit', onFormSubmit);
// formRef.textarea.addEventListener('input', throttle(onMessageInput, 500));
// formRef.input.addEventListener('input', throttle(onEmailInput, 500));

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     if (localStorage.getItem(STORAGE_KEY)) {
//         console.log(localStorage.getItem(STORAGE_KEY));
//     }
//     localStorage.removeItem(STORAGE_KEY);
// };

// function onEmailInput(evt) {
//     storageInputValue.email = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(storageInputValue));
// };

// function onMessageInput(evt) {
//     storageInputValue.message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(storageInputValue));
// };

// popularTextArea();

// function popularTextArea() {
//     const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (savedMessage) {
//         formRef.input.value = savedMessage.email;
//         formRef.textarea.value = savedMessage.message;
//     }
// }



