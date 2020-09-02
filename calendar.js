let template=''
let month=1;
const $body=document.querySelector('body')
conferences.reverse().forEach(conference => {
    console.log(conference.date[0])
    template+=`<table class="today">
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
    </table>`
});

const $target = templateToElement(template)

$body.append($target)