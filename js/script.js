function myfirstapp(name, age) {

	alert('Привет меня зовут ' + name + ' и это моя первая программа') ;

	function showskills() {
		let skills = [],
			skill = [
		'Я владею:<br>',
		'HTML<br>',
		'CSS<br>',
		'key collector<br>',
		'SEO<br>'
		];

		for (let i = 0; i < skill.length; i++) {
		skills[i] = document.write(skill[i])
		}
		
	}

	showskills();

	function checkAge() {
		let age = prompt('Сколько вам лет?');
		if (age > 18) {
			alert('Доступ разрешён')
		} else {
			alert('Доступ запрещён')
		}
	}

 checkAge();

	function CalcPow(num) {
		console.log(num * num)
	}
	CalcPow(4)

}

myfirstapp('Константин', '30')

