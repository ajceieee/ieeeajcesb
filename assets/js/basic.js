$(document).ready(function() {
    const date = new Date();

    const webMaster = {
        name: "Tonal Mathew",
        year: date.getFullYear(),
    };

    $(".copyright").html(` . Maintained  by <a target="_blank" href="https://github.com/tonalmathew">${webMaster.name}</a>`);

    $(
        ".credits"
    ).html(`© ${webMaster.year} IEEE SB AJCE. Made with <span style="color:red">&#10084;</span> by <a target="_blank"
								>Joyal Joseph</a></span>`);

    // News Updates
    let badge = 0;
    const newsUpdates = true;

    const UpdateNews = (newsUpdates) => {
        if (newsUpdates) {
            const newsList = {
                news: [{
                        title: "Webinar",
                        description: "Developing a Culture of Continual Learning & Personal Branding",
                        date: 19,
                        month: "May",
                        year: 2020,
                        time: "5:00 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Open Source Programming & Design of Custom Library for Arduino IDE",
                        date: 20,
                        month: "May",
                        year: 2020,
                        time: "7:30 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Invisibility Cloak",
                        date: 21,
                        month: "July",
                        year: 2020,
                        time: "4:00 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Introduction To Machine Learning",
                        date: 30,
                        month: "June",
                        year: 2020,
                        time: "6:00 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Volunteering with IEEE",
                        date: 30,
                        month: "June",
                        year: 2020,
                        time: "6:00 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Canva",
                        date: 30,
                        month: "July",
                        year: 2020,
                        time: "6:00 pm",
                    },
                    {
                        title: "ExeCom Training",
                        description: "Student Branch ExeCom Training for IEEE SB AJCE and IEEE SB GECK",
                        date: 14,
                        month: "February",
                        year: 2021,
                        time: "4:00 pm",
                    },
                    {
                        title: "Scientastic",
                        description: "Science Week Celebration 2021 (21st - 28th February)",
                        link: null,
                        date: 28,
                        month: "February",
                        year: 2021,
                        time: "11:59 pm",
                    },
                    {
                        title: "Article Writing",
                        description: "Share your article and win amazing cash prize and certificates❗ Last date for submission 👇",
                        link: "https://bit.ly/AJCE_SCI_ARTICLEWRITING",
                        date: 27,
                        month: "February",
                        year: 2021,
                        time: "11:59 pm",
                    },
                    {
                        title: "Webinar",
                        description: "Science in everyday life : From Kitchen to Cryptography 👨‍💻",
                        link: "https://bit.ly/science_week-webinar",
                        date: 27,
                        month: "February",
                        year: 2021,
                        time: "10:00 am",
                    },
                    {
                        title: "Just a minute",
                        description: "JAM comprtition on the topic : Science in everyday life 🧪",
                        link: "https://bit.ly/AJCE_SCI_JAM",
                        date: 27,
                        month: "February",
                        year: 2021,
                        time: "11:59 pm",
                    },
                    {
                        title: "Poster Designing",
                        description: "Share your poster and win amazing cash prize and certificates🎉",
                        link: "https://bit.ly/AJCE_SCI_POSTERDESIGNING",
                        date: 27,
                        month: "February",
                        year: 2021,
                        time: "11:59 pm",
                    },
                    {
                        title: "Science Quiz",
                        description: "Test your knowledge of scientifc facts and applications by participating in our fun quiz ✨",
                        link: "https://bit.ly/AJCE_SCI_QUIZ",
                        date: 27,
                        month: "February",
                        year: 2021,
                        time: "6:00 pm",
                    },
                    {
                        title: "Spectrum Talk",
                        description: "Greetings from IEEE AJCE SB!! <br> We hereby present you a spectrum talk by our colleagues ✨",
                        link: null,
                        date: 23,
                        month: "April",
                        year: 2021,
                        time: "4:00 pm",
                    },
                    {
                        title: "KROSS VORD",
                        description: "The Women in Computing of IEEE Computer Society Chapter and WiE AG of IEEE AJCE SB is organising a crossword competition.",
                        link: null,
                        date: 24,
                        month: "April",
                        year: 2021,
                        time: "11:00 am",
                    },
                    {
                        title: "LEARN. THINK. DO FIGMA",
                        description: "The WiE AG of IEEE SB AJCE brings to you ✨  LEARN . THINK . DO FIGMA , an unparalleled hands on experience with Figma. <br /> 📌 Speaker - <b> Mr. Vyshakh C R </b> <br /> (UX UI designer, Autosmarts)",
                        link: null,
                        date: 25,
                        month: "April",
                        year: 2021,
                        time: "11:00 am",
                    }
                ],
            };

            // To get Month Name
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            let todaysDate = new Date();
            let date = todaysDate.getDate();
            let month = monthNames[todaysDate.getMonth()];
            let year = todaysDate.getFullYear();


            // number of news
            badge = 0;
            // Updates the element with text new Updates
            $("#news-updates").text("New Updates");
            // Empties the Ul Element
            $(".news-list").empty();

            // Based on the number of news the cards are generated
            newsList.news.forEach((news) => {
                // checks whether the date of the event is greater than the present date
                if (date <= news.date && news.month == month && news.year == year) {
                    // increment the value based on the nuuumber of news.
                    badge++;
                    $(".badge-notify").text(`${badge}`);
                    // will append the card for each news.
                    if (news.link) {
                        $(".news-list").append(
                            `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}<a href="${news.link}"><small>( Register )</small></a></div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`
                        );
                    } else {
                        $(".news-list").append(
                            `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}</div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`
                        );
                    }
                }
            });
        } else {
            badge = 0;
            $(".badge-notify").text(`${badge}`);
            $("#news-updates").text("No News Updates");
        }

    };

    UpdateNews(newsUpdates); // function call
});