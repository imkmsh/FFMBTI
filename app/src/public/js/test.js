const query = 'input[type=radio]:checked';
const selected = document.querySelectorAll(query);

let numE = 0;
    let numI = 0;
    let numN = 0;
    let numS = 0;
    let numT = 0;
    let numF = 0;
    let numP = 0;
    let numJ = 0;
    let mbtiResult = ''

function countResult(result) {
    if(result == "E"){
        numE += 1;
    }else if(result == "I"){
        numI += 1;
    }else if(result == "N"){
        numN += 1;
    }else if(result == "S"){
        numS += 1;
    }else if(result == "T"){
        numT += 1;
    }else if(result == "F"){
        numF += 1;
    }else if(result == "P"){
        numP += 1;
    }else{
        numJ += 1;
    }
}

function compareResult() {
    if(numE > numI){
        mbtiResult += "E";
    }else{
        mbtiResult += "I";
    }

    if(numN > numS){
        mbtiResult += "N";
    }else{
        mbtiResult += "S";
    }

    if(numT > numF){
        mbtiResult += "T";
    }else{
        mbtiResult += "F";
    }

    if(numP > numJ){
        mbtiResult += "P";
    }else{
        mbtiResult += "J";
    }
}

function checkResult() {
    
    const ans1 = document.querySelector('input[name="option1"]:checked').value;
    const ans2 = document.querySelector('input[name="option2"]:checked').value;
    const ans3 = document.querySelector('input[name="option3"]:checked').value;

    const ans4 = document.querySelector('input[name="option4"]:checked').value;
    const ans5 = document.querySelector('input[name="option5"]:checked').value;
    const ans6 = document.querySelector('input[name="option6"]:checked').value;

    const ans7 = document.querySelector('input[name="option7"]:checked').value;
    const ans8 = document.querySelector('input[name="option8"]:checked').value;
    const ans9 = document.querySelector('input[name="option9"]:checked').value;

    const ans10 = document.querySelector('input[name="option10"]:checked').value;
    const ans11 = document.querySelector('input[name="option11"]:checked').value;
    const ans12 = document.querySelector('input[name="option12"]:checked').value;

    countResult(ans1);
    countResult(ans2);
    countResult(ans3);
    countResult(ans4);
    countResult(ans5);
    countResult(ans6);
    countResult(ans7);
    countResult(ans8);
    countResult(ans9);
    countResult(ans10);
    countResult(ans11);
    countResult(ans12);

    compareResult();

    alert('당신의 MBTI는 ' + mbtiResult + '입니다! ' + mbtiResult + '유형에 대한 설명과 함께 환상의 궁합 친구들을 추천 받고 싶다면 회원가입하세요!')

    location.href = "/signup";
}

fetch("/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
