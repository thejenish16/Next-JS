import Card from "./components/Card";
import Slider from "./components/Slider";

export default function Home() {
  const cardViewData = [
    { title: "Browse 100+ Cars", description: "Explore a wide range of cars from top brands like TATA, Maruti Suzuki, Mahindra and more." },
    { title: "Add Your Car", description: "Easily add your car to the inventory with all details like brand, model, price and fuel type." },
    { title: "Edit Car Details", description: "Update car information anytime with our simple edit form." },
    { title: "Manage Inventory", description: "View, edit and delete cars from your inventory with ease." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Slider />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Why AutoHub</p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Everything You Need</h2>
            <p className="text-gray-400 max-w-sm mx-auto text-sm">Manage your entire car inventory from one powerful dashboard.</p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {cardViewData.map((cardData, index) => (
              <Card key={index} title={cardData.title} description={cardData.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
