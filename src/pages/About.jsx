

function About() {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">DiscoverBulukumba.Com</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://placehold.co/150x100" alt="Pantai A" className="rounded-lg shadow-md" />
                            <img src="https://placehold.co/150x100" alt="Pantai B" className="rounded-lg shadow-md" />
                            <img src="https://placehold.co/150x100" alt="Pantai C" className="rounded-lg shadow-md" />
                            <img src="https://placehold.co/150x100" alt="Pantai D" className="rounded-lg shadow-md" />
                            <img src="https://placehold.co/150x100" alt="Pantai E" className="rounded-lg shadow-md" />
                            <img src="https://placehold.co/150x100" alt="Pantai F" className="rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <p className="text-zinc-700 mb-4">
                        Discover Bulukumba merupakan perusahaan penyedia layanan petualangan alam terkemuka yang berbasis di Bogor. Kami secara khusus mengkhususkan diri dalam memberikan pengalaman tak terlupakan melalui beberapa paket seru, termasuk rafting, paintball, off-road, outbound, dan akomodasi di hotel.
                    </p>
                    <p className="text-zinc-700 mb-4">
                        Tim kami terdiri dari para profesional yang berpengalaman dan ahli di bidangnya masing-masing. Kami bangga dapat memberikan pengalaman petualangan yang sesuai dengan ekspektasi Anda dan memberikan kenangan tak terlupakan di tengah keindahan alam yang menakjub. Bergabunglah dengan kami di Green Adventure dan temukan petualangan sejati yang akan membuat Anda terinspirasi dan terpuaskan!
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Lihat Profil Kami</button>
                </div>
            </div>
        </div>
    );
}

export default About;