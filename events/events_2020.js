$(document).ready(function () {
  let events = [
    {
      eventName: "Tech Talk - 2",
      eventDate: "06 th April 2020",
      venue: "Online",
      time: "3:00pm - 4:00pm",
      participants: 27,
      report:
        "Tech talk was given by MrRichu Bini on the topic Basics of Arduino. The talk was very informative and captivating. It was enlightening to learn the basics of a fascinating open-source platform which could be used for creating interactive objects. Talk also included discussions on single-board microcontroller, Arduino variants and open - source hardware.",
    },
    {
      eventName: "TECHNOJAM",
      eventDate: "15th - 18th May 2020",
      venue: "Instagram",
      time: "",
      participants: 30,
      report:
        "WiE webinar was conducted on Tuesday, 19 th May. The talk included various aspects of continual learning like ikigai, personal growth, social media, and personal branding.Also, topics like feminism, self- love, goal setting and phubbing were touched upon.The registration count was 210 and largely composed of students and faculty members in which 40 % were external registrants.We received around 90 feedbacks on the session.Many concluded that the session was informative, encouraging, and valuable.",
    },
    {
      eventName: "Pitch &amp; Protect–Pro event of IEEE KHM",
      eventDate: "25 th and 26 th May, 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "An online idea pitching cum debate team event was conducted by the SB in association with IEEE Kochi Hub as a part of the clusterevents conducted as pre events of IEEE KHM. Here the teams are  given a problem to which they have to provide an innovative solution and later they have to defend their idea during the debate. An effective team consisting of four teams was one of the success factors behind the programme.",
    },
  ];

  events.forEach((event) => {
    $(".event-cards").append(`<div class="card border-dark mb-3 rounded" >
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${event.eventName}</h5>
          <p class="card-text">${event.report}</p>
          <p class="card-text"><small class="text-muted">${event.eventDate} Time: ${event.time}</small></p>
        </div>
      </div>
    </div>
  </div>`);
  });

  let webinars = [
    {
      webinarTopic:
        "Topic: ‘Know it all’ to ‘Learn it all’: Developing a culture of continual learning and personal branding",
      speaker: "Aisha Nazia",
      webinarDate: "19 th May 2020",
      venue: "Online",
      time: "5:00 - 6:30pm",
      participants: 136,
      report:
        "WiE webinar was conducted on Tuesday, 19 th May. The talk included various aspects of continual learning like ikigai, personal growth, social media, and personal branding.Also, topics like feminism, self- love, goal setting and phubbing were touched upon.The registration count was 210 and largely composed of students and faculty members in which 40 % were external registrants.We received around 90 feedbacks on the session.Many concluded that the session was informative, encouraging, and valuable.",
    },
    {
      webinarTopic: "Topic: Invisibility Cloak",
      speaker: "SachethSanal",
      webinarDate: "21 May 2020",
      venue: "Online",
      time: "4:00 pm - 5:00 pm",
      participants: 137,
      report:
        "A webinar on invisibility cloak was conducted on Thursday, 21st May. The session included various topics like what is cloaking, Invisibility by cloaking, Rochester Cloak and different applications of this technology and its limitations in detail. Registration count was 247. More than 50% of registrants were externals. We received around 70 feedbacks conveying that the session was very useful and knowledgeable.",
    },
    {
      webinarTopic: "Topic: Machine Learning",
      speaker: "Neville Lusimba",
      webinarDate: "22 May 2020",
      venue: "Online",
      time: "8:00 pm - 9:30 pm",
      participants: 197,
      report:
        "A webinar on machine learning was conducted on Friday, 22nd May. The session included various topics like what is Machine Learning, the technology behind Generative adversial network in detail, programming and so on. Registration count was around 267 and around 70% were external registrants. We received 76 feedbacks regarding the session, that it was very informative and useful.",
    },
    {
      webinarTopic: "Topic: Volunteering with IEEE",
      speaker: "AathiraMarayil",
      webinarDate: "23rd May 2020",
      venue: "Online",
      time: "6:00 - 7:30pm",
      participants: 106,
      report:
        "A webinar on volunteering was conducted on Saturday, 23rd May. The talk included various aspects of volunteering, why to volunteer, benefits of volunteering, outcomes, and advantages of volunteering, etc. Also, the importance of IEEE, benefits of IEEE and professional branding were stressed upon. Theregistration count was 180 and largely composed of students. We received many feedbacks on the session and many concluded that the session was effective in highlighting the importance of IEEE and volunteering.",
    },
    {
      webinarTopic: "Topic: Designing with Canva",
      speaker: "Madhu Krishnan",
      webinarDate: "24th May 2020",
      venue: "Online",
      time: "6:00 - 7:30pm",
      participants: 127,
      report:
        "A webinar on designing with Canva was conducted on Saturday, 24th May. The talk included various   characteristics of designing, introduction to Canva, how to start, etc. The speaker also showed many examples of posters, certificates, etc which can be created and different options in Canva. The  registration count was 180 and largely composed of students. We received many feedbacks on the session and everyone agreed that the session was very useful.",
    },
    {
      webinarTopic: "Topic: Designing with Canva",
      speaker: "Madhu Krishnan",
      webinarDate: "24th May 2020",
      venue: "Online",
      time: "6:00 - 7:30pm",
      participants: 127,
      report:
        "A webinar on designing with Canva was conducted on Saturday, 24th May. The talk included various   characteristics of designing, introduction to Canva, how to start, etc. The speaker also showed many examples of posters, certificates, etc which can be created and different options in Canva. The  registration count was 180 and largely composed of students. We received many feedbacks on the session and everyone agreed that the session was very useful.",
    },
    {
      webinarTopic:
        "Topic: Open Source Programming and Design of Custom Library for Arduino IDE.",
      speaker: "Abubeker K M",
      webinarDate: "20th May 2020",
      venue: "Online",
      time: "11.30am-12.30pm",
      participants: 127,
      report:
        "The SB has conducted a webinar on Open Source Programming and Design of Custom Library for   Arduino IDE. The talk was led by Abubeker K M, one of the well-known trainers for Real Time Systems, IoT,  ML and open source programming. He currently   serves as an assistant professor in the ECE   department of Amal Jyothi College of Engineering. He  has conducted over 25+ hands on training for    students and faculties. The IAS society of the SB has  headed the program.",
    },
    {
      webinarTopic: "Topic: phase locked loop-an application approach",
      speaker: "Divya R Pillai",
      webinarDate: "3 rd June 2020",
      venue: "Online",
      time: "4.00pm-5.00pm",
      participants: 63,
      report:
        "A webinar on Phase Locked Loop – an application approach was conducted on Wednesday, 3 June. The webinar session was well structured and include various topics like fundamentals of Phase Locked Loop, its working and significance in communication area. The session helped students to learn about the design of PLL under different applications. The participants count was around 63 and largely comprised of students. We got good responses in the chat box.",
    },
  ];

  webinars.forEach((event) => {
    $(".webinar-cards").append(`<div class="card border-dark mb-3 rounded" >
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${event.webinarTopic}</h5>
              <p class="card-text"><small class="text-muted">Speaker: ${event.speaker} </small></p>

              <p class="card-text">${event.report}</p>
              <p class="card-text"><small class="text-muted">${event.webinarDate} Time: ${event.time}</small></p>
            </div>
          </div>
        </div>
      </div>`);
  });
});
