import data from './amulets-data.json';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-10">Old Siam Amulet Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((amulet: any) => (
          <div key={amulet.id} className="border p-5 rounded-lg shadow-md">
            {/* ส่วนที่เพิ่ม: ดึงรูปภาพจากโฟลเดอร์ public */}
            <img 
              src={amulet.image} 
              alt={amulet.name} 
              className="w-full h-64 object-cover mb-4 rounded" 
            />
            
            <h2 className="text-xl font-bold mb-2">{amulet.name}</h2>
            <p className="text-gray-600 mb-2">{amulet.description}</p>
            <p className="font-bold text-lg mb-4">{amulet.price}</p>
            
            {amulet.hasCertificate && (
              <p className="text-green-600 text-sm mb-2">Certificate Included</p>
            )}

            <button
              className="snipcart-add-item bg-blue-600 text-white px-4 py-2 rounded"
              data-item-id={amulet.id}
              data-item-name={amulet.name}
              data-item-price={amulet.price}
              data-item-image={amulet.image}
              data-item-description={amulet.description}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}