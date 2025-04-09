import ducky from "../images/assets/project-images/ducky.webp"
import azat from "../images/assets/project-images/azat.ico"

export const projects = [
    {
        //Имя будет в карточке
        name: "ifmo.shop",

        //Ссылка на сайт или на гитхаб
        link: "se.ifmo.shop",

        //Краткое описание будет рядом с картинкой
        description: "Формально-неформальный портал поколения чудес",

        //Непосредственно картинка
        image: ducky,

        //Если картинки не будет, будет взята картинка из пулла, основываясь на следующих полях
        commercial: false,
        rofl: true,

        //Ник, как в user-data.js.
        //Если проект содержит несколько авторов, то указывайте в массиве, не будьте жадными😈
        authors: [
            {
                //Ваш никнейм
                nickname: "naku0",
                //Ваша роль в этом проекте (необязательно, при незаполнении высветится "Участник")
                role: "frontend, ux/ui, gamedev"
            }]
    },
    //Пример правильного заполнения
    {
        name: "azat-site",
        link: "later",
        description: "Сервис для обмена фото",
        image:  azat,
        commercial: false,
        rofl: true,
        authors: [
            {nickname: "naku0", role: "frontend"},
            {nickname: "BuRy", role: "backend"}
        ]
    }
]