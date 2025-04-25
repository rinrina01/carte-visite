"use client";

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
    TEL;TYPE=CELL:0681847346
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
    link.download = "frederick_tran.vcf"; // Name of the file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
    URL.revokeObjectURL(url); // Release the object URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 p-6">
      {/* Glassmorphism Card */}
      <div className="max-w-md w-full bg-stone-900/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-stone-700/30 hover:border-stone-600/50 transition-all duration-300">
        {/* Add Contact Button - Now at the top */}
        <button
          onClick={handleAddContact}
          className="w-full bg-gradient-to-r from-yellow-500/90 to-yellow-600 text-stone-900 py-4 px-6 font-bold text-lg tracking-wide hover:from-yellow-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          AJOUTER AUX CONTACTS
        </button>

        {/* Logo & Slogan Section */}
        <div className="p-8 bg-stone-800/20 text-center border-b border-stone-700/30">
          <div className="w-24 h-24 mx-auto rounded-full bg-stone-700/20 flex items-center justify-center mb-4 overflow-hidden backdrop-blur-sm">
            {/* Logo Image */}
            <Image
              src="/logo.png" // Path to the logo in the public folder
              alt="Ligne Chic Logo"
              width={96}
              height={96}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold uppercase text-stone-100">Frédéric Tran</h1>
          <p className="text-sm text-stone-400 mt-2">Ligne Chic - L&apos;élégance intemporelle</p>
        </div>

        {/* Contact Information Section */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-yellow-500">Frédéric Tran</h2>
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
                frederick@ligne-chic.com
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