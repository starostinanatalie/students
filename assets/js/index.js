const average = document.getElementById('average');
const max = document.getElementById('max');
const min = document.getElementById('min');
const passed = document.getElementById('passed');
const failed = document.getElementById('failed');
const button = document.getElementById('button');
const table1 = document.getElementById('tablesource');
const tableresult = document.getElementById('tableresult');
const massive = [];

const getNumber = () => {
    return Math.round(Math.random() * 100)
}

const makeElement = (number) => {
    let cell = document.createElement('td');
    cell.classList.add('cell');
    cell.textContent = `${number}`;
    return cell
}

const makeMassive = () => {
    for (let i = 0; i < 12; i++) {
        let number = getNumber();
        massive.push(number);
        table1.append(makeElement(number));
    }
}

const getAverage = () => {
    let sum = 0;
    massive.forEach((item) => {sum += item});
    return Math.round(sum / 12)
}

const getMax = () => {
    let sortedMassive = [...massive];
    sortedMassive.sort((a, b) => {return a - b}).reverse();
    return sortedMassive[0]
}

const getMin = () => {
    let sortedMassive = [...massive];
    sortedMassive.sort((a, b) => {return a - b});
    return sortedMassive[0]
}

const getPassed = () => {
    passedStudents = 0;
    massive.forEach((item) => {
        if (item >= 60) {passedStudents++}
    })
    return passedStudents
}

const getFailed = () => {
    failedStudents = 0;
    massive.forEach((item) => {
        if (item < 60) {failedStudents++}
    })
    return failedStudents
}

const getSymbol = (i) => {
    if (massive[i] >= 80) {
        return "A"
    } else if (massive[i] >= 60) {
            return "B"
        } else if (massive[i] >= 40) {
            return "C"
        } else if (massive[i] >= 20) {
            return "D"
        } else {
            return "E"
        }
}

const makeNewMassive = () => {
    for (let i = 0; i < 12; i++) {
        let symbol = getSymbol(i);
        tableresult.append(makeElement(symbol));
    }
}

const getResult = () => {
    average.textContent = getAverage();
    max.textContent = getMax();
    min.textContent = getMin();
    passed.textContent = getPassed();
    failed.textContent = getFailed();
    makeNewMassive();
}


button.addEventListener("click", getResult);

makeMassive();
