# mesto-react

В этом проекте я отрабатывала навыки по теме 
**React**

### Задачи проектной работы 11:
1. Контекст текущего пользователя
Данные текущего пользователя нужны в разных местах приложения: например, чтобы определить может ли пользователь удалять карточку.
Мы будем использовать контекст, чтобы все компоненты приложения могли получить доступ к этим данным.
Создайте стейт currentUser в корневом компоненте
В компоненте App создайте переменную состояния currentUser и эффект при монтировании, который будет вызывать api.getUserInfo и обновлять стейт-переменную из полученного значения.
Мы уже делали аналогичную операцию в Main, хотя там мы и использовали сразу три стейт-переменных вместо одной. Скоро их можно будет удалить.
Создайте объект контекста и используйте провайдер
Создайте файл src/contexts/CurrentUserContext.js и экспортируйте из него новый объект контекста.
Импортируйте этот объект в App и используйте его провайдер: «оберните» в него всё текущее содержимое корневого компонента. В качестве значения контекста для провайдера используйте currentUser.
Используйте контекст в Main
В зависимости от того, какой тип имеет ваш компонент Main (функциональный или классовый), используйте соответствующий подход, чтобы подписать его на CurrentUserContext и получить значение контекста.
Теперь у вас есть объект текущего пользователя, полученный из контекста. Используйте его поля name, about и avatar вместо стейт-переменных userName, userDescription и userAvatar, соответственно. Эти переменные, а также вызов api.getUserInfo внутри Main больше не нужны — их можно удалить.
Используйте контекст в Card
Аналогичным образом подпишите на контекст компонент Card.
Теперь можно определить, должна ли в текущей карточке показываться иконка удаления. Для этого можно использовать следующий код:
// Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;

// Далее в разметке используем переменную для условного рендеринга
{isOwn && <button className='button_del' onClick={handleDeleteClick} />} 
Похожим образом можем определить, поставили ли мы уже «лайк» этой карточке:
// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = ( 
  `card__like-button ${isLiked && 'card__like-button_active'}` 
);; 
Теперь нужно научиться отправлять данные в API и обновлять их локальные значения.
2. Лайки и удаление карточек
Добавьте поддержку лайков и дизлайков
Список карточек находится в компоненте Main (в виде переменной состояния cards),  а связанные с карточками функции опишем в компоненте App. Он будет вызываться при клике на лайк. Для этого добавьте функцию handleCardLike в компонент App со следующим содержимым:
function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 
Теперь нужно добавить пропс onCardLike для компонента Card и задать в него эту функцию. Также добавьте в Card обработчик клика handleLikeClick и вызовите из него onCardLike с аргументом card — по аналогии с уже имеющимся обработчиком handleClick.
Если всё сделано правильно, вы увидите магию декларативного подхода: после отправки данных на сервер не нужно обновлять DOM. Нужно только внести изменения в стейт, и интерфейс обновится автоматически.
Добавьте поддержку удаления карточки
По аналогии с предыдущим пунктом добавьте функцию handleCardDelete в App, а также пропс onCardDelete и обработчик handleDeleteClick в Card.
После запроса в API, обновите стейт cards с помощью метода filter: создайте копию массива, исключив из него удалённую карточку. 
Пока не будем добавлять поддержку всплывающего окна подтверждения. Будьте осторожны, удаляя любимые карточки!
Если вы удалили все свои карточки, используйте версию приложения без «Реакта», чтобы добавить карточки. В конце проектной работы вы добавите эту функцию и в новую версию.
3. Редактирование профиля
Рефакторинг: Вынесите компонент EditProfilePopup
Чтобы добавить обработку формы в окно редактирования профиля, сначала вынесите его в отдельный компонент из App: перенесите тег PopupWithForm вместе с содержимым. Добавьте новому компоненту пропсы isOpen и onClose и пробрасывайте их в PopupWithForm. После этого в App останется такой код:
<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
Добавьте управляемые компоненты
Внутри EditProfilePopup добавьте стейт-переменные name и description и привяжите их к полям ввода, сделав их управляемыми. Не забудьте про обработчики onChange.
Используйте значения по умолчанию из currentUser
Чтобы подставить в форму текущие значения, подпишитесь на контекст. Затем создайте эффект, который будет обновлять переменные состояния при изменении контекста. Например:
// Подписка на контекст
const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 
Сохраняйте данные в API
Добавьте компоненту PopupWithForm пропс onSubmit и задайте его в качестве значения одноимённого атрибута тега form.
Теперь в компоненте EditProfilePopup можно добавить обработчик handleSubmit. Однако, мы не можем делать запрос в API прямо в этом обработчике, потому что после его завершения нужно обновить переменную состояния currentUser, которая находится ещё выше — в компоненте App. Поэтому эта функция будет содержать следующий код:
function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  props.onUpdateUser({
    name,
    about: description,
  });
} 
Теперь нужно создать обработчик в App. Назовите его handleUpdateUser и задайте его в виде нового пропса onUpdateUser для компонента EditProfilePopup. Внутри этого обработчика вызовите api.setUserInfo. После завершения запроса обновите стейт currentUser из полученных данных и закройте все модальные окна.
Если вы сделали всё правильно, при нажатии кнопки «Сохранить» данные должны отправляться на сервер, а интерфейс должен автоматически обновляться. Надеемся, у вас получилось!
4. Редактирование аватара
Рефакторинг: Вынесите компонент EditAvatarPopup
В App должен остаться код:
<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} /> 
Используйте реф
На этот раз вместо управляемых компонентов используйте реф, чтобы получить прямой доступ к DOM-элементу инпута и его значению.
В остальном сделайте всё по аналогии с редактированием профиля. Функция handleSubmit может выглядеть так:
function handleSubmit(e) {
  e.preventDefault();

  onUpdateAvatar({
    avatar: /* Значение инпута, полученное с помощью рефа */,
  });
} 
В App добавьте handleUpdateAvatar, вызывающий api.setUserAvatar. Не забудьте обновлять аватар локально после завершения запроса.
Отлично, осталось совсем чуть-чуть!
5. Добавление новой карточки
Пришло время для последней и самой главной функции.
Поднимите стейт cards
Чтобы получить возможность изменять локальный список карточек из попапа, нужно снова осуществить поднятие стейта. На этот раз перенесите всё, что касается переменной cards из Main в App. А именно: саму переменную, эффект с API-запросом api.getCardList, обработчики handleCardLike и handleCardDelete. При этом в Main они должны передаваться в виде пропсов cards, onCardLike и onCardDelete. Проверьте, что ничего не сломалось.
Рефакторинг
Привычным жестом вынесите новый компонент AddPlacePopup из соответствующего кода в App.
Сохраните данные
Добавьте обработчик handleAddPlaceSubmit. После завершения API-запроса внутри него обновите стейт cards с помощью расширенной копии текущего массива — используйте оператор ...:
setCards([newCard, ...cards]); 
Не забудьте про handleSubmit и onAddPlace для нового компонента AddPlacePopup. В этот раз вы можете использовать как управляемые компоненты, так и рефы для получения значений инпутов — на ваше усмотрение.
Если всё работает правильно, новые карточки должны появляться в конце списка. Красота!
Заключение
После того, как сделаете все задания, в работе, по-прежнему, будет что улучшить. Например, сделать валидацию форм и индикаторы загрузки запросов. Сейчас они всё ещё работают за счёт императивного renderLoading из utils.js. Также можно добавить всплывающие подтверждения для удаления карточек. Попробуйте сделать это самостоятельно, если чувствуете в себе силы.
Кроме того, когда справитесь с заданиями, пробегитесь по коду и ещё раз проверьте себя: возможно, что-то ещё можно «причесать» или украсить.


### Используемые технологии в проекте:
* Creative React App