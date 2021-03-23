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
    
    
});
