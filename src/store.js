import {reactive} from "vue";

export const store = reactive ({
    
    navItems: [
        "HOME",
        "ABOUT",
        "SERVICES",
        "WORK",
        "ARTICLES"
    ],

    cardsData: {
        firstCard: [
            {
                icon: "fa-regular fa-building",
                title: "Buildings",
                text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
            },
            {
                icon: "fa-solid fa-rotate",
                title: "Renovate",
                text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
            },
            {
                icon: "fa-solid fa-house",
                title: "Consruct",
                text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
            },
            {
                icon: "fa-solid fa-truck",
                title: "Exclusive",
                text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
            },
        ]
    },

    separatorsData: {
        firstSeparator: {
            title: "Specialists In Modern Construction",
            text: ""
        },
    }

})