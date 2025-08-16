export default function CollectionPage() {
  const collections = [
    {
      id: 1,
      title: "Post-Impressionist Masters",
      description: "Bold colors and emotional intensity that broke away from traditional impressionism",
      artworkCount: 1,
      featured: "Starry Night",
      artist: "Vincent van Gogh",
      period: "Late 19th Century",
      image: "/placeholder.svg?height=300&width=400",
      artworks: ["Starry Night"],
    },
    {
      id: 2,
      title: "Surrealist Dreams",
      description: "Explore the unconscious mind through dreamlike and fantastical imagery",
      artworkCount: 1,
      featured: "The Persistence of Memory",
      artist: "Salvador Dalí",
      period: "20th Century",
      image: "/placeholder.svg?height=300&width=400",
      artworks: ["The Persistence of Memory"],
    },
    {
      id: 3,
      title: "Dutch Golden Age",
      description: "Intimate domestic scenes and masterful use of light from 17th century Netherlands",
      artworkCount: 1,
      featured: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      period: "17th Century",
      image: "/placeholder.svg?height=300&width=400",
      artworks: ["Girl with a Pearl Earring"],
    },
    {
      id: 4,
      title: "Japanese Ukiyo-e",
      description: "Floating world art capturing the beauty of nature and everyday life",
      artworkCount: 1,
      featured: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      period: "Edo Period",
      image: "/placeholder.svg?height=300&width=400",
      artworks: ["The Great Wave off Kanagawa"],
    },
    {
      id: 5,
      title: "American Regionalism",
      description: "Realistic depictions of rural American life and values",
      artworkCount: 1,
      featured: "American Gothic",
      artist: "Grant Wood",
      period: "Early 20th Century",
      image: "/placeholder.svg?height=300&width=400",
      artworks: ["American Gothic"],
    },
  ]

  const featuredCollection = collections[0]

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
                href="/artists"
                className="px-4 py-2 rounded transition-colors duration-300 hover:scale-105"
                style={{ color: "#2D2D2D" }}
              >
                Artists
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
              Curated Collections
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#2D2D2D" }}>
              Discover art through carefully curated themes that showcase the evolution of artistic movements,
              techniques, and cultural expressions across different periods and regions.
            </p>
          </div>

          {/* Featured Collection */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                Featured Collection
              </h2>
              <p className="text-lg" style={{ color: "#8C5E3C" }}>
                This month's spotlight
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: "#F9F6F1" }}>
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredCollection.image || "/placeholder.svg"}
                      alt={featuredCollection.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: "#8C5E3C", color: "white" }}
                      >
                        {featuredCollection.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                      {featuredCollection.title}
                    </h3>
                    <p className="text-lg mb-6" style={{ color: "#2D2D2D" }}>
                      {featuredCollection.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm mb-2" style={{ color: "#B89B7B" }}>
                        <strong>Featured Artwork:</strong> {featuredCollection.featured}
                      </p>
                      <p className="text-sm mb-2" style={{ color: "#B89B7B" }}>
                        <strong>Artist:</strong> {featuredCollection.artist}
                      </p>
                      <p className="text-sm" style={{ color: "#B89B7B" }}>
                        <strong>Artworks in Collection:</strong> {featuredCollection.artworkCount}
                      </p>
                    </div>
                    <button
                      className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#6B4226" }}
                    >
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Collections Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                All Collections
              </h2>
              <p className="text-lg" style={{ color: "#2D2D2D" }}>
                Browse our complete collection of themed galleries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {collections.map((collection) => (
                <div key={collection.id} className="group cursor-pointer">
                  <div
                    className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: "#F9F6F1" }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: "#B89B7B", color: "white" }}
                        >
                          {collection.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3" style={{ color: "#2D2D2D" }}>
                        {collection.title}
                      </h3>

                      <p className="text-sm mb-4 line-clamp-3" style={{ color: "#2D2D2D" }}>
                        {collection.description}
                      </p>

                      <div className="mb-4 text-sm">
                        <p style={{ color: "#8C5E3C" }}>
                          <strong>Featured:</strong> {collection.featured}
                        </p>
                        <p style={{ color: "#B89B7B" }}>
                          {collection.artworkCount} artwork{collection.artworkCount !== 1 ? "s" : ""}
                        </p>
                      </div>

                      <button
                        className="w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "#6B4226" }}
                      >
                        View Collection
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collection Stats */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#F9F6F1" }}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Collection Overview
                </h2>
                <p className="text-lg" style={{ color: "#2D2D2D" }}>
                  Our collections span centuries of artistic achievement
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: "#8C5E3C" }}
                  >
                    5
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Collections
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    Themed galleries
                  </p>
                </div>
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: "#B89B7B" }}
                  >
                    5
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Movements
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    Art periods covered
                  </p>
                </div>
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: "#8C5E3C" }}
                  >
                    4
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Centuries
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    Time span covered
                  </p>
                </div>
                <div>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: "#B89B7B" }}
                  >
                    5
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    Masterpieces
                  </h3>
                  <p className="text-sm" style={{ color: "#2D2D2D" }}>
                    World-renowned works
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
