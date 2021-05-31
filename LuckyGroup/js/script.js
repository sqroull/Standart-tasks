document.addEventListener("DOMContentLoaded", function() {
const dropWrapper = document.getElementById('dropWrapper');
const dropList = document.getElementById('dropList');

// Показываем список языков при клике на блок
dropWrapper.addEventListener('click', function(e) {
	dropList.style.display = 'block';
});

// Скрываем список языков при клике вне блока
window.addEventListener('click', e => { 
	const target = e.target 
	if (!target.closest('#dropWrapper')) {
		dropList.style.display = 'none';
	}
});

// Валидация формы
let selector = document.querySelectorAll('input[type="tel"]');
	let im = new Inputmask('+7 (999) 999 99 99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});

	let validateForms = function (selector, rules) {
		new window.JustValidate(selector, {
			rules: rules,
			submitHandler: function (form) {
				let formData = new FormData(form);
				let xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							alert('Отлично! Ожидайте звонка в ближайшее время...');
						}
					}
				}
				xhr.open('POST', 'mail.php', true);
				xhr.send(formData);
				form.reset();
			}
		});
	}
	validateForms('.form', {
		tel: {
			required: true
		}
	});
});