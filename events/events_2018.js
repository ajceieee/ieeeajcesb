$(document).ready(function () {
  let events = [
    {
      eventName: "Management Session",
      image: "./images/2018/1.jpg",
      eventDate: "MARCH 09, 2018",
      venue: "",
      time: "",
      participants: 0,
      report:
        "A session in Management and Entrepreneurship was hosted as a part of Minerva 3.0 to enlighten the hidden entrepreneur within them.c",
    },
    {
      eventName: "Basic Electrical",
      image: "images/2018/2.jpg",
      eventDate: "MARCH 09, 2018",
      venue: "",
      time: "",
      participants: 0,
      report:
        "A basic electrical workshop was conducted which taught how electrical wiring is done in a house and how to change faulty electrical components  ",
    },
    {
      eventName: "Assembling a PC",
      image: "images/2018/3.jpg",
      eventDate: "MARCH 09, 2018",
      venue: "",
      time: "",
      participants: 24,
      report:
        "The purpose of this workshop was to make people aware of how a computer is put together and the functions of different component.",
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
