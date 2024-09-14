"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Type assertions
    const profilePicture = document.getElementById('profilepicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contactnoElement = document.getElementById('contact');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
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
        const profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
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
            shareLinkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    // Create a unique shareable link (simulate in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    // Use Clipboard API to copy the shareable link
                    yield navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                }
                catch (err) {
                    console.error("Failed to copy link:", err);
                    alert("Failed to copy link to clipboard, please try again!");
                }
            }));
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("Form elements are missing");
    }
});
