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
        "💡 Triviathon 💡- an interactive and live quiz where teams battle it out amongst each other.",
    },
    {
      eventName: "AGM",
      image: "./images/2021/agm.jpeg",
      eventDate: "February/06/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Annual General Meeting (AGM) 2021.",
    },
    {
      eventName: "ExeCom Training",
      image: "./images/2021/execom-training.jpg",
      eventDate: "February/14/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Student Branch ExeCom Training for IEEE SB AJCE and IEEE SB GECK",
    },{
      eventName: "Scientastic",
      image: "./images/2021/scientastic.jpg",
      eventDate: "February/21/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Science Week Celebration 2021 (21st - 28th February)",
    },{
      eventName: "Article Writing",
      image: "./images/2021/article-writing.jpg",
      eventDate: "February/21/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Share your article and win amazing cash prize and certificates❗ Last date for submission February-27",
    },{
      eventName: "Webinar",
      image: "./images/2021/webinar.jpg",
      eventDate: "February/27/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Science in Everyday Life : From Kitchen to Cryptography 👨‍💻",
    },{
      eventName: "JAM",
      image: "./images/2021/just-a-minute.jpg",
      eventDate: "February/23/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "JAM Competition, Topic : Science in Everyday Life 🧪  Last date for submission February-27",
    },{
      eventName: "Poster Designing",
      image: "./images/2021/poster-design.jpg",
      eventDate: "February/23/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Poster Designing Competition, Topic: Conservation of electricty (school level), 2021 International Year of Sustainable Development (Undergraduate level). Share your poster and win amazing cash prizes and certificates 🎉. Last date for submission February-27",
    },{
      eventName: "Science Quiz",
      image: "./images/2021/science-quiz.jpg",
      eventDate: "February/27/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Test your knowledge of scientifc facts and applications by participating in our fun quiz ✨",
    },{
      eventName: "SB MEET UP",
      image: "./images/2021/sb_meet.jpeg",
      eventDate: "March/28/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE AJCE SB is conducting Meet Up 2021 as an induction session to welcome you to our Student Branch and let's have a fun session of meet and greet!🤝",
    },{
      eventName: "Lets talk about Python",
      image: "./images/2021/lets_talk_about_python.jpg",
      eventDate: "April/10/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE SB of Amal Jyothi College of Engineering is conducting a session on Lets talk about Python 👩‍💻👩‍💻 to enhance the  knowledge and fun in learning Python as a language.",
    },{
      eventName: "Membership Development session IAS",
      image: "./images/2021/md_session_ias.jpg",
      eventDate: "April/11/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE IAS SBC of Amal Jyothi College of Engineering is organizing a MEMBERSHIP DEVELOPMENT SESSION for all the SB members to acknowledge you all about the benefits and programmes of IAS SBC.",
    },{
      eventName: "Spectrum Talk",
      image: "./images/2021/spectrum_talk.jpeg",
      eventDate: "April/23/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE Spectrum is the flagship magazine, world’s largest professional organization devoted to engineering and the applied sciences. We hereby present you a spectrum talk by our colleagues ✨",
    },{
      eventName: "KROSS VORD",
      image: "./images/2021/kross_vord.jpeg",
      eventDate: "April/24/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The Women in Computing of IEEE Computer Society Chapter and WiE AG of IEEE AJCE SB is organising a crossword competition based on prominent women in technology.",
    },{
      eventName: "LEARN. THINK. DO FIGMA",
      image: "./images/2021/learn_think_do.jpeg",
      eventDate: "April/25/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The WiE AG of IEEE SB AJCE brings to you ✨  LEARN . THINK . DO FIGMA , an unparalleled hands on experience with Figma. <br /> 📌 Speaker - <b> Mr. Vyshakh C R </b> <br /> (UX UI designer, Autosmarts)",
    },{
      eventName: "ECO-LUTION",
      image: "./images/2021/eco-lution.jpg",
      eventDate: "April/29/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "As part of the <b>PES Day celebrations 2021</b>,  <b>IEEE AJCE SB</b> delightfully presents you <b><i>Eco- lution</i></b> , a quiz competition based on the topic <b>Environmental Sustainability</b>.🌍",
    },
    {
      eventName: "CREARE",
      image: "./images/2021/creare.jpg",
      eventDate: "April/30/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Greetings from IEEE AJCE SB!!! As a part of the <b>PES Day celebrations2021</b>, <b>IEEE AJCE SB</b> presents you <b>Créaré</b>- to Create, a <b><i>poster designing competition</i></b> for all those amazing designers out there!!💫 <br />Theme💡: <b>Clean Energy Revolution</b>",
    },
    {
      eventName: "𝑸𝑼𝑰𝒁𝒁𝑬𝑹𝑰𝑨",
      image: "./images/2021/quizzeira.jpg",
      eventDate: "May/2/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "As a part of 𝐖𝐈𝐄𝐯𝐚𝐜𝐢𝐭𝐲, 𝐖𝐈𝐄 Week Celebrations 2021, 𝐖𝐈𝐄 𝐀𝐆 of 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐕𝐀𝐒𝐓 in collaboration with 𝐖𝐈𝐄 𝐀𝐆 of 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐀𝐉𝐂𝐄, 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐏𝐄𝐂 honourably presenting '𝑸𝑼𝑰𝒁𝒁𝑬𝑹𝑰𝑨' based on the topic '𝑾𝑶𝑴𝑬𝑵 𝑨𝑵𝑫 𝑻𝑬𝑪𝑯𝑵𝑶𝑳𝑶𝑮𝒀' <br />It's time to check your knowledge!!💡",
    },
    {
      eventName: "RIDDLE IT",
      image: "./images/2021/riddle-it.jpg",
      eventDate: "May/3/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "As a part of 𝐖𝐈𝐄𝐯𝐚𝐜𝐢𝐭𝐲, 𝐖𝐈𝐄 Week Celebrations 2021, 𝐖𝐈𝐄 𝐀𝐆 of 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐕𝐀𝐒𝐓 in collaboration with 𝐖𝐈𝐄 𝐀𝐆 𝐨𝐟 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐀𝐉𝐂𝐄, 𝐈𝐄𝐄𝐄 𝐒𝐁 𝐏𝐄𝐂 brings to you '𝐑𝐈𝐃𝐃𝐋𝐄 𝐈𝐓' Puzzle Competition 🧩",
    },
    {
      eventName: "IDEA HUNT",
      image: "./images/2021/idea-hunt.jpg",
      eventDate: "May/3/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "We <b>WIE AG</b> of <b>IEEE SB College Of Engineering,  Pathanapuram</b>  in collabration with <b>WIE AG</b> of <b>IEEE SB AJCE, IEEE SB VAST</b> is organizing✨ <b>IDEA HUNT</b> ✨an <b>Idea Pitching competition</b> as a part of <b>WIEvacity WIE</b> Week Celebrations  2021 , Our theme is <b>WOMEN AND SOCIETY</b>",
    },
    {
      eventName: "CAPTURE LE MOMENT",
      image: "./images/2021/capture_le_moment.jpg",
      eventDate: "May/4/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "As a part of 𝗪𝗜𝗘vacity, 𝗪𝗜𝗘 Week Celebrations 2021, 𝗪𝗜𝗘 𝗔𝗚 of 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗩𝗔𝗦𝗧 in collaboration with 𝗪𝗜𝗘 𝗔𝗚 of 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗔𝗝𝗖𝗘, 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗣𝗘𝗖 is honourably presenting a photography contest - '𝗖𝗔𝗣𝗧𝗨𝗥𝗘𝗥 𝗟𝗘 𝗠𝗢𝗠𝗘𝗡𝗧' <br> 📸 Its time to expose your photographic skills!!!",
    },
    {
      eventName: "TECH TALK @AJCE",
      image: "./images/2021/tech_talk_@ajce.jpg",
      eventDate: "May/9/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Let's walk into  something that's worthwhile... The <b>IEEE AJCE SB</b> hereby invites you all to the the  <b>Tech Talk @AJCE</b> on the topic <i>'Inside the biggest neurotechnology experiment by Neuralink'</i>.",
    },
    {
      eventName: "YP TALKS",
      image: "./images/2021/yp_talk.jpg",
      eventDate: "May/10/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The <b>IAS CHAPTER</b> OF <b>IEEE AJCE SB</b> hereby invites you all to witness one of the finest <b>YP Talk</b> by <b>IEEE Kerala Young  Professionals</b> on the topic <i>'Career in Semiconductor Industry'<i>.",
    },
    {
      eventName: "YP TALKS",
      image: "./images/2021/yp-talk-hadoop.jpg",
      eventDate: "May/15/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The IEEE AJCE SB hereby invites you all to witness one of the finest YP Talk by IEEE Kerala Young Professionals on the topic <b>'Hadoop and Big Data'</b>.",
    },
    {
      eventName: "Introduction to IEEEXtreme",
      image: "./images/2021/intro_to_ieeextreme.jpg",
      eventDate: "May/27/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The Computer Society Chapter of IEEE SB AJCE presents a session on <b>'Introduction to IEEEXtreme'</b> <br />  <b>IEEEXtreme</b> is an annual competitive programming challenge in which teams of IEEE members, compete for 24 hrs against each other to solve a set of programming problems.",
    },
    {
      eventName: "What's the hype about IEEE?",
      image: "./images/2021/hype_about_ieee.jpg",
      eventDate: "May/29/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "<b>IEEE SB LBSITW</b> in collaboration with <b>IEEE SB AJCE</b> has come up with an idea to conduct a session, exclusively for <b>LBTians</b> and <b>AJCEians</b> to deliver your answers for </b><i>What's the hype about IEEE?</i></b>  🤩",
    },
    {
      eventName: "WIE on Focus",
      image: "./images/2021/md_session_wie.jpg",
      eventDate: "May/30/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Greetings from the <b>WiE Affinity Group</b> of <b>IEEE SB Amal Jyothi College of Engineering</b>❗ <br /> We are delighted to invite you all for our event <b>WiE on Focus</b> , a membership development session exclusively conducted for <b>AJCEians</b> .",
    },
    {
      eventName: "MEDICAL IMAGE PROCESSING USING MATLAB",
      image: "./images/2021/matlab.jpg",
      eventDate: "May/31/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "<b>IEEE IAS SBC AJCE</b> in collaboration with <b>IEEE IA/IE/PELS Jt. Chapter Kerala</b> is organising a power packed 5 day <b>Virtual workshop</b>  on <b>MEDICAL IMAGE PROCESSING USING MATLAB</b> ",
    },
    {
      eventName: "QuaRunTime 2.0",
      image: "./images/2021/quaruntime2.jpg",
      eventDate: "June/07/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "🔥Back with a bang 🔥 <br /> The <b>Computer Society Chapter of IEEE AJCE SB</b> avidly presents <b>QuaRunTime 2.0</b>. <br /> 💫 A bunch of stimulating events await you. <br />  <b><i>Stay tuned!</i></b> <br /> For the best is yet to come :) ✨",
    },
    {
      eventName: "YP TALKS",
      image: "./images/2021/yp-talk-3.jpg",
      eventDate: "June/19/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The <b>Computer Society Chapter of IEEE AJCE SB</b> hereby invites you all to witness one of the finest YP Talk by IEEE Young Professionals on the topic <b>Industry Expectations From A CS Graduate</b>.",
    },
    {
      eventName: "Power Pansophy",
      image: "./images/2021/power-pansophy.jpg",
      eventDate: "June/19/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Quiz is a game of mind, intellectual, interest, power and joy. Are you ready to be a part of it? 😃 <br /><b>IEEE AJCE SB</b> proudly presents <br/>⚡️ <b>'Power Pansophy'</b> ⚡️<br /> A quiz competition in connection with the <b>PELS Day</b>.",
    },
    {
      eventName: "YP TALKS",
      image: "./images/2021/yp-talk-4.jpg",
      eventDate: "June/20/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "<i>Do what you love and success will follow 👣. Passion is the fuel behind a successful career.</i>   ~ Meg Whitman <br /> Deep conversations with the right people are priceless 💬. The <b>WiE Affinity Group</b> of <b>IEEE SB Amal Jyothi College of Engineering</b> and <b>IEEE Young Professionals Kerala Section</b> brings to you <b>YP TALKS</b> on the topic  👩‍🏫 <i><b>WOMEN IN TECH</b></i> 👩‍💻",
    },
    {
      eventName: "FIX-THE-MIX",
      image: "./images/2021/fix-the-mix.jpg",
      eventDate: "June/27/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "The <b>WiE Affinity Group</b> of <b>IEEE SB AJCE</b> is here with an Instagram challenge to tackle your brains🧠. In commemoration of <i>Women in Engineering Day</i>, we are organizing <b>FIX-THE-MIX</b>, a picture 🧩 puzzle.",
    },
    {
      eventName: "MACROCLICK",
      image: "./images/2021/macroclick.jpg",
      eventDate: "July/04/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "<b>IEEE AJCE SB</b> here presents <b><i>'MACROCLICK'</i></b> a photography contest",
    },
    {
      eventName: "afiş_Ø",
      image: "./images/2021/Qfis.jpeg",
      eventDate: "August/14/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `As a part of the Onam 🌸 festival we are delighted to
        conduct afiş_Ø, a digital poster making competition.
  
        📌 Topic - Safe and colorful Onam celebration amidst the
        pandemic`,
    },
    {
      eventName: "Code a Pookalam🌸",
      image: "./images/2021/code-a-pookalam.jpg",
      eventDate: "August/21/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `Hey folks 🌼, <br />

        Happy Onam and we wish you a bountiful of happiness and prosperity ahead✨. <br />
        
        Since the current situation is holding us back from celebrating this Onam harmoniously, we are forced to perform programs virtually. So why don't we *Code a Pookalam🌸* ? Won't that be fun? <br/>
        
        Join this contest, *Code a Pookalam🌸* and win exciting prizes🤩`,
    },
    {
      eventName: "IEEEXtreme 15.0",
      image: "./images/2021/Talk on XTREME 15.0.jpg",
      eventDate: "August/26/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `<i>"The secret of getting ahead is getting started. 👣"</i><br />

        Hello folks🤗<br/>
        
        We are delighted to invite you to <b>'Talk on XTREME 15.0'</b> organized by <b>IEEE SB Amal Jyothi College of Engineering</b>. 
        
        Exclusively conducted for AJCEians‼️
        
        📢 <b>Speaker</b> - Nevin Koshy Daniel (IEEEXtreme Campus Ambassador)`,
    },
    {
      eventName: "AJCE Xtreme Code 2021",
      image: "./images/2021/IEEEXtreme 15.0 coding competition.jpg",
      eventDate: "August/27/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `"In order to be irreplaceable, one must always be different” <br/>
        – Coco Chanel.<br/>
  
  IEEE SB of Amal Jyothi College Of Engineering proudly presents IEEEXtreme 15.0 coding competition as an IEEEXtreme preparatory event exclusively for AJCEians✨<br/>
  
  Grab this opportunity to showcase your coding skills👩‍💻👨‍💻`,
    },
    {
      eventName: "ONAMADHURAM",
      image: "./images/2021/ONAMADHURAM1.jpg",
      eventDate: "August/26/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `🎉 ONAMADHURAM🎉<br/>

        🌸Happy ONAM.🌸 <br/>
        On this joyous occasion of Onam,  IEEE SB AJCE wish you joy and good health.
        As part of Onam🌺 we are enchanted to conduct ONAMADHURAM , the online onam.
        
        📌 Topic <br/>
        
             ⭕️Nattinpurathe malayali<br/>
                  ▪️ Malayalimanga<br/>
                  ▪️Kerala purushan<br/>
        
             ⭕️Thithitharo thithithey
                     (onapattu)<br/>
        
             ⭕️Vachala Sadhya      
                     (one-min Malayalam elocution)<br/>
        
             ⭕️Trollanmareh ithile ithile   
                    (onam troll)`,
    },
    {
      eventName: "ADIEU",
      image: "./images/2021/adieu.jpg",
      eventDate: "August/29/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "ADIEU 2021",
    },
    {
      eventName: "SIGHT Inauguration",
      image: "./images/2021/SIGHT.jpg",
      eventDate: "September/07/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `"Everyone has a purpose in life and a unique talent to give to others."   <br/>                         

      IEEE SB Amal Jyothi College of Engineering is ecstatic to announce the inauguration of IEEE AJCE Special Interest Group on Humanitarian Technology (SIGHT).<br/> 
       
       ✨The SIGHT program is a global network of groups consisting of IEEE member volunteers and others who partners with a local community or organisation. They work on projects that leverage technology for sustainable development. <br/>
       
       🔹 Amarnath Raja, Chair, IEEE A&A Committee, will be joining us for a session on "What is SIGHT?"<br/>
       
           Other guests are <br/>
       🔹Jayakrishnan, Chair, IEEE Kerala Section SIGHT<br/>
       🔹Dr. Z. V Lakaparambil, Principal, Amal Jyothi College of Engineering`,
    },
    {
      eventName: "YP Talk",
      image: "./images/2021/YP-talk Building Automation Systems.jpg",
      eventDate: "September/12/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `The IAS SBC Amal Jyothi College of Engineering in collaboration with IEEE Kerala Young  Professionals hereby invites you all to witness one of the finest YP Talk on the topic " Building Automation Systems Using KNX ". <br/>

      🔶The session will be taken by <br/>
      Jacob Thomas Puthukeril, Engineer, (Robotics and FA), HIKVISION`,
    },
    {
      eventName: "The FANTASTIC FIVE",
      image: "./images/2021/FANTASTIC FIVE.jpg",
      eventDate: "September/11/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      ` IEEE SB Amal Jyothi College of Engineering hereby invites you all 
      to one of the finest talks!<br/>
                         
       "The FANTASTIC FIVE"<br/>
 - 5 Soft Skills Every Technical
  Professional Should Develop.`,
    },
    {
      eventName: "ROB-O-HUNT",
      image: "./images/2021/rob-o-hunt.jpeg",
      eventDate: "September/26/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "Women in Computing of IEEE Computer Society Chapters of IEEE SB ASIET, IEEE SB CEV & IEEE SB AJCE presents ROB-O-HUNT, as part of INFORMATYKA, organized by WiC of IEEE Computer Society Kerala Chapter.",
    },
    {
      eventName: "🅑🅞🅞🅣 🅒🅞🅓🅔",
      image: "./images/2021/boot-code.jpeg",
      eventDate: "September/30/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `𝐈𝐄𝐄𝐄 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐨𝐜𝐢𝐞𝐭𝐲 𝐂𝐡𝐚𝐩𝐭𝐞𝐫𝐬 𝐨𝐟 𝐀𝐦𝐚𝐥 𝐉𝐲𝐨𝐭𝐡𝐢 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐨𝐟 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐚𝐧𝐝 𝐍𝐒𝐒 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐨𝐟 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐩𝐫𝐨𝐮𝐝𝐥𝐲 𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐬💫,
      🅑🅞🅞🅣 🅒🅞🅓🅔

3-day Bootcamp as part of IEEEXtreme 15.0. A Bootcamp where you get a complete guide to get you prepared for competitive coding including a few tricks and tips✨. `,
    },
    {
      eventName: "TRICKZA",
      image: "./images/2021/trickza.jpeg",
      eventDate: "October/5/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE AJCE SB as a part of IEEE DAY 2021, is organizing a quiz competition, 'TRICKZA' to play with your brains and test the knowledge you possess.",
    },
    {
      eventName: "EUREKA",
      image: "./images/2021/eureka.jpeg",
      eventDate: "October/10/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      ` SIGHT OU of IEEE SB Amal Jyothi College of Engineering presents before you 
      EUREKA, an idea pitching competition to tackle problems and promote human welfare.
      <br/>
      The competition is based on the following themes:<br/>
      📍Innovation in Medical and Healthcare treatment<br/>
      📍Environmental Sustenance<br/>
      📍Poverty Elimination<br/>
      📍Restructuring Educational curriculum, and teaching methods <br/>
      📍Technological solutions for traffic control`,
    },
    {
      eventName: "PEN IT DOWN 🖊️",
      image: "./images/2021/pen-it-down.jpeg",
      eventDate: "October/6/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      ` As a part of IEEE DAY 2021, the WiE AG 👩 of IEEE Student Branch Amal Jyothi College of Engineering is conducting
      PEN IT DOWN 🖊️, a slogan writing competition. <br/>

📌 Topic : Ada Lovelace Day 
Ada Lovelace Day 👩‍💻 is an international celebration of the achievements of women 👩‍🔬 in science, technology, engineering and maths (STEM).`,
    },
    {
      eventName: "OPORTUNIDAD",
      image: "./images/2021/oportunidad.jpeg",
      eventDate: "October/9/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `Hello folks🤗<br/>

      Have you heard of a stop-motion video? It is an animation technique in which the camera is repeatedly stopped and started, frame by frame, to bring inanimate objects to life.  <br/>
      
      IEEE AJCE SB is delighted to conduct  "OPORTUNIDAD"✨ a stop motion video-making competition on the topic "Sustainable Technology for a better future" as  part of IEEE week. `,
    },
    {
      eventName: "T –JAM",
      image: "./images/2021/t-jam.jpeg",
      eventDate: "October/8/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `🅷🅾🅻🅰 🅰🅼🅸🅶🅾🆂!! <br/>

      IAS Chapter of IEEE STUDENT BRANCH AMAL JYOTHI COLLEGE OF ENGINEERING is extremely honoured to announce you to a  Just A Minute Competition as a part of IEEE DAY 2021.`,
    },
    {
      eventName: "ℝ𝕖𝕒𝕕𝕪, 𝕊𝕖𝕥, 𝕊𝕔𝕒𝕧𝕖𝕟𝕘𝕖",
      image: "./images/2021/ready-set-scavenge.jpeg",
      eventDate: "October/7/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      ` Hey folks 👋🏻<br/>

      𝐈𝐄𝐄𝐄 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐨𝐜𝐢𝐞𝐭𝐲 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 𝐨𝐟 𝐀𝐦𝐚𝐥 𝐉𝐲𝐨𝐭𝐡𝐢 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐨𝐟 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠  brings forth before you the most excruciating and exhilarating Treasure Hunt as part of 𝐈𝐄𝐄𝐄 𝐃𝐀𝐘 𝟐𝟎𝟐1,<br/>
            ⚡ ℝ𝕖𝕒𝕕𝕪, 𝕊𝕖𝕥, 𝕊𝕔𝕒𝕧𝕖𝕟𝕘𝕖 ⚡`,
    },
    {
      eventName: "IEEE Day Celebration",
      image: "./images/2021/speak-up.jpg",
      eventDate: "October/18/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `"If opportunity doesn't knock, build a door"

      Hola amigos🤗 <br/>
      
      Greetings from IEEE AJCE SB💫, Are you someone who is interested in talking and can talk about a topic given at an instant? Then here is an opportunity for you. As part of  IEEE DAY 2021, we are delighted to conduct  “Speak-up” a JAM Competition on the topic : "Ways to reduce dependency on electronic devices in the pandemic."`,
    },
    {
      eventName: "75th Anniversary Celebration",
      image: "./images/2021/cs-society-75th-anniversary.jpg",
      eventDate: "November/2/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `IEEE Computer Society 75th Anniversary Celebration at IEEE AJCE SB 🎉`,
    },
    {
      eventName: "Ethical Hacking Associate",
      image: "./images/2021/eha-workshop.jpg",
      eventDate: "November/26/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "✨ IEEE SB (AJCE and RIT), IEDC (RIT, Rajagiri, GISAT, KJCMT) in collaboration with IIRDC (Institution of Industrial Research and Development Confederation) are thrilled to announce a 24 hours long Workshop/Training on Ethical hacking, providing a chance to gain practical knowledge through hands-on training and to validate participant's entry-level skills in ethical hacking by preparing them to crack EHA (Ethical Hacking Associate) Exam conducted by EC-Council.",
    },
    {
      eventName: " What does the World look in Employees?",
      image: "./images/2021/trycle.jpg",
      eventDate: "November/28/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE SB AJCE in collaboration with TRYCLE is ecstatic to announce a Talk on “ What does the World look in Employees ?” to help students explore and engage the amazing skills of the vibrant aspirants . The talk would  help students know how to stand out during placements and the don'ts for interviews.",
    },
    {
      eventName: "Spectrum Talk",
      image: "./images/2021/spectrum-talk.jpg",
      eventDate: "December/07/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `Greetings from IEEE AJCE SB✨

      IEEE Spectrum is the flagship magazine of the world's largest professional organization devoted to engineering and the applied sciences.
      
      We hereby present you SPECTRUM TALK (November Edition) exclusively for IEEE Members.`,
    },
    {
      eventName: "Game On",
      image: "./images/2021/game-on.jpg",
      eventDate: "December/16/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        `IEEE AJCE SB is hosting a
        4 Day game event - ✨ GAME-ON✨an interactive online cultural event as an ice-breaking event for the annual Membership Development Session.`,
    },
    {
      eventName: "Membership Development session 2022",
      image: "./images/2021/md-session-2022.jpg",
      eventDate: "December/20/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `Hola Fellas!🤗
      The IEEE Student Branch of Amal Jyothi College of Engineering is hosting an ecstatic Membership Development session.`,
    },
    {
      eventName: "🔮 ℙ𝕌𝕃𝕊𝔸𝕋ℍ𝕆ℕ 𝟙.𝟘 🔮",
      image: "./images/2021/pulsathon.jpg",
      eventDate: "",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `IEEE SB AJCE in collaboration with IEEE SBC IAS AJCE and IEEE SIGHT AJCE excitedly presents
      <br>
    🔮 ℙ𝕌𝕃𝕊𝔸𝕋ℍ𝕆ℕ 𝟙.𝟘 🔮<br>
    
    🔖 Workshop on Automatic Hand Sanitizer Dispenser and Familiarization of Electronic Sensors and Circuits.`,
    },
    {
      eventName: "INTER<b>CV</b>IEW",
      image: "./images/2021/interCView.jpg",
      eventDate: "December/30/2021",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `Hola Amigos 👋🏻<br>.

      Do you wish to prepare a good CV? Do you want to enhance your interview skills and hit a good opportunity?<br>
      
      Come and join us for this vibrant event. 🤗<br>
      
      As part of the 2021 PES CSAC Leadership Ambassador Program (STEP Category). IEEE SB AJCE is delighted to announce a webinar on<br>
      📌 How to prepare a good CV<br>
      📌 How to excel in an interview`,
    },
    {
      eventName: "IEEE EdSoc KC Gateway to Infosys Springboard",
      image: "./images/2021/infosys-springboard.jpg",
      eventDate: "January/14/2022",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
        "IEEE SB AJCE in collaboration with IEEE Education society Kerala Chapter and Infosys Springboard is opening the registration for the IEEE EdSoc KC Gateway to Infosys Springboard.",
    },
    {
      eventName: "AGM 2022",
      image: "./images/2021/agm-2022.jpeg",
      eventDate: "February/28/2022",
      // venue: "",
      // time: "",
      // participants: 0,
      report:
      `Hola Amigos!✨<br>

      The IEEE SB AJCE is gearing up for its 2022 Annual General Meeting. It's time to finish off the stewardship and pass it on to the young, energetic volunteers among us who will be a part of IEEE SB AJCE EXECOM for the forthcoming year.`,
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
