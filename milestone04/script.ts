// Toggle Skills Functionality
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLTextAreaElement;

// Variable to track visibility of skills
let skillsVisible = true;

toggleButton.addEventListener('click', () => {
    skillsVisible = !skillsVisible; // Toggle the visibility state
    skillsSection.style.display = skillsVisible ? 'block' : 'none'; // Show/hide input section
    toggleButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills'; // Button text update
});

// Resume Generation Functionality
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion for input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const profilePicElement = document.getElementById('profile-pic') as HTMLInputElement;
    const objectiveElement = document.getElementById('objective') as HTMLTextAreaElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Check if all elements exist and get their values
    if (nameElement && emailElement && phoneElement && profilePicElement &&
        objectiveElement && educationElement && experienceElement && skillsElement) {
        
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const profilePicURL = profilePicElement.value; // Get profile picture URL
        const objective = objectiveElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create the output for the resume
        const resumeOutput = `
            <h2>${name}'s Resume</h2>
            ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile-picture" style="max-width: 150px;"/>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Career Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skillsVisible ? skills : 'Skills section hidden'}</p> <!-- Toggle visibility here -->
        `;

        // Display the generated resume
        const resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});