/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


document.addEventListener('DOMContentLoaded', function() {
  // Retrieve main page elements for dynamic navigation building, section highlighting, and event handling
  const navBar = document.querySelector('.navbar__menu');
  const navList = document.querySelector('#navbar__list');
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');
  const header = document.querySelector('.page__header');

  // Build the Navigation Menu
  // Dynamically create navigation items for each section and append them to #navbar__list.
  // Clicking a navigation item smoothly scrolls to the associated section.
  function buildNav() {
    sections.forEach(section => {
      // Create list item for each section
      const navButton = document.createElement('li');

      // Create anchor element with section link and text
      const anchor = document.createElement('a');
      anchor.classList.add('menu__link');
      anchor.href = `#${section.id}`;
      anchor.textContent = section.dataset.nav;
      navButton.appendChild(anchor);

      // Append list item to navigation list
      navList.appendChild(navButton);

      // Add smooth scrolling behavior to each nav button
      scrollBehavior(navButton, section);
    });

    // Append navigation list to navigation bar
    navBar.appendChild(navList);
  }

  // Enable Smooth Scrolling for Navigation Buttons
  // When a navigation button is clicked, prevent default jump and smoothly scroll to the section.
  function scrollBehavior(navButton, section) {
    navButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    });
  }

  // Highlight Section in Viewport and Corresponding Nav Link
  // Checks which section is currently in the viewport and applies 'your-active-class'
  // as well as 'active_button' to the corresponding nav link.
  function activeSection() {
    const navActive = document.querySelectorAll(".menu__link");
    sections.forEach((section, i) => {
      const sectionRect = section.getBoundingClientRect();
      const inView = sectionRect.top <= 380 && sectionRect.bottom >= 350;

      // Toggle active classes based on viewport position
      section.classList.toggle("your-active-class", inView);
      navActive[i].classList.toggle("active_button", inView);
    });
  }

  // Toggle Navbar Visibility Based on Scrolling Activity
  // Shows navbar when scrolling and hides it after inactivity, improving user experience.
  function toggleNavBar() {
    let scrollTimeout;
    header.style.cssText = 'opacity: 1; transition: ease 0.3s;';
    window.clearTimeout(scrollTimeout);

    // Hide navbar after 6 seconds of no scrolling
    scrollTimeout = setTimeout(function() {
      header.style.cssText = 'opacity: 0; transition: ease 0.3s;';
    }, 6000);
  }

  // Build the Navigation on page load
  buildNav();

  // Add Scroll Event Listener to Trigger Active Section and Navbar Toggle
  // On scroll, highlight the visible section and manage navbar visibility.
  document.addEventListener('scroll', function() {
    activeSection();
    toggleNavBar();
  });

  // Add "Return to Top" Button
  // Insert a button above the footer that returns the user to the top of the page with a smooth scroll.
  footer.insertAdjacentHTML('beforebegin', `<button class="return_to_top" type="button">Return to Top</button>`);

  // Add Event Listener for Smooth Scrolling to Top
  document.querySelector(".return_to_top").addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

/**
 * 
 * JS Version: ES2015/ES6
 *
 * JS Standard: ES2015/ES6
 *
**/
