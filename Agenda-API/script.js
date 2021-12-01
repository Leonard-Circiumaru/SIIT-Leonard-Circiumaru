
getUsers();

setInterval(getUsers, 1000);

function renderListItem(userData) {
    const li = document.createElement('li')
    li.innerText = `${userData.last_name} ${userData.first_name} ${userData.mobile_number} ${userData.street} ${userData.number} ${userData.city} ${userData.country}`;
    const ol = document.getElementById('entries');
    ol.appendChild(li);

    const deleteElement = document.createElement('button');
    deleteElement.innerText = 'Delete';
    li.appendChild(deleteElement);

    const editElement = document.createElement('button');
    editElement.innerText = 'Edit';
    li.appendChild(editElement);
    editElement.style.backgroundColor = 'dodgerblue';
    
    // delete user

    deleteElement.addEventListener('click', function () {
        deleteUser(userData.id);
    })

    // edit user

    editElement.addEventListener('click', function () {
        editUser(userData.id);
    })
}

function renderUsers(data) {
    //console.log(data);
    document.getElementById('entries').innerHTML = '';
    for (const user of data) {
        //console.log(user);
        renderListItem(user);
    }
}

function processResponse(response) {
    return response.json();
}

function getUsers() {
    fetch('https://contact-agenda-rest-api.herokuapp.com/users')
        .then(processResponse)
        .then(renderUsers);
}

//add new user

function sendNewUser() {
    const newUser = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        mobile_number: document.getElementById('mobile_number').value,
        street: document.getElementById('street').value,
        number: document.getElementById('number').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value
    };

    fetch('https://contact-agenda-rest-api.herokuapp.com/users', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(newUser)
    })
        .then(processResponse)
        .then(renderListItem)
}

document.getElementById('send').addEventListener('click', sendNewUser);

// delete element server call

function deleteUser(userId) {
    //console.log(userId);
    fetch('https://contact-agenda-rest-api.herokuapp.com/users/' + userId, {
        method: "DELETE",
    })
        .then(processResponse)
        .then(renderListItem)
}

// edit element 

function editUser(editUserId) {
    console.log(editUserId);
    fetch('https://contact-agenda-rest-api.herokuapp.com/users/' + editUserId, {
        method: "PUT",
    })
        .then(processResponse)
        .then(renderListItem)
}