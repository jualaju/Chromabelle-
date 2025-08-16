export default function ArtworksPage() {
  const artworks = [
    {
      id: 1,
      title: "Starry Night",
      artist: "Vincent van Gogh",
      year: "1889",
      category: "Post-Impressionism",
      description: "A swirling night sky over a French village, one of the most recognizable paintings in the world.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
      id: 2,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: "1931",
      category: "Surrealism",
      description: "Melting clocks in a dreamscape that explores the nature of time and memory.",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    },
    {
      id: 3,
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: "1665",
      category: "Dutch Golden Age",
      description: "A captivating portrait of a girl with an exotic dress and a large pearl earring.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    },
    {
      id: 4,
      title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      year: "1831",
      category: "Japanese Ukiyo-e",
      description: "An iconic woodblock print depicting a giant wave threatening boats near Mount Fuji.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg",
    },
    {
      id: 5,
      title: "American Gothic",
      artist: "Grant Wood",
      year: "1930",
      category: "American Regionalism",
      description: "A farmer and his daughter standing before their Gothic Revival style house in rural Iowa.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/900px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
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
                href="/artists"
                className="px-4 py-2 rounded transition-colors duration-300 hover:scale-105"
                style={{ color: "#2D2D2D" }}
              >
                Artists
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
              Masterpiece Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#2D2D2D" }}>
              Explore our curated selection of the world's most celebrated artworks, each piece telling a unique story
              through color, form, and artistic vision.
            </p>
          </div>

          {/* Artworks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group cursor-pointer">
                <div
                  className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "#F9F6F1" }}
                >
                  {/* Artwork Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Artwork Details */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#B89B7B", color: "white" }}
                      >
                        {artwork.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                      {artwork.title}
                    </h3>

                    <p className="text-lg font-medium mb-2" style={{ color: "#8C5E3C" }}>
                      {artwork.artist}
                    </p>

                    <p className="text-sm mb-3" style={{ color: "#B89B7B" }}>
                      {artwork.year}
                    </p>

                    <p className="text-sm mb-4 line-clamp-3" style={{ color: "#2D2D2D" }}>
                      {artwork.description}
                    </p>

                    <a
                      href={`/artwork/${artwork.id}`}
                      className="inline-block px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#6B4226" }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#F9F6F1" }}>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                Discover Art History
              </h2>
              <p className="text-lg mb-6" style={{ color: "#2D2D2D" }}>
                Each artwork in our collection represents a pivotal moment in art history. From the swirling emotions of
                Van Gogh to the surreal dreamscapes of Dalí, these masterpieces continue to inspire and captivate
                audiences worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#8C5E3C" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Authenticated
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    All artworks verified by art historians
                  </p>
                </div>
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#B89B7B" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    High Resolution
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    View every brushstroke in stunning detail
                  </p>
                </div>
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#8C5E3C" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Expert Curation
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    Selected by renowned art curators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
