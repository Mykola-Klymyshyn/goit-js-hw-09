import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayEl: document.querySelector('input[name=delay]'),
  stepEl: document.querySelector('input[name=step]'),
  amountEl: document.querySelector('input[name=amount]'),
  submitButtonEl: document.querySelector('button[type=submit]'),
};

refs.submitButtonEl.addEventListener('click', e => {
  e.preventDefault();
  refs.submitButtonEl.setAttribute('disabled', '');
  let delay = Number(refs.delayEl.value);
  const step = Number(refs.stepEl.value);
  const amount = Number(refs.amountEl.value);

  for (let index = 1; index <= amount; index++) {
    createPromise(index, delay)
      .then(({ index, delay }) => {
        Notify.success(`✅ Fulfilled promise ${index} in ${delay}ms`);
      })
      .catch(({ index, delay }) => {
        Notify.failure(`❌ Rejected promise ${index} in ${delay}ms`);
      })
      .then(() => {
        if (index === amount) {
          refs.submitButtonEl.removeAttribute('disabled');
        }
      });
    delay += step;
  }
});

function createPromise(index, delay) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve({ index, delay });
      } else {
        reject({ index, delay });
      }
    }, delay);
  });
  return promise;
}

createPromise(2, 1500)
  .then(({ index, delay }) => {
    console.log(`✅ Fulfilled promise ${index} in ${delay}ms`);
  })
  .catch(({ index, delay }) => {
    console.log(`❌ Rejected promise ${index} in ${delay}ms`);
  });

  
