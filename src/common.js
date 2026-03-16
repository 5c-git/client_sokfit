// Куки уже вшиты в bundle.js

window.Corners5ProjectLayout.activateRequestButtons({
  submitForm: (form) => {
    const type = form.querySelector('input[name="type"]').value;
    const fd = new FormData(form);

    if (type === 'card') {
      return $.ajax({
        type: 'POST',
        data: fd,
        url: 'https://run.mocky.io/v3/ef8a4488-31a2-4d52-a983-a4ab6ad36107?mocky-delay=4000ms',
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
