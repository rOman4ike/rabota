## <a href="#mix"></a>Микс

### Еще один пример
Рассмотрим еще один пример изменения семантики компонента. Вот навигационное меню в шапке страницы, в котором все записи являются ссылками:

<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <nav class="menu">
    <a class="link" href=""></a>
    <a class="link" href=""></a>
    <a class="link" href=""></a>
  </nav>
  ```
</details>

Функционал ссылок уже реализован блоком, но ссылки меню должны визуально отличаться от ссылок в тексте.
Изменить ссылки меню можно несколькими способами:
1. Создайте модификатор записи меню, который превращает запись в ссылку:
<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <nav class="menu">
    <a class="menu__item menu__item--link" href="#"></a>
    <a class="menu__item menu__item--link" href="#"></a>
    <a class="menu__item menu__item--link" href="#"></a>
  </nav>
  ```
</details>

В этом случае для реализации модификатора вам следует скопировать поведение и стили блока link. Это приведет к дублированию кода.

2. Используйте сочетание универсального блока link и элемента item блока Menu:
<details>
  <summary>
    Пример HTML
  </summary>

  ```html
  <nav class="menu">
    <a class="link menu__item" href=""></a>
    <a class="link menu__item" href=""></a>
    <a class="link menu__item" href=""></a>
  </nav>
  ```
</details>

Благодаря сочетанию двух объектов БЭМ теперь вы можете реализовать базовую функциональность ссылок из блока link и дополнительные правила CSS из блока меню и избежать дублирования кода.



## Структура файлов

> [!IMPORTANT]
> Возможно стоит вернуть файлы __abstracts_dir.scss

> <span style="color: red;">Незнаю</span>
> Имя файла также может быть таким: product-rating--inverted.scss (суффикс с именем модификатора) и содержать только код модификатора блока.

```scss
Filename: product-rating.scss
.product-rating {
  // common styles here
}
```

```scss
Filename: product-rating--inverted.scss
.product-rating--inverted {
  // inverted styles here
}
```