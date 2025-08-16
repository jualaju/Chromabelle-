export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669749219758-4e98ccc89175?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="p-8 rounded-lg shadow-2xl" style={{ backgroundColor: "#F9F6F1" }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
              CHROMABELLE
            </h1>
            <p className="text-lg" style={{ color: "#8C5E3C" }}>
              Welcome Back
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
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
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" name="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm" style={{ color: "#2D2D2D" }}>
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm hover:underline transition-colors duration-300"
                style={{ color: "#8C5E3C" }}
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#6B4226" }}
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "#2D2D2D" }}>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold hover:underline transition-colors duration-300"
                style={{ color: "#8C5E3C" }}
              >
                Sign up here
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
