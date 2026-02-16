function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1
          className="text-5xl font-bold mb-8 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Get In Touch
        </h1>

        <p className="text-xl text-gray-300 mb-12 text-center leading-relaxed">
          I'm currently looking for new opportunities as a Junior Full-Stack /
          .NET Developer. Feel free to reach out if you'd like to connect!
        </p>

        {/* Contact Links */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:jason.brigou@gmail.com"
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border-2 border-slate-700 hover:border-orange-400 transition"
          >
            <div className="text-4xl"><img src="public/images/logos/outlook.svg" /></div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-gray-400">jason.brigou@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jason-brigou-a24b12305/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border-2 border-slate-700 hover:border-orange-400 transition"
          >
            <div className="text-4xl"><img src="public/images/logos/linkedin.svg" /></div>
            <div>
              <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-400">
                linkedin.com/in/jason-brigou-a24b12305
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
