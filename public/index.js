
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.display = 'none'; // Hide the loader once the page is fully loaded
  });
  

document.getElementById('#skills-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    animateSkills();
  });
  
  function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
      skill.style.animation = `skill-${index + 1} 3s forwards`;
    });
  }


