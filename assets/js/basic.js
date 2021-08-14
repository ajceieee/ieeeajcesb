$(document).ready(function () {
  const date = new Date()

  const webMaster = {
    name: 'Tonal Mathew',
    year: date.getFullYear(),
  }

  $('.copyright').html(
    ` . Maintained  by <a target="_blank" href="https://github.com/tonalmathew">${webMaster.name}</a>`,
  )

  $(
    '.credits',
  ).html(`© ${webMaster.year} IEEE SB AJCE. Made with <span style="color:red">&#10084;</span> by <a target="_blank"
								>Joyal Joseph</a></span>`)

  // News Updates
  let badge = 0
  const newsUpdates = true

  const UpdateNews = (newsUpdates) => {
    if (newsUpdates) {
      const newsList = {
        news: [
          {
            title: 'afiş_Ø',
            description: `As a part of the Onam 🌸 festival we are delighted to
              conduct afiş_Ø, a digital poster making competition.

              📌 Topic - Safe and colorful Onam celebration amidst the
              pandemic

              📍 Deadline - 23rd August, 2021`,
            link: null,
            date: 23,
            month: 'August',
            year: 2021,
            time: '11:59pm',
          },
          {
            title: 'Introduction to IEEEXtreme',
            description:
              "The Computer Society Chapter of IEEE SB AJCE presents a session on <b>'Introduction to IEEEXtreme'</b> <br />  <b>IEEEXtreme</b> is an annual competitive programming challenge in which teams of IEEE members, compete for 24 hrs against each other to solve a set of programming problems.",
            link: 'https://bit.ly/ajce-xtreme',
            date: 27,
            month: 'May',
            year: 2021,
            time: '11:59 pm',
          },
          {
            title: "What's the hype about IEEE?",
            description:
              "<b>IEEE SB LBSITW</b> in collaboration with <b>IEEE SB AJCE</b> has come up with an idea to conduct a session, exclusively for <b>LBTians</b> and <b>AJCEians</b> to deliver your answers for </b><i>What's the hype about IEEE?</i></b>  🤩",
            link: 'http://bit.ly/MD_session',
            date: 29,
            month: 'May',
            year: 2021,
            time: '11:59 pm',
          },
        ],
      }

      // To get Month Name
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      let todaysDate = new Date()
      let date = todaysDate.getDate()
      let month = monthNames[todaysDate.getMonth()]
      let year = todaysDate.getFullYear()

      // number of news
      badge = 0
      // Updates the element with text new Updates
      $('#news-updates').text('New Updates')
      // Empties the Ul Element
      $('.news-list').empty()

      // Based on the number of news the cards are generated
      newsList.news.forEach((news) => {
        // checks whether the date of the event is greater than the present date
        if (date <= news.date && news.month == month && news.year == year) {
          // increment the value based on the nuuumber of news.
          badge++
          $('.badge-notify').text(`${badge}`)
          // will append the card for each news.
          if (news.link) {
            $('.news-list').append(
              `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}<a href="${news.link}"><small>( Register )</small></a></div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`,
            )
          } else {
            $('.news-list').append(
              `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}</div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`,
            )
          }
        }
      })
    } else {
      badge = 0
      $('.badge-notify').text(`${badge}`)
      $('#news-updates').text('No News Updates')
    }
  }

  UpdateNews(newsUpdates) // function call
})
