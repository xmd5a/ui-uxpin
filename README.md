# frontend-ui-dev-recruitment-task

Recruitment task was made using:
* HTML5 + CSS3
* Twig
* Sass
* a little bit of JavaScript
* frontend yeoman generator [chisel](https://github.com/xfiveco/generator-chisel)

All source files are available in **src** directory

## Running project
If you want to run project in development mode please open terminal and insert this instructions:
```
$ npm install
$ npm run dev
```

If you want build project just simple type:
```
$ npm run build
```
and then you'll have new **directory** named **dist** where all assets will be placed.

## Modifying form
There's several types of macros written in **twig** template which make form elements reusable.

Here's full list of macros with available parameters:

```twig
inputWithoutLabel(name, id, value, type, size)
```

```twig
macro inputSmallLabel(name, id, label, value, type)
```

```twig
macro inputWideLabel(name, id, label, value, type)
```

```twig
macro inputLabel(name, id, label, value, type)
```

```twig
macro inputWithBottomLabel(name, id, label, value, type, size)
```

```twig
checkbox(name, id, label, checked)
```

```twig
checkboxAlignTop(name, id, label, checked)
```

```twig
labelWithoutInput(label)
```

```twig
colorBox(color)
```

```twig
colorBoxWithLabel(color, label)
```
