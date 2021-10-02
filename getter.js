const URL = 'http://localhost:8888'

const render = () => {
    // Не допускаем дублирование при повторном нажатии кнопки
    refresh()
    fetch(URL)
        .then(res => res.json())
        .then(data => {
                // Формируем карточку пользователя и добавляем в DOM
                const el = document.getElementById('content')
                user = document.createElement('div')
                user.classList.add('user')
                user.style="width: 200px; border:1px solid black; margin: 10px auto; padding: 10px; text-align: left"
                user.innerHTML = `                    
                    <div class="id"><b>ID: </b>${data.id}</div>
                    <div class="name"><b>name: </b>${data.name}</div>
                    <div class="age"><b>age: </b>${data.age}</div>
                    <div class="job"><b>job: </b>${data.job}</div>
                    `
                el.appendChild(user)
            }
        )
    .catch(err => {
        alert('Произошла ошибка подключения..');
        console.log(err)
    })
}

// Удаление карточки пользователя
const refresh = () => {
    let user = document.getElementsByClassName("user")[0] || null
    if (user) {
        user.remove();
    }
}