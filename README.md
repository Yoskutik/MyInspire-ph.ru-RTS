# MyInspire-ph.ru

![](https://img.shields.io/badge/TypeScript-444?logo=typescript&logoColor=f0f0f0)
![](https://img.shields.io/badge/JavaScript-444?logo=javascript&logoColor=f0f0f0)
![](https://img.shields.io/badge/React-444?logo=react&logoColor=f0f0f0)
![](https://img.shields.io/badge/Webpack-444?logo=webpack&logoColor=f0f0f0)
![](https://img.shields.io/badge/SCSS-444?logo=sass&logoColor=f0f0f0)
![](https://img.shields.io/badge/ESLint-444?logo=eslint&logoColor=f0f0f0)

![](https://img.shields.io/lgtm/grade/javascript/github/Yoskutik/MyInspire-ph.ru-RTS?label=Code%20quality)
![](https://img.shields.io/lgtm/alerts/github/Yoskutik/MyInspire-ph.ru-RTS?label=Vulnerabilities)
[![](https://github.com/yoskutik/MyInspire-ph.ru-RTS/workflows/Deploy/badge.svg)](https://github.com/yoskutik/MyInspire-ph.ru-RTS/actions)

<small>
    Я в своём познании настолько преисполнился, что переписываю этот сайт в третий
    <strike>и в последний</strike> раз
</small>

<br/>
<br/>

Угадайте, что же за это за сайт? Да вот же [он](https://myinspire-ph.ru).

Не знаю, зачем Вы зашли в этот репозиторий, но давайте-ка я вкратце расскажу что к чему.

Использованные технологии:
  - _TypeScript_. Потому что типизированный язык, лучше тем нетипизированный.
  - _React.js_. Да-да-да, с воображением у меня не особо, поэтому использую самый популярный
  фреймворк.
  - _Webpack_. Эта штука всё собирает. И минимизирует. А ещё создает фотографии формата
  `.webp`, обрабатывает _SCSS_... В общем, с ним нужно дружить.
  - _Eslint_. Как говорится: "Красивый код - ... да, красивый и на том спасибо". 
  - _Vanilla PHP_. Если вы не знали, я профессиональный Senior Back-end разработчик. Вы
  только взгляните на мастерски написанный скрипт по отправке писем.
  - _SCSS_. Никогда не задумывались, почему все его называют SASS? Даже когда используют
  SCSS, говорят про SASS. К черту SASS, я использую SCSS.
  - _Schema.org_. А-а-а-а-а-а. А-а-а-а. А-а-а... Чертова микроразметка. Я же даже не знаю,
  дала ли ты хоть какой-то результат.
  - _LD-JSON_. Это чуть более приятный формат микроразметки. Шанс того, что я запорю оба эти
  формата велик, но ниже, чем у запора ~~хе-хе~~ по отдельности.
  - _Open Graph_. Для разметки в соц. сетях.
  - GitHub Action, оно же CI/CD. Достаточно сделать `git push`, и все тесты, сборка и деплой
  произойдут сами.

---

Консольные команды:
  - `npm start`: Запуск Dev сервера.
  - `npm run build`: Сборка сайта в production моде, т.е. со всеми возможными сокращениями.
  - `npm test`: ESLint тесты.
  - `npm run fix`: ESLint чинит все, что может.

---

А теперь мальчики и девочки, то, на что я убил большую часть времени:
 - Скорость загрузки должна быть высокой, поэтому я использовал:
   - Минификацию файлов. И стилестических, и скриптовых. Даже проводил исследование, какой
   минификатор лучше. И в моем случае смесь `UglifyJS` и `Terser` дала наилучший результат.
   - Формат `.webp` для фотографий. Он гораздо легче, чем `.jpg`, а сравнивать в `.png`
   даже не имеет смысла.
   - С помощью `react-router-dom` я сделал по факту один `bundle.js`, включающий в себя
   заголовок, подвал и общие стили. А содержимое страниц я распихал по чанкам. Так, при 
   переходе из одной страницы в другую, пользователь тратит буквально пару килобайт для
   загрузки (не считая фотографий) 
   - Фактический размер изображения не превышает размера экрана. То есть никаких 6000х4000
   пикселей, хоть такие фотографии и более качественны.
   - Ленивая загрузка везде, где можно. В том числе и для React компонент.
   - Попытался не слишком нагружать код дополнительными фреймворками и прочим.
   - А ещё `font-display: fallback` для загрузки шрифтов должен (в теории) помочь.
 - ~~Сформировал семантическое ядро.~~ Хе-хе. Ну, я старался, честно.
 - Попытался добавить быстрые ссылки для Yandex.
 - Использовал адаптивную вёрстку.
 - Переключил HTTP на HTTPS.
 - Переключил HTTP/1.1 ни HTTP/2.
 - Добавил `.htaccess`:
   - Избавился от дубликатов страниц (например, `myinspire-ph.ru////` или 
   `myinspire-ph.ru/index.html`).
   - Добавил срок действия для файлов. В теории, браузер будет так лучше кэшировать файлы.
   А если те были таки изменены, они просто придут с другим названием. Профит.
 - Добавил `robots.txt`.
 - Добавил `sitemap.xml` с автоматическим обновлением даты. 
 - Добавил `favicon` разных размеров для Android и IPhone.
 - Добавил ссылки на социальные сети.
 - Добавил Open Graph для красивого отображения в социальных сетях.

P.S. Я не СЕО'шник, так что не сетуйте почём зря.

<details>
    <summary>CEO оптимизация</summary>
    <br>
    asd
</details>
