interface ArtworkData {
  id: number
  title: string
  artist: string
  year: string
  category: string
  description: string
  detailedDescription: string
  technique: string
  dimensions: string
  location: string
  image: string
  similarArtworks: Array<{
    title: string
    artist: string
    year: string
    image: string
  }>
}

const artworksData: Record<string, ArtworkData> = {
  "1": {
    id: 1,
    title: "Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "Post-Impressionism",
    description: "A swirling night sky over a French village, one of the most recognizable paintings in the world.",
    detailedDescription:
      "The Starry Night depicts the view from van Gogh's east-facing window at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, with the addition of an idealized village. The painting features bold, undulating brushstrokes that create a sense of movement in the sky, while the cypress tree in the foreground reaches toward the swirling stars and crescent moon.",
    technique: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    location: "Museum of Modern Art, New York",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    similarArtworks: [
      {
        title: "Café Terrace at Night",
        artist: "Vincent van Gogh",
        year: "1888",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG-gxutA88cjVOLHCmJLuUDyZKHKnh1tr.jpeg",
      },
      {
        title: "The Potato Eaters",
        artist: "Vincent van Gogh",
        year: "1885",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/800px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg",
      },
      {
        title: "Wheatfield with Cypresses",
        artist: "Vincent van Gogh",
        year: "1889",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheatfield%20with%20cypresses.jpg-htAA22eapktVZ1I6zaTqejyxIMHdlu.jpeg",
      },
    ],
  },
  "2": {
    id: 2,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    category: "Surrealism",
    description: "Melting clocks in a dreamscape that explores the nature of time and memory.",
    detailedDescription:
      "This iconic surrealist painting features melting pocket watches in a landscape setting. The work is interpreted as a meditation on the nature of time and its passage. The soft watches are thought to represent Einstein's theory of relativity, suggesting that time is not rigid but can be influenced by factors such as speed and gravity.",
    technique: "Oil on canvas",
    dimensions: "24 cm × 33 cm",
    location: "Museum of Modern Art, New York",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/600px-The_Persistence_of_Memory.jpg",
    similarArtworks: [
      {
        title: "Dream Caused by the Flight of a Bee",
        artist: "Salvador Dalí",
        year: "1944",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dream_Caused_by_the_Flight_of_a_Bumblebee_around_a_Pomegranate_a_Second_Before_Awakening.jpg-PSsH3tAJtpVuTeGL3IZFB7R88Py4GR.jpeg",
      },
      {
        title: "The Elephants",
        artist: "Salvador Dalí",
        year: "1948",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-Ueteftc4Oz8FSz2VcB8Ppsf1CKOt4h.jpeg",
      },
      {
        title: "Metamorphosis of Narcissus",
        artist: "Salvador Dalí",
        year: "1937",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metamorphosis_of_Narcissus.jpg-bwZ0mSuYjGzX7g43X6OX8xWepYN7AA.jpeg",
      },
    ],
  },
  "3": {
    id: 3,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "1665",
    category: "Dutch Golden Age",
    description: "A captivating portrait of a girl with an exotic dress and a large pearl earring.",
    detailedDescription:
      "Often referred to as the 'Mona Lisa of the North,' this painting is not a portrait but a 'tronie' - a Dutch term for a character study that captures a particular mood or expression. The girl's direct gaze and the mysterious quality of her expression have captivated viewers for centuries. The painting demonstrates Vermeer's mastery of light and his ability to create luminous effects.",
    technique: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm",
    location: "Mauritshuis, The Hague",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    similarArtworks: [
      {
        title: "The Milkmaid",
        artist: "Johannes Vermeer",
        year: "1658-1661",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/600px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
      },
      {
        title: "View of Delft",
        artist: "Johannes Vermeer",
        year: "1661",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/800px-Vermeer-view-of-delft.jpg",
      },
      {
        title: "The Lacemaker",
        artist: "Johannes Vermeer",
        year: "1669-1670",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg-i4KEhGrtEwxQ2SCMcsBBwDVZbs8aKO.jpeg",
      },
    ],
  },
  "4": {
    id: 4,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    category: "Japanese Ukiyo-e",
    description: "An iconic woodblock print depicting a giant wave threatening boats near Mount Fuji.",
    detailedDescription:
      "This woodblock print is the most famous work from Hokusai's series 'Thirty-six Views of Mount Fuji.' The dramatic composition shows a giant wave about to crash down on three boats, while Mount Fuji sits serenely in the background. The wave's foam and spray create claw-like shapes that seem to reach toward the boats, creating a sense of impending danger and the power of nature.",
    technique: "Woodblock print",
    dimensions: "25.7 cm × 37.9 cm",
    location: "Various collections worldwide",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg",
    similarArtworks: [
      {
        title: "Red Fuji",
        artist: "Katsushika Hokusai",
        year: "1830-1832",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%8C%E5%AF%8C%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%87%B1%E9%A2%A8%E5%BF%AB%E6%99%B4%E3%80%8D-South_Wind%2C_Clear_Sky_%28Gaif%C5%AB_kaisei%29%2C_also_known_as_Red_Fuji%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141062.jpg-fEDQOzsZNl9Bb5aJD0m7AyU8Yiym8f.jpeg",
      },
      {
        title: "Thunderstorm Beneath the Summit",
        artist: "Katsushika Hokusai",
        year: "1830-1832",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Katsushika_Hokusai%2C_tempesta_sotto_la_vetta%2C_dalla_serie_delle_36_vedute_del_monte_fuji%2C_1831_ca.jpg-DXBUt9fscXqw92Wk5ex9cpKreqWIyM.jpeg",
      },
      {
        title: "The Fishing Boat with Mount Fuji",
        artist: "Katsushika Hokusai",
        year: "1830-1832",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20fishing%20boat%20with%20mount%20fuji.jpg-yqttNaxPG53VDBYn7WrpeTU7HOxUbl.jpeg",
      },
    ],
  },
  "5": {
    id: 5,
    title: "American Gothic",
    artist: "Grant Wood",
    year: "1930",
    category: "American Regionalism",
    description: "A farmer and his daughter standing before their Gothic Revival style house in rural Iowa.",
    detailedDescription:
      "This painting depicts a farmer holding a pitchfork standing beside a woman in front of a house built in the Gothic Revival style. Wood's inspiration came from a house he saw in Eldon, Iowa, which had a distinctive Gothic Revival style window. The models were Wood's sister Nan Wood Graham and his dentist, Dr. Byron McKeeby. The painting has become an icon of American art and rural values.",
    technique: "Oil on beaverboard",
    dimensions: "78 cm × 65.3 cm",
    location: "Art Institute of Chicago",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    similarArtworks: [
      {
        title: "Daughters of Revolution",
        artist: "Grant Wood",
        year: "1932",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/500px-Daughters_of_Revolution.jpg-LGVKgwjqtGnYEFICSBHNpJazcuxGoD.jpeg",
      },
      {
        title: "Stone City Iowa",
        artist: "Grant Wood",
        year: "1930",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stone_City_Iowa_1930_Grant_Wood.jpg-CqwGxh8iezNbNcguaxepvWugc5n6nL.jpeg",
      },
      {
        title: "Arbor Day",
        artist: "Grant Wood",
        year: "1932",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arbor%20day-uJHfPoLJeQXuh3GGLm6o5mc0W5kj8R.jpeg",
      },
    ],
  },
}

export default function ArtworkDetailPage({ params }: { params: { id: string } }) {
  const artwork = artworksData[params.id]

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
            Artwork Not Found
          </h1>
          <a href="/artworks" className="text-lg hover:underline" style={{ color: "#8C5E3C" }}>
            Return to Gallery
          </a>
        </div>
      </div>
    )
  }

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
                Gallery
              </a>
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
                Collections
              </a>
            </div>
          </div>
        </nav>

        {/* Artwork Detail */}
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="hover:underline" style={{ color: "#8C5E3C" }}>
                    Home
                  </a>
                </li>
                <li>
                  <span style={{ color: "#B89B7B" }}>/</span>
                </li>
                <li>
                  <a href="/artworks" className="hover:underline" style={{ color: "#8C5E3C" }}>
                    Artworks
                  </a>
                </li>
                <li>
                  <span style={{ color: "#B89B7B" }}>/</span>
                </li>
                <li>
                  <span style={{ color: "#2D2D2D" }}>{artwork.title}</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Artwork Image */}
            <div>
              <div className="rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: "#F9F6F1" }}>
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Artwork Information */}
            <div>
              <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#F9F6F1" }}>
                <div className="mb-4">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#8C5E3C", color: "white" }}
                  >
                    {artwork.category}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  {artwork.title}
                </h1>

                <div className="mb-6">
                  <p className="text-2xl font-semibold mb-2" style={{ color: "#8C5E3C" }}>
                    {artwork.artist}
                  </p>
                  <p className="text-lg" style={{ color: "#B89B7B" }}>
                    {artwork.year}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-lg leading-relaxed" style={{ color: "#2D2D2D" }}>
                    {artwork.detailedDescription}
                  </p>
                </div>

                {/* Artwork Details */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Technique
                    </h3>
                    <p style={{ color: "#8C5E3C" }}>{artwork.technique}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Dimensions
                    </h3>
                    <p style={{ color: "#8C5E3C" }}>{artwork.dimensions}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Current Location
                    </h3>
                    <p style={{ color: "#8C5E3C" }}>{artwork.location}</p>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#6B4226" }}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>

          {/* Similar Artworks */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                Similar Artworks
              </h2>
              <p className="text-lg" style={{ color: "#2D2D2D" }}>
                Explore more works in the {artwork.category} category
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {artwork.similarArtworks.map((similar, index) => (
                <div key={index} className="group cursor-pointer">
                  <div
                    className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: "#F9F6F1" }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={similar.image || "/placeholder.svg"}
                        alt={similar.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                        {similar.title}
                      </h3>
                      <p className="text-lg font-medium mb-1" style={{ color: "#8C5E3C" }}>
                        {similar.artist}
                      </p>
                      <p className="text-sm" style={{ color: "#B89B7B" }}>
                        {similar.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
