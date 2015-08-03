
/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Bob Ingram",
 	"role" : "President",
 	"contacts" : {
 		"mobile" : "321-345-8288",
 		"email" : "bob@theparamountgroup.us",
 	    "github" : "paramountgroup",
 	    "twitter" : "@paramountmedia",
 	    "location" : "Satellite Beach",
 	},
 	"welcomeMessage" : "Welcome to my Resume site",
 	"skills" : ["Front-End Web Developer","Entrepreneur","Nuclear Engineer","Adwords Certified Professional"],
 	"bioPic" : "images/bob_ingram_avatar.jpg",
};
var name = "Bob Ingram";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

  var formattedMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#topContacts").prepend(formattedMob);

        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").prepend(formattedLoc);

        var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").prepend(formattedTwit);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").prepend(formattedGithub);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").prepend(formattedEmail);

         var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
    };
/*
        var formattedWelMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
        $("#topContacts").prepend(formattedMob);

        $("#footerContacts").prepend(formattedLoc);

        $("#footerContacts").prepend(formattedTwit);

        $("#footerContacts").prepend(formattedGithub);

        $("#footerContacts").prepend(formattedEmail);

        $("#footerContacts").prepend(formattedMob);


        var formattedListStart = HTMLskillsStart.replace("box", "list");
        $("#header").append(formattedWelMsg);

*/

    var work = {
 	"jobs" : [
    {
	"jobPosition" : "Internet Marketing Consultant",
	"employer" : "The Paramount Group.us",
	"yearsworked" : 2,
	"city" : "Satellite Beach FL, US",
	"dates" : "April 2013 - present",
	"description" : "Certified Google Adwords and Analytics consultant managing client accounts to achieve internet advertising goals. Operations manager for the company to include finance, compliance and strategy",
	},
	{
	"jobPosition" : "Printer",
	"employer" : "Paramount Printing",
	"yearsworked" : 20,
	"city" : "Brunswick, GA US",
	"dates" : "1994 - April 2013",
	"description" : "Printing production management, Direct mail and marketing, Management and financial oversight",
	}
    ]
};
for (job in work.jobs) {
    // create new dive for work experience
	$("#workExperience").append(HTMLworkStart);
    // concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].jobPosition);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
};

  var projects = {
 	"project" : [
 	   {
 	   	"title" : "Udacity Project 1 Website",
 	    "date" : "July 2015",
 	    "description" : "First Udacity Project coding in HTML and CSS",
 	    "images" : ["images/fry.jpg", "images/fry.jpg"],
 	   },
 	   {
 	   	"title" : "Udacity Project 2 Resume Website",
 	    "date" : "August 2015",
 	    "description" : "First Udacity Project coding in Java Script and JSON",
 	    "images" : ["images/fry.jpg", "images/fry.jpg"],
 	   },

     ]
     };


projects.display = function() {

	for (proj in projects.project) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
 		$(".project-entry:last").append(formattedTitle);

 		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].date);
 		$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
 		$(".project-entry:last").append(formattedDescription);

        if (projects.project[proj].images.length > 0) {

        	for (img in projects.project[proj].images) {

        		var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[img]);

        		$(".project-entry:last").append(formattedImage);
        	}
        }
    }
};

projects.display();

 var education = {
 	"schools" : [
 	  {
 		"name" : "University of Florida",
 		"city" : "Gainesville, FL, US",
 		"degree" : "Bachelor of Science",
 		"major" : ["Computer Science Engineer"],
 		"dates" : 1987,
 		"url" : "http://www.theparamountgroup.us"
 	  },
      {
        "name" : "Brenau University",
        "city" : "Gainesville, GA, US",
        "degree" : "Masters of Business Administration",
        "major" : ["Business Administration"],
        "dates" : 1994,
        "url" : "http//www.theparamountgroup.us",
      }
    ],
    "onlineCourses": [
      {
         "title" : "Udacity Front End Web Developer",
         "school" : "Udacity",
         "dates" : 2015,
         "url" : "http://www.udacity.com/"
      }
    ]
 };




$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});

function inName() {
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] + " " + name[1];
    return bio.name;
}
function usName() {
    var name = bio.name.split(" ");
    name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] +" "+ name[1];
    return bio.name;
};
$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);