import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', evt => {
  evt.preventDefault();

  for (let i = 0; i < evt.currentTarget.amount.value; i++) {
    let position = i + 1;

    let passedStep =
      Number(evt.currentTarget.delay.value) +
      Number(evt.currentTarget.step.value) * i;
    createPromise(position, passedStep)
      .then(value => {
        Notify.success(value);
      })
      .catch(value => {
        Notify.failure(value);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}