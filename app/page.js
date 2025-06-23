"use client"

import Image from "next/image";

export default function Home() {
  // Function to generate and trigger the .vcf file download
  const handleAddContact = () => {
    // vCard content
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:TRAN;Frederick;;;
FN:Frederick Tran
ORG:Frederick Tran - Ligne Chic
TITLE:Architecte d'intérieur designer
TEL;TYPE=CELL:0670286463
EMAIL:frederick@ligne-chic.com
ADR;TYPE=WORK:;;6 rue d'Armaillé;Paris;;75017;France
NOTE:L'élégance intemporelle
END:VCARD
    `.trim();

    // Create a Blob with the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Frederick_tran.vcf"; // Name of the file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
    URL.revokeObjectURL(url); // Release the object URL
  };

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
          <h1 className="text-3xl font-bold uppercase text-stone-100">An Tran</h1>
          <p className="text-sm text-stone-400 mt-2">Ligne Chic - L&apos;élégance intemporelle</p>
        </div>

        {/* Contact Information Section */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-yellow-500">An Tran</h2>
            <p className="text-stone-400">Architecte d&apos;intérieur designer</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-stone-400">Adresse</p>
              <p className="text-stone-300">6 rue d&apos;Armaillé 75017 Paris</p>
            </div>

            {/* Phone Number with Click-to-Call */}
            <div>
              <p className="text-sm text-stone-400">Téléphone</p>
              <a
                href="tel:+33681847346"
                className="text-stone-300 hover:text-yellow-500 transition-colors duration-200"
              >
                06 70 28 64 63
              </a>
            </div>

            {/* Email with Click-to-Email */}
            <div>
              <p className="text-sm text-stone-400">Email</p>
              <a
                href="mailto:frederick.tran@lignechic.com"
                className="text-stone-300 hover:text-yellow-500 transition-colors duration-200"
              >
                frederick@ligne-chic.com
              </a>
            </div>
          </div>

          {/* Add Contact Button */}
          <button
            onClick={handleAddContact}
            className="w-full mt-8 bg-yellow-500/10 text-yellow-500 py-3 px-6 rounded-lg hover:bg-yellow-500/20 transition-colors duration-200 border border-yellow-500/20"
          >
            Ajouter aux contacts
          </button>
        </div>

        {/* Footer Section */}
        <div className="p-4 bg-stone-800/20 text-center border-t border-stone-700/30">
          <p className="text-xs text-stone-400">© 2023 Ligne Chic. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}
