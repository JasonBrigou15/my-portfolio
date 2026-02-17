function About() {
  const programmingLanguages = ["C#", "JavaScript", "HTML/CSS", "SQL"];
  const frameworks = [
    ".NET Core",
    "ASP.NET Core",
    "Blazor",
    "Entity Framework",
    "React",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
  ];
  const tools = [
    "Git/GitHub",
    "Visual Studio",
    "VS Code",
    "SQL Server",
    "Azure",
    "Docker",
  ];
  const concepts = [
    "RESTful API Design",
    "Three-Layer Architecture",
    "Repository Pattern",
    "MVC Pattern",
    "SOLID Principles",
    "Agile/Scrum",
    "Test-Driven Development",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-14 mb-12 ml-8">
            <img
              src={`${import.meta.env.BASE_URL}images/me.jpg`}
              alt="Jason Brigou"
              className="w-48 h-48 rounded-3xl border-4 border-orange-400"
              style={{
                objectFit: "cover",
                objectPosition: "center 20%",
                transform: "scale(1.4)",
              }}
            />
            <div>
              <h1
                className="text-5xl font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                About Me
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Junior Full-Stack / .NET Developer based in Belgium with a
                background in graphic design. I love building applications and
                challenging myself to create something new. With experience in
                Photoshop, InDesign, and Illustrator, I bring an eye for design
                to frontend development while enjoying the problem-solving
                aspect of backend work. I'm always eager to learn new
                technologies and continuously improve my skills.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2
              className="text-4xl font-bold mb-8 border-b-2 border-orange-400 pb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Programming Languages
                </h3>
                <div className="space-y-2">
                  {programmingLanguages.map((skill) => (
                    <div key={skill} className="bg-slate-800 p-3 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Frameworks & Libraries
                </h3>
                <div className="space-y-2">
                  {frameworks.map(skill => (
                    <div key={skill} className="bg-slate-800 p-3 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Tools & Platforms
                </h3>
                <div className="space-y-2">
                  {tools.map(skill => (
                    <div key={skill} className="bg-slate-800 p-3 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Concepts & Methodologies */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Concepts & Methodologies
                </h3>
                <div className="space-y-2">
                  {concepts.map(skill => (
                    <div key={skill} className="bg-slate-800 p-3 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Experience & Education Section */}
          <div>
            <h2
              className="text-4xl font-bold mb-8 border-b-2 border-orange-400 pb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Experience & Education
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-2xl font-bold">
                  Intern Developer - Oncore, Kortrijk
                </h3>
                <p className="text-gray-400 mb-2">
                  November 2024 - January 2025 (6 weeks)
                </p>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>Built visitor registration kiosk system from scratch</li>
                  <li>
                    Implemented appointment booking with double-booking
                    prevention
                  </li>
                  <li>Created admin dashboard with full CRUD operations</li>
                  <li>
                    Technologies: Blazor Server, Entity Framework Core, SQL
                    Server, FluentUI
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-2xl font-bold">
                  VDAB - Software Development with .NET
                </h3>
                <p className="text-gray-400 mb-2">
                  January 2024 - January 2025
                </p>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>
                    Completed comprehensive full-stack development training
                  </li>
                  <li>Finished all core and optional modules</li>
                  <li>Participated in month-long Scrum team project</li>
                  <li>
                    Technologies: .NET, Blazor, Razor Pages, Entity Framework,
                    ASP.NET MVC, Web API, WPF, Docker, Azure
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-2xl font-bold">Self-Study Courses</h3>
                <p className="text-gray-400 mb-2">2023 - 2025</p>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>
                    The Ultimate C# Series (Mosh Hamedani) - Fundamentals, OOP,
                    Advanced Topics
                  </li>
                  <li>E-Commerce with .NET Core and Angular (Neil Cummings)</li>
                  <li>E-Commerce with .NET Core and React (Neil Cummings)</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-600 pl-6">
                <h3 className="text-2xl font-bold">
                  Previous Career - Printing Industry
                </h3>
                <p className="text-gray-400 mb-2">2018 - 2021</p>
                <p className="text-gray-300">
                  Worked in printing & finishing technology before transitioning
                  to software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
