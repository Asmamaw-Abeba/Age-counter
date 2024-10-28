const inputDay = document.querySelector('.i-day');
const inputMonth = document.querySelector('.i-month');
const inputYear = document.querySelector('.i-year');



const outputDay = document.querySelector('.o-day');
const outputMonth = document.querySelector('.o-month');
const outputYear = document.querySelector('.o-year');


const today = dayjs();

today.format('dddd, MMMM, D, YYYY');

const presentYear = Number(today.format('YYYY'));
console.log(presentYear);

const presentMonth = Number(today.format('MM'));
console.log(presentMonth);

const presentDay = Number(today.format('D'));
console.log(presentDay);


function countAge() {
  const bd = Number(inputDay.value); // born date
  const bm = Number(inputMonth.value); //born month
  const by = Number(inputYear.value); // born year

  let yy = presentYear - by;
  let remainderMonth;

  if (bm > presentMonth) {
    remainderMonth = bm - presentMonth;
    setTimeout(() => {
      outputDay.value = bd + ' day';
    }, 1000);
    setTimeout(() => {
      outputMonth.value = 12 - remainderMonth + ' monthes';
    }, 2000);
    setTimeout(() => {
      if (by === presentYear) {
        outputYear.value = yy + ' years old';
      } else {
        outputYear.value = yy - 1 + ' years old';
      }  
    }, 3000);

  } else if (bm < presentMonth) {
    setTimeout(() => {
      outputDay.value = bd + ' day';
    }, 1000);
    setTimeout(() => {
      outputMonth.value = presentMonth - bm + ' monthes';
    }, 2000);
    setTimeout(() => {
      outputYear.value = yy + ' years old'; 
    }, 3000);

  } else {
    setTimeout(() => {
      outputDay.value = bd + ' day';
    }, 1000);
    setTimeout(() => {
      outputMonth.value = presentMonth + ' monthes';
    }, 2000);
    setTimeout(() => {
      outputYear.value = yy + ' years old';
    }, 3000);
  }

  inputDay.value = '';
  inputMonth.value = '';
  inputYear.value = '';
}


function backPage() {
  const backHTML = `
    <a href="index.html">
      <button class="count-button">Back</button>
    </a>
  `;
  return backHTML;
}


function EmptyInputChecker() {
  const data = document.querySelectorAll('.input');
  data.forEach((eachInput, index) => {
    eachInput.placeholder = 'x Please fill this place first';
    eachInput.classList.add('feadback');
  });
}

function inputValidation() {
  if (inputDay.value === '' || inputMonth.value === '' || inputYear.value === '') {
    EmptyInputChecker();
  } else if (inputDay.value > 31 || inputDay.value <= 0) {
    inputDay.value = '';
    inputDay.placeholder = 'X please Enter day between 1 and 31';
    inputDay.focus();
    inputDay.classList.add('bound-feadback');
  } else if(inputMonth.value > 12 || inputMonth.value <= 0) {
    inputMonth.value = '';
    inputMonth.placeholder = 'X please Enter month between 1 and 12';
    inputMonth.focus();
    inputMonth.classList.add('bound-feadback');
  } else  if (inputYear.value > presentYear || inputYear.value <= 0) {
    inputYear.value = '';
    inputYear.placeholder = `X please Enter year between 1 and ${presentYear}`;
    inputYear.focus();
    inputYear.classList.add('bound-feadback');
  } else {
    countAge();
    document.querySelector('.input-container').innerHTML = '';

    document.querySelector('.count-button').innerText = 'Result';

    document.querySelector('.calculate-button').innerHTML = backPage();
  }  
  
  inputYear.classList.remove('bound-feadback');
  inputMonth.classList.remove('bound-feadback');
  inputDay.classList.remove('bound-feadback');
} 


document.querySelector('.count-button')
  .addEventListener('click', () => {

    inputValidation();

    });

   