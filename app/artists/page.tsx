export default function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: "Vincent van Gogh",
      nationality: "Dutch",
      period: "1853-1890",
      movement: "Post-Impressionism",
      biography:
        "A Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. Known for his bold colors and dramatic, impulsive brushwork.",
      notableWorks: ["Starry Night", "Sunflowers", "The Bedroom"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
    },
    {
      id: 2,
      name: "Salvador Dalí",
      nationality: "Spanish",
      period: "1904-1989",
      movement: "Surrealism",
      biography:
        "A Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. Famous for his flamboyant personality and iconic mustache.",
      notableWorks: ["The Persistence of Memory", "Dream Caused by the Flight of a Bee", "Metamorphosis of Narcissus"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Salvador_Dal%C3%AD_1939.jpg-yIwI2lXMbY6fQRzAMV23m2pYDuz4lS.jpeg",
    },
    {
      id: 3,
      name: "Johannes Vermeer",
      nationality: "Dutch",
      period: "1632-1675",
      movement: "Dutch Golden Age",
      biography:
        "A Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. Known for his masterful treatment of light and intimate realism.",
      notableWorks: ["Girl with a Pearl Earring", "View of Delft", "The Milkmaid"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg-bi1QjzIsIQ4Z6Tdt7zJ61YKRgmbnuE.jpeg",
    },
    {
      id: 4,
      name: "Katsushika Hokusai",
      nationality: "Japanese",
      period: "1760-1849",
      movement: "Ukiyo-e",
      biography:
        "A Japanese artist, ukiyo-e painter and printmaker of the Edo period. Best known for the woodblock print series Thirty-six Views of Mount Fuji, which includes the iconic Great Wave.",
      notableWorks: ["The Great Wave off Kanagawa", "Red Fuji", "Thirty-six Views of Mount Fuji"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katsushika_hokusai.jpg-KIyPQv3DSWnoB66PcqFmRufL4247Kr.webp",
    },
    {
      id: 5,
      name: "Grant Wood",
      nationality: "American",
      period: "1891-1942",
      movement: "American Regionalism",
      biography:
        "An American painter best known for his paintings depicting the rural American Midwest. A leading figure in the American Regionalism art movement.",
      notableWorks: ["American Gothic", "Daughters of Revolution", "Stone City Iowa"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grant_Wood.jpg-aCkEBjy9zMFutNDCV1tqcwmVhvMCdH.jpeg",
    },
  ]

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <nav className="container mx-auto px-4 py-6">
          <div
            className="flex justify-between items-center py-4 px-8 rounded-lg shadow-lg"
            style={{ backgroundColor: "#F9F6F1" }}
          >
            <a href="/" className="text-2xl font-bold" style={{ color: "#2D2D2D" }}>
              CHROMABELLE
            </a>
            <div className="flex gap-6">
              <a
                href="/artworks"
                className="px-4 py-2 rounded transition-colors duration-300 hover:scale-105"
                style={{ color: "#2D2D2D" }}
              >
                Artworks
              </a>
              <a
                href="/collection"
                className="px-4 py-2 rounded transition-colors duration-300 hover:scale-105"
                style={{ color: "#2D2D2D" }}
              >
                Collection
              </a>
              <a
                href="/login"
                className="px-4 py-2 rounded transition-colors duration-300 hover:scale-105"
                style={{ backgroundColor: "#6B4226", color: "white" }}
              >
                Login
              </a>
            </div>
          </div>
        </nav>

        {/* Page Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
              Master Artists
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#2D2D2D" }}>
              Meet the visionary artists whose groundbreaking techniques and unique perspectives have shaped the course
              of art history and continue to inspire generations.
            </p>
          </div>

          {/* Artists Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {artists.map((artist) => (
              <div key={artist.id} className="group cursor-pointer">
                <div
                  className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "#F9F6F1" }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#8C5E3C", color: "white" }}
                      >
                        {artist.movement}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                      {artist.name}
                    </h2>

                    <div className="mb-3 text-sm">
                      <p style={{ color: "#B89B7B" }}>
                        <strong>Nationality:</strong> {artist.nationality}
                      </p>
                      <p style={{ color: "#B89B7B" }}>
                        <strong>Period:</strong> {artist.period}
                      </p>
                    </div>

                    <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: "#2D2D2D" }}>
                      {artist.biography}
                    </p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                        Notable Works:
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {artist.notableWorks.slice(0, 2).map((work, workIndex) => (
                          <span
                            key={workIndex}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{ backgroundColor: "#B89B7B", color: "white" }}
                          >
                            {work}
                          </span>
                        ))}
                        {artist.notableWorks.length > 2 && (
                          <span
                            className="px-2 py-1 rounded-full text-xs"
                            style={{ backgroundColor: "#B89B7B", color: "white" }}
                          >
                            +{artist.notableWorks.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      className="w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#6B4226" }}
                    >
                      View Artist's Works
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                Artistic Timeline
              </h2>
              <p className="text-lg" style={{ color: "#2D2D2D" }}>
                Explore how these masters influenced different periods of art history
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#F9F6F1" }}>
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  {[
                    { period: "1632-1675", artist: "Vermeer", era: "Dutch Golden Age" },
                    { period: "1760-1849", artist: "Hokusai", era: "Edo Period" },
                    { period: "1853-1890", artist: "van Gogh", era: "Post-Impressionism" },
                    { period: "1891-1942", artist: "Wood", era: "American Regionalism" },
                    { period: "1904-1989", artist: "Dalí", era: "Surrealism" },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: index % 2 === 0 ? "#8C5E3C" : "#B89B7B" }}
                      >
                        {index + 1}
                      </div>
                      <h4 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                        {item.artist}
                      </h4>
                      <p className="text-sm mb-1" style={{ color: "#8C5E3C" }}>
                        {item.period}
                      </p>
                      <p className="text-xs" style={{ color: "#B89B7B" }}>
                        {item.era}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
