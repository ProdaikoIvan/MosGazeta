/**
 * Created by Enot on 03.11.2016.
 */

window.onload = function () {

    /*Удаление стандартного контента*/
    var container = document.getElementsByTagName('div')[0];
    container.parentNode.removeChild(container);

    /*затемнение заднего фона*/
    var body = document.getElementsByTagName('body')[0];
    body.style.background = "#ccc";

    /*Создание блока для отображение в старых браузерах*/
    var containerError = document.createElement("div");
    containerError.className = "ErrorIE7";

    containerError.innerHTML = "<h2>Для работы с сайтом необходимо использовать более современный браузер</h2>"
    containerError.innerHTML += "<p>Чтобы воспользоватся сайтом, загрузите и установите один из этих браузеров:</p>"
    document.body.appendChild(containerError,body);

    /*Блок с новыми браузерами*/
    var containerGoodBrowser = document.createElement("div");
    containerGoodBrowser.className = "containerGoodBrowser";
    containerGoodBrowser.innerHTML += "<a href=\"https://www.google.com/chrome/browser/desktop/index.html\" class='google-link'><span class='google-image'></span>Chrome</a>";
    containerGoodBrowser.innerHTML += "<a href=\"http://www.opera.com/ru\" class='opera-link'><span class='opera-image'></span>Opera</a>";
    containerGoodBrowser.innerHTML += "<a href=\"https://www.mozilla.org/ru/\" class='firefox-link'><span class='firefox-image'></span>Firefox</a>";
    containerGoodBrowser.innerHTML += "<a href=\"http://www.apple.com/ru/safari/\" class='safari-link'><span class='safari-image'></span>Safari</a>";
    containerError.appendChild(containerGoodBrowser);
}
