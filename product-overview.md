# Inito — Полный обзор продукта (Production)

> Источники: 7 Figma-файлов, проанализированы все секции "📱 In Prod".
> Дата анализа: 2026-09-02

---

## Что такое Inito

Inito — iOS-приложение для трекинга фертильности и мониторинга гормонов на основе домашнего набора тест-полосок. Тест-полоски считываются компаньон-устройством (ридером) двух поколений: **First Generation Reader** и **InSight Wireless Reader**. Также поддерживается умный BBT-термометр **InTemp** для автоматического логирования базальной температуры.

**Ключевой цикл:** приложение сообщает пользователю, какой сейчас день цикла, каков его статус фертильности *сегодня*, нужно ли сегодня делать тест, и просит залогировать ежедневные данные о здоровье (симптомы, BBT, медикаменты, секс, настроение и т.д.). На протяжении цикла приложение использует залогированные значения гормонов (E3G, LH, PdG, FSH, hCG) для обнаружения всплеска LH, подтверждения овуляции и адаптации расписания тестирования.

**Три режима работы:**
- **TTC (Trying To Conceive)** — попытка забеременеть (по умолчанию)
- **Track Pregnancy** — отслеживание беременности (после положительного теста)
- **Track Cycles** — отслеживание циклов (без цели забеременеть)

---

## Навигация приложения

**Bottom Tab Bar (5 вкладок):**
| Вкладка | Иконка | Описание |
|---------|--------|----------|
| **Today/Home** | Домик | Главный экран — статус дня, карточка, логи |
| **Chart** | График | Графики гормонов по циклам |
| **Test** | Чекмарк (центральная, приподнятая CTA-кнопка teal) | Запуск теста — главное ежедневное действие |
| **Shop** | Корзина | Магазин полосок и аксессуаров |
| **Profile** | Человек | Настройки, профиль |

При наличии Community-раздела: появляется **Community** вкладка (колокольчик/комьюнити) вместо или параллельно с другими.

---

## 1. HOME (Главный экран)

**Figma:** `OymPscs7lt9KeT6o7upwtY` — INITO | IOS – Home

### 1.1 Calendar & Main Card & Notification States

**Структура главного экрана (сверху вниз):**
1. Недельный календарь (Mon–Sun) с маркерами по дням (сердце = секс, цветная точка = тест)
2. Большая градиентная карточка статуса дня
3. "Fill in your daily logs" — прогресс-бар + иконки быстрого логирования
4. Лента уведомлений (контекстные подсказки, алерты)
5. Карточка результатов тестов / гормонов

**Состояния главной карточки (Day Status Card):**

| Состояние | Цвет | Описание |
|-----------|------|----------|
| **Low Fertility** | Розовый/красный | Низкая фертильность |
| **High Fertility** | Зелёный | Высокая фертильность, поиск всплеска LH |
| **Peak Fertility** | Фиолетовый | Пик фертильности, максимальные шансы на зачатие |
| **Ovulation Confirmed** | Фиолетовый | Овуляция подтверждена |
| **Take a Test Today** | Teal | Сегодня нужно сделать тест |
| **Test Required Day** | Teal | Обязательный день тестирования |
| **Test not required** | Серый | Тест не требуется |
| **Missed test** | Красный | Пропущенный тест |
| **Optional test day** | Голубой | Необязательный день теста |
| **Period day N** | Красный/розовый | День менструации (с вариантами Future: this cycle / next cycle) |
| **PdG Rising / Waiting** | — | Ожидание подъёма прогестерона для подтверждения овуляции |
| **Pregnancy (1st trimester)** | Магента | "N weeks and N days left / Due [date]" + прогресс-бар |
| **Anovulatory Cycle** | Оранжевый | Ановуляторный цикл |
| **Take Test Tomorrow** | — | Завтра нужно будет сделать тест |

Каждая карточка имеет варианты: Past / Future / Current.

**Уведомления на Home Screen:**
- Контекстные подсказки по фазе цикла
- Алерты о низком запасе полосок → ведут в Shop
- Запросы обратной связи
- Результаты тестов с временем (например "2:45 PM") и числовыми значениями гормонов

### 1.2 Daily Logs (Ежедневные логи)

Модальная форма с разделами для ежедневного ввода данных:

**Разделы логирования (TTC-режим, ~15 полей):**
- **Medications** — принятие/пропуск лекарств
- **Period** — интенсивность (Light / Medium / Heavy / Very Heavy)
- **Sex** — Didn't have / Protected / Unprotected + Orgasm
- **Sex Drive** — High / Neutral / Low
- **BBT** — ручной ввод или синхронизация с InTemp
- **Mood** — мульти-теги: Calm, Happy, Energetic, Sad, Irritated, Anxious, Obsessive thoughts, Low energy, Apathetic, Confused, Very self-critical, Mood swings, Unable to focus
- **Symptoms** — большой список: Cramps, Tender breasts, Headache, Acne, Hair loss, Backache, Fatigue, Cravings, Insomnia, Nausea, Bloating и др.
- **Abdominal pain, Vaginal Discharge**
- **Other** — Travel, Stress, Injury, Meditation, Journaling, Angel exercise, Breathing exercise
- **Physical Activity** — Yoga, Gym, Aerobics & Dancing, Swimming, Team Sports, Running, Cycling, Walking
- **Follicle Tracking** — размер фолликула, толщина эндометрия, сторона яичника, "Fluid in Pod", "LUF Detected"
- **Blood Test Values** — клинические лабораторные данные: Progesterone/P4, Estradiol, AMH, FSH, LH, TSH, PRL, hCG (числовой ввод с единицами)
- **Pregnancy Test** — Did Not Test / Positive / Negative / Faint Positive / Invalid Test
- **Insemination** — для пользователей, отслеживающих IUI/IVF
- **Journal** — свободный текст

**Режим беременности** подменяет поля: Appetite, Swelling, Activity вместо BBT-ориентированных TTC-полей. Формат карточек тот же, контент другой.

### 1.3 Medication Flow (Медикаменты)

Полноценный модуль трекинга медикаментов:

**Добавление медикамента:**
1. Поиск / выбор препарата (подсказки "possible match", поиск по ингредиенту, "add custom ingredient")
2. Выбор формы: Tablet, Capsule, Liquid, Drops, Gel, Injection, Cream, Foam, Oil, Ointment, Powder, Spray, Suppository, Topical, Device, Patch, Inhaler
3. Дозировка (числовой ввод + выбор единиц: mg / mcg / g / mL)
4. Расписание приёма

**История приёма:**
- Календарь по месяцам с цветными маркерами: Taken / Skipped / Not logged
- Сводка приёмов + скроллируемый лог-лист

**Напоминания:**
- Push-уведомления на lock screen: "Medication Reminder — Time to take and log your medication"
- Inline-действия: Snooze / Skip / Taken
- Для нескольких медикаментов: "Log All as Taken", "Log All as Skipped", "Remind me in 10 minutes"
- In-app карточки с кнопками Snooze / Skip / Taken + "Done" confirmation

### 1.4 Periods Flow (Менструация)

**Логирование нового периода:**
- Нажатие "Log period" на карточке "Expected period day"
- Открывается календарь выбора дат менструации (мульти-выбор)
- Показывает историю предыдущих периодов и предсказанные будущие даты
- "Next" → подтверждение

**Логирование беременности:**
- "Log pregnancy" → "When did you take your first positive pregnancy test?" (выбор даты)
- "Pregnancy term" поздравительный экран:
  - Start of last period
  - Positive test day
  - Expected due date
  - Gestational age (всё редактируемое)
- Момент переключения аккаунта в режим беременности

**Редактирование периода:**
- Изменение дат на календаре
- Множество состояний для разных дней цикла и целей

**Предиктивные push-уведомления:**
7-дневная последовательность lock-screen уведомлений вокруг ожидаемой даты менструации (День −3 по День +3):
- "Time to check in"
- "Any signs yet?"
- "So far, so good!"
- "Looking good so far!"
- "A little late? Maybe a good sign?"
- "This could be it!"
- "Set yourself up for success"

### 1.5 Strips Tracker (Трекер полосок)

**"My Strips Stock" — учёт запаса:**
- Ручной ввод количества полосок (stepper или числовая клавиатура)
- Статусные сообщения:
  - 🟢 "You're stocked for now"
  - 🟡 "Delivery can take a few days, order now"
  - 🔴 "You're almost out of strips, order now and select Express Delivery"
- CTA "Go to shop" → переход в магазин

**"Required Test Days" (информационный модал):**
Горизонтальный таймлайн цикла "Cycle start → Cycle end" с маркером "Today" и тремя фазами:
1. **Reference tests** (дни 5–9) — базовые тесты для установления гормонального фона
2. **Test allotted phase** — тесты в фертильном окне для обнаружения всплеска LH и подтверждения овуляции
3. **Optional test days** — необязательные, для дополнительных данных

Заказ полосок: экраны с фото устройства, "How many strips do you have?", информация о количестве в упаковке.

### 1.6 In-App Card & Notifications & Bottom Sheets

**Обратная связь по уведомлениям:**
- Thumbs-up/down на карточках Home → "Do you like the info on the card?"
- Чеклист причин: Incorrect information / Not useful / It's offensive / Other (с free text)
- Submit → обновление рекомендаций

**Рейтинг и обратная связь:**
- "Rate your experience" (5 звёзд)
- Форма обратной связи с тегами: More prediction accuracy, Lesser test errors, Personalized guidance, Better customer support, More result explanation
- "Thank you!" confirmation
- При высоком рейтинге → кросс-промо "Rate Your Experience on Amazon" (продукт продаётся на Amazon)
- Push-уведомления с запросом обратной связи

**iOS Widgets (Lock Screen):**
- Виджеты на lock screen с различными состояниями:
  - Test done / Test failed / Test under review / Compatibility issue detected
  - Показывают время и статус на фоне обоев

**Bottom Sheets:**
- Различные информационные модалы и sheets для взаимодействия

### 1.7 Error Screens

Два экрана ошибок:

| Экран | Иконка | Заголовок | Описание | Действия |
|-------|--------|-----------|----------|----------|
| **No Internet** | Wi-Fi с ошибкой (розовый круг) | "No internet connection" | "Inito is offline. Please check your connection and try again." | "Try again" |
| **Server Error** | Облако с ошибкой (розовый круг) | "Something went wrong" | "We're having some technical trouble. Please try again in a moment." | "Try again" + "Contact support" |

---

## 2. CHART (Графики)

**Figma:** `5Wqmh4OVajq35UoLmVExpe` — INITO | IOS – Chart

### 2.1 Hormone Chart (Основной график)

**Экран графика отображает:**
- Фиолетовый заголовок с переключением периодов/циклов (табы по датам циклов)
- Кнопки "Hormones" / "Insights" для переключения вида
- Линейный/площадной график гормонов с несколькими кривыми (E3G, LH, PdG, FSH)
- Цветовое кодирование по гормонам (соответствует дизайн-системе)
- Горизонтальная ось — дни цикла, вертикальная — уровни гормонов
- Маркеры фаз цикла под графиком

**Состояния графика:**
- Различные фазы цикла с разным набором данных
- Пустой график (нет данных)
- График с частичными данными
- Полный цикл с подтверждённой овуляцией
- Прокрутка между циклами

**Дневной вид (Day Detail):**
- Нажатие на день открывает детальное представление
- Показывает все залогированные данные за день
- Значения гормонов с числовыми данными
- Иконки логов (секс, симптомы, настроение и т.д.)

**Legend / Insights:**
- Объяснение кривых и фаз
- Значки и цвета гормонов

### 2.2 Chart PDF (Экспорт отчёта)

**Экспорт данных в PDF:**
- Два раздела: "D cycles" (Данные за определённые циклы) и "Long cycles"
- Таблицы с числовыми данными гормонов по дням цикла
- График + табличный вид для каждого цикла
- Предназначен для предоставления врачу

**Формат PDF-отчёта:**
- Заголовок с датой и информацией о цикле
- Визуальный график гормонов
- Таблица значений по дням
- Вариант с данными за несколько циклов
- Вариант "Show all tests" (все тесты) vs отдельный цикл

---

## 3. TEST FLOW (Тестирование)

**Figma:** `YB76M0AJWeG4jWEMembdxy` — INITO | Test flow

### 3.1 Device Onboarding (In Prod)

Онбординг устройства InSight Wireless Reader:
- Экраны настройки WiFi-подключения устройства
- Подключение через Bluetooth
- Отображение статуса батареи
- Инструкции по размещению устройства
- Калибровка и проверка подключения

### 3.2 Test Flow (With Device Indicators)

**Полный флоу тестирования (top to bottom):**

1. **Подготовка:** экраны с инструкциями, Bluetooth-подключение
2. **Сканирование полоски:** устройство считывает тест-полоску
3. **Обработка:** "Processing your input" (вращающийся индикатор)
4. **Отображение индикаторов устройства:**
   - Состояния прогресс-бара (синий)
   - Индикаторы Bluetooth-подключения
   - Индикаторы WiFi
   - Уровень батареи
5. **Вариации статуса:** тест в процессе / завершён / с ошибкой

**Состояния индикаторов устройства:**
- Test in progress — Device online, Bluetooth connected
- Test completion — Device online, Bluetooth connected  
- Test incomplete — Device offline, Bluetooth connected
- Test incomplete — Device offline, Bluetooth disconnected
- Exit demo — Internet connection failed (after BLE)
- Run complete
- Test offline — Bluetooth connected (block/pending sync)
- Test failed
- Auth pending post result

### 3.3 Test Results (Результаты тестов)

**8 типов результатов (цветовое кодирование):**

| Результат | Цвет круга | Описание |
|-----------|------------|----------|
| **High Fertility** | Зелёный | Высокая фертильность |
| **Ovulation Confirmed** | Фиолетовый | Овуляция подтверждена |
| **Peak Fertility** | Голубой | Пик фертильности |
| **Low Fertility** | Teal | Низкая фертильность |
| **Ovulation Not Confirmed** | Оранжевый | Овуляция не подтверждена |
| **Anovulatory Cycle** | Красный | Ановуляторный цикл |
| **Take Test Tomorrow** | Розовый | Сделать тест завтра |
| **Pregnant** | Серый | Беременна |

Каждый результат показывает:
- Цветной круг с текстом статуса
- Пояснительный текст под кругом
- Кнопка "Finish reading" (зелёная CTA)
- Отображение на Home card и в уведомлениях

**Result Pending Review:**
- "Your algorithm is key to a trusted test result..."
- "Your result will review your results and give a prediction..."
- "Do not remove the test strip from the device"
- Кнопка "Close"

**Вход в результат с Home:**
- Показывается как карточка на Home screen
- Push-уведомление на Lock Screen: "Test result is ready"
- iOS Widget с результатом

### 3.4 Test Errors (Ошибки тестов)

**6 типов ошибок (красные/розовые круги):**

| Ошибка | Описание | Действие |
|--------|----------|----------|
| **Strip Used Before** | Полоска уже использована | "Test with new strip" |
| **Incorrect Test Strip** | Неправильная полоска | "Test with fertility strip" |
| **Expired Test Strip** | Просроченная полоска | "Test with new strip" |
| **Unknown Strip Error** | Неизвестная ошибка | "Restart testing" |
| **Undipped Strip** | Полоска не погружена в образец | "Reinsert testing" |
| **Reversed Strip** | Полоска вставлена наоборот | "Reinsert testing" |

Все с дополнительной опцией "Finish reading" внизу.

### 3.5 Pre-Test Steps

- **Enter batch code:** ввод номера партии полосок с числовой клавиатуры
- **Confirm period dates:** подтверждение дат менструации на календаре перед тестом
- **Processing your input:** экран обработки с круговым индикатором

### 3.6 Live Activities (iOS Dynamic Island)

**Статусы Live Activity на Lock Screen и Dynamic Island:**
- Различные состояния анимации устройства на фоне обоев
- Test in progress / Test done / Test failed / Test under review
- Отображение прогресса тестирования в реальном времени
- Варианты для разных состояний подключения (online/offline, BT connected/disconnected)

### 3.7 Feedback Collection

- Сбор обратной связи после ошибок тестирования
- Анкета с опциями улучшения
- Redirect to Help section после определённых результатов

### 3.8 WiFi/BLE Nudges

Система уведомлений-подсказок для проблем с подключением:
- Weak WiFi signal warning
- WiFi connection nudges
- Bluetooth pairing guidance
- Device status checking

---

## 4. ONBOARDING (Онбординг)

**Figma:** `dTjU25yrieOPexO7JFvjKv` — INITO | IOS – Onboarding

### 4.1 Splash Screen

- **Фон:** светло-голубой (#D9FBFF)
- **Элементы:** два концентрических эллиптических овала, создающих слоёный эффект
- **Логотип:** "inito" (строчные) — тёмный wordmark, 120 × 44.72 px, по центру
- Никаких интерактивных элементов — чисто загрузочный/брендинговый экран

### 4.2 Start Screen

- **Фон:** белый с голубой волной-кругом (#D9FBFF) в верхней части
- **Логотип Inito** — по центру
- **Tagline:** "Your Fertility Decoded. Advanced hormone tracking made simple."
- **Шрифт:** Montserrat Medium, 16px/20px

**Две кнопки внизу экрана:**

| Кнопка | Стиль | Описание |
|--------|-------|----------|
| **Sign In** | Outlined (белый фон, рамка #EAECED) | Для существующих пользователей |
| **Sign Up** | Filled (тёмный фон #112D35, белый текст) | Для новых пользователей |

Обе: 327px шириной, 60px высотой, pill-shaped (border-radius 100px), Montserrat SemiBold 16px.

---

## 5. SETTINGS (Настройки)

**Figma:** `CQ8Y4SsthGAuOiaM19xOwK` — INITO | IOS – Settings

### 5.1 Profile Header

- **Имя пользователя** — Montserrat SemiBold 20px
- **"Edit Profile"** — pill-кнопка справа (#F7F8FD)
- **Email** — Montserrat Medium 14px

### 5.2 Your Goal (Ваша цель)

**Градиентная карточка (фиолетовый: #DDD9FF → #B6B5FE):**
- Заголовок "Your goal" с иконкой + кнопка истории целей (clock-rewind)
- Горизонтально-скроллируемые чипы:
  - **Выбранная цель:** белый фон, Montserrat SemiBold 14px
  - **Невыбранные:** полупрозрачный белый (rgba 255,255,255,0.35))
- Доступные цели: "Get pregnant", "Track pregnancy", "Track cycles"
- Выбранная цель всегда первая слева

**"Pregnancy settings"** — строка ниже карточки (серый фон #F6F6F6, radius 20px)

### 5.3 Settings Categories

**Все категории имеют единый паттерн:** серый заголовок → карточка #F6F6F6 с радиусом 20px → строки по 56px с иконкой, текстом и chevron-right.

**Referral Program:**
- Баннер-карточка (#F8F1FF): "Invite and get free strips" / "Get a pack of 15 strips for free. Tap to claim!" + иллюстрация полосок

**Orders & Subscription:**
- **Orders** — строка с chevron
- **Subscription** — строка + бейдж "Save 10%" (фон #FFEEE3, текст #F0950E)

**Health Information:**
- **Health profile** (иконка сердца)
- **Export report** (иконка документа)

**Support:**
- **Help** (знак вопроса)
- **Join community** (глобус)
- **How to use** (play)
- **Share your feedback** (палец вверх)

**Settings:**
- **Devices** (для подписчиков) → "**+ Add monitor**" (для бесплатных пользователей)
- **Notifications** (колокольчик)
- **Preferences** (слайдеры)

### 5.4 Footer

- **Legal links:** "Privacy Policy" · "Terms of Use" — teal (#38ABC5), кликабельные
- **App version:** "App version 5.9" — серый
- **User ID:** "User ID: 457869" + иконка копирования
  - При копировании: teal toast "Copied" вверху экрана

### 5.5 Screen Variants

| Вариант | Отличие |
|---------|---------|
| **Default** | Полный вид страницы |
| **Copied** | Toast "Copied" при копировании User ID |
| **Goal: Get pregnant** | Первый чип — "Get pregnant" |
| **Goal: Track cycles** | Первый чип — "Track cycles" |
| **Scroll** | Чипы в процессе горизонтального скролла |
| **Free user** | "Devices" → "+ Add monitor" |

---

## 6. SHOP (Магазин)

**Figma:** `OOrQ958dk13NjHBDkUKN0M` — INITO | IOS – Shop

### 6.1 Shop Page

**Структура страницы магазина:**
- Заголовок с навигацией
- Промо-баннеры для акций ("Holiday Sale", "Black Friday")
- Карточки продуктов (тест-полоски, аксессуары)
- Подписки и пакеты
- Несколько вариантов расположения продуктов
- Корзина (Cart) — отдельный экран с итогом заказа
- Скидочные бейджи и промо-коды
- Анимация стрелки (Arrow animation) для промо

**Продуктовые карточки:**
- Изображение продукта
- Название и описание
- Цена (с учётом скидок)
- CTA-кнопка добавления

**Cart (Корзина):**
- Список товаров с количеством
- Итоговая сумма
- Кнопка оформления заказа

### 6.2 Orders & Order Details

**Список заказов:**
- Таблица/матрица состояний по типам заказов:
  - **Orders / Test strips only** — заказы только с тест-полосками
  - **Orders / Test strips + Attachment clips** — полоски + клипсы
  - **Orders / Test strips + Attachment clips + Battery** — полоски + клипсы + батарейка
- Каждый тип показывает 5+ состояний (Ordered, Shipped, Delivered, Cancelled и др.)
- Разделение на первый и повторный заказ

**Order Details (Детали заказа):**
- Информация о заказе
- Статус доставки с трекингом
- Состав заказа
- Возможность возврата

### 6.3 Return Order (Возврат заказа)

**Флоу возврата заказа:**
- Множество экранов с различными состояниями
- Выбор причины возврата
- Подтверждение возврата
- Отслеживание статуса возврата
- Варианты: полный возврат / частичный возврат
- Subscription-related returns

### 6.4 Subscription (Подписка)

**Управление подпиской:**
- Планы подписки с ценами и описанием
- Промо-иллюстрации и карточки (с изображениями продукта)
- Сравнение планов
- Управление текущей подпиской
- Отмена / изменение подписки
- Paused subscription states
- Различные промо-акции и карусели

---

## 7. COMMUNITY (Сообщество)

**Figma:** `LLjQAqluK9e7WtuV3HNUK7` — Community App

### 7.1 Main Feed

**Два режима ленты:**
- **My feed** — персонализированный контент от подписок/тем
- **Featured** — курированный/популярный контент

**Navbar:**
- Аватар пользователя (фото или инициалы)
- Поисковая строка "Search"
- Колокольчик уведомлений (с бейджом при наличии)
- Фильтр (с бейджом количества активных фильтров)

**FAB (Floating Action Button):** тёмный круг с иконкой карандаша — создание нового поста.

### 7.2 Post Types (Типы постов)

**Заголовок поста (User Details):**
- 3 варианта: Anonymous / Normal / Long name
- Аватар + имя + бейдж роли + время + три точки (меню)
- Контентные теги: BFP, Graphic Images, Mention of Loss, Pregnancy

**Роли пользователей (User Tags):**

| Роль | Контексты | Описание |
|------|-----------|----------|
| **Admin** | Post / Comment / Profile | Администратор |
| **Expert** | Post / Comment / Profile | Эксперт |
| **Moderator** | Post / Comment / Profile | Модератор |
| **Chart Guide** | Post / Comment / Profile | Гид по графикам |

**Контент поста:**
- Текстовый блок
- Изображения (варианты layout: 1 вертикальное, 1 горизонтальное, 1 квадратное, 2 изображения, 3 изображения)
- Графики Inito с данными гормонов
- Опросы (Polls) с опциями и процентами

**Взаимодействие:**
- Like (outline heart / filled red heart) + счётчик
- Comments (bubble icon) + счётчик
- Bookmark/Save (outline / filled)
- Reactions — emoji-реакции

### 7.3 New Post (Создание поста)

**Флоу создания:**
1. Выбор тегов (Topic tags) — Default / Chosen состояния
2. Написание текста
3. Прикрепление медиа:
   - Камера (фото)
   - GIF
4. Создание опроса:
   - Поля для вариантов (empty / filled / character limit / add)
   - Ограничение символов с предупреждением
   - "Remove poll" action
5. Tooltip: "You can include into images in polls"
6. Preview перед публикацией
7. "Posting..." — прогресс-бар с индикатором загрузки

**Контейнеры изображений:**
- Полная матрица вариантов: с изображением/без/цветной placeholder × вертикальное/горизонтальное/квадратное × 1-3 изображения
- Отдельные варианты для постов и комментариев/ответов

### 7.4 Comments & Replies (Комментарии)

**Компонент комментария — 6 вариантов:**
- Replies: closed (свёрнутые) / opened (развёрнутые)
- Photo: no / vertical / horizontal

**Элементы комментария:**
- Аватар (4 типа × 2 like-состояния = 8 вариантов)
- Имя + время + бейдж "Author" (если автор поста)
- Текст комментария
- Reply / Like кнопки
- "View N more replies" — загрузка дополнительных ответов
- Three-dot menu

**Поле ввода комментария (3 состояния):**
- **Empty:** "Write a comment..." + gear icon
- **Filled:** текст + gear icon + send (arrow up) button
- **Edit:** "Edit comment" header + dismiss X + editable text

**Input с изображениями (12 вариантов):**
- State: Empty / Filled
- Image: No / Vertical / Horizontal / Square
- Text: Short / Long / Scroll

### 7.5 Profile (Профиль)

**Свой профиль:**
- Аватар (с кнопкой редактирования)
- Бейдж роли + имя пользователя
- Статистика: N posts | N following | N followers
- Цель: "Get pregnant" с emoji
- Bio (свободный текст)
- Вкладки: "My posts" / "Saved"

**Чужой профиль:**
- Та же структура + кнопка "Follow" (large, dark/primary filled)

**Список пользователей:**
- Compact rows: аватар + username + "Following" button

### 7.6 Notifications (Уведомления)

**Бейджи уведомлений (40×40px):**
- Activity types: Like (heart) / Comment (speech bubble) / Poll (bars) / Follow (person)
- Photo count: 1 avatar / 2 overlapping avatars
- 7 вариантов комбинаций

### 7.7 Button System

**Полная матрица кнопок:**
- **Styles (4):** Promo / Primary / Secondary / Transparent
- **Sizes (3):** Large (60px) / Medium (44px) / Small (32px)
- **Types (4+):** Text / Text+Icon / Icon+Text / Icon / Icon+Icon
- **States (3):** Default / Pressed / Disabled
- **Theme:** Light only
- ~180 уникальных вариантов кнопок

### 7.8 Typography (Community)

**Шрифт:** SF PRO (San Francisco Pro)

| Токен | Начертание | Размер/Интерлиньяж | Letter Spacing |
|-------|-----------|-------------------|----------------|
| Title | Semibold | 20/24 | -0.5 |
| Subtitle | Semibold | 16/19 | -0.5 |
| Body 14 | Semibold | 14/16 | -0.5 |
| Body 14 | Regular | 14/18 | -0.5 |
| Body 13 | Semibold | 13/15 | -0.4 |
| Body 13 | Regular | 13/15 | -0.4 |
| Body 12 | Medium | 12/14 | -0.4 |
| Body 12 | Light | 12/16 | -0.4 |
| Caption 11 | Semibold | 11/12 | -0.2 |
| Caption 11 | Regular | 11/12 | -0.2 |
| Caption 8 | Regular | 8/12 | 0 |

---

## 8. Дизайн-токены и цвета

### Основные цвета бренда

| Токен | Hex | Использование |
|-------|-----|---------------|
| Text/Black | #112D35 | Основной текст |
| Text/Grey | #7F8598 | Вторичный текст, заголовки секций |
| Text/White | #FFFFFF | Белый текст на цветных фонах |
| Main (brand) | #38ABC5 | Активная вкладка, CTA, ссылки |
| White | #FFFFFF | Фон страниц |
| Background Grey | #F6F6F6 | Карточки/строки |
| Background Blue | #D9FBFF | Splash/Start screen фон |
| Grey Borders | #EAECED | Обводки кнопок |
| Referral Purple | #F8F1FF | Баннер реферала |
| Goal Gradient Start | #DDD9FF | Карточка цели |
| Goal Gradient End | #B6B5FE | Карточка цели |
| Discount Orange | #F0950E | "Save 10%" текст |
| Discount Bg | #FFEEE3 | "Save 10%" фон |

### Гормональные цвета (Chart)

Каждый гормон имеет свой цвет на графике — E3G, LH, PdG, FSH, hCG, BBT — определены в дизайн-системе.

### Шрифты

- **Основное приложение:** Montserrat (SemiBold для заголовков, Medium для body, Regular для caption)
- **Community App:** SF PRO (San Francisco Pro)
- **Системные элементы:** SF Pro Text (status bar)

---

## 9. Гормоны и медицинская логика

### Гормоны, отслеживаемые через домашний тест (тест-полоски)

| Гормон | Полное название | Назначение |
|--------|----------------|------------|
| **E3G** | Estrone-3-glucuronide (метаболит эстрогена) | Отслеживание роста фолликула |
| **LH** | Luteinizing hormone | Обнаружение всплеска LH (предиктор овуляции) |
| **PdG** | Pregnanediol glucuronide (метаболит прогестерона) | Подтверждение овуляции |
| **FSH** | Follicle-stimulating hormone | Мониторинг фолликулярной фазы |
| **hCG** | Human chorionic gonadotropin | Обнаружение беременности |

### Клинические анализы крови (ручной ввод)

Progesterone (P4), Estradiol, AMH, FSH, LH, TSH, PRL, hCG — для пользователей, получающих результаты лабораторных исследований.

### Логика статуса дня

Приложение различает: Low/High/Peak Fertility, несколько вариантов "test required/optional/missed/not required" (с вариантами Past/Future), состояние "waiting for PdG rise" после овуляции, дни менструации (текущие + предсказанные), беременность (неделя триместра + дата родов).

### Адаптивное расписание тестирования

Не фиксированный ежедневный тест, а адаптивная система:
1. **Reference tests** (дни 5-9) — установление базового уровня
2. **Test allotted phase** — плотное тестирование в фертильном окне
3. **Optional test days** — дополнительные данные для трекинга трендов

---

## 10. Устройства и интеграции

### Ридеры тест-полосок

| Устройство | Тип | Описание |
|-----------|------|----------|
| **First Generation Reader** | USB / проводной | Первое поколение ридера |
| **InSight Wireless Reader** | Wireless (WiFi + BLE) | Беспроводной ридер нового поколения |

### Другие устройства

- **InTemp** — умный BBT-термометр, синхронизируется автоматически
- **Attachment clips** — клипсы для крепления (продаются в Shop)
- **Battery** — сменная батарейка для устройства (продаётся в Shop)

### Состояния подключения устройства

- Device online / offline
- Bluetooth connected / disconnected
- WiFi connected / weak signal / not connected
- Battery level indicators
- Firmware update flow

---

## 11. Figma-файлы и ссылки

| Файл | Figma Key | Секции In Prod |
|------|-----------|----------------|
| **Home** | `OymPscs7lt9KeT6o7upwtY` | Calendar & Main Card, Daily Logs, Medication, Periods, Strips Tracker, Notifications, Error Screens |
| **Chart** | `5Wqmh4OVajq35UoLmVExpe` | Chart, Chart PDF |
| **Test Flow** | `YB76M0AJWeG4jWEMembdxy` | Onboarding, Test with indicators, Test Results, Live Activities |
| **Onboarding** | `dTjU25yrieOPexO7JFvjKv` | Splash, Start Screen |
| **Settings** | `CQ8Y4SsthGAuOiaM19xOwK` | Main Settings Page |
| **Shop** | `OOrQ958dk13NjHBDkUKN0M` | Shop Page, Orders & Details, Return Order, Subscription |
| **Community** | `LLjQAqluK9e7WtuV3HNUK7` | UI KIT (все секции) |

---

## 12. User Flows (Основные пользовательские пути)

### Flow 1: Ежедневный цикл использования
1. Открыть приложение → Splash → Home
2. Увидеть Day Status Card (фертильность/тест/менструация)
3. Если нужен тест → Test tab → сканирование полоски → результат
4. Заполнить Daily Logs (симптомы, настроение, медикаменты и др.)
5. Просмотреть Chart → тренды гормонов
6. Проверить запас полосок → при необходимости заказать в Shop

### Flow 2: Логирование беременности
1. Home → "Log pregnancy"
2. Выбор даты первого положительного теста
3. Экран с поздравлением + данные о сроке
4. Переключение приложения в режим беременности
5. Daily Logs адаптируются под беременность

### Flow 3: Community
1. Открыть Community tab
2. Просмотр My feed / Featured
3. Создание поста (текст + фото/GIF + опрос + теги)
4. Комментирование / лайки / ответы
5. Просмотр профилей + Follow

### Flow 4: Покупка полосок
1. Алерт "You're almost out of strips" на Home
2. → Shop → выбор продукта → Cart → оформление заказа
3. Отслеживание в Orders → Order Details
4. При необходимости → Return Order flow

### Flow 5: Тестирование с InSight Reader
1. Test tab → подключение устройства (BLE)
2. Enter batch code → Confirm period dates
3. Вставить полоску → сканирование → обработка
4. Получение результата (один из 8 типов)
5. При ошибке → отображение типа ошибки + действие
6. Live Activity показывает прогресс на Lock Screen
