// script.js

// Function to show more information about the temple
document.getElementById('more-info').addEventListener('click', function() {
    const moreInfoSection = document.createElement('div');
    moreInfoSection.id = 'more-info-section';
    moreInfoSection.innerHTML = `
        <h3>Additional Information</h3>
        <p>The Kukke Subramanya Temple is not just a place of worship, but also a center of cultural and spiritual activities. Devotees from all over India visit this sacred place to seek divine blessings and participate in various religious rituals.</p>
        <p>Notable aspects include the temple’s unique architectural style, its serene surroundings, and the deep-rooted traditions that continue to be followed by the local community.</p>
    `;
    
    // Append the new information to the home section
    document.getElementById('home').appendChild(moreInfoSection);
});

// script.js

// Function to handle showing the footer based on scroll position
function handleScroll() {
    const footer = document.querySelector('footer');
    const contactSection = document.querySelector('#contact');
    const contactSectionTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the top of the Contact section is within the viewport
    if (contactSectionTop < windowHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case the user is already at the Contact section
handleScroll();

