export default function HomePage() {
  return (
    <div className="min-h-screen page-load" style={{ backgroundColor: "#F9F6F1" }}>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.squarespace-cdn.com/content/v1/55a9f1b3e4b0687d3673e88f/1574984770526-AJJ5PYH0Z6P5Q6R4PZ7I/Disney_Pocahontas-TheWind__Alice_X_Zhang_alicexz.jpg?format=1000w")',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/55a9f1b3e4b0687d3673e88f/1574984770526-AJJ5PYH0Z6P5Q6R4PZ7I/Disney_Pocahontas-TheWind__Alice_X_Zhang_alicexz.jpg?format=1000w")',
            filter: "blur(1px)",
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(184, 155, 123, 0.5) 0%, rgba(45, 45, 45, 0.7) 100%)",
          }}
        ></div>

        <nav className="absolute top-0 left-0 right-0 z-20 py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <h1 className="text-3xl font-serif font-bold" style={{ color: "#F4E4BC" }}>
                  Chromabelle
                </h1>
              </div>
              <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Search artworks..."
                    className="px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-2 w-48"
                    style={{
                      backgroundColor: "rgba(249, 246, 241, 0.3)",
                      borderColor: "rgba(184, 155, 123, 0.5)",
                      color: "#2D2D2D",
                    }}
                  />
                  <svg
                    className="absolute right-2 top-2 w-4 h-4"
                    style={{ color: "#8C5E3C" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <a
                  href="/login"
                  className="px-6 py-2 hover:opacity-80 transition-all duration-300 font-medium nav-item"
                  style={{ color: "rgba(249, 246, 241, 0.8)" }}
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-6 py-3 rounded-lg font-medium btn-animate focus-ring hover:opacity-90 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(140, 94, 60, 0.7)",
                    color: "white",
                    border: "1px solid rgba(249, 246, 241, 0.3)",
                  }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-20">
          <h1
            className="text-6xl md:text-7xl font-serif mb-8 text-reveal leading-tight"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Discover the Canvas of
            <br />
            <span
              style={{
                color: "#8C5E3C",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Imagination
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed slide-in-left"
            style={{
              color: "white",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Immerse yourself in a world where creativity knows no bounds. Each masterpiece tells a story waiting to be
            discovered by passionate art enthusiasts like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-right">
            <a
              href="/collection"
              className="px-8 py-3 text-base font-medium rounded-lg btn-animate focus-ring hover:opacity-90 transition-all duration-300"
              style={{
                backgroundColor: "#8C5E3C",
                color: "white",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              Explore Our Collection
            </a>
            <a
              href="/artists"
              className="px-8 py-3 text-base font-medium rounded-lg border-2 hover:opacity-80 transition-all duration-300 focus-ring"
              style={{
                borderColor: "#8C5E3C",
                color: "#8C5E3C",
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              Meet the Artists
            </a>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <div
        className="relative z-10 py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.25) 100%)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-reveal" style={{ color: "#2D2D2D" }}>
              Featured Masterpieces
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#2D2D2D" }}>
              A carefully curated selection from our world-class collection
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Starry Night",
                artist: "Vincent van Gogh",
                year: "1889",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
                link: "/artwork/starry-night",
              },
              {
                title: "The Persistence of Memory",
                artist: "Salvador Dalí",
                year: "1931",
                image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
                link: "/artwork/persistence-of-memory",
              },
              {
                title: "Girl with a Pearl Earring",
                artist: "Johannes Vermeer",
                year: "1665",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg",
                link: "/artwork/girl-with-pearl-earring",
              },
              {
                title: "The Great Wave",
                artist: "Katsushika Hokusai",
                year: "1831",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg",
                link: "/artwork/great-wave",
              },
              {
                title: "American Gothic",
                artist: "Grant Wood",
                year: "1930",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
                link: "/artwork/american-gothic",
              },
            ].map((artwork, index) => (
              <a
                key={index}
                href={artwork.link}
                className="group cursor-pointer card-hover staggered-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className="rounded-xl shadow-2xl overflow-hidden bg-white backdrop-blur-md border hover:shadow-3xl transition-all duration-500"
                  style={{ borderColor: "#B89B7B" }}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg mb-2" style={{ color: "#2D2D2D" }}>
                      {artwork.title}
                    </h4>
                    <p className="font-medium mb-1" style={{ color: "#8C5E3C" }}>
                      {artwork.artist}
                    </p>
                    <p className="text-sm" style={{ color: "#B89B7B" }}>
                      {artwork.year}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div
        className="relative z-10 py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.25) 100%)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-reveal" style={{ color: "#2D2D2D" }}>
              Explore Our Gallery
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#2D2D2D" }}>
              Discover art through different perspectives and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Artworks",
                description:
                  "Browse our extensive collection of masterpieces from renowned artists across different eras and movements.",
                link: "/artworks",
                icon: "🎨",
              },
              {
                title: "Artists",
                description:
                  "Meet the visionary creators behind the masterpieces and learn about their lives, techniques, and artistic journeys.",
                link: "/artists",
                icon: "👨‍🎨",
              },
              {
                title: "Collections",
                description:
                  "Explore curated collections organized by themes, periods, and artistic movements for a deeper understanding.",
                link: "/collection",
                icon: "🏛️",
              },
            ].map((section, index) => (
              <a
                key={index}
                href={section.link}
                className="group cursor-pointer card-hover"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div
                  className="rounded-lg shadow-lg p-8 text-center h-full hover-lift"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="text-4xl mb-6">{section.icon}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#2D2D2D" }}>
                    {section.title}
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "#2D2D2D" }}>
                    {section.description}
                  </p>
                  <div
                    className="inline-flex items-center font-medium group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: "#8C5E3C" }}
                  >
                    Explore {section.title}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="relative z-10 py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.25) 100%)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-reveal" style={{ color: "#2D2D2D" }}>
              What Our Visitors Say
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#2D2D2D" }}>
              Discover why art enthusiasts choose Chromabelle for their cultural journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Chromabelle offers an unparalleled digital art experience. The curation is exceptional and the presentation is world-class.",
                author: "Sarah Mitchell",
                role: "Art Collector",
                rating: 5,
              },
              {
                quote:
                  "As an art student, I find Chromabelle's detailed information about each piece invaluable for my research and studies.",
                author: "David Chen",
                role: "Art Student",
                rating: 5,
              },
              {
                quote:
                  "The virtual gallery experience is breathtaking. It's like having a private museum tour from the comfort of home.",
                author: "Maria Rodriguez",
                role: "Art Enthusiast",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-md rounded-xl p-8 shadow-2xl hover-lift staggered-fade-in border hover:shadow-3xl transition-all duration-500"
                style={{
                  animationDelay: `${0.1 * (index + 1)}s`,
                  borderColor: "#B89B7B",
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic" style={{ color: "#2D2D2D" }}>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold" style={{ color: "#2D2D2D" }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm" style={{ color: "#8C5E3C" }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-12" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#8C5E3C" }}>
            Stay Connected with Art
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto" style={{ color: "#B89B7B" }}>
            Subscribe for exclusive art insights and updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#F9F6F1",
                borderColor: "#B89B7B",
                color: "#2D2D2D",
              }}
            />
            <button
              className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 btn-animate"
              style={{ backgroundColor: "#6B4226", color: "white" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 py-3" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-3">
            <div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white">Chromabelle</h3>
              <p className="text-white/80 text-sm">
                Discover the world's finest art collection through our curated digital gallery.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
                <a href="/artworks" className="hover:text-white transition-colors">
                  Artworks
                </a>
                <a href="/artists" className="hover:text-white transition-colors">
                  Artists
                </a>
                <a href="/collection" className="hover:text-white transition-colors">
                  Collections
                </a>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-2 text-center text-white/60 text-sm">
            <p>&copy; 2024 Chromabelle Art Gallery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
