## Как добавить проект:
1. Откройте `projectData.js`.
2. Добавьте объект в массив:
```js
{
  name: "Название",
  link: "ссылка",
  description: "Описание",
  // положите файл в "/images/assets/project-images/ваша-картинка.webp"
  image: "/images/assets/project-images/ваша-картинка.webp", 
  authors: [{ nickname: "ваш-ник как в user-data.js", role: "ваша-роль" }]
}