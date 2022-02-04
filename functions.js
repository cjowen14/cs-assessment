function sumZero(array){
    let answer = false;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[j] + array[i] === 0){
                answer = true;
                return answer;
            }
        }
    }
    return answer;
}
let sumZeroAnswer = sumZero([1, 2, 3, -2]);
console.log(sumZeroAnswer);
//runtime for sumZero is O(n) because it is dependent on the length of the array and the values it contains (if true solution exists earlier in the array, function takes less time to run)
//space complexity is O(1)




function uniqueChars(word){
let answer = true;
    for(let i = 0; i < word.length; i++){
        for(let j = i + 1; j < word.length; j++){
            if(word[i] === word[j]){
                answer = false;
                return answer;
            }
        }
    }
    return answer;
}
let charsAnswer = uniqueChars('Moonday');
console.log(charsAnswer);
//runtime for uniqueChars is O(n) for the same reasons as sumZero. It depends on the length of the array and if there are duplicate characters, where those duplicates are at in the word
//space complexity is O(1)




function panagram(string){
    let array = [];
    let newString = string.toLowerCase();
    let stringArray = newString.split('');
    for(let i = 0; i < stringArray.length; i++){
        if(!stringArray[i].match(/^[a-z]/)){
            stringArray.splice(i, 1);
        }
        if(!array.includes(stringArray[i])){
            array.push(stringArray[i]);
        }
    }
    if(array.length === 27){
        return true;
    }
    else{
        return false;
    }
}
let panagramAnswer = panagram('The quick brown fox jumps over the lazy dog?');
console.log(panagramAnswer);
//runtime for panagram is O(n) because it depends how long the string is and how long its checking to see if the letter has already been included
//space complexity is O(1)




function longestWord(array){
    let longestlength = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestlength){
            longestlength = array[i].length;
        }
    }
    return longestlength;
}
let longestAnswer = longestWord(['hi', 'hello']);
console.log(longestAnswer);
//runtime for longestWord is O(n) because it depends on how long the array is
//space complexity is O(1)