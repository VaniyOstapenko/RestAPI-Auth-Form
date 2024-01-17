document.querySelector('.register_button').addEventListener('click', async () => {
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const phone = document.querySelector('.phone');
    const password = document.querySelector('.password');
    const confirm_password = document.querySelector('.confirm_password');
    if (password.value !== confirm_password.value) {
        alert('Пароли не совпадают')
        return;
    }
    const obj = {
        userName: username.value,
        email: email.value,
        phone: phone.value,
        pwd: password.value,
    }

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })

    const json = await response.json();
    console.log(json);
})

document.querySelector('.login_button').addEventListener('click', async () => {
    const auth_email = document.querySelector('.auth_email')
    const auth_pwd = document.querySelector('.auth_pwd')

    const obj = {
        email: auth_email.value,
        pwd: auth_pwd.value
    }

    const response = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })

    const json = await response.json();
    console.log(json);
})