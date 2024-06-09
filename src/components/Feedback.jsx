/* eslint-disable no-unused-vars */
import React from 'react'
import review1 from '../assets/1.jpg'
import review2 from '../assets/4.jpeg'

export default function Feedback() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">KATA MEREKA</h2>
            <p className="text-xl text-center mb-12">Alasan Kamu Harus Percaya Dengan Pelayanan Kita</p>
            <div className="flex justify-center gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={review1} alt="Pantai Carita" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Galih Ario Prayudo</div>
                            <p className="text-zinc-700 text-base">
                                Discover Blukumba merupakan perusahaan penyedia layanan petualangan alam terkemuka yang berbasis di Bogor. Kami mendapatkan best price dari Blukumba!
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2">Pantai Carita</span>
                        </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={review2} alt="Cliff View" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Aria Wardana</div>
                            <p className="text-zinc-700 text-base">
                                Discover Blukumba merupakan perusahaan penyedia layanan petualangan alam terkemuka yang berbasis di Bogor. Kami mendapatkan best price dari Blukumba!
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2">Cliff View</span>
                        </div>
                </div>
            </div>
        </div>

    )
}