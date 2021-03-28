$(document).ready(function () {
  let events = [
    {
      eventName: "Java Workshop",
      image: "./images/2017/java.jpg",
      eventDate: " 04 OCTOBER 2017",
      venue: "",
      time: "",
      participants: 0,
      report:
        "Billions of devices run on Java. Knowing java enables students to build innovative applications on the web, mobile, electronic devices etc",
    },
    {
      eventName: "Android Workshop",
      image: "images/2017/android.jpg",
      eventDate: " 06 OCTOBER 2017",
      venue: "",
      time: "",
      participants: 0,
      report:
        "The workshop in Android helps in familiarising the android app studio IDE and how to make your first app and launch it on the google playstore ",
    },
    {
      eventName: "Photoshop Workshop",
      image: "images/2017/psd.jpg",
      eventDate: "09 OCTOBER 2017",
      venue: "",
      time: "",
      participants: 24,
      report:
        "Photoshop is used everywhere from poster making to App UI designing. This workshop is for creative students who can convert their imagination to a digital reality.",
    },
  ];

  events.forEach((event) => {
    $(".event-workshops").append(`<div class="card border-dark mb-3 rounded" >
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
