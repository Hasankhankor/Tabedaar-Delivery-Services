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
              <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-[#0a4da2] sm:text-5xl md:text-6xl">
                    Fast. Reliable. <span className="text-[#0a4da2]">Tabedaar.</span>
                  </h1>
                  <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your trusted delivery partner in the city. Quick, reliable, and always on time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center md:justify-start">
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

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-[#0a4da2]/10 text-[#0a4da2]">
                  Our Offerings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a4da2]">
                  Services We Provide
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From food to groceries, we deliver everything you need right to your doorstep.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {/* Fast Food Delivery */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M17 11.6V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4.4" />
                      <path d="M18 7v14" />
                      <path d="M14 10h8" />
                      <path d="M9 13v-3" />
                      <path d="M6 13v-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🍔 Fast Food Delivery</h3>
                </div>
                <p className="text-gray-500">
                  Get your favorite fast food delivered hot and fresh to your doorstep in minutes.
                </p>
              </div>

              {/* Vegetables & Fruits */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M2 22c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2.5 1.5 4 1.5s2.5-1.5 4-1.5 2.5 1.5 4 1.5 2.5-1.5 3.5-2.5" />
                      <path d="M2 17c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2.5 1.5 4 1.5s2.5-1.5 4-1.5 2.5 1.5 4 1.5 2.5-1.5 3.5-2.5" />
                      <path d="M2 12c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2.5 1.5 4 1.5s2.5-1.5 4-1.5 2.5 1.5 4 1.5 2.5-1.5 3.5-2.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🥦 Vegetables & Fruits</h3>
                </div>
                <p className="text-gray-500">Fresh, seasonal produce delivered from local markets to your kitchen.</p>
              </div>

              {/* Milk & Dairy Products */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M8 2h8" />
                      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🥛 Milk & Dairy Products</h3>
                </div>
                <p className="text-gray-500">
                  Daily essentials like milk, yogurt, and cheese delivered fresh to your home.
                </p>
              </div>

              {/* Fresh Meat Delivery */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="m8 14 2 2" />
                      <path d="m12 12 4 4" />
                      <path d="m16 10 2 2" />
                      <path d="m3 21 8-8" />
                      <path d="m15 3 6 6" />
                      <path d="m18 13-5-5" />
                      <path d="M13.5 7.5 17 4" />
                      <path d="M14 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🥩 Fresh Meat Delivery</h3>
                </div>
                <p className="text-gray-500">
                  Quality cuts of meat sourced from trusted suppliers, delivered hygienically.
                </p>
              </div>

              {/* Medicines */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="m9 12 6 6" />
                      <path d="m9 18 6-6" />
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">💊 Medicines</h3>
                </div>
                <p className="text-gray-500">Essential medications delivered quickly when you need them most.</p>
              </div>

              {/* Stationery Items */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">📚 Stationery Items</h3>
                </div>
                <p className="text-gray-500">Office and school supplies delivered to your home or workplace.</p>
              </div>

              {/* Grocery Delivery */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M2 3h2l.6 6a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4v-6H8" />
                      <circle cx="10" cy="20" r="1" />
                      <circle cx="18" cy="20" r="1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🛍️ Grocery Delivery</h3>
                </div>
                <p className="text-gray-500">
                  Complete grocery shopping delivered to your doorstep, saving you time and effort.
                </p>
              </div>

              {/* Loader Rickshaw */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <path d="M9 8h6" />
                      <path d="M8 12h8" />
                      <path d="M11 16h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">🛻 Loader Rickshaw</h3>
                </div>
                <p className="text-gray-500">
                  Transport goods and small furniture with our reliable loader rickshaw service.
                </p>
              </div>

              {/* Pickup & Drop */}
              <div className="flex flex-col p-6 space-y-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className="bg-yellow-500 text-xs font-bold px-3 py-1 text-white transform rotate-45 translate-x-2 -translate-y-1">
                    SOON
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0a4da2]/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a4da2]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M9.1 12a2.1 2.1 0 0 1 0-4.2" />
                      <path d="M14.9 12a2.1 2.1 0 0 0 0-4.2" />
                      <path d="M12 12v9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">📦 Pickup & Drop</h3>
                </div>
                <p className="text-gray-500">
                  Our upcoming service for convenient pickup and delivery of your items across the city.
                </p>
              </div>
            </div>
          </div>
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
                  <span>+92 341 7713938</span>
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
