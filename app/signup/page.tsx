export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-12"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Signup Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="p-8 rounded-lg shadow-2xl" style={{ backgroundColor: "#F9F6F1" }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
              CHROMABELLE
            </h1>
            <p className="text-lg" style={{ color: "#8C5E3C" }}>
              Join Our Community
            </p>
          </div>

          {/* Signup Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: "#2D2D2D" }}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    borderColor: "#B89B7B",
                    backgroundColor: "white",
                    color: "#2D2D2D",
                  }}
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: "#2D2D2D" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    borderColor: "#B89B7B",
                    backgroundColor: "white",
                    color: "#2D2D2D",
                  }}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#2D2D2D" }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  borderColor: "#B89B7B",
                  backgroundColor: "white",
                  color: "#2D2D2D",
                }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: "#2D2D2D" }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  borderColor: "#B89B7B",
                  backgroundColor: "white",
                  color: "#2D2D2D",
                }}
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: "#2D2D2D" }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  borderColor: "#B89B7B",
                  backgroundColor: "white",
                  color: "#2D2D2D",
                }}
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" name="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm" style={{ color: "#2D2D2D" }}>
                I agree to the{" "}
                <a href="#" className="hover:underline" style={{ color: "#8C5E3C" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="hover:underline" style={{ color: "#8C5E3C" }}>
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#6B4226" }}
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "#2D2D2D" }}>
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold hover:underline transition-colors duration-300"
                style={{ color: "#8C5E3C" }}
              >
                Sign in here
              </a>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <a href="/" className="text-sm hover:underline transition-colors duration-300" style={{ color: "#B89B7B" }}>
              ← Back to Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
