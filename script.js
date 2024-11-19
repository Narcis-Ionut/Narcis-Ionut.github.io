document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll(".nav-link");

  const pages = {
    home: `
            <section class="hero">
                <div class="hero-content">
                    <img src="profile.jpeg" alt="ng" class="profile-pic">
                    <h1>Hello, I’m Narcis Gusa, a Web Developer Collaborating with AI.</h1>
                    <p>Welcome to my website!</p>
                    <button id="explore-btn">Explore My Work</button>
                </div>
            </section>
        `,
    about: `
            <section class="about modern-section">
                <div class="section-content">
                    <img src="about-me.png" alt="About Me" class="about-pic">
                    <div>
                        <h2>About Me</h2>
                        <p>Hey, I’m Narcis! I’m just starting out as a web developer, learning the ropes and figuring things out one step at a time. I enjoy creating simple, functional websites and learning how to make them better every day. Right now, I’m exploring how to use AI in my projects, keeping it grounded and practical as I grow my skills.</p>
                        <h3>My Skills</h3>
                        <div class="skills-icons">
                    <div class="icon">
                        <i class="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div class="icon">
                        <i class="fab fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div class="icon">
                        <i class="fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div class="icon">
                        <i class="fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div class="icon">
                        <i class="fab fa-angular"></i>
                        <p>TypeScript</p>
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
    <p>Here are some highlights of my favorite projects:</p>
    <div class="project-cards">
      <!-- Project 1 -->
      <div class="project-card">
        <h3>JavaScript Follow-Up Projects</h3>
        <p>A series of 61 hands-on JavaScript projects designed to improve skills in problem-solving and coding efficiency.</p>
        <a href="https://github.com/Narcis-Ionut/JavaScript-61-FollowUpProjects" target="_blank">View on GitHub</a>
      </div>
      <!-- Project 2 -->
      <div class="project-card">
        <h3>React Houses Marketplace</h3>
        <p>A dynamic React-based application showcasing a virtual real estate marketplace. Features intuitive design and smooth UI interactions.</p>
        <a href="https://github.com/Narcis-Ionut/React-FollowUpProject-HousesMarketplace" target="_blank">View on GitHub</a>
      </div>
    </div>
  </div>
</section>
        `,
    "ai-collaboration": `
            <section class="ai-collaboration modern-section">
                <div class="section-content">
                    <h2>AI Collaboration</h2>
                    <p>I’m embarking on a journey to master AI tools like ChatGPT and utilizing local LLMs on my personal computer. These tools are instrumental in my learning of web development. They help me write cleaner and more efficient code and generate creative solutions to complex problems..</p>
                    <div class="ai-tools">
                        <h3>Tools I Use</h3>
                        <ul>
                            <li>ChatGPT: For brainstorming ideas and troubleshooting code.</li>
                            <li>Llama 3.1 13B localized: For writing and completing code faster.</li>
                            <li>AI Art Tools: To design unique and engaging visuals.</li>
                        </ul>
                    </div>
                </div>
            </section>
        `,
    blog: `
            <section class="blog modern-section">
                <div class="section-content">
                    <h2>My Blog</h2>
                    <p>Welcome to my blog! Here, I share my thoughts on web development, AI, and technology trends.</p>
                    <div class="blog-list">
                        <div class="blog-post">
                            <h3>How AI is Changing Web Development</h3>
                            <p>Posted on Nov 15, 2024</p>
                            <p>AI is transforming how developers work by automating repetitive tasks...</p>
                        </div>
                        <div class="blog-post">
                            <h3>Top JavaScript Frameworks in 2024</h3>
                            <p>Posted on Nov 10, 2024</p>
                            <p>A breakdown of the best JavaScript frameworks to use in your next project...</p>
                        </div>
                    </div>
                </div>
            </section>
        `,
    contact: `
            <section class="contact modern-section">
                <div class="section-content">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out! I’d love to hear from you.</p>
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    <div class="alt-contact">
                        <p>Email: narcis.gusa@icloud.com</p>
                        <p>LinkedIn: <a href="#">www.linkedin.com/in/narcis-gusa</a></p>
                    </div>
                </div>
            </section>
        `,
  };

  const loadPage = (page) => {
    content.innerHTML = pages[page];

    // Reattach event listener for "Explore My Work" button after page reload
    if (page === "home") {
      const exploreBtn = document.getElementById("explore-btn");
      if (exploreBtn) {
        exploreBtn.addEventListener("click", () => loadPage("projects"));
      }
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Load default page
  loadPage("home");
});
