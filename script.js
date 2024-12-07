// Initialize EmailJS
(function () {
  emailjs.init("ftOIgd9YqpxkUMgSN");
})();

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dynamic Content Loading
  const content = document.getElementById("content");
  const navLinkElements = document.querySelectorAll(".nav-link");

  const pages = {
    home: `
    <section class="hero">
        <div class="hero-content">
            <div class="profile-container">
                <img src="profile.jpeg" alt="Narcis Gusa" class="profile-pic">
            </div>
            <h1>Narcis Gusa</h1>
            <p>Business Professional Turned Developer | AI & MLX Enthusiast</p>
            <button id="explore-btn">Explore My Work</button>
        </div>
    </section>
`,
    about: `
          <section class="about modern-section">
              <div class="section-content">
                  <div class="quick-nav">
                      <ul>
                          <li><a href="#background">Background</a></li>
                          <li><a href="#skills">Skills</a></li>
                          <li><a href="#journey">Journey</a></li>
                      </ul>
                  </div>
                  
                  <div id="background">
                      <h2>About Me</h2>
                      <p>With a background in international business management, I've embarked on an exciting journey into software development, focusing on AI implementations and local language models.</p>
                  </div>
                  
                  <div id="skills">
                      <h3>Technical Skills</h3>
                      <div class="skills-icons">
                          <div class="icon">
                              <i class="fab fa-python"></i>
                              <p>Python</p>
                          </div>
                          <div class="icon">
                              <i class="fab fa-js"></i>
                              <p>JavaScript</p>
                          </div>
                          <div class="icon">
                              <i class="fas fa-brain"></i>
                              <p>MLX</p>
                          </div>
                          <div class="icon">
                              <i class="fas fa-code-branch"></i>
                              <p>Git</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      `,
    projects: `
          <section class="projects modern-section">
              <div class="section-content">
                  <h2>My Projects</h2>
                  <p>A showcase of my journey through code and AI implementation:</p>
                  <div class="project-cards">
                      <div class="project-card">
                          <h3>Local Chat MLX</h3>
                          <p>A local chat implementation using Apple's MLX framework for running LLMs like Llama locally. Perfect for private, efficient AI interactions.</p>
                          <p class="project-tech">Technologies: MLX, LLM, Python</p>
                          <a href="https://github.com/Narcis-Ionut/Daily-tracker" target="_blank">
                              <i class="fab fa-github"></i> View on GitHub
                          </a>
                      </div>
                      
                      <div class="project-card">
                          <h3>JavaScript Follow-Up Projects</h3>
                          <p>A series of 61 hands-on JavaScript projects designed to improve skills in problem-solving and coding efficiency.</p>
                          <p class="project-tech">Technologies: JavaScript, HTML, CSS</p>
                            <a href="https://github.com/Narcis-Ionut/JavaScript-61-FollowUpProjects" target="_blank">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>

                        <div class="project-card">
                            <h3>React Houses Marketplace</h3>
                            <p>A dynamic React-based application showcasing a virtual real estate marketplace. Features intuitive design and smooth UI interactions.</p>
                            <p class="project-tech">Technologies: React, JavaScript</p>
                            <a href="https://github.com/Narcis-Ionut/React-FollowUpProject-HousesMarketplace" target="_blank">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>

                        <div class="project-card">
                            <h3>Portfolio Website</h3>
                            <p>A personal portfolio website showcasing my skills and projects, built with modern web technologies.</p>
                            <p class="project-tech">Technologies: HTML, CSS, JavaScript</p>
                            <a href="https://github.com/Narcis-Ionut/Narcis-Ionut.github.io/tree/main" target="_blank">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `,
    "ai-collaboration": `
            <section class="ai-collaboration modern-section">
                <div class="section-content">
                    <h2>AI Development & Collaboration</h2>
                    <div class="quick-nav">
                        <ul>
                            <li><a href="#current-work">Current Work</a></li>
                            <li><a href="#tools">Tools & Technologies</a></li>
                            <li><a href="#future">Future Plans</a></li>
                        </ul>
                    </div>
                    
                    <div id="current-work">
                        <h3>Current Work</h3>
                        <p>I'm focused on developing local AI solutions using Apple's MLX framework, working to create efficient and private AI interactions through my Local Chat MLX project.</p>
                    </div>
                    
                    <div id="tools" class="ai-tools">
                        <h3>Tools & Technologies</h3>
                        <ul>
                            <li><strong>MLX Framework:</strong> Leveraging Apple's machine learning framework for efficient local AI processing</li>
                            <li><strong>Local LLMs:</strong> Implementing models like Llama for private, responsive chat applications</li>
                            <li><strong>Python & JavaScript:</strong> Building full-stack AI applications</li>
                        </ul>
                    </div>
                    
                    <div id="future">
                        <h3>Future Development Plans</h3>
                        <p>Exploring advanced features like context preservation and multiple model support to create more sophisticated local AI applications.</p>
                    </div>
                </div>
            </section>
        `,
    contact: `
            <section class="contact modern-section">
                <div class="section-content">
                    <h2>Contact Me</h2>
                    <p>Have questions about local LLMs or want to collaborate? I'd love to hear from you!</p>
                    <form id="contact-form">
                        <label for="user_name">Name:</label>
                        <input type="text" id="user_name" name="user_name" required>
                        
                        <label for="user_email">Email:</label>
                        <input type="email" id="user_email" name="user_email" required>
                        
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        
                        <button type="submit" class="button">Send Message</button>
                        <div id="form-messages"></div>
                    </form>
                    
                    <div class="alt-contact">
                        <p>LinkedIn: <a href="https://linkedin.com/in/narcis-gusa" target="_blank">linkedin.com/in/narcis-gusa</a></p>
                    </div>
                </div>
            </section>
        `,
  };

  // Focus helper function
  function addFocusIndicators() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.style.opacity = "1";
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    });
  }

  // Page loading function
  const loadPage = (page) => {
    content.innerHTML = pages[page];

    // Handle explore button
    if (page === "home") {
      const exploreBtn = document.getElementById("explore-btn");
      if (exploreBtn) {
        exploreBtn.addEventListener("click", () => loadPage("projects"));
      }
    }

    // Handle contact form
    if (page === "contact") {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const submitButton = contactForm.querySelector(
            'button[type="submit"]'
          );
          submitButton.disabled = true;
          submitButton.textContent = "Sending...";

          emailjs
            .sendForm("service_niy5feb", "template_9qkuxny", this)
            .then(() => {
              submitButton.disabled = false;
              submitButton.textContent = "Send Message";

              const formMessages = document.getElementById("form-messages");
              formMessages.textContent = "Message sent successfully!";
              formMessages.style.color = "green";
              contactForm.reset();
            })
            .catch((error) => {
              submitButton.disabled = false;
              submitButton.textContent = "Send Message";

              const formMessages = document.getElementById("form-messages");
              formMessages.textContent =
                "Failed to send message. Please try again.";
              formMessages.style.color = "red";
              console.error("EmailJS Error:", error);
            });
        });
      }
    }

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }

    // Add focus indicators
    addFocusIndicators();
  };

  // Navigation event listeners
  navLinkElements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Load default page
  loadPage("home");
});
