## Project Setup
```sh
npm install
```
### Compile and Hot-Reload for Development
```sh
npm run dev
```
```
dev version node v16.19.1
```
### Чек лист по выполнению проекта
- ✓ Использовал Vue3, TS
- ✓ Использовал препроцессор sass в синтаксисе scss
- ✓ Верстка выполнена по бэм неймингу +
Кнопка “купить” реализовывает следующий функционал:
- ✓ По ее нажатию должен отправляться ajax запрос методом get по адресу https://jsonplaceholder.typicode.com/posts/1 (вызвать alert с success текстом, если запрос удачный, обработать ошибку тем же способом)
PS: Запрос есть, он выполняется результат запроса можно увидеть в дев тулзах во вкладке Network, но особой смысловой нагрузки от него нет.
Насколько я понимаю нужно просто показать что я умею делать get запрос :D, либо мне неверный адресс для запроса дали
- ✓ На время выполнения запроса вместо надписи “купить” должен появляться лоадер. Внешний вид лоадера необходимо продумать самостоятельно
PS: прелоадер есть и работает правильно он вынесен отдельный компонент, отдельный фаил со стилями не делал для него, он прям в компоненте и просто на css,
нашёл в интернете скопировал вставил и не заморачивался, если очень нужно могу продумать и расширить. Вообще задумка такая: хотелось бы сделать каждый юайный компонент оособленным и самостоятельным.
Из-за относительно коротких сроков, есть ошибки в архитектуре и недобавленны тесты. По хорошему хотелось бы тестировать каждый компонент. Но я к этому ещё вернусь.
- ✓ После удачного запроса внешний вид кнопки должен менять состояние: “в корзине” и в иконке корзины должно показывать сколько товаров в корзине
- ✓ Реализовать поиск по названию на текущей странице
PS:  реализовал через пинею, блодаря этому можно реализовывать поиск на любой странице, т.к. я  ней держу только искомое значение,
а сам поиск по контенту можно настраивать уже на страницах. Задумка была такая.
- ✓ После перезагрузки страницы состояния товаров (в корзине он или нет) должно сохраняться
PS: Сохранаяется в локал сторадже. Можно так же посмотреть в дев тулзах.
- ✓ Повторное нажатие отправляет такой же запрос с обработкой, но удаляет позицию из корзины
