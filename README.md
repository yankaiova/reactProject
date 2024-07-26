# ПРИЛОЖЕНИЕ КОЛЛЕКЦИЯ ПРОДУКТОВ
# Основной функционал:
- Регистрация и авторизация пользователей 
- Главная страница со списком готовых продуктов
- Просмотр детальной информации о продукте
- Поиск по названию продукта и выпадающие подсказки
- История поиска для авторизированных пользователей
- Избранные продукты для  для авторизированных пользователей
# Реализация требований:
1 уровень (обязательный - необходимый минимум):
- [x] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использую LocalStorage
- [x] Использую функциональные компоненты c хуками [функциональный компонент](https://github.com/yankaiova/reactProject/blob/main/src/widgets/product-list/ui/index.tsx)
- [x] Есть разделение на умные и глупые компоненты 
- [x] Есть [рендеринг списков](https://github.com/yankaiova/reactProject/blob/main/src/widgets/product-list/ui/index.tsx)
- [x] Реализованы [формы](https://github.com/yankaiova/reactProject/blob/main/src/features/login/ui/index.tsx) 
- [x] Есть применение [Контекст API](https://github.com/yankaiova/reactProject/blob/main/src/shared/context/context.ts)
- [x] Есть применение [предохранителя](https://github.com/yankaiova/reactProject/blob/main/src/app/ui/App.tsx)
- [x] Есть [кастомный хук](https://github.com/yankaiova/reactProject/blob/main/src/entities/history/lib/useHistory.ts)
- [x] Пара компонентов использует [PropTypes](https://github.com/yankaiova/reactProject/blob/main/src/shared/ui/likeButton.tsx) 
- [x] Использую [useDebounce](https://github.com/yankaiova/reactProject/blob/main/src/shared/lib/useDebounce.ts )
- [x] Есть применение [lazy](https://github.com/yankaiova/reactProject/blob/main/src/app/router/index.tsx) + [Suspense](https://github.com/yankaiova/reactProject/blob/main/src/app/ui/App.tsx)
- [x] Использую Modern Redux with Redux Toolkit [store](https://github.com/yankaiova/reactProject/blob/main/src/app/model/store)
- [x] Использую слайсы [favoritesSlice](https://github.com/yankaiova/reactProject/blob/main/src/entities/favorite/model/slice.ts), [historySlice](https://github.com/yankaiova/reactProject/blob/main/src/entities/history/model/slice.ts) 
- [x] Есть [кастомная мидлвара](https://github.com/yankaiova/reactProject/blob/main/src/entities/favorite/model/middleware.ts)
- [x] Используется [RTK Query](https://github.com/yankaiova/reactProject/blob/main/src/entities/product/api/slice.ts)
- [x] Используется [Transforming Responses](https://github.com/yankaiova/reactProject/blob/main/src/entities/product/api/slice.ts)


2 уровень (необязательный):
- [x] Использование TypeScript

 # Дополнительная информация
 Использован Feature-Sliced Design подход
 Использованы дополнительные библиотеки (react-hool-form, yup, Material UI)

  # Запуск приложения осуществляется с помощью команды npm instal && npm run dev
