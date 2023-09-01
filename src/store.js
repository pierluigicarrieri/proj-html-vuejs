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
        ],

        secondCard: [
            {
                icon: "fa-solid fa-suitcase",
                number: "3534",
                title: "PLANNING APPLICATIONS",
            },
            {
                icon: "fa-regular fa-building",
                number: "896",
                title: "COMPLETED PROJECTS",
            },
            {
                icon: "fa-solid fa-users",
                number: "172",
                title: "TRAINED PROFESSIONALS",
            },
            {
                icon: "fa-solid fa-globe",
                number: "19",
                title: "INTERNATIONAL OFFICES",
            },
        ]
    },

    separatorsData: {

        firstSeparator: {
            title: "Specialists In Modern Construction",
            text: ""
        },
        
        secondSeparator: {
            title: "Explore Recent Work",
            text: ""
        },
        
        thirdSeparator: {
            title: "Our Core Values",
            text: ""
        },
        
        fourthSeparator: {
            title: "Latest News",
            text: ""
        },
        
        fifthSeparator: {
            title: "TrustedPartners",
            text: ""
        }
    }

})