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
        ],

        thirdCard: [
            {
                image: "project2-featured-15013609.jpg"
            },
            {
                image: "project1-featured-294276386.jpg"
            },
            {
                image: "project3-featured-189023420.jpg"
            },
        ],
            
        fourthCard: [
            {
                icon: "fa-solid fa-house",
                title: "Great Services",
                text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
                color: "var(--custom-color-10)",
            },
            {
                icon: "fa-solid fa-gear",
                title: "Highest Standards",
                text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
                color: "var(--custom-color-8)",
            },
            {
                icon: "fa-solid fa-users",
                title: "Professional Team",
                text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
                color: "var(--custom-color-7)",
            },
            {
                icon: "fa-regular fa-lightbulb",
                title: "Creative Solutions",
                text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
                color: "var(--custom-color-9)",
            },
        ],

        fifthCard: [
            {
                image: "blog-post-134132600.jpg",
                title: "Redeveloping Florida’s Remote Southern Coast",
                date: "December 7th, 2015",
                text: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed",
            },
            {
                image: "blog-post-92486644.jpg",
                title: "How We Manage Large Construction Projects",
                date: "December 7th, 2015",
                text: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed",
            },
            {
                image: "blog-post-332773904.jpg",
                title: "Future proofing a modern home",
                date: "December 6th, 2015",
                text: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed"
            }
        ],

        sixthCard: [
            {
                image: "home-logo11-219096700-320x202.png"
            },
            {
                image: "home-logo10-219096700-320x202.png"
            },
            {
                image: "home-logo2-219096700-320x202.png"
            },
            {
                image: "home-logo1-219096700-320x202.png"
            },
            {
                image: "home-logo9-219096700-320x202.png"
            },
        ],
    },

    mainSeparatorsData: {

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
            title: "Trusted Partners",
            text: ""
        }
    },

    btnSeparatorsData: {

        firstBtnSeparator: {
            btnTitle: "VIEW ALL PROJECTS",
            separatorColor: "var(--custom-color-11)"
        },
        
        secondBtnSeparator: {
            btnTitle: "VIEW ALL ARTICLES",
            separatorColor: "var(--custom-color-1)"
        },
    },

    tweets: [
        {
            image: "",
            accountName: "",
            accountRef: "",
            date: "",
            content: {
                text: "",
                media: "",
            },
            comments: "",
            likes: "",
        }
    ]

})

export function getImgPath(img) {
    return new URL(`./assets/images/${img}`, import.meta.url).href;
}
