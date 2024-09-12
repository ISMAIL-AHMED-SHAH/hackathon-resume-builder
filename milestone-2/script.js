var _a;
// Toggle Skills Functionality
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Variable to track visibility of skills
var skillsVisible = true;
toggleButton.addEventListener('click', function () {
    skillsVisible = !skillsVisible; // Toggle the visibility state
    skillsSection.style.display = skillsVisible ? 'block' : 'none'; // Show/hide input section
    toggleButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills'; // Button text update
});
// Resume Generation Functionality
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var profilePicElement = document.getElementById('profile-pic');
    var objectiveElement = document.getElementById('objective');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements exist and get their values
    if (nameElement && emailElement && phoneElement && profilePicElement &&
        objectiveElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var profilePicURL = profilePicElement.value; // Get profile picture URL
        var objective = objectiveElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create the output for the resume
        var resumeOutput = "\n            <h2>".concat(name_1, "'s Resume</h2>\n            ").concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-picture\" style=\"max-width: 150px;\"/>") : '', "\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Career Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skillsVisible ? skills : 'Skills section hidden', "</p> <!-- Toggle visibility here -->\n        ");
        // Display the generated resume
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
