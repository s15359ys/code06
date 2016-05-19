var scoreList = [75,45,99,6,35,9,10,17,31,56,24,53,50,100,11,81,45,21,101,34,58,47,71,41,97,66,42,47,113,2,108,17,35,55,41,43,99,49,50,6,5,41,78,64,74,81,114,114,84,119,70,100,43,98,44,99,42,37,106,45,74,21,53,15,58,107,75,102,36,11,92,51,56,68,85,106,89,40,87,74,46,21,26,108,73,37,54,51,51,42,109,87,16,16,90,20,104,46,37,95];
function passscore(score){
    return score>=60; 
}
function failscore(score){
    return score<60;
}
function pass(list){
    return list.every(passscore);
}
function failedScores(list){
    return list.filter(failscore)   
}