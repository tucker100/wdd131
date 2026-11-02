// Copyright year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Date and time the document was last modified, in the second paragraph
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;