function addData() {
    const userData = prompt('Introduceti un numar, un nume sau textul adevarat sau fals:');

    let responseText = '';

    const x = parseInt(userData);

    if (userData === '') {
        responseText = 'Nu ai introdus nimic, mai incearca!'
    } else if (isNaN(x)) {
        if (userData === 'adevarat' || userData === 'fals') {
            responseText = 'Ai dreptate, este adevarat sau fals.';
        } else {
            responseText = 'Salut ' + userData + ', o zi buna!';
        }
    } else {
        const y = 3;
        const z = 20;
        let res;

        switch(true) {
            case x >= 5 && x <= 10:
                res = x*y;
                responseText = x + '*' + y + '=' + res;
                break;
            case x > 10:
                res = x+z;
                responseText = x + '+' + z + '=' + res;
                break;
            default:
                responseText = 'Ai introdus un numar mai mic decat 5.';
                break;
        }
    }

    const el1 = document.getElementById('myel1');
    el1.innerText = responseText;
}