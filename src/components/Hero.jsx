export function Hero() {
    const handleScrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black">
                Archilli Matias
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Web Developer & Designer. I create beautiful and functional websites that make an impact.
              </p>
            </div>
            <div className="space-x-4">
              {/* Botón "Contact Me" con desplazamiento suave */}
              <button
                onClick={handleScrollToContact}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-gray-50 shadow transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70"
              >
                Contact Me
              </button>
              {/* Botón "Download CV" */}
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white text-black px-5 py-2 text-sm font-medium shadow transition-all duration-300 hover:bg-gray-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70"
                href="#"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  