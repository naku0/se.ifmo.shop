import ducky from "../images/assets/project-images/ducky.webp"
import azat from "../images/assets/project-images/azat.ico"

export const projects = [
    {
        //Имя будет в карточке
        name: "ifmo.shop",

        //Ссылка на сайт или на гитхаб
        link: "https://se.ifmo.shop",

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
                role: "frontend | ux/ui design | gamedev"
            },
            {nickname: "vodka_kota", role: "DevOps"},
            {nickname: "BuRy", role: "tg бот поддержки"}]
    },
    //Пример правильного заполнения
    {
        name: "azat-site",
        link: "http://se.ifmo.shop:8081",
        description: "Сервис для обмена фото",
        image:  azat,
        commercial: false,
        rofl: true,
        authors: [
            {nickname: "naku0", role: "frontend"},
            {nickname: "BuRy", role: "Backend and DevOps"}
        ]
    },

    {
        name: "side.moscow",
        link: "https://side.moscow",
        description: "Сайт-визитка бара",
        image:'',
        commercial: true,
        rofl: false,
        authors: [
            {nickname: "naku0", role: "frontend | ux/ui design"}
        ]
    },

    {
        name: "naku0.github.io",
        link: "https://naku0.github.io",
        description: "CV / сайт-визитка",
        image:'',
        commercial: true,
        rofl: false,
        authors: [
            {nickname: "naku0", role: "frontend | ux/ui design"}
        ]
    },

    {
        name: "Chatlink",
        link: "https://github.com/RomanKrohin/chatlink/tree/development",
        description: " Может-быть когда-нибудь каким-то чудом, но доделается",
        image: "",
        commercial: false,
        rofl: true,
        authors: [
            {
                nickname: "BuRy",
                role: "Backend and Testing"
            }
        ]
    },

    {
        name: "Позор расы человеческой",
        link: "https://github.com/Kivicol/Mobile_thing",
        description: "Приложуха через Expo для просмотра комнат",
        image: "",
        commercial: false,
        rofl: true,
        authors: [
            {nickname: "kivisd3n", role: "Главный разработчик"}
        ]
    },

    {
        name: "kivi & goose",
        link: "https://t.me/kiviandgoose",
        description: "Паблик с мемами про ИТМО",
        image: "",
        commercial: false,
        rofl: true,
        authors: [
            {nickname: "naku0", role: "Креативный директор | монтажер"},
            {nickname: "kivisd3n", role: "Исполнительный директор | монтажер"},
            {nickname: "BuRy", role: "Администратор"},
        ]
    },
    {
        name: "ак 4 лаба",
        link: "https://github.com/deadxraver/csa-lab4",
        description: "это моя лаба по архитектуре компьютера я люблю архитектуру компьютера",
        image: "",
        commercial: false,
        rofl: false,
        authors: [
            {
                nickname: "deadxraver",
                role: "Главный"
            }
        ]
    }

]