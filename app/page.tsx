import Image from 'next/image'
import { FaPlane, FaGlobe, FaShieldAlt, FaUsers, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const destinations = [
  {
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    price: '$899',
    days: 7,
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    price: '$1,299',
    days: 10,
  },
  {
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    price: '$699',
    days: 5,
  },
  {
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892',
    price: '$599',
    days: 4,
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    date: 'December 2024',
    review: 'Amazing service! They found us the best deals for our European vacation. Highly recommend Tours and Trips!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    date: 'November 2024',
    review: 'Professional and reliable. Been using their services for 3 years now. Always competitive prices.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt="Travel background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <span className="bg-blue-600 px-4 py-1 rounded-full text-xs font-semibold mb-4">Trusted Since 1995 • 29+ Years of Excellence</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Your Journey Begins Here</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">Exceptional travel services with the most competitive fares for flights. Making travel affordable for everyone.</p>
          <form className="flex flex-col md:flex-row gap-2 md:gap-4 bg-white/90 rounded-lg p-4 shadow-lg max-w-2xl mx-auto mb-4">
            <input type="text" placeholder="From" className="rounded px-3 py-2 border w-full md:w-40" />
            <input type="text" placeholder="To" className="rounded px-3 py-2 border w-full md:w-40" />
            <button type="submit" className="btn-primary w-full md:w-auto">Search Flights</button>
          </form>
          <button className="btn-primary mt-2">Book Your Trip</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-500 mb-12">Comprehensive travel solutions tailored to your needs and budget</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <FaPlane className="text-primary text-4xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flight Booking</h3>
              <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Flight" width={120} height={80} className="rounded mb-2 object-cover" />
              <p className="text-gray-500 text-center">Best prices on domestic and international flights</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <FaGlobe className="text-primary text-4xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Tour Packages</h3>
              <Image src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" alt="Tour" width={120} height={80} className="rounded mb-2 object-cover" />
              <p className="text-gray-500 text-center">Customized travel packages worldwide</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <FaShieldAlt className="text-primary text-4xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Travel Insurance</h3>
              <Image src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99" alt="Insurance" width={120} height={80} className="rounded mb-2 object-cover" />
              <p className="text-gray-500 text-center">Comprehensive coverage for peace of mind</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <FaUsers className="text-primary text-4xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">Group Travel</h3>
              <Image src="https://images.unsplash.com/photo-1502082553048-f009c37129b9" alt="Group" width={120} height={80} className="rounded mb-2 object-cover" />
              <p className="text-gray-500 text-center">Special rates for group bookings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Excellence Section */}
      <section className="py-16">
        <div className="container-custom flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">Since 1995</span>
            <h2 className="text-3xl font-bold mb-4">29+ Years of Travel Excellence</h2>
            <p className="text-gray-600 mb-6">Universal Tours and Travel Inc is a renowned travel agency with a rich history of providing exceptional travel services since 1995. We are dedicated to offering the most competitive fares for flights and making sure that travel is affordable for everyone.</p>
            <div className="flex gap-8">
              <div>
                <span className="text-2xl font-bold text-primary">10K+</span>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-primary">29+</span>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Travel Excellence" width={220} height={140} className="rounded-lg object-cover" />
            <Image src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99" alt="Travel Map" width={220} height={140} className="rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Destinations</h2>
          <p className="text-center text-gray-500 mb-12">Discover amazing places at unbeatable prices</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <div key={dest.name} className="bg-white rounded-lg shadow p-4 flex flex-col">
                <div className="relative h-40 w-full mb-4">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover rounded-lg" />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">{dest.days} days</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{dest.name}</h3>
                <p className="text-primary font-bold mb-2">From {dest.price}</p>
                <button className="btn-primary w-full">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg shadow p-6 max-w-md flex flex-col items-center">
                <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full mb-2 object-cover" />
                <div className="flex gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-2">"{t.review}"</p>
                <span className="font-semibold text-primary">{t.name}</span>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Ready to plan your next adventure? Contact our travel experts today!</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2"><FaPhone /> 732-548-7778</li>
              <li className="flex items-center gap-2"><FaWhatsapp /> 908-240-8450</li>
              <li className="flex items-center gap-2"><FaEnvelope /> info@toursandtrip.com</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Universal Tours and Travel Inc, Edison Metuchen Areas, Middlesex County, New Jersey, USA</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Contact" width={350} height={220} className="rounded-lg object-cover mb-4" />
            <form className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md text-gray-900">
              <div className="flex gap-2 mb-2">
                <input type="text" placeholder="First Name" className="rounded px-3 py-2 border w-1/2" />
                <input type="text" placeholder="Last Name" className="rounded px-3 py-2 border w-1/2" />
              </div>
              <input type="email" placeholder="Email Address" className="rounded px-3 py-2 border w-full mb-2" />
              <input type="text" placeholder="Phone Number" className="rounded px-3 py-2 border w-full mb-2" />
              <input type="text" placeholder="Travel Destination" className="rounded px-3 py-2 border w-full mb-2" />
              <textarea placeholder="Tell us about your travel plans..." className="rounded px-3 py-2 border w-full mb-2" rows={3}></textarea>
              <button className="btn-primary w-full" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 