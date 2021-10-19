function checkIt() {
    let userText = document.getElementById('inputArea').value;
    let textArr = userText.split(' ');

    let uniqueWordsArr = textArr.filter((v, i, a) => a.indexOf(v) === i);

    let mostUsedWord = '';
    let timesUsed = 0;

    uniqueWordsArr.forEach(word => {
        let count = textArr.filter(v => v === word).length;

        if(count > timesUsed) {
            mostUsedWord = word;
            timesUsed = count;
        }
    });

    document.getElementById('result').innerText = `Cuvantul cel mai folosit este '${mostUsedWord}' - de ${timesUsed} ori`;
}