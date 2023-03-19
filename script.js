
//<==============FETCH==============>

async function getTaskByTaskId(taskId) {
	const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`);

	if(!response.ok) {
		console.log('Записи с таким id не существует.');
		return;
	}

	const data = response.json();
	console.log(data);
}

async function patchTaskById(taskId, nameValue='Moby', infoValue='American musician') {
	const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
		method: 'PATCH',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			name: nameValue,
			info: infoValue,
			isImportant: false,
			isCompleted: true
		})
	});

	if(!response.ok) {
		console.error('Не получилось обновить запись.');
		return;
	}

	const data = response.json();
	console.log(data);
}

async function getAllTasks() {
	const response = await fetch('https://intership-liga.ru/tasks');

	if(!response.ok) {
		console.error('Запрос не выполнен.');
		return;
	}

	const data = response.json();
	console.log(data);
}

async function deleteTaskByTaskId(taskId) {
	const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
		method: 'DELETE'
	});

	if(!response.ok) {
		console.error('Записи с таким id не существует.');
		return;
	}

	console.log('Запись успешно удалена.');
}

async function postTask(nameValue='Cesar', infoValue='Veni, vidi, vici.') {
	const response = await fetch(`https://intership-liga.ru/tasks`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			name: nameValue,
			info: infoValue,
			isImportant: false
		})
	});

	if(!response.ok) {
		console.error('Не получилось добавить запись.');
		return;
	}

	const data = response.json();
	console.log(data);
}


//<==============XMLHttpRequest==============>


function getTaskByTaskIdXHR(taskId) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `https://intership-liga.ru/tasks/${taskId}`, true);
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send();
	});

	promise
		.then((data) => console.log(data))
		.catch((error) => console.error(`Записи с таким id не существует.`));
}

function patchTaskByIdXHR(taskId, nameValue='Moby', infoValue='American musician') {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		let body = JSON.stringify({
			name: nameValue,
			info: infoValue,
			isImportant: false,
			isCompleted: true
		})

		xhr.open('PATCH', `https://intership-liga.ru/tasks/${taskId}`);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send(body);
	});

	promise
		.then((data) => console.log(data))
		.catch((error) => console.log(`Записи с таким id не существует.`));
}

function getAllTasksXHR() {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://intership-liga.ru/tasks');
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send();
	});

	promise
		.then((data) => console.log(data))
		.catch((error) => console.log(`Запрос не выполнен. Ошибка: ${error}`));
}

async function deleteTaskByTaskIdXHR(taskId) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('DELETE', `https://intership-liga.ru/tasks/${taskId}`);
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send();
	});

	promise
		.then((data) => console.log('Запись успешно удалена.'))
		.catch((error) => console.log(`Записи с таким id не существует.`));
}

async function postTaskXHR(nameValue='Cesar', infoValue='Veni, vidi, vici.') {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		let body = JSON.stringify({
			name: nameValue,
			info: infoValue,
			isImportant: false
		})

		xhr.open('POST', `https://intership-liga.ru/tasks/`);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send(body);
	});

	promise
		.then((data) => console.log(data))
		.catch((error) => console.log(`Записи с таким id не существует.`));
}
