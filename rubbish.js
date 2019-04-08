'use strict'
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function getRubbishForCareer(task) {
  return task[Math.floor(Math.random() * task.length)]
}

//取得職業中文及職業大頭照
function getCareerName(careerName) {
  const result = {}
  switch (careerName) {
    case 'engineer':
      result.career = '工程師'
      result.avatar = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg'
      break
    case 'designer':
      result.career = '設計師'
      result.avatar = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg'
      break
    case 'entrepreneur':
      result.career = '創業家'
      result.avatar = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg'
      break
  }
  return result
}

//1~3隨機選一個數字
function getRandomImg() {
  return Math.floor(Math.random() * 3) + 1
}

//幹話產生function
function rubbishGenerate(career) {
  const rubbishResult = getRubbishForCareer(task[career])
  const phraseResult = getRubbishForCareer(phrase)
  const careerResult = getCareerName(career)

  const returnResult = {
    title: `身為一個${careerResult.career}，${rubbishResult}，${phraseResult}吧！`,
    avatar: careerResult.avatar,
    heartIndex: getRandomImg(),
    noIndex: getRandomImg()
  }
  return returnResult
}

module.exports = rubbishGenerate
