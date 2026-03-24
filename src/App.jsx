export default function App() {
  const projects = [
    {
      title: "React Auth Dashboard",
      description:
        "A React authentication dashboard focused on login flow and protected UI structure.",
      stack: ["React", "JavaScript", "Authentication", "UI Design"],
      link: "https://react-auth-dashboard-512f7tno9-breiajohns-projects.vercel.app/login",
      github: "https://github.com/BreiaJohn/react-auth-dashboard",
      image: "/projects/auth-app.png",
      featured: true,
    },
    {
  title: "Speed Dial App",
  description:
    "A responsive speed dial application focused on quick access interactions and clean UI.",
  stack: ["React", "JavaScript", "Responsive UI"],
  link: "https://homeez-app-mu.vercel.app/",
  github: "https://github.com/BreiaJohn/Speed-Dial-App",
  image: "/projects/homeez.png",
  featured: false,
},
{
      title: "Rock Paper Scissors Game",
      description:
        "A frontend Rock Paper Scissors game demonstrating responsive UI structure.",
      stack: ["HTML", "CSS", "Layout"],
      link: "https://breiajohn.github.io/Rock-paper-scissors-2/",
      github: "https://github.com/BreiaJohn/Rock-paper-scissors-2",
      image: "/projects/rock-paper-scissors.png",
      featured: false,
    },
    {
      title: "Weather App",
      description:
        "A responsive weather app that retrieves live weather data from an API.",
      stack: ["JavaScript", "API", "Async/Await", "Responsive UI"],
      link: "https://breiajohn.github.io/weather-app/",
      github: "https://github.com/BreiaJohn/weather-app",
      image: "/projects/weather-app.png",
      featured: false,
    },
    {
      title: "Youtube Clone",
      description:
        "A frontend Youtube clone demonstrating responsive UI structure.",
      stack: ["JavaScript", "UI", "Frontend"],
      link: "https://breiajohn.github.io/Youtube-project/",
      github: "https://github.com/BreiaJohn/Youtube-project",
      image: "/projects/youtube-clone.png",
      featured: false,
    },
    {
      title: "Advice Generator",
      description: "An API-driven advice generator with dynamic UI updates.",
      stack: ["JavaScript", "API", "Frontend"],
      link: "https://breiajohn.github.io/Advice-Generator-App/",
      github: "https://github.com/BreiaJohn/Advice-Generator-App",
      image: "/projects/advice-generator.png",
      featured: false,
    },
    {
      title: "QR Code Component",
      description:
        "A responsive frontend component built from a design challenge.",
      stack: ["HTML", "CSS", "Responsive Design"],
      link: "https://breiajohn.github.io/r-QR-code-component/",
      github: "https://github.com/BreiaJohn/r-QR-code-component",
      image: "/projects/Qr-Code.png",
      featured: false,
    },
    {
  title: "Fylo Landing Page",
  description:
    "A responsive landing page built from a Frontend Mentor challenge, focusing on layout, spacing, and clean UI design.",
  stack: ["HTML", "CSS", "Responsive Design"],
  link: "https://breiajohn.github.io/Fylo-landing-page-code-Challenge/",
  github: "https://github.com/BreiaJohn/Fylo-landing-page-code-Challenge",
  image: "/public/projects/fylo.png",
  featured: false,
},
    {
      title: "Tribute Page",
      description:
        "A tribute page project demonstrating layout and responsive design.",
      stack: ["HTML", "CSS"],
      link: "https://breiajohn.github.io/Tribute-Project/",
      github: "https://github.com/BreiaJohn/Tribute-Project",
      image: "/projects/tribute.jpeg",
      featured: false,
    },
  ];

  const growthProjects = projects.filter((project) => !project.featured);

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive Design",
    "Technical Support",
    "Troubleshooting",
    "Authentication Workflows",
  ];

  const experience = [
    {
      role: "Premier Support Specialist",
      company: "Roadie (A UPS Company)",
      date: "Sept 2024 - Present",
      summary:
        "Resolve complex sender and account issues while documenting bugs and collaborating with engineering teams",
    },
    {
      role: "Identity Support Specialist",
      company: "Rippling",
      date: "Apr 2024 - Sept 2024",
      summary:
        "Supported identity verification and authentication issues within a high-volume SaaS environment.",
    },
    {
      role: "Order Fulfillment QA",
      company: "Amplify",
      date: "Oct 2022 - Nov 2023",
      summary:
        "Reviewed and validated sales order documentation while collaborating with cross-functional teams to ensure accuracy and prevent fulfillment issues.",
    },
    {
      role: "Technical Specialist",
      company: "Apple",
      date: "Nov 2019 - May 2021",
      summary:
        "Provided advanced troubleshooting and technical support for Apple devices while delivering customer-focused solutions.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%)]" />

      <main className="relative mx-auto max-w-6xl px-6 py-12">
        <section className="py-16">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
            Frontend Developer • Technical Support Professional
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
              Hi, I’m Breia John, I build clean, responsive web applications
              with React.
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m a frontend developer and technical support professional with a
            strong eye for usability, detail, and responsive design.
          </p>

          <p className="mt-4 max-w-2xl text-base text-slate-400">
            Focused on React, JavaScript, responsive UI, and user centered
            problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured-projects"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950"
            >
              See My Work
            </a>

            <a
              href="https://github.com/BreiaJohn"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white"
            >
              GitHub
            </a>
          </div>
        </section>

        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {[
            ["3+", "Featured Projects"],
            ["4", "Professional Roles"],
            ["React + JS", "Core Focus"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold tracking-tight text-white">
                {value}
              </div>
              <div className="mt-1 text-sm text-slate-300">{label}</div>
            </div>
          ))}
        </div>

        <section id="about" className="mt-20 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>

          <p className="mb-4 leading-8 text-slate-300">
            I’m a developer transitioning from technical support into software
            engineering. My background in support gave me hands on experience
            debugging real production issues, understanding user pain points,
            and working closely with engineering teams.
          </p>

          <p className="mb-4 leading-8 text-slate-300">
            That experience pushed me to start building my own applications
            using JavaScript and React, where I focus on creating clean,
            responsive, user friendly interfaces.
          </p>

          <p className="leading-8 text-slate-400">
            I’m currently pursuing my degree in Computer Programming at Guilford
            Technical Community College while continuing to grow through hands-on
            projects and real world problem solving.
          </p>
        </section>
        <div className="my-20 h-px w-full bg-white/10" />

        <section id="featured-projects" className="py-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Projects that best represent my frontend development skills and
              experience building responsive applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {projects
    .filter((project) => project.featured)
    .map((project, index) => (
      <div
  key={project.title}
  className="col-span-1 md:col-span-2 group rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeIn"
  style={{ animationDelay: `${index * 0.15}s` }}
>
                <div className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {project.featured && (
                  <span className="mb-3 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                    Featured
                  </span>
                )}

                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:opacity-90"
                  >
                    Live Demo
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="early-projects" className="py-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Early Projects</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Earlier and challenge-based projects that show my learning
              process, practice, and progression as a developer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {growthProjects.map((project, index) => (
              <div
  key={project.title}
  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-xl opacity-0 animate-fadeIn"
  style={{ animationDelay: `${index * 0.15}s` }}
>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-40 w-full rounded-xl border border-white/10 object-cover"
                  />
                )}

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-w-[110px] rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  >
                    View Project
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                     className="inline-flex items-center justify-center min-w-[110px] rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/40"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="py-24">
          <p className="mb-2 text-sm uppercase tracking-widest text-slate-400">
            Background
          </p>
          <h2 className="text-3xl font-bold">Skills & Experience</h2>
          <p className="mt-2 text-slate-300">
            Frontend · React · JavaScript · HTML · CSS · Responsive Design
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-2xl font-semibold">Skills</h3>
              <p className="mt-4 max-w-xl text-slate-300">
                I combine frontend development learning with real world
                technical support experience, which helps me build with both
                usability and problem solving in mind.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Experience</h3>
              <p className="mt-2 text-slate-300">
                Technical Support · Troubleshooting · Authentication Workflows
              </p>

              <div className="mt-6 space-y-6">
                {experience.map((job) => (
                  <div
                    key={`${job.role}-${job.company}`}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold">{job.role}</h4>
                        <p className="text-slate-300">{job.company}</p>
                      </div>

                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                        {job.date}
                      </p>
                    </div>

                    <p className="mt-4 text-slate-300">{job.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 border-t border-white/10 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Let’s Connect
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                I’m actively building my frontend portfolio and open to junior
                frontend, technical support, and entry level software
                opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/BreiaJohn"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/breia-john-0731558a/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>

              <a
                href="mailto:briv377@icloud.com"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Breia John</p>
            <p>Built with React and Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
}