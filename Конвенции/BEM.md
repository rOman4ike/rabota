# БЭМ

## Содержание
- [Что такое БЭМ](#what-bem)
- [Блок](#block)
  - [Примеры блоков](#block-examples)
  - [Правила использования блоков](#block-rules)
  - [Пример](#block-example)
- [Элемент](#element)
  - [Примеры элементов](#element-examples)
  - [Правила использования элементов](#element-rules)
  - [Пример](#element-example)
- [Модификатор](#modifier)
  - [Виды модификаторов](#modifier-kinds)
  - [Правила использования модификаторов](#modifier-rules)
  - [Примеры модификаторов](#modifier-examples)
  - [Пример](#modifier-example)
- [Микс](#mix)
  - [Что можно комбинировать](#mix-combine)
  - [Пример](#mix-example)
- [Стили](#styles)
- [Вложенность и специфичность](#test)
- [CSS](#css)
  - [Вложенность и специфичность CSS](#css-specificity)
  - [Принцип открытости/закрытости](#css-open-close-principle)
- [Структура файлов](#file-structure)
  - [Название файла](#file-name)

## <a name="what-bem"></a>Что такое БЭМ

**БЭМ (блок, элемент, модификатор)** - методология, которая дает разработчикам разумный способ дать имена вашим CSS-классам,
чтобы сделать их более прозрачными и понятными для других.

В основе БЭМ — соглашение по именованию, которое делает имена CSS-классов максимально информативными для разработчиков и позволяет многократно использовать компоненты.

## <a name="block"></a>Блок

**Блок** - это **независимая** сущность, которая представляет собой часть интерфейса на странице.
Каждый из блоков может иметь свою разметку, стили и скрипты. Название блока характеризует смысл ("Что это?" - "меню": menu, "кнопка": button)

> Наименование класса блока:<br>"имя-блока"

В интерфейсе может существовать несколько экземпляров одного и того же определения блока (например, различные кнопки или несколько меню).
Также практически всегда блоки имеют корневой блок, который служит оберткой для других элементов блока (например почти все блоки находятся внутри блока container).

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <div class="container">
    <header class="header">
      <img class="logo">
      <button class="btn"/>
    </header>

    <main class="main">
      <section clas="about">
        <button class="btn"/>
      </section>
      <section class="search">
      </section>
    </main>

    <footer class="footer">
      <small class="copyright">
      </small>
    </footer>
  </div>
  ```
</details>

В примере выше, в качестве блоков выступает все теги, у которых есть класс:
1. container
2. header
3. logo
4. main
5. about
6. btn
7. search
8. footer
9. copyright

### <a name="block-examples"></a>Примеры блоков:
- Навигационное меню;
- Таблица;
- Форма;
- Кнопка;
- Список;
- Шапка страницы.

### <a name="block-rules"></a>Правила использования блоков
1. Блокам нельзя писать внешние размеры и позиционирование (margin, position)
2. Внутри одних блоков могут быть сколько угодно блоков

### <a name="block-example"></a>Пример
Разберем шапку сайта.

<img src="./bem-block-example.png" style="width: 70%">

<br>

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <header class="header">
    <div class="header__inner">

      <div class="header__top">
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link" href="#">Tab 1</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">Tab 2</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">Tab 3</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#">Tab 4</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__bottom">
        <div class="logo">
          <img class="logo__img" src="#">
        </div>
        <div class="search">
          <form class="search__form">
            <input class="search__input" type="search">
          </form>
        </div>
        <div class="auth">
          <form class="auth__form">
            <input class="auth__input" type="text">
            <input class="auth__input" type="password">
            <button class="auth__btn">sign in</button>
          </form>
        </div>
      </div>

    </div>
  </header>
  ```
</details>

Здесь имеются 5 блоков:
- menu block;
- search block;
- auth block;
- logo block;
- head block.

Внутри head block мы можем двигать блоки как захотим. К примеру мы можем поменять блоки logo block и search block местами зная что внешний вид от этого не изменится в худшую сторону (из-за **независимости** блоков).

Каждый блок может состоять из **элементов**, которые являются составной частью блока и имеют с ним тесную связь.

---

## <a name="element"></a>Элемент
**Элемент** - часть блока, привязанная к нему семантически и функционально. Название элемента, как и название блока, характеризует смысл («Что это?» — "пункт": item, "текст": text)

> Наименование класса элемента: отделяется двойным подчеркиванием.<br>"имя-блока__имя-элемента".

Элементы не могут существовать за пределами блока, к которому принадлежат. **У всех элементов должен быть родительский блок**.
<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <!-- Хорошо -->
  <div class="about">
    <div class="about__inner">
      <div class="about__items"></div>
    </div>
  </div>

  <!-- Плохо: элемент НЕ находится внутри блока about -->
  <div class="about__header"></div>
  ```
</details>

### <a name="element-examples"></a>Примеры элементов:
- Навигационное меню (блок), содержащее пункты меню (элементы);
- Таблица (блок), содержащая ячейки и заголовки (элементы);
- Форма (блок), содержащая поля ввода (элементы).

### <a name="element-rules"></a>Правила использования элементов
1. Элемент без блока существовать не может;
2. Внутри элементов могут быть сколько угодно элементов;
3. Принадлежат только одному родительскому блоку;
4. Элемент — всегда часть блока, а не другого элемента. Это означает, что в названии элементов нельзя прописывать иерархию вида block__elem1__elem2.

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <div class="about">
    <div class="about__inner">
      <!-- Хорошо -->
      <div class="about__items"></div>

      <!-- Плохо: элемент элемента не бывает-->
      <div class="about__inner__items"></div>
    </div>
  </div>
  ```
</details>

### <a name="element-example"></a>Пример
Разберем блок menu block из [примера блока](#header-example).

<img src="./bem-element-example.png" style="width: 70%">

<br>
<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <a
          class="menu__link"
          href="#"
        >
          Tab 1
        </a>
      </li>
      <li class="menu__item">
        <a
          class="menu__link"
          href="#"
        >
          Tab 2
        </a>
      </li>
      <li class="menu__item">
        <a
          class="menu__link"
          href="#"
        >
          Tab 3
        </a>
      </li>
      <li class="menu__item">
        <a
          class="menu__link"
          href="#"
        >
          Tab 4
        </a>
      </li>
    </ul>
  </nav>
  ```
</details>

Здесь имеются 4 элемента

Вкладки (Tab 1, Tab 2, Tab 3, Tab 4) принадлежат menu block и не могут использоваться вне блока!

---

## <a name="modifier"></a> Модификатор
**Модификатор** - сущность, которая определяет внешний вид, состояние и поведение. Модификатор может задаваться как блоку, так и элементу. Название характеризует блок/объект "Какой размер?", "Какая тема?", "Какой статус?"

> Класс модификатора: отделяют от имени блока или элемента двойным дефисом (--)<br>"имя-блока--значение-модификатора" ИЛИ<br>"имя-блока__имя-элемента--значение-модификатора" ИЛИ<br>"имя-блока__имя-элемента--имя-модификатора--значение-модификатора" [хзхз].

Для одного элемента/блока допускается использование нескольких модификаторов, если они представляют разные свойства. **Модификатор нельзя использовать самостоятельно**.

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <!-- Хорошо -->
  <button class="button button--primary button--inactive">
  </button>
  <div class="card card--theme-transparent">
    <div class="card__header"></div>
    <div class="card__content"></div>
  </div>

  <!-- Плохо: модификатор используется без блока -->
  <div class="form--primary">
    <div class="form__group">
      <input class="form__input">
    </div>
  </div>
  ```
</details>

### <a name="modifier-kinds"></a>Виды модификаторов
1. Логические - Применяют, когда факт наличия модификатора важнее, чем его значение (visible: true или false, active, disabled и т.д.);
2. Ключ-значение - Используют в тех случаях, когда значение модификатора важно (size: large, medium, small, theme: winter, dark, light).

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <!-- Пример: модификатор логический -->
  <button class="btn btn--inactive"></button>
  <button class="btn btn--lg"></button>

  <!-- Пример: модификатор ключ-значение -->
  <div class="card card--theme-dark"></div>
  <a class="icon icon--pdf"></a>
  ```
</details>

### <a name="modifier-rules"></a>Правила использования модификаторов
- Блоку или элементу нельзя одновременно присвоить разные значения модификатора;
- Модификатор нельзя использовать самостоятельно.

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <!-- Хорошо -->
  <div class="card card--theme-transparent">
    <div class="card__header"></div>
    <div class="card__content"></div>
  </div>

  <!-- Плохо: используются два значения модификатора theme -->
  <div class="card card--theme-transparent card--theme-dark">
    <div class="card__header"></div>
    <div class="card__content"></div>
  </div>

  <!-- Хорошо -->
  <button class="button button--primary button--active">...</button>

  <!-- Плохо: модификаторы используются без блока -->
  <button class="button--primary button--active">...</button>
  ```
</details>

### <a name="modifier-examples"></a>Примеры модификаторов
- Навигационное меню (блок), содержащее пункты меню (элементы), один из пунктов меню активен (модификатор);
- Кнопки (блок), которых может быть несколько видов (модификаторы);
- Текст состояния (блок), у которого может быть несколько цветов (модификаторы).

### <a name="modifier-example"></a>Пример
Разберем блок menu block из [примера блока](#header-example). Он находится в шапке (сверху) и в подвале (снизу) страницы.

<img src="./bem-modifier-example.png" style="width: 70%">

<br>
<details>
  <summary>Пример HTML</summary>

  ```html
  <!-- Верхнее menu-block -->
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 1</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 2</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 3</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 4</a>
      </li>
    </ul>
  </nav>

  <!-- Нижнее menu-block -->
  <nav class="menu menu--theme-smooth">
    <ul class="menu__list">
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 1</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 2</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 3</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Tab 4</a>
      </li>
    </ul>
  </nav>
  ```
</details>

Внешний вид верхнего и нижнего меню заметно отличается.
По HTML нижнее и верхнее меню отличаются только тем, что у нижнего в блоке добавился класс "menu--theme-smooth"

## <a href="#mix"></a>Микс
**Микс** - способ комбинирования разных БЭМ-сущностей для одного DOM-узла.

> **БЭМ-сущности** - блоки, элементы и модификаторы.

Позволяют:
1. Совмещать поведение и стили нескольких сущностей без дублирования кода;
2. Одинаково форматировать разные HTML-элементы.

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <nav class="nav">
    <!-- Совмещение блока logo и элемента nav__logo = микс -->
    <img src="logo.png" class="logo nav__logo">
    <h1>My webpage</h1>

    <ul class="menu">
      <li class="menu__link">Link 1</li>
      <li class="menu__link">Link 2</li>
      <li class="menu__link">Link 3</li>
    </ul>
  </nav>
  ```
</details>

### <a name="mix-combine"></a>Что можно комбинировать
Комбинировать можно все БЭМ-сущности:
1. Блок с блоком
2. Блок с элементом
3. Элемент с элементом

### <a name="mix-example"></a>Пример
Блоки могут отличаться не только визуально, но и семантически. Например, форма поиска, форма регистрации и форма заказа тортов — это все формы. В верстке они реализованы с помощью блока «форма», но общих стилей не имеют. Такие различия невозможно устранить с помощью модификатора. Вы можете определить общие стили для таких блоков, но не сможете повторно использовать код.

<details>
  <summary>
    Пример SCSS
  </summary>

  ```sass
  .cake,
  .search,
  .register {
    ...
  }
  ```
</details>

Вы можете использовать микс для создания семантически разных блоков одной и той же формы. Селектор класса .form описывает все стили, которые можно применить к любой форме (cake, search или register):

<details>
  <summary>
    Пример SCSS
  </summary>

  ```scss
  .form {
    ...
  }
  ```
</details>

Теперь из универсальной формы можно сделать форму поиска.

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <form class="form search" action="/">
    <input class="form__search" name="s">
    <input class="form__submit" type="submit">
  </form>
  ```
</details>

## <a name="css"></a>CSS

### <a name="css-specificity"></a>Вложенность и специфичность CSS
> [!IMPORTANT]
> Это не касается всего, что находится в папке base (базовых стилей, вендоров и хелперов)

Одно из основных правил методологии BEM - использовать **ТОЛЬКО** селекторы классов.
```scss
.btn {
  ...
}
```
Поэтому мы **НЕ** используем.
1. Идентификаторы
```scss
#example {
  ...
}
```
2. Cелекторы тегов
```scss
button.button {
  ...
}

// ИЛИ

div {
  ...
}
```
3. Универсальный селектор
```scss
* {
  ...
}
```
4. Комбинированные селекторы
```scss
.btn.btn--active {
  ...
}
```
5. Селекторы атрибутов
```scss
input[type=submit] {
  ...
}
```

Почему мы их не используем? Ответ: из-за увеличения специфичности и связности

Использовать вложенные селекторы можно, но важно соблюдать принцип инкапсуляции: правила одного блока не должны влиять на внутренний мир другого блока.

Блок влияет только на свои элементы и не может воздействовать на элементы другого блока или на сам блок.

<details>
  <summary>
    Пример SCSS
  </summary>

  ```scss
  <!-- Хорошо -->
  .list {
    ...

    &__item {
      ...
    }
  }

  .link {
    ...
  }

  // Плохо: Блок list влияет на поведение блока link
  .list {
    ...

    &__item {
      ...

      .link {
        ...
      }
    }
  }


  .btn {
    ...

    &__icon {
      ...
    }
  }

  .list {
    ...

    &__item {
      ...

      // Плохо: Блок list влияет на поведение элемента блока btn
      .btn__icon {
        ...
      }
    }
  }
  ```
</details>

Вложенность уместна, если необходимо изменить стили элементов в зависимости от модификатора (например, состояния блока или заданной темы):

<details>
  <summary>
    Пример SCSS
  </summary>

  ```scss
  .card--dark-theme {
    ...

    .card__header {
      ...
    }

    .card__content {
      ...
    }
  }
  ```
</details>


При правильном использовании любые селекторы, написанные в формате BEM, должны иметь одинаковую оценку специфичности (0,1,0)

> [!NOTE]
> Более подробно со специфичностью в CSS можно ознакомиться [здесь](https://doka.guide/css/specificity/) (Ссылку потом поменяю)

<details>
  <summary>
    Пример SCSS
  </summary>

  ```scss
  // Правильно
  .nav {
    ...

    &__list {
      ...
    }

    &__item {
      ...
    }

    &__link {
      ...

      &--active {
        ...
      }
    }
  }

  // Неправильно: используются вложенные селекторы
  .nav {
    ...

    .nav__list {
      ...

      .nav__item {
        ...

        .nav__link {
          ...

          .nav--active {
            ...
          }
        }
      }
    }
  }
  ```
</details>

> [!IMPORTANT]
> Использовать псевдоклассы и псевдоэлементы можно и они не влияют на вложенность!

### <a name="css-open-close-principle"></a>Принцип открытости/закрытости
Любой HTML-элемент страницы должен быть открыт для модификации, но закрыт для изменения. Разрабатывать новые CSS-реализации следует так, чтобы не пришлось менять уже существующие.

Предположим, что появилась необходимость изменить размер одной из кнопок. Следуя принципу открытости/закрытости, модифицируем кнопку.

HTML-реализация:

```html
<button class="button">...</button>
<button class="button button--size-s">...</button>
```
CSS-реализация:

```css
.button {
  font-family: Arial, sans-serif;
  text-align: center;
  font-size: 11px;
  line-height: 20px;
}

.button_size_s {
  font-size: 13px;
  line-height: 24px;
}
```

## <a name="file-structure"></a>Структура файлов
Файловая структура стилей следующая:
  1. commons - папка с общими стилями, которые будут использовать другие приложения
  2. main - папка со стилями приложения, точка входа которой является main
  3. ... - папка со стилями приложения, точка входа которой является (pdf, manage и т.д)

Структура внутри этих папок:
  1. abstracts - собраны все инструменты и помощники Sass, используемые в проекте.
    Каждые глобальные variables, functions, mixins и placeholders должны быть помещены сюда.
    Правила:
      1. Она не должна выдавать ни одной строки CSS при самостоятельной компиляции. Это не что иное, как помощники Sass.
  2. base - используется для определения стилей, которые распределяются по всему приложению (базовые стили, шрифты, цвета и т.д)
  3. components - здесь хранятся многократно используемые компоненты (btn, form, header, footer)
  4. pages - содержит стили для конкретных страниц (event-show, report-index и т.д)
  5. vendors - папка со сторонними/внешними фреймворками и библиотеками (normalize, tusur_header_addons, bootstrap, jqueryUI)
    Правила:
      1. Все инструменты сторонних производителей (фреймворки, библиотеки, помощники) должны быть разделены по папкам
  6. vendors-redefine - используется для переопределения стилей сторонних библиотек
    Например, vendors-redefine/_bootstrap.scss - это файл, содержащий все правила CSS, предназначенные для повторного объявления некоторых CSS Bootstrap по умолчанию. Это сделано для того, чтобы избежать редактирования самих файлов поставщиков, что, как правило, не является хорошей идеей
  7. application.sass - для импорта всех наших стилей из других папок.

<details>
  <summary>
    Пример файловой структуры с папками main и commons
  </summary>

  ```text
  commons/
  |
  |- abstracts
  |   |- _variables.sass        # Sass Variables
  |   |- _mixins.sass           # Sass Mixins
  |- base
  |   |- _base.sass
  |   |- _fonts.sass

  main/
  |
  |- abstracts/
  |	|- _fonts.sass              # Font Import
  |	|- _mixins.sass             # Sass Mixins
  |	|- _variables.sass          # Sass Variables
  |
  |- components/
  |	|- _button.sass             # Button Styles
  |	|- _input.sass              # Input Styles
  |	|- _modal.sass              # Modal Styles
  | |- _header.sass             # Header Styles
  |
  |- pages/
  | |- event
  | |- report
  |	…                           # Etc.
  |
  |- vendors/
  |	|- bourbon/                 # Bourbon
  |	|- fontawesome/             # Font Awesome
  |	|- neat/                    # Bourbon Neat
  |	|- normalize/               # Normalize
  |	…                           # Etc.
  |
  |- vendors-redefine
  | |- bootstrap
  |   |- bootstrap.sass
  ` application.sass            # Main Scss File
  ```
</details>

<details>
  <summary>
    Пример application.sass папки main
  </summary>

  ```scss
  // Commons
  @import '../commons/application'

  // Abstracts
  @import './abstracts/variables'
  @import './abstracts/mixins'
  @import './abstracts/placeholders'
  @import './abstracts/functions'

  // Vendors
  @import './vendors/tusur_header_addons/tusur_header_addons'
  @import './vendors/normalize/normalize'
  @import './vendors/bootstrap/bootstrap'

  // Vendors-redefine
  @import './vendors-redefine/bootstrap/bootstrap'

  // Theme
  @import './themes/dark'
  @import './themes/christmas'

  // Components
  @import './components/btn'
  @import './components/card'
  @import './components/collapse'
  @import './components/form'
  @import './components/header'

  // Layouts
  @import './layouts/event/edit'
  @import './layouts/event/index'
  @import './layouts/event/show'
  @import './layouts/report/index'
  ```
</details>

### <a name="file-name"></a>Название файла
Каждый блок должен находиться в отдельном файле.
Имя файла должно равняться названию блока.

<details>
  <summary>
    Пример SASS
  </summary>

  ```scss
  // Filename: _btn.sass
  .btn
    $font-size: 0.5em

    display: inline-block
    width: $font-size
    height: $font-size
    background-color: antiquewhite
    border-radius: 100%

    &--highlighted
      background-color: yellow
  ```
</details>

# Для себя

## (Бес)полезные ссылки
1. https://nicothin.pro/idiomatic-pre-CSS/#bem-elem - максимально короткое объяснение БЭМа
2. https://github.com/yoksel/common-words <br> https://github.com/nicothin/idiomatic-pre-CSS/blob/gh-pages/words_and_abbreviations.md - если сложно придумать название для класса


4. https://gist.github.com/radist2s/0b74fb70d3cf4cc4a9baaf72921f2d41
5. https://openclassrooms.com/en/courses/5625786-produce-maintainable-css-with-sass/6009176-use-bem-selectors-with-sass
6. https://gist.github.com/zoxon/6e32de9f0e43910a79df