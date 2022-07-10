$(document).ready(function () {
	let events2022 = [
		{
			eventName: "CIRCUITHON",
			image: "../../events/images/2022/CIRCUITHON.jpg",
			eventDate: "26th June 2022",
			// venue: "Online",
			// time: "3:00pm - 4:00pm",                            
			// participants: 27,
			report:
				"You never fail until you stop trying ~    Albert Einstein <br/>" +
				"Hey everyone! 🎊<br/>" +
				"Greetings from IEEE SB AJCE! Circuits are never easy to understand. But once you master it, there is no going back. If you are one such master, here is a design competition for you!" +
				"The SSCS chapter of IEEE SB AJCE is delighted to announce CIRCUITHON, a national level online competition on circuit design!<br/>"  +
				"Prizes worth 4K 💰" +
				"Last date for submission - 26th June 2022.<br/>" +
				"<a href='https://bit.ly/Rules_and_Regulations_CIRCUITHON_SSCS_AJCE'>👉Rules & Regulations</a><br/>" +
				"What are you waiting for? Go out there and electrify the circuits ⚡️ " +
				"<a href='https://bit.ly/sscs_ajce_CIRCUITHON'>👉Submission Link</a><br/>",
		}
	];
	let events = [...events2022];
	events.forEach((event) => {
		$(".event-cards")
			.append(`<div class="card border-dark mb-3 rounded event-card" >
     <div class="row no-gutters">
       <div class="col-md-4">
       <a class="venobox" href="${event.image}"><img src="${event.image}" style="height: 100%;width: 100%;" alt="image alt" class="card-img card-img-class "/></a>
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
