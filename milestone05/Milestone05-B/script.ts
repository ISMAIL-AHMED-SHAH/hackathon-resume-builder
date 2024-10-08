document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Type assertions
    const profilePicture = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactnoElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Ensure all elements are valid
    if (profilePicture && nameElement && emailElement && contactnoElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const contactno = contactnoElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Profile picture element
        const profilePictureFile = profilePicture.files?.[0];
        const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Generate the resume HTML content
        const resumeHTML = `
            <h2>My Resume</h2>
            ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture"/>` : ""}
            <p><strong>Name: </strong>${name}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Contact Number: </strong>${contactno}</p>
            <p><strong>Address: </strong>${address}</p>
            <h3>Education: </h3>
            <p>${education}</p>
            <h3>Experience: </h3>
            <p>${experience}</p>
            <h3>Skills: </h3>
            <p>${skills}</p>
        `;

        // Display the resume in the output container
        const resumeGenerateElement = document.getElementById("resumeGenerate");
        if (resumeGenerateElement) {
            resumeGenerateElement.innerHTML = resumeHTML;
            resumeGenerateElement.classList.remove("hidden");

            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeGenerateElement.appendChild(buttonsContainer);

            // Add download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download in PDF format";
            downloadButton.addEventListener("click", () => {
                window.print(); // Open the print dialog, allow the user to save as PDF
            });
            buttonsContainer.appendChild(downloadButton);

            // Add shareable link button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    // Create a unique shareable link (simulate in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;

                    // Use Clipboard API to copy the shareable link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                } catch (err) {
                    console.error("Failed to copy link:", err);
                    alert("Failed to copy link to clipboard, please try again!");
                }
            });
            buttonsContainer.appendChild(shareLinkButton);
        } else {
            console.error("Resume output container not found");
        }
    } else {
        console.error("Form elements are missing");
    }
});