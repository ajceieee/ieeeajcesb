$(document).ready(function () {
	let events2022 = [
		{
			eventName: "CIRCUITHON",
			image: "../../events/images/2022/CIRCUITHON.png",
			eventDate: "26th June 2022",
			// venue: "Online",
			// time: "3:00pm - 4:00pm",                            
			// participants: 27,
			report:
				"<strong>CIRCUITHON</strong> is a national online circuit design competition.<br/>Date of submission: 26 June 2022<br/>More Details will be published soon.",
		}
	];
	let events = [...events2022];
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
