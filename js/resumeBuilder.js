/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Bob Ingram";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var bio = {
 	"name" : "Bob Ingram",
 	"role" : "President",
 	"contacts" : {
 		"mobile" : "912-996=3311",
 		"email" : "bob@theparamountgroup.us",
 	    "github" : "paramountgroup",
 	    "twitter" : "@paramountmedia",
 	    "location" : "Satellite Beach",
 	},
 	"welcomeMessage" : "Welcome to my Resume site",
 	"skills" : ["Front-End Web Developer","Entrepreneur","Nuclear Engineer","Adwords Certified Professional"],
 	"biopic" : "images/bob_ingram_avatar.jpg",
};

/*
    var work = {
 	"jobs" : [
    {
	"jobposition" = "Internet Marketing Consultant",
	"employer" = "The Paramount Group.us",
	"yearsworked" = 2,
	"city" = "Satellite Beach FL, US",
	"date" = "April 2013 - present"
	},
	{
	"jobposition" = "Printer",
	"employer" = "Paramount Printing",
	"yearsworked" = "20",
	"city" = "Satellite Beach FL, US",
	"date" = "April 2013 - present"
	}
    ]
};


  var projects = {
 	"project" : [
 	   {
 	   	"title" = "Udacity Project1 website",
 	    "date" = 2015,
 	    "descritpition" = "First Udacity Project coding in HTML and CSS",
 	    "images" = ["http://www.theparamountgroup.us"],
 	   },
 	   {
 	   	"title" = "Project2 website",
 	    "date" = 2015,
 	    "descritpition" = "First Udacity Project coding in HTML and CSS",
 	    "images" = ["http://www.theparamountgroup.us"],
 	   },

     ]
     };

*/

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

for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedEmployerTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descritpition);
	$(".work-entry:last").append(formattedDescription);
};


