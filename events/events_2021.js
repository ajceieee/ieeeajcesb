$(document).ready(function () {
  let events = [
    {
      eventName: "Triviathon",
      image: "./images/2021/triviathon.jpeg",
      eventDate: "30 Jan - 2 Feb 2021",
      // venue: "Online",
      // time: "3:00pm - 4:00pm",                            
      // participants: 27,
      report:
        "Tech talk was given by MrRichu Bini on the topic Basics of Arduino. The talk was very informative and captivating. It was enlightening to learn the basics of a fascinating open-source platform which could be used for creating interactive objects. Talk also included discussions on single-board microcontroller, Arduino variants and open - source hardware.",
    },
    {
      eventName: "TECHNOJAM",
      image: "./images/2020/technojam.jpeg",
      eventDate: "15 - 18 May 2020",
      venue: "Instagram",
      time: "",
      participants: 30,
      report:
        "The student branch has presented an informative and technically profound Technojam which was open to all College students. The TechnoJam contest was held from 15th to 18th of May. Prizes worth Rs.1750 willbe awarded to the winners. A host of entries flocked in and the result, was a really tight competition where a lot of the contestants were neck to neck. At the end of the day, we have three winners based on thevarious judgement criteria. ",
    },
    {
      eventName: "Pitch &amp; Protect–Pro event of IEEE KHM",
      image: "./images/2020/pitch.jpeg",
      eventDate: "25 and 26  May, 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "An online idea pitching cum debate team event was conducted by the SB in association with IEEE Kochi Hub as a part of the clusterevents conducted as pre events of IEEE KHM. Here the teams are  given a problem to which they have to provide an innovative solution and later they have to defend their idea during the debate. An effective team consisting of four teams was one of the success factors behind the programme.",
    },
    {
      eventName: "DuoZest",
      image: "./images/2020/duozest.jpeg",
      eventDate: "6 October 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "This event was a one hour session on AI in Medical Imaging .The webinar dealt with the use of Artificial Intelligence in Diagnostic Medical Imaging .It was a collaboration with IEEE student branch of UKF College of Engineering. All the attendees were provided with certificates .Around 50 participants were there and we received a lot of positive feedback .",
    },
    {
      eventName: "LEARN. THINK. DO PHOTOSHOP",
      image: "./images/2020/geen.jpeg",
      eventDate: "2 - 3 August, 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "A hands-on session on Photoshop was conducted by Mr. Geen Geo on 2nd August. Many key tools were introduced and explained to the participants. A poster designing competition was subsequently held on 3rd August and had 25 participants.",
    },
    {
      eventName: "GAME OF CODES",
      image: "./images/2020/gameofcodes.jpeg",
      eventDate: "16 March 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "Game of codes was an intra-college online coding competition .There were about 60 participants .Competition was for four hours .Cash prizes for top 3 and top female coder were also awarded .",
    },
    {
      eventName: "QuaRunTime",
      image: "./images/2020/quaruntime.jpeg",
      eventDate: "28 May 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "QuaRunTime was a 6 days event conducted by CS Chapter IEEE AJCE SB. it was a series of event. We had a total of 262 registrations, out of them more than 50% were externals.  We  received around 100 feedbacks  conveying that the  event was very  interesting and useful .Cash awards worth  ₹2000 was awarded",
    },
    {
      eventName: "HACK@AJCE",
      image: "./images/2020/hacktoberfest.jpeg",
      eventDate: "17 October 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "This event  basically consisted of two talks by two speakers . The first session was taken by Abraham reji a Free software developer and Debian Contributor and his topic was about free open source software and its basics .James K Jose a Free Stack Web Developer and Open Source Enthusiast took  the second session about Introduction to Git .This session was  two and a half hours long . Later four repositories were created by the  SB and  this was made available to students to participate in hacktoberfest .",
    },
    {
      eventName: " Introduction To Design Thinking",
      image: "./images/2020/design.jpeg",
      eventDate: "14 November 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "Webinar was conducted on Saturday 14 November .Most of the participants were externals .In this session which is lasted for one hour,things were discussed about the basics of design and also taught to design with photoshop .We have received a lots of positive feedbacks conveying that the session was very useful .",
    },
    {
      eventName: " Webinar on  LATEX",
      image: "./images/2020/latex.jpeg",
      eventDate: "14 November 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        " On July 21st and 22nd a webinar was hosted by CSE Dept. of Amal Jyothi College Of Engineering in association with IEEE AJCE SB and ACM Chapter AJCE, on the topic LaTeX presented by Prof.Shiney Thomas, Associate Professor, CSE, Amal Jyothi College Of Engineering. We had a total of 217 registrations, out of which out of which there were Faculties of different colleges and Research scholars. We also had registration from different countries.",
    },
    {
      eventName: " Mentor.Me",
      image: "./images/2020/mentorme.jpeg",
      eventDate: "14 November 2020",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "This event was conducted by three CS Chapters namely IEEE CS SBC AJCE ,IEEE CS SBC MACE and IEEE CS SBC NSSCE . It is a two month long program which is still going on .10 teams have registered till now . Mentoring is for 5 weeks from the starting date .Mentor will guide the team and help them to implement the ideas .",
    },
    {
      eventName: " WEEKLY MAGAZINE",
      image: "./images/2020/thisweekintech.jpeg",
      eventDate: "",
      venue: "Instagram",
      time: "",
      participants: 24,
      report:
        "Technology is best when it brings people together... .We have decided to introduce a weekly magazine which comprises the current innovations in the field of Technology .A team was formed to work for this and we have released two Magazines online yet . We are releasing the Magazine on the weekends . ",
    },
  ];

  events.forEach((event) => {
    $(".event-cards")
      .append(`<div class="card border-dark mb-3 rounded event-card" >
    <div class="row no-gutters">
      <div class="col-md-4">
      <a class="venobox" href="${event.image}"><img src="${event.image}" alt="image alt" class="card-img card-img-class "/></a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${event.eventName}</h5>
          <p class="card-text my-0"><small class="text-muted">${event.eventDate} </small></p>
          <p class="card-text">${event.report}</p>
        </div>
      </div>
    </div>
  </div>`);
  });

  $(".venobox").venobox({});
});
