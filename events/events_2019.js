$(document).ready(function () {
  let events = [
    {
      eventName: "TALK ON “BEYOND THE SKY”",
      image: "",
      eventDate: "Year 2019",
      venue: "",
      time: "",
      participants: 0,
      report:
        "As part of the science week, a meeting was conducted for the members. Our branch counsellor expanded the main theme ‘Beyond the sky’. Fellow student speakers gave talks on space stations. Careers and scope in space science were elaborated to students. Initiatives and pioneering undertaken by SpaceX were highlighted to students. A talk on the impact space exploration could have on population crisis was carried out. Prelims for the quiz on basic astronomy was conducted.",
    },
    {
      eventName: "TALK ON “ENGINEERING AND WOMEN”",
      image: "",
      eventDate: "Year 2019",
      venue: "",
      time: "",
      participants: 0,
      report:
        "WIE week started with an orientation for the WIE members based on the topic ‘Engineering and Women’ in association with IEEE WIE affinity group of AJCE SB. SB Vice Chair elaborated on women engineers in India and gender ratios. She described the different job sectors under engineering in India. A Talk on ‘The world we see is the work of an engineer’ was given by branch counsellor. He explained to students the roles and benefits a LinkedIn account has. ",
    },
    {
      eventName: "SPECTRUM TALK",
      image: "",
      eventDate: "21 st March",
      venue: "",
      time: "",
      participants: 24,
      report:
        "A talk based on the March edition of Spectrum magazine was held on 21 st March. The talk was given by Akin Babu Joseph, Chair of IAS Chapter IEEE AJCE SB. The members discussed various topics from the magazine",
    },
  ];

  events.forEach((event) => {
    $(".event-cards").append(`<div class="card border-dark mb-3 rounded" >
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src=${event.image} class="card-img" alt="">
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
});
