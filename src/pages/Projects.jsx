import { useState } from "react";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  // All project data in one array
  const projects = [
    {
      title: "Visitor Registration System",
      description:
        "A full-stack kiosk application built during my internship at Oncore for managing visitor check-ins and appointments. Visitors can self-register or book appointments with employees, while administrators manage all data through a secure dashboard. The system includes double-booking prevention, email-based returning visitor flow, and complete CRUD operations for companies, employees, visitors, and appointments.",
      technologies: [
        "Blazor Server",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "FluentUI",
        "C#",
      ],
      images: [
        {
          src: `${import.meta.env.BASE_URL}images/projects/visitor-registration/appointment.png`,
          alt: "Appointment booking interface",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/visitor-registration/dashboard.png`,
          alt: "Admin dashboard",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/visitor-registration/admin-table.png`,
          alt: "Admin table view",
        },
      ],
      githubUrl: "https://github.com/JasonBrigou15/VisitorRegistration",
    },
    {
      title: "Restore - E-Commerce Store",
      description:
        "A full-stack e-commerce application for snow sports gear built with React and ASP.NET Core, featuring a more refined UI and advanced cart management. Includes product browsing with dynamic filtering and sorting by brand, category, and price, a fully functional shopping cart with quantity controls and order summaries, voucher code system for discounts, and comprehensive product detail views. Built with TypeScript for type safety and Material-UI for a polished, professional interface.",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "C#",
        "Material-UI",
      ],
      images: [
        {
          src: `${import.meta.env.BASE_URL}images/projects/restore/restoreHomepage.png`,
          alt: "Restore homepage",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/restore/restoreShop.png`,
          alt: "Shop page with filters",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/restore/restoreBasket.png`,
          alt: "Shopping basket",
        },
      ],
      githubUrl: "https://github.com/JasonBrigou15/Restore",
    },
    {
      title: "SkiNet - E-Commerce Store",
      description:
        "A full-stack e-commerce application for snow sports gear built with Angular and ASP.NET Core as my first comprehensive project combining frontend and backend development. Features product browsing with filtering and search, detailed product views, shopping cart functionality, and secure payment processing. This project helped me understand RESTful API architecture, Entity Framework Core for data persistence, and integrating a modern SPA framework with a .NET backend.",
      technologies: [
        "Angular",
        "TypeScript",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "C#",
        "RxJS",
        "Angular Material",
        "Tailwind CSS",
      ],
      images: [
        {
          src: `${import.meta.env.BASE_URL}images/projects/skinet/skinetHomepage.png`,
          alt: "SkiNet homepage",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/skinet/skinetShop.png`,
          alt: "Shop page with products",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/skinet/skinetDetail.png`,
          alt: "Product detail page",
        },
      ],
      githubUrl: "https://github.com/JasonBrigou15/skinet",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1
          className="text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          My Projects
        </h1>

        {/* Loop through all projects */}
        {projects.map((project, index) => (
          <div key={index} className="mb-20">
            <h2
              className="text-4xl font-bold mb-4 text-orange-400"
              style={{ fontFamily: "Poppins" }}
            >
              {project.title}
            </h2>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-orange-400 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {project.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-lg border-2 border-slate-700 hover:border-orange-400 transition cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              <span>View on GitHub →</span>
            </a>
          </div>
        ))}

        {/* Placeholder */}
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">More projects coming soon...</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Project screenshot"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-orange-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
