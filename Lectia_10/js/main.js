let persons = [
    {
        name: 'Alexandru',
        phone: '0722332211',
    },
    {
        name: 'Rodica',
        phone: '0722112233',
    }
];

function displayPersons() {
    let value = '';

    persons.forEach(person => {
        value += `<li>${person.name} - Tel. ${person.phone}</li>`;
    });

    const list1 = document.getElementById('list1');
    list1.innerHTML = value;
}

displayPersons();

function validatePhone(el) {
    let fieldValue = el.value;
    // let patt = /^07[0-9]{8}$/g;
    let patt = /^07\d{8}$/g;
    if (!patt.test(fieldValue)) {
        document.getElementById('errorHint').style.visibility = 'visible';
        el.style.border = '3px solid red';
    } else {
        el.style.border = '1px solid black';
        document.getElementById('errorHint').style.visibility = 'hidden';
        document.getElementById('btn1').disabled = false;
    }
}

function addPerson() {
    let person = {
        name: document.getElementById('person').value,
        phone: document.getElementById('tel').value,
    };
    persons.push(person);
    displayPersons();

    document.getElementById('btn1').disabled = true;
    document.getElementById('person').value = '';
    document.getElementById('tel').value = '';
}