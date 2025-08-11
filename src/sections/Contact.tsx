export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "iamprashlesh@gmail.com",
      href: "mailto:iamprashlesh@gmail.com",
      color: "#8A2BE2"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/prashlesh-pratap-singh",
      href: "https://linkedin.com/in/prashlesh-pratap-singh",
      color: "#4F46E5"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/prashlesh",
      href: "https://github.com/prashlesh",
      color: "#60A5FA"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9918190536",
      href: "tel:+919918190536",
      color: "#22C55E"
    },
    {
      icon: "🌍",
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
        </div>

        {/* Contact Card - Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="bg-card-bg border border-border rounded-2xl p-8 backdrop-blur-sm mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-primary-text text-center">
                Let's Start a Conversation
              </h3>
              <p className="text-secondary-text mb-8 leading-relaxed text-center">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always excited to connect with fellow cosmic explorers.
              </p>

              {/* Contact Methods */}
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-200 group border border-transparent hover:border-gray-700"
                  >
                    <div className="text-2xl mr-4">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-secondary-text">
                        {method.label}
                      </div>
                      <div className="text-primary-text font-medium group-hover:text-accent-purple transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <div 
                      className="w-2 h-2 rounded-full opacity-60"
                      style={{ backgroundColor: method.color }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Stats - Better aligned */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "∞", label: "Possibilities" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card-bg border border-border rounded-xl p-4 text-center backdrop-blur-sm hover:border-accent-purple/50 transition-colors"
                >
                  <div className="text-xl font-bold text-primary-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-secondary-text font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
