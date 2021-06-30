import React from 'react';
import './Description.css';

function Description(props) {
    function countAmount(string) {
        const valueArray = props.value.toLowerCase().trim().split('');
        const amount = valueArray.reduce((sum, item) => {
            if (string.includes(item)) {
                sum++;
            }
            return sum;
        }, 0);
        return amount;
    }

    function getWords() {
        return props.value
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .map(item => item.replace(/[,.:;'"]/, '').length ? item.replace(/[,.:;'"]/, '') : item);
    }

    const vowelLetters = 'аоэеиыуёюя';
    const vowelAmount = countAmount(vowelLetters);

    const consonantLetters = 'бвгдйжзклмнпрстфхцчшщ';
    const consonantAmount = countAmount(consonantLetters);

    const wordsArray = props.value.trim().length ? getWords() : [];
    const wordsAmount = wordsArray.length;
    const symbolsAmount = props.value.trim().length ? props.value.replace(/\s+/g, '').length : 0;

    const alphabet = 'аоэеиыуёюябвгдйжзклмнпрстфхцчшщ';
    const lettersAmount = countAmount(alphabet);

    const wordsRepeat = {};

    for (let word of wordsArray) {
        if (word in wordsRepeat) {
            wordsRepeat[word]++;
        } else {
            wordsRepeat[word] = 1;
        }
    }

    let topThreeWords = '';
    const wordRepeatArr = Object.keys(wordsRepeat).map(item => [item, wordsRepeat[item]]).sort((a, b) => b[1] - a[1]);
    wordRepeatArr.forEach((item, index) => {
        if (item[1] > 1 && index < 2) {
            topThreeWords += `${item[0]} (${item[1]}), `;
        } else if (item[1] > 1 && index < 3) {
            topThreeWords += `${item[0]} (${item[1]}).`;
        }
    });

    return (
        <div>
            <h2>Информация</h2>
            <p>Количество гласных: {vowelAmount}</p>
            <p>Количество согласных: {consonantAmount}</p>
            <p>Количество слов: {wordsAmount}</p>
            <p>Количество символов: {symbolsAmount}</p>
            <p>Количество букв: {lettersAmount}</p>
            <p>Топ 3 слов: {topThreeWords}</p>
        </div>
    )
}

export default Description;