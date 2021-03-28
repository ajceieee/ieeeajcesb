function newsData() {
  const newsList = [
    {
      id: "1",
      name: "Webinar",
      type: "Webinar",
      description:
        "Developing a Culture of Continual Learning & Personal Branding",
      date: "May/19/2020",
    },
    {
      id: "2",
      name: "Webinar",
      type: "Webinar",
      description:
        "Open Source Programming & Design of Custom Library for Arduino IDE",
      date: "May/20/2020",
    },
    {
      id: "3",
      name: "Webinar",
      type: "Webinar",
      description: "Invisibility Cloak",
      date: "July/21/2020",
    },
    {
      id: "4",
      name: "Webinar",
      type: "Webinar",
      description: "Introduction To Machine Learning",
      date: "June/30/2020",
    },
    {
      id: "5",
      name: "Webinar",
      type: "Webinar",
      description: "Volunteering with IEEE",
      date: "June/30/2020",
    },
    {
      id: "6",
      name: "Webinar",
      type: "Webinar",
      description: "Canva",
      date: "July/30/2020",
    },
    {
      id: "7",
      name: "ExeCom Training",
      type: "ExeCom Training",
      description:
        "Student Branch ExeCom Training for IEEE SB AJCE and IEEE SB GECK",
      date: "February/14/2021",
    },
    {
      id: "8",
      name: "Scientastic",
      type: "event",
      badge: "8-day event",
      description: "Science Week Celebration 2021 (21st - 28th February)",
      date: "February/21/2021",
    },
    {
      id: "9",
      name: "Article Writing",
      type: "event",
      description:
        "Share your article and win amazing cash prize and certificates❗ Last date for submission February-27",
      date: "February/21/2021",
    },
    {
      id: "10",
      name: "Webinar",
      type: "webinar",
      description: "Science in everyday life : From Kitchen to Cryptography 👨‍💻",
      date: "February/27/2021",
    },
    {
      id: "11",
      name: "JAM",
      type: "Competition",
      description:
        "JAM comprtition on the topic : Science in everyday life 🧪  Last date for submission February-27",
      date: "February/23/2021",
    },
    {
      id: "12",
      name: "Poster Designing",
      type: "Competition",
      description:
        "Poster Designing Competition, Topic: Conservation of electricty (school level), 2021 International Year of Sustainable Development (Undergraduate level). Share your poster and win amazing cash prizes and certificates 🎉. Last date for submission February-27",
      date: "February/23/2021",
    },
    {
      id: "13",
      name: "Science Quiz",
      type: "Competition",
      description:
        "Test your knowledge of scientifc facts and applications by participating in our fun quiz ✨",
      date: "February/27/2021",
    },
  ];

  $("#calendar").evoCalendar();
  $("#calendar").evoCalendar("addCalendarEvent", newsList);
}

newsData();
