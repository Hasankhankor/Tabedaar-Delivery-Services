import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock, CreditCard, Navigation, Phone, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tabedaar Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-[#0a4da2]">Tabedaar</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-[#0a4da2] transition-colors">
              Features
            </Link>
            <Link href="#app" className="text-sm font-medium text-gray-600 hover:text-[#0a4da2] transition-colors">
              Download App
            </Link>
            <Link href="#riders" className="text-sm font-medium text-gray-600 hover:text-[#0a4da2] transition-colors">
              Become a Rider
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#0a4da2] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <span className="sr-only">Toggle menu</span>
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-[#0a4da2] sm:text-5xl md:text-6xl">
                    Fast. Reliable. <span className="text-[#0a4da2]">Tabedaar.</span>
                  </h1>
                  <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your trusted delivery partner in the city. Quick, reliable, and always on time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center">
                  <Button className="bg-[#0a4da2] text-white hover:bg-[#0a4da2]/90 rounded-full px-6">
                    Download App
                  </Button>
                  <Button
                    variant="outline"
                    className="text-[#0a4da2] border-[#0a4da2] hover:bg-[#0a4da2]/10 rounded-full px-6"
                  >
                    Become a Rider
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-[#0a4da2]/10 rounded-full blur-3xl transform -translate-y-4 translate-x-4 opacity-30"></div>
                  <Image
                    src="/logo.png"
                    alt="Tabedaar Delivery"
                    width={400}
                    height={400}
                    className="relative object-contain z-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-[#0a4da2]/10 text-[#0a4da2]">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a4da2]">
                  Why Choose Tabedaar
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the best delivery service in town with our dedicated team of riders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-xl shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                  <MapPin className="w-6 h-6 text-[#0a4da2]" />
                </div>
                <h3 className="text-xl font-bold">Reliable Riders</h3>
                <p className="text-gray-500">
                  Our riders are trained professionals who ensure your packages arrive safely.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-xl shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                  <Clock className="w-6 h-6 text-[#0a4da2]" />
                </div>
                <h3 className="text-xl font-bold">Quick Deliveries</h3>
                <p className="text-gray-500">
                  We pride ourselves on our speed and efficiency in delivering your packages.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-xl shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                  <CreditCard className="w-6 h-6 text-[#0a4da2]" />
                </div>
                <h3 className="text-xl font-bold">Cash on Delivery</h3>
                <p className="text-gray-500">
                  Pay when you receive your package with our convenient cash on delivery option.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-xl shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                  <Navigation className="w-6 h-6 text-[#0a4da2]" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Tracking</h3>
                <p className="text-gray-500">Track your package in real-time with our user-friendly mobile app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="app" className="py-24 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-[#0a4da2]/10 text-[#0a4da2]">
                    Mobile App
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a4da2]">
                    Download Our App
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get the Tabedaar app on your phone for the best delivery experience. Track your packages, place
                    orders, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button className="bg-[#0a4da2] text-white hover:bg-[#0a4da2]/90 rounded-full px-6">
                    Google Play
                  </Button>
                  <Button className="bg-[#0a4da2] text-white hover:bg-[#0a4da2]/90 rounded-full px-6">App Store</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-center">
                      QR Code
                      <br />
                      Scan to download
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Rider Section */}
        <section id="riders" className="py-24 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-[#0a4da2]/10 rounded-full blur-3xl transform -translate-y-4 translate-x-4 opacity-30"></div>
                  <Image
                    src="/rider-illustration.png"
                    alt="Become a Rider"
                    width={400}
                    height={400}
                    className="relative object-contain z-10"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 order-1 md:order-2">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-[#0a4da2]/10 text-[#0a4da2]">
                    Join Our Team
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a4da2]">
                    Become a Rider
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our team of professional riders and earn competitive pay while enjoying flexible hours.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0a4da2]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0a4da2]" />
                    </div>
                    <span className="text-gray-700">Competitive pay rates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0a4da2]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0a4da2]" />
                    </div>
                    <span className="text-gray-700">Flexible working hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0a4da2]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0a4da2]" />
                    </div>
                    <span className="text-gray-700">Training and support provided</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0a4da2]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0a4da2]" />
                    </div>
                    <span className="text-gray-700">Be your own boss</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-[#0a4da2] text-white hover:bg-[#0a4da2]/90 rounded-full px-6">
                    Join as a Rider
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#0a4da2] text-white">
        <div className="container px-4 py-16 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Image src="/logo.png" alt="Tabedaar Logo" width={40} height={40} className="object-contain" />
                </div>
                <span className="text-2xl font-bold">Tabedaar</span>
              </div>
              <p className="mt-4 text-sm text-white/80">
                Your trusted delivery partner in the city. Quick, reliable, and always on time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f5e6c8]" />
                  <span>+92 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#f5e6c8]" />
                  <span>info@tabedaar.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex gap-4 mt-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-12 border-t border-white/10">
            <p className="text-center text-sm text-white/80">
              &copy; 2025 Tabedaar Delivery Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
