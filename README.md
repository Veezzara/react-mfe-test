# Webpack Module Federation Demo

## О плагине

В репозитории рассматривается Webpack-плагин, который позволяет формировать единое приложение из нескольких билдов, каждый из которых деплоится самостоятельно.

Что важно — плагин позволяет делиться между приложениями не только страницами или компонентами (проще говоря, пользовательским интерфейсом), а в принципе любым клиентским кодом.

Использование плагина рассматривается в контексте разработки приложений с использованием библиотеки React, хотя использовать плагин можно даже для построения интерфейсов, где на одной странице могут использоваться сразу несколько разных UI-библиотек.

## Цели применения

Плагин позволяет создавать различные модули, которые можно использовать в разных приложениях. 

Область применения:

- может упростить разработку больших приложений, которые разрабатываются несколькими командами одновременно;
- может упростить переиспользование и совместное использование клиентского кода в разных приложениях.

## Примеры использования

Для каждого модуля создается отдельный проект с определенной Webpack-конфигурацией, где можно указать, какие части проекта мы выносим наружу (exposes) и какие внешние модули мы используем (remotes). Пример использования можно просмотреть в коде репозитория.

## Ограничения

С помощью этого плагина можно выносить наружу только собранные js-бандлы. Следовательно, мы не можем передавать стили в css-файлах или какие-либо ассеты (например, изображения).

Однако мы можем встраивать стили и svg-ассеты в страницу через скрипты, используя Webpack-загрузчики, например, `style-loader` и `css-loader` для стилей и `@svgr-loader` для svg-ассетов. 

## Ссылки и материалы

[Webpack Documentation — Module Federation](https://webpack.js.org/concepts/module-federation/)

[Micro-Frontends Course - Beginner to Expert](https://www.youtube.com/watch?v=lKKsjpH09dU)

[How to Use Webpack Module Federation in React](https://oskari.io/blog/react-module-federation/)
