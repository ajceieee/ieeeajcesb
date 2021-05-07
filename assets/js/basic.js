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
                news: [
                    {
                        title: "ECO-LUTION",
                        description: "As part of the <b>PES Day celebrations 2021</b>,  <b>IEEE AJCE SB</b> delightfully presents you <b><i>Eco- lution</i></b> , a quiz competition based on the topic <b>Environmental Sustainability</b>.🌍",
                        link: null,
                        date: 29,
                        month: "April",
                        year: 2021,
                        time: "12:00 am",
                    },
                    {
                        title: "CREARE",
                        description: "Greetings from IEEE AJCE SB!!! As a part of the <b>PES Day celebrations2021</b>, <b>IEEE AJCE SB</b> presents you <b>Créaré</b>- to Create, a <b><i>poster designing competition</i></b> for all those amazing designers out there!!💫 <br />Theme💡: <b>Clean Energy Revolution</b>",
                        link: "http://bit.ly/AJCE-Créaré",
                        date: 30,
                        month: "April",
                        year: 2021,
                        time: "12:00 am",
                    },
                    {
                        title: "𝑸𝑼𝑰𝒁𝒁𝑬𝑹𝑰𝑨",
                        description: "As a part of 𝐖𝐈𝐄𝐯𝐚𝐜𝐢𝐭𝐲, 𝐖𝐈𝐄 Week Celebrations 2021, 𝐖𝐈𝐄 𝐀𝐆 of 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐕𝐀𝐒𝐓 in collaboration with 𝐖𝐈𝐄 𝐀𝐆 of 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐀𝐉𝐂𝐄, 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐏𝐄𝐂 honourably presenting '𝑸𝑼𝑰𝒁𝒁𝑬𝑹𝑰𝑨' based on the topic '𝑾𝑶𝑴𝑬𝑵 𝑨𝑵𝑫 𝑻𝑬𝑪𝑯𝑵𝑶𝑳𝑶𝑮𝒀' <br />It's time to check your knowledge!!💡",
                        link: "bit.ly/QUIZZERIA",
                        date: 2,
                        month: "May",
                        year: 2021,
                        time: "08:30 pm",
                    },
                    {
                        title: "IDEA HUNT",
                        description: "We <b>WIE AG</b> of <b>IEEE SB College Of Engineering,  Pathanapuram</b>  in collabration with <b>WIE AG</b> of <b>IEEE SB AJCE, IEEE SB VAST</b> is organizing✨ <b>IDEA HUNT</b> ✨an <b>Idea Pitching competition</b> as a part of <b>WIEvacity WIE</b> Week Celebrations  2021 , Our theme is <b>WOMEN AND SOCIETY</b>",
                        link: null,
                        date: 8,
                        month: "May",
                        year: 2021,
                        time: "11:59 pm",
                    },
                    {
                        title: "TECH TALK @AJCE",
                        description: "Let's walk into  something that's worthwhile... The <b>IEEE AJCE SB</b> hereby invites you all to the the  <b>Tech Talk @AJCE</b> on the topic <i>'Inside the biggest neurotechnology experiment by Neuralink'</i>.",
                        link: "https://bit.ly/Tech_Talk_ajce",
                        date: 9,
                        month: "May",
                        year: 2021,
                        time: "5:00 pm",
                    },
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