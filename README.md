# Landing Page Project

## Project Description

The **Landing Page Project** demonstrates the dynamic manipulation of the DOM to create an interactive and user-friendly multi-section landing page. The navigation menu is built dynamically based on the content present in the page, and key features like smooth scrolling and active section highlighting are implemented to enhance the user experience. This project also incorporates responsive design principles, ensuring usability across different devices and browsers.

---

## Features

1. **Dynamic Navigation Menu**:
   - Navigation is built dynamically using JavaScript.
   - Each navigation item links to a specific section of the page.

2. **Smooth Scrolling**:
   - Clicking on a navigation link smoothly scrolls to the corresponding section.

3. **Active Section Highlighting**:
   - The section currently in the viewport is highlighted, along with its corresponding navigation link.

4. **Responsive Design**:
   - The layout and navigation bar adapt seamlessly to desktop, tablet, and mobile browsers.

5. **Scroll-to-Top Button**:
   - A button is provided to quickly scroll back to the top of the page when scrolled below the fold.

6. **Auto-Hiding Navigation Bar**:
   - The navigation bar hides after a period of inactivity to reduce visual clutter.

---

## Project Structure

project-folder/ │ ├── css/ │ └── styles.css # Contains all the CSS for the project. │ ├── js/ │ └── app.js # Main JavaScript file containing DOM manipulation logic. │ ├── index.html # The main HTML structure for the project. │ └── README.md # Project documentation (this file).

yaml
Copy code

---

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/landing-page-project.git
Open the Project:

Open the index.html file in your preferred web browser.
Interact with the Page:

Scroll through the sections to see the active highlighting feature.
Use the navigation menu to jump to sections with smooth scrolling.
Use the "Scroll to Top" button to quickly return to the top of the page.
Dependencies
This project uses only vanilla JavaScript, HTML, and CSS. No external libraries or frameworks are required. The project is fully self-contained and requires only a modern web browser to function.

Key JavaScript Concepts
DOM Manipulation:

Dynamic creation of navigation items.
Highlighting sections in the viewport using getBoundingClientRect.
Event Handling:

Click events for navigation links and the scroll-to-top button.
Scroll events to detect active sections and manage navbar visibility.
Responsive Design:

Ensuring the navigation bar and page layout adapt to various screen sizes.
Browser Compatibility
Tested on the latest versions of:
Google Chrome
Mozilla Firefox
Microsoft Edge
Safari
Author
Victor's Landing Page Project - Created as part of an interactive DOM manipulation assignment.

