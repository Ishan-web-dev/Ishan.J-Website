import React from "react";

const projects = [
  {
    id: 1,
    name: "Paynexus",
    link: "https://paynexus.in/",
  },
  {
    id: 2,
    name: "CollectSwift",
    link: "https://collectswift.com/",
  },
  {
    id: 3,
    name: "Work On Comprismo Dashboard Pannel.",
    // link: "https://realestatehub.com",
  },
  {
    id: 4,
    name: "Education Figma Design",
    link: "https://www.figma.com/proto/2cOxH2iViT29BYHljZiIkH/Web-Design?node-id=0-1&t=eNjnQAkHQZTulUOe-1",
  },
  {
    id: 5,
    name: "Client's Website Design",
    link: "https://www.figma.com/proto/YAXHW0poB5iUDq6Gb8IGBD/new-onw?node-id=0-1&t=eNjnQAkHQZTulUOe-1",
  },
];

const Project = () => {
  return (
    <section className="relative bg-black text-[#b728ff] py-24 overflow-hidden">
      {/* Floating Decorations */}
      <div className=" absolute top-10 left-10 w-24 h-24 bg-[#b728ff]/20 rounded-full animate-bounce -z-10" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#b728ff]/20 rounded-full animate-ping -z-10" />

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Project List */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-white">
              Featured <span className="text-[#b728ff]">Projects</span>
            </h2>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-light hover:text-white transition duration-300 border-b border-[#b728ff]/30 inline-block pb-1"
                  >
                    🔗 {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-[#b728ff]/20 rounded-2xl -z-10 blur-sm" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#b728ff]/20 rounded-2xl -z-10 blur-sm" />
              <img
                className="relative rounded-xl shadow-2xl border-8 border-black"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Project Showcase"
              />
            </div>
            <div className="absolute -bottom-8 left-1/4 bg-gray-900 px-4 py-2 rounded-lg shadow-md text-white flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium">Live & Running</span>
            </div>
            <div className="absolute -top-8 right-1/4 bg-gray-900 px-4 py-2 rounded-lg shadow-md text-white">
              <span className="text-sm font-medium">🚀 Real Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
