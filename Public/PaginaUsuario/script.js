const usuarioURL = "https://randomuser.me/api";

async function carregarUsuario() {
    let response = await fetch(usuarioURL);
    let data = await response.json()
    console.log(data);

    const {
        gender,
        name,
        location,
        email,
        login,
        dob,
        phone,
        cell,
        picture
    } = data.results[0];

    document.getElementById("gender").innerText = gender;
    document.getElementById("location").innerText =
        `${location.street.name} n${location.street.number} ${location.city}`;
    document.getElementById("name").innerText = `${name.title} ${name.first} ${name.last}`;
    document.getElementById("email").innerText = email;
    document.getElementById("login").innerText = login.username;
    document.getElementById("dob").innerText = dob.age;
    document.getElementById("phone").innerText = phone;
    document.getElementById("cell").innerText = cell;
    document.getElementById("picture").src = picture.large;

}