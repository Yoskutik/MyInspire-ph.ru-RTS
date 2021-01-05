# MyInspire-ph.ru

![](https://img.shields.io/badge/TypeScript-444?logo=typescript&logoColor=f0f0f0)
![](https://img.shields.io/badge/JavaScript-444?logo=javascript&logoColor=f0f0f0)
![](https://img.shields.io/badge/React-444?logo=react&logoColor=f0f0f0)
![](https://img.shields.io/badge/Webpack-444?logo=webpack&logoColor=f0f0f0)
![](https://img.shields.io/badge/Github%20Actions-444?logo=github&logoColor=f0f0f0)
![](https://img.shields.io/badge/SCSS-444?logo=sass&logoColor=f0f0f0)
![](https://img.shields.io/badge/ESLint-444?logo=eslint&logoColor=f0f0f0)
![](https://img.shields.io/badge/Stylelint-444?logo=stylelint&logoColor=f0f0f0)
![](https://img.shields.io/badge/PHP-444?logo=php&logoColor=f0f0f0)

![](https://img.shields.io/lgtm/grade/javascript/github/Yoskutik/MyInspire-ph.ru-RTS?label=Code%20quality)
![](https://img.shields.io/lgtm/alerts/github/Yoskutik/MyInspire-ph.ru-RTS?label=Vulnerabilities)
![](https://github.com/yoskutik/MyInspire-ph.ru-RTS/workflows/Testing/badge.svg)

<small>
    Я в своём познании настолько преисполнился, что переписываю этот сайт в третий
    <s>и в последний</s> раз
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

<details>
  <summary><h2>CEO оптимизация</h2></summary>
  <br>
  <ul>
    <li>
      Для повышения скорости загрузки было применено:
      <ul>
        <li>
          Минификация файлов. А именно <code>UglifyJS</code>, <code>Terser</code> и 
          <code>CssMinimizer</code>.
        </li>
        <li>Формат <code>.webp</code> для фотографий.</li>
        <li>
          С помощью <code>react-router-dom</code> я сделал по факту один <code>bundle.js</code>, 
          включающий в себя заголовок, подвал и общие стили. А содержимое страниц я распихал по 
          чанкам. Так, при переходе из одной страницы в другую, пользователь тратит буквально 
          пару килобайт для загрузки (не считая фотографий).
        </li>
        <li>
          Фактический размер изображения не превышает размера экрана. То есть никаких 6000х4000px
          пикселей, хоть такие фотографии и более качественны.
        </li>
        <li>Ленивая загрузка везде, где можно. В том числе и для React компонент.</li>
        <li>Попытался не слишком нагружать код дополнительными фреймворками и прочим.</li>
        <li>
          А ещё <code>font-display: fallback</code> для загрузки шрифтов должен (в теории) 
          помочь.
        </li>
        </ul>
      <li><s>Сформировал семантическое ядро</s> Постарался сформировать</li>
      <li>Установил быстрые ссылки для Yandex.</li>
      <li>Использовал адаптивную вёрстку.</li>
      <li>Переключил HTTP на HTTPS.</li>
      <li>Переключил HTTP/1.1 ни HTTP/2.</li>
      <li>
        Добавил <code>.htaccess</code>
        <ul>
          <li>
            Избавился от дубликатов страниц (например, <code>myinspire-ph.ru////</code> или
            <code>myinspire-ph.ru/index.html</code>).
          </li>
          <li>Добавил срок действия для файлов для кэширования.</li>
        </ul>
      </li>
      <li>Добавил <code>robots.txt</code>.</li>
      <li>
        Добавил <code>sitemap.xml</code> с автоматическим обновлением даты при обновлении
        сайта.
      </li>
      <li>Добавил <code>favicon</code> разных размеров для Android и IPhone.</li>
      <li>Добавил ссылки на социальные сети.</li>
      <li>Добавил Open Graph для красивого отображения в социальных сетях.</li>
  </ul>
  <hr/>
  P.S. Я не СЕО'шник, так что не сетуйте, если я что-то не то сделал. Лучше заведите issue.
</details>
