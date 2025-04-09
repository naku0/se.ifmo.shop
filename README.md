## Как добавить проект:

1. Откройте файл `projectData.js`
2. Добавьте новый объект в массив `projects`:

```javascript
{
  name: "Название",
  link: "ссылка",
  description: "Описание",
  // Положите файл в "/images/assets/project-images/"
  image: "/images/assets/project-images/ваша-картинка.webp",
  commercial: false,  // true если коммерческий проект
  rofl: false,        // true если рофлопроект
  authors: [
    { 
      nickname: "ваш-ник (как в user-data.js)", 
      role: "ваша-роль" 
    }
  ]
}
```