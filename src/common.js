// Куки уже вшиты в bundle.js

window.Corners5ProjectLayout.activateRequestButtons({
  submitForm: (form) => {
    const type = form.querySelector('input[name="type"]').value;
    const fd = new FormData(form);

    if (type === 'card') {
      return $.ajax({
        type: 'POST',
        data: fd,
        url: '/local/ajax/form.php',
        processData: false,
        contentType: false,
        success(data) {
          window.Corners5ProjectLayout.summonAlert({
            template: '#alert--request',
            text: `<b>Заявка отправлена!</b><br>Наш менеджер свяжется с вами и проконсультирует о дальнейших шагах.`,
          });
        },
        error() {
          window.Corners5ProjectLayout.summonAlert({
            template: '#alert--error',
            text: `<b>Заявка не отправлена!</b> <br>Что-то пошло не так, повторите попытку позже.`,
          });
        },
        complete(data) {
        },
      });
    }
  },
});

const requestForms = document.querySelectorAll('.request__form');
requestForms.forEach((form) => {

  form.addEventListener('bouncerFormInvalid', (evt) => {
    console.log(form);
    console.log('Форма не валидна.');
  });

  form.addEventListener('bouncerFormValid', () => {
    console.log('Форма валидна.');

    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success() {
        form.reset();
      },
    });
  });
});
