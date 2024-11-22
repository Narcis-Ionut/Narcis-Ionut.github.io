// Initialize EmailJS with your public key
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

  // Blog posts data
  const blogPosts = [
    {
      id: "ai-changing-web-development",
      title: "How AI is Changing Web Development",
      date: "Nov 15, 2024",
      excerpt:
        "AI is transforming how developers work by automating repetitive tasks...",
      content: `
        <section class="blog-post-content modern-section">
          <div class="section-content">
            <h2>How AI is Changing Web Development</h2>
            <p><strong>Posted on Nov 15, 2024</strong></p>
            <p>
              Artificial Intelligence (AI) has been making significant strides in various industries, and web development is no exception. From automating routine tasks to optimizing user experiences, AI is reshaping how developers approach web design and functionality.
            </p>
            <p>
              One of the key areas where AI is making an impact is in code generation and debugging. Tools powered by AI can help developers write code faster by providing intelligent code suggestions and identifying potential errors before they become problematic.
            </p>
            <p>
              Additionally, AI-driven analytics are enhancing how websites adapt to user behavior, leading to more personalized and efficient user experiences. As we move forward, the integration of AI in web development is likely to become even more profound, opening up new possibilities and challenges for developers.
            </p>
            <!-- Add more content as needed -->
            <a href="#" class="back-button" onclick="loadPage('blog'); return false;">&larr; Back to Blog</a>
          </div>
        </section>
      `,
    },
    {
      id: "top-javascript-frameworks-2024",
      title: "Top JavaScript Frameworks in 2024",
      date: "Nov 10, 2024",
      excerpt:
        "A breakdown of the best JavaScript frameworks to use in your next project...",
      content: `
        <section class="blog-post-content modern-section">
          <div class="section-content">
            <h2>Top JavaScript Frameworks in 2024</h2>
            <p><strong>Posted on Nov 10, 2024</strong></p>
            <p>
              The JavaScript ecosystem is ever-evolving, with new frameworks and libraries emerging regularly. In 2024, several frameworks have stood out due to their performance, community support, and ease of use.
            </p>
            <h3>1. React</h3>
            <p>
              React continues to dominate the frontend landscape with its virtual DOM and component-based architecture, making it a favorite for building dynamic user interfaces.
            </p>
            <h3>2. Vue.js</h3>
            <p>
              Vue.js offers a progressive approach to building user interfaces, allowing developers to adopt it incrementally. It's known for its simplicity and flexibility.
            </p>
            <h3>3. Angular</h3>
            <p>
              Backed by Google, Angular is a comprehensive framework that provides a robust solution for building large-scale applications with TypeScript support.
            </p>
            <!-- Add more frameworks as needed -->
            <a href="#" class="back-button" onclick="loadPage('blog'); return false;">&larr; Back to Blog</a>
          </div>
        </section>
      `,
    },
    // Add more blog posts as needed
  ];

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
            <!-- Project 3 -->
            <div class="project-card">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio website showcasing my skills and projects, built with modern web technologies.</p>
              <a href="https://github.com/Narcis-Ionut/Narcis-Ionut.github.io/tree/main" target="_blank">View on GitHub</a>
            </div>
            <!-- Project 4 -->
            <div class="project-card">
              <h3>Daily Tracker</h3>
              <p>An intuitive application that helps users manage and monitor daily tasks and activities efficiently, enhancing productivity.</p>
              <a href="https://github.com/Narcis-Ionut/Daily-tracker" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>
    `,
    "ai-collaboration": `
      <section class="ai-collaboration modern-section">
        <div class="section-content">
          <h2>AI Collaboration</h2>
          <p>I’m embarking on a journey to master AI tools like ChatGPT and utilizing local LLMs on my personal computer. These tools are instrumental in my learning of web development. They help me write cleaner and more efficient code and generate creative solutions to complex problems.</p>
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
    // Blog page with dynamic blog list
    blog: function () {
      const blogListHTML = blogPosts
        .map(
          (post) => `
          <div class="blog-post" data-id="${post.id}">
            <h3>${post.title}</h3>
            <p>Posted on ${post.date}</p>
            <p>${post.excerpt}</p>
          </div>
        `
        )
        .join("");

      return `
          <section class="blog modern-section">
            <div class="section-content">
              <h2>My Blog</h2>
              <p>Welcome to my blog! Here, I share my thoughts on web development, AI, and technology trends.</p>
              <div class="blog-list">
                ${blogListHTML}
              </div>
            </div>
          </section>
        `;
    },
    contact: `
      <section class="contact modern-section">
        <div class="section-content">
          <h2>Contact Me</h2>
          <p>Feel free to reach out! I’d love to hear from you.</p>
          <form id="contact-form">
            <label for="user_name">Name:</label>
            <input type="text" id="user_name" name="user_name" required>
            <label for="user_email">Email:</label>
            <input type="email" id="user_email" name="user_email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
            <div id="form-messages"></div>
          </form>
          <div class="alt-contact">
            <p>Email: <a href="mailto:narcis.gusa@gmail.com">narcis.gusa@gmail.com</a></p>
            <p>LinkedIn: <a href="#">www.linkedin.com/in/narcis-gusa</a></p>
          </div>
        </div>
      </section>
    `,
  };

  const loadPage = (page, postId) => {
    if (page === "blogPost") {
      const post = blogPosts.find((p) => p.id === postId);
      if (post) {
        content.innerHTML = post.content;
      } else {
        content.innerHTML = "<p>Blog post not found.</p>";
      }
    } else {
      content.innerHTML =
        typeof pages[page] === "function" ? pages[page]() : pages[page];
    }

    // Reattach event listener for "Explore My Work" button after page reload
    if (page === "home") {
      const exploreBtn = document.getElementById("explore-btn");
      if (exploreBtn) {
        exploreBtn.addEventListener("click", () => loadPage("projects"));
      }
    }

    // Add event listener for contact form submission
    if (page === "contact") {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
          event.preventDefault();

          // Disable the submit button
          const submitButton = contactForm.querySelector(
            'button[type="submit"]'
          );
          submitButton.disabled = true;
          submitButton.textContent = "Sending...";

          // Send the form data using EmailJS
          emailjs.sendForm("service_niy5feb", "template_9qkuxny", this).then(
            function () {
              // Re-enable the submit button
              submitButton.disabled = false;
              submitButton.textContent = "Send Message";

              // Display success message
              const formMessages = document.getElementById("form-messages");
              formMessages.textContent =
                "Your message has been sent successfully!";
              formMessages.style.color = "green";
              contactForm.reset();
            },
            function (error) {
              // Re-enable the submit button
              submitButton.disabled = false;
              submitButton.textContent = "Send Message";

              // Display error message
              const formMessages = document.getElementById("form-messages");
              formMessages.textContent =
                "Failed to send message. Please try again later.";
              formMessages.style.color = "red";
              console.error("EmailJS Error:", error);
            }
          );
        });
      }
    }
    // Add event listeners to blog posts after loading the blog page
    if (page === "blog") {
      const blogPostElements = document.querySelectorAll(".blog-post");
      blogPostElements.forEach((blogPost) => {
        blogPost.addEventListener("click", () => {
          const postId = blogPost.getAttribute("data-id");
          loadPage("blogPost", postId);
        });
      });
    }

    // Close mobile menu after selecting a page
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  };

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
