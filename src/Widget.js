export default function Widget() {
    return (
        <div className="container mx-auto">
            
            <div className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill" style="background-image: url('https://placehold.co/1200x500')">
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">Services</p>
                    <p className="text-3xl font-bold">Hello Autumn</p>
                    <p className="text-2xl mb-10 leading-none">San Francisco</p>
                    <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-purple-700">Subscribe</a>
                </div>
            </div>
        
            
            <div className="bg-white p-4 shadow-md">
                <div className="flex items-center">
                    <input className="w-full p-2 mr-4" type="text" placeholder="Search" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
                </div>
            </div>
        
            
            <div className="py-5">
                <h2 className="font-bold text-2xl px-5">Explore Popular Tours</h2>
                <div className="grid grid-cols-3 gap-4 px-5">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-32 sm:h-48 object-cover" src="https://placehold.co/600x400" alt="Tour" />
                        <div className="p-4">
                            <p className="text-lg font-semibold">Tour Name</p>
                            <p className="text-zinc-600">2 hours from $50</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        
            
            <div className="py-5 bg-zinc-100">
                <h2 className="font-bold text-2xl px-5">Explore Popular Cities</h2>
                <div className="grid grid-cols-4 gap-4 px-5">
                    <button className="bg-white shadow-lg rounded-lg p-4 font-semibold">City Name</button>
                    
                </div>
            </div>
        
            
            <div className="py-5">
                <h2 className="font-bold text-2xl px-5">Services</h2>
                <div className="grid grid-cols-3 gap-4 px-5">
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img className="mx-auto w-16" src="https://placehold.co/100" alt="Service" />
                        <p className="mt-4 font-semibold">Service Name</p>
                        <p className="text-sm text-zinc-600">Description</p>
                    </div>
                    
                </div>
            </div>
        
            
            <footer className="bg-zinc-800 text-white p-5">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <h5 className="font-bold">About</h5>
                        <ul className="list-none mt-4">
                            <li><a href="#" className="text-zinc-400 hover:text-zinc-100">Company</a></li>
                            <li><a href="#" className="text-zinc-400 hover:text-zinc-100">Contact</a></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        </div>
        
    )
}