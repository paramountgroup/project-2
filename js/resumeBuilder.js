
/*
Udactiy Front End Developer course Project-2 Online Resume. Additonal functionality was added as part of the bio display function.
Onmouseover the earth image is replaced with photos from the variable bio.photos.  The photos are selected to display at random using a random number generator 0-9 to
index through the array. The HTML and CSS were also improved to give the reumme a more attactive appearance and custom feel. I referenced several sources for this project
to include the Udacity course, Stack overflow best answers, project-2 Cheryl Court & Erin Mulligan, w3schools.com, brainyquote.com, developers.google.com, api.jquery.com, nasa.gov.
 */

var bio = {
	'name' : 'Bob Ingram',
	'role' : 'Web Developer',
	'contacts' : {
		'mobile' : '321-345-8288',
		'email' : 'bob@theparamountgroup.us',
		'github' : 'paramountgroup',
		'twitter' : '@paramountmedia',
		'location' : 'Satellite Beach, FL'
	},
	'welcomeMessage' : 'President - The Paramount Group.us inc. We help our customers Extend Their Lead Online',
	'skills': ['Website Designer', 'Nuclear Engineer', 'Entreprenuer', 'Adwords Certified Consultant'],
	'bioPic' : 'images/bob_ingram_avatar.jpg'
};

// additional functionality added with photo varialble

var addPhoto = {
	'photos' : ['images/satellite-beach.jpg','images/key-largo.jpg', 'images/mug-race.jpg', 'images/be-kind.jpg', 'images/change-the-world.jpg', 'images/fortune.jpg', 'images/press-on.jpg', 'images/first-office.jpg', 'images/lasers.jpg']
};


var work = {
	'jobs' : [
		{
		'employer' : 'The Paramount Group.us',
		'title' : 'Internet Marketing Consultant',
		'location' : 'Satellite Beach FL',
		'dates' : 'April 2013 - present',
		'description' : 'Certified Google Adwords and Analytics consultant managing client accounts to achieve their internet advertising goals. Operations manager for the company to include finance, compliance and strategy'
		},
		{
		'title' : 'Printer',
		'employer' : 'Paramount Printing',
		'location' : 'Brunswick, GA',
		'dates' : '1994 - April 2013',
		'description' : 'Printing production management, Direct mail and marketing, Management and Financial oversight'
		},
		{
		'title' : 'General Contractor',
		'employer' : 'Classic Columns Renovations, DBA Eco-built, LLC',
		'location' : 'Saint Simons Island, GA',
		'dates' : '2002 - 2009',
		'description' : 'Building Renovation, Energy Efficiency Improvements, Elastomeric Roofing, Solar Hot Water Installer & Dealer'
		},
		{
		'title' : 'Naval Officer - USS Will Rogers',
		'employer' : 'United States Navy',
		'location' : 'Holy Loch, Scottland',
		'dates' : '1987 - 1994',
		'description' : 'Qualified Navy Nuclear Engineer, Strategic Weapons Officer Instructor, Sonar Officer, Reactor Control Assistant'
		}
	]
};

var projects = {
	'project' : [
		{
		'title' : 'Udacity Project 1 Portfolio Website',
		'date' : 'July 2015',
		'description' : 'First Udacity Project coding in HTML and CSS',
		'images' : ['images/portfolio-project-Website-350x291.jpg']
		},
		{
		'title' : 'Udacity Project 2 Online Resume Website',
		'date' : 'August 2015',
		'description' : 'First Udacity Project coding in Java Script and JSON',
		'images' : ['images/project-2-online-resume-350x391.jpg']
		}
	]
};

var education = {
	'schools' : [
		{
		'name' : 'University of Florida',
		'location' : 'Gainesville, FL',
		'degree' : 'Bachelor of Science',
		'majors' : ['Computer Science Engineer'],
		'dates' : 1987,
		'url' : 'https://www.eng.ufl.edu/'
		},
		{
		'name' : 'Brenau University',
		'location' : 'Gainesville, GA',
		'degree' : 'Masters of Business Administration',
		'majors' : ['Business Administration'],
		'dates' : 1994,
		'url' : 'http://www.brenau.edu/'
		}
	],

	'onlineCourses' : [
		{
		'title' : 'Udacity Front End Web Developer',
		'school' : 'Udacity',
		'date' : 2015,
		'url' : 'http://www.udacity.com/'
		}
	]
};

bio.displayBio = function() {

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var formattedMob = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').prepend(formattedMob);
	$('#footerContacts').prepend(formattedMob);

	var formattedLoc = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').prepend(formattedLoc);
	$('#footerContacts').prepend(formattedLoc);

	var formattedTwit = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').prepend(formattedTwit);
	$('#footerContacts').prepend(formattedTwit);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').prepend(formattedGithub);
	$('#footerContacts').prepend(formattedGithub);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').prepend(formattedEmail);
	$('#footerContacts').prepend(formattedEmail);

	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#header').append(formattedPic);

/* Additonal Functionality added here to show photos that give a better picture of Bob Ingram's favorite activites */

	$('#header').append(HTMLearthPic);
	$('#earthId').hover(function() {
		var photoi = Math.floor(Math.random() * 9);
		$(this).attr({'src': addPhoto.photos[photoi], 'class': 'biophotos'});
		},
		function() {
			  $(this).attr({'src': 'images/earth-optimized.gif', 'class': 'earthpic'});
		});

/* End additional functionality*/

	var formattedWelMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelMsg);

	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

	    for(i in bio.skills) {
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
		}
	}
}

bio.displayBio();

work.displayWork = function() {

	var job;
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

work.displayWork();


projects.displayProjects = function() {

	var proj;
	for (proj in projects.project) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[proj].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.project[proj].date);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[proj].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.project[proj].images.length > 0) {
			var img;
			for (img in projects.project[proj].images) {

				var formattedImage = HTMLprojectImage.replace('%data%', projects.project[proj].images[img]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

projects.displayProjects();

education.displayEducation = function() {

	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		var ed;
		for(ed in education.schools) {
				$('#education').append(HTMLschoolStart);

				var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[ed].name).replace('#', education.schools[ed].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[ed].degree);
				var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[ed].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[ed].location);
				var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[ed].majors);


				$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
				$('.education-entry:last').append(formattedSchoolDates);
				$('.education-entry:last').append(formattedSchoolLocation);
				$('.education-entry:last').append(formattedSchoolMajor);

		}

		if(education.onlineCourses.length > 0) {
				$('#education').append(HTMLonlineClasses);
				var ol;
				for(ol in education.onlineCourses) {
					$('#education').append(HTMLschoolStart);

					var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[ol].title).replace('#', education.onlineCourses[ol].url);
					var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[ol].school);
					var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[ol].date);
					var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[ol].url).replace('#', education.onlineCourses[ol].url);

					$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
					$('.education-entry:last').append(formattedOnlineDates);
					$('.education-entry:last').append(formattedOnlineURL);
				}
		}
	}
}

education.displayEducation();


$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName() {
	var name = bio.name.split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	bio.name = name[0] + ' ' + name[1];
	return bio.name;
}

function usName() {
	var name = bio.name.split(' ');
	name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	bio.name = name[0] +' '+ name[1];
	return bio.name;
}

$('#main').append(internationalizeButton);

$('#map-div').append(googleMap);

//google.maps.event.addListener(marker, 'click', function() {
// your code goes here
//});
