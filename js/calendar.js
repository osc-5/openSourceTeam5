let template=''
let month=11;
const $body=document.querySelector('body')
conferences.reverse().forEach(conference => {
    if(month!=conference.date[0]){
        month--;
        template+=`
            <div class="month">
                2020년 ${month}월 IT 세미나/컨퍼런스 일정
            </div>
        `
    }
    template+=`
    <div class="today">
        <table>
            <tbody>
                <tr class="first">
                    <td class="date">${conference.date}</td>
                    <td class="content" onClick="location.href='${conference.link}'">${conference.content}</td>
                </tr>
                <tr class="second">
                    <td class="time">${conference.time}</td>
                    <td class="location">${conference.location}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `
});

const $target = templateToElement(template)

$body.append($target)