import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 p-6">
      {/* Glassmorphism Card */}
      <div className="max-w-md w-full bg-stone-900/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-stone-700/30 hover:border-stone-600/50 transition-all duration-300">
        {/* Logo & Slogan Section */}
        <div className="p-8 bg-stone-800/20 rounded-t-3xl text-center border-b border-stone-700/30">
          <div className="w-24 h-24 mx-auto rounded-full bg-stone-700/20 flex items-center justify-center mb-4 overflow-hidden backdrop-blur-sm">
            {/* Logo Image */}
            <Image
              src="/logo.png" // Path to the logo in the public folder
              alt="Ligne Chic Logo"
              width={96} // Adjust based on your logo's aspect ratio
              height={96}
              className="object-cover rounded-full" // Ensures the image fits well
            />
          </div>
          <h1 className="text-3xl font-bold uppercase text-stone-100">Ligne Chic</h1>
          <p className="text-sm text-stone-400 mt-2">L'élégance intemporelle</p>
        </div>

        {/* Contact Information Section */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-yellow-500">Frederick Tran</h2>
            <p className="text-stone-400">Architecte d'intérieur designer - Co-gérant associé</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-stone-400">Adresse</p>
              <p className="text-stone-300">6 rue d'armaillé 75017 Paris</p>
            </div>

            {/* Phone Number with Click-to-Call */}
            <div>
              <p className="text-sm text-stone-400">Téléphone</p>
              <a
                href="tel:+33681847346"
                className="text-stone-300 hover:text-yellow-500 transition-colors duration-200"
              >
                06 81 84 73 46
              </a>
            </div>

            {/* Email with Click-to-Email */}
            <div>
              <p className="text-sm text-stone-400">Email</p>
              <a
                href="mailto:frederick.tran@lignechic.com"
                className="text-stone-300 hover:text-yellow-500 transition-colors duration-200"
              >
                frederick.tran@lignechic.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="p-4 bg-stone-800/20 text-center border-t border-stone-700/30">
          <p className="text-xs text-stone-400">© 2023 Ligne Chic. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}