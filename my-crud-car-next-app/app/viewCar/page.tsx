"use client";

import { useState, useEffect } from "react";
import { formCarDataType } from "../utils/type";
import { Car, Building2, Fuel, IndianRupee, Edit, Trash2, AlertCircle, Package, PlusCircle, TrendingUp } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ViewCars() {
  const [allCars, setAllCars] = useState<formCarDataType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) setAllCars(JSON.parse(storedCars));
  }, []);

  const deleteCar = (id: number) => {
    const deletedCarData = allCars.filter(car => car.id !== id);
    setAllCars(deletedCarData);
    localStorage.setItem('cars', JSON.stringify(deletedCarData));
    toast.success("Car deleted successfully...");
  };

  const fuelColor: Record<string, string> = {
    EV: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Petrol: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Diesel: "bg-orange-50 text-orange-700 border-orange-200",
    CNG: "bg-blue-50 text-blue-700 border-blue-200",
    Hybrid: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">Inventory</p>
            <h1 className="text-3xl font-black text-gray-900">Car Inventory</h1>
            <p className="text-gray-400 text-sm mt-1">Manage all your cars in one place</p>
          </div>
          <button onClick={() => router.push('/addCar')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-blue-200 transition-all duration-200 self-start sm:self-auto">
            <PlusCircle className="w-4 h-4" /> Add New Car
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          {[
            { label: "Total Cars", value: allCars.length, icon: Car, color: "text-blue-600", bg: "bg-blue-50", iconBg: "bg-blue-100" },
            { label: "Brands", value: new Set(allCars.map(c => c.carBrand)).size, icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50", iconBg: "bg-emerald-100" },
            { label: "Fuel Types", value: new Set(allCars.map(c => c.carFuel)).size, icon: Fuel, color: "text-purple-600", bg: "bg-purple-50", iconBg: "bg-purple-100" },
            { label: "Avg Price", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50", iconBg: "bg-orange-100", value: allCars.length > 0 ? `₹${Math.round(allCars.reduce((s, c) => s + Number(c.carPrice), 0) / allCars.length).toLocaleString()}` : "₹0" },
          ].map(({ label, value, icon: Icon, color, bg, iconBg }) => (
            <div key={label} className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{label}</p>
                  <p className={`text-2xl font-black ${color}`}>{value}</p>
                </div>
                <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {["No.", "Car Name", "Model", "Price", "Brand", "Color", "Fuel", "Action"].map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {allCars.length > 0 ? allCars.map((car, index) => (
                  <tr key={car.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-5 py-4 text-sm font-bold text-gray-300">{index + 1}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Car className="w-4 h-4 text-blue-500" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{car.carName}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">{car.carModel}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-0.5">
                        <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-600">{Number(car.carPrice).toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold">{car.carBrand}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {car.carColor.map((color, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: color.toLowerCase() }}></div>
                            <span className="text-xs text-gray-500">{color}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1 w-fit ${fuelColor[car.carFuel] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                        <Fuel className="w-3 h-3" />{car.carFuel}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button onClick={() => router.push(`/editCar/${car.id}`)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-all duration-200">
                          <Edit className="w-3 h-3" />Edit
                        </button>
                        <button onClick={() => deleteCar(car.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg text-xs font-semibold transition-all duration-200">
                          <Trash2 className="w-3 h-3" />Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
                          <Package className="w-7 h-7 text-gray-300" />
                        </div>
                        <p className="text-gray-500 font-semibold text-sm">No cars in inventory</p>
                        <p className="text-gray-300 text-xs">Add your first car to get started</p>
                        <button onClick={() => router.push('/addCar')}
                          className="mt-1 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200">
                          <PlusCircle className="w-4 h-4" />Add Your First Car
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
