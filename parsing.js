//https://gent.tistory.com/262?category=764088
//위 사이트에서 세미나 관련 데이터를 가져올 때 사용하는 코드입니다.

const allData=document.querySelectorAll('table > tbody')
let conferenceList=[]
allData.forEach(data => {
    const date=data.querySelectorAll('tr > td')[0].innerText
    const contents=data.querySelectorAll('tr > td')[1]
    const content=contents.innerText
    const time=data.querySelectorAll('tr > td')[2].innerText
    const location=data.querySelectorAll('tr > td')[3].innerText

    if(contents.querySelector('a')){
        var link=contents.querySelector('a').href
    }
    if(link){
        conferenceList.push({
            date,
            content,
            link,
            time,
            location
        })
    }
});
console.log(JSON.stringify(conferenceList))