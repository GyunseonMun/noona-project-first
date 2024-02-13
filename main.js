//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다

let computerNum = 0
let resultImg = document.querySelector(".result-img")
let resultText = document.querySelector("#result-text")
let chanceArea = document.querySelector("#chance-area")
let userInput = document.querySelector("#user-input")
let playButton = document.querySelector("#play-button")
let resetButton = document.querySelector("#reset-button")
let chances = 5
let gameOver = false
let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
  userInput.value=""
  // userInput.Placeholder=""
})

function pickComputerNum() {
computerNum = Math.floor(Math.random()*100)+1
  console.log("숫자는 :", computerNum)  
}

function play() {
  let userValue = userInput.value
//문자입력시 진행되어버림...ㅡㅡ;
  if(userValue < 0 || userValue > 100) {
    resultText.textContent = "노노노~ 1~100사이 숫자를 다시 입력해 주세요"
    return
  }

  if(history.includes(userValue) == true){
    resultText.textContent = "이미 입력한 숫자입니다~~ 다시 입력해 주세요"
    return
  }

//chanceArea
  chances --
  chanceArea.textContent = `남은 찬스는 ${chances}번`
  console.log("chance:", chances)
//resultArea  
  if(userValue < computerNum) {
    resultImg.src = "https://item.kakaocdn.net/do/d085c55824ca5f5cf9b73f7668ea2dcbf43ad912ad8dd55b04db6a64cddaf76d"
    resultText.textContent = "UP!!!"
  }else if(userValue > computerNum) {
    resultImg.src = "https://item.kakaocdn.net/do/67b325e4469e2e231f0fbeae3ae1ca1df43ad912ad8dd55b04db6a64cddaf76d"
    resultText.textContent = "DOWN!!!"
  }else {
    resultImg.src = "https://ogq-sticker-global-cdn-z01.afreecatv.com/sticker/17d0c31a99b1820/main.png"
    resultText.textContent = "맞췄습니다!!!"
    gameOver = true
  }

  history.push(userValue)
  console.log(history)

  if(chances <1) {
    resultImg.src = "https://ogq-sticker-global-cdn-z01.afreecatv.com/sticker/17d0c31a99b1820/main.png"
    // resultText.textContent = resultText.textContent+"다음기회에!!!"
    gameOver = true
  }

  if(gameOver == true){

    playButton.disabled = true
  }

}

function reset() {
  chances = 5
  resultImg.src="https://www.2runzzal.com/media/OWc0VmZrb0pYYlBUMWtSdnhtcWI0Zz09/zzal.gif"
  resultText.textContent = "술이 들어간다 쭉쭈우욱~쭉쭉~~♬"
  chanceArea.textContent = "찬스는 5번"
  userInput.value=""
  playButton.disabled=false
  gameOver=false
  history=[]
  pickComputerNum()
}

pickComputerNum()