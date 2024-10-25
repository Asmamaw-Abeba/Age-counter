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
    outputMonth.value = 12 - remainderMonth + ' monthes';
    outputYear.value = yy - 1 + ' years old';
    outputDay.value = bd + ' day';
  } else if (bm < presentMonth) {
    outputMonth.value = presentMonth - bm + ' monthes';
    outputYear.value = yy + ' years old';
    outputDay.value = bd + ' day';
  } else {
    outputMonth.value = presentMonth + ' monthes';
    outputYear.value = yy + ' years old';
    outputDay.value = bd + ' day';
  }

  inputDay.value = '';
  inputMonth.value = '';
  inputYear.value = '';
}

document.querySelector('.count-button')
  .addEventListener('click', () => {
    countAge();
});