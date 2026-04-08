"use client";

import { useEffect, useState, useRef } from "react";
import { carBrand, carColor, carFuel, formCarDataType } from "../utils/type";
import { toast } from "react-toastify";
import { ChevronDown, Check } from "lucide-react";

export default function AddCar() {
  const [formCarData, setFormCarData] = useState<formCarDataType>({
    id: Math.floor(Math.random() * 10000),
    carName: "",
    carModel: "",
    carPrice: 0,
    carBrand: "",
    carColor: [],
    carFuel: ""
  });

  const [errorForm, setErrorForm] = useState<any>({});
  const [allCars, setAllCars] = useState<formCarDataType[]>(JSON.parse(localStorage.getItem('cars') || '[]'));
  const [brandOpen, setBrandOpen] = useState(false);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (allCars) localStorage.setItem('cars', JSON.stringify(allCars));
  }, [allCars]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (brandRef.current && !brandRef.current.contains(e.target as Node)) setBrandOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const validation = () => {
    const error: any = {};
    if (!formCarData.carName.trim()) error.carName = "car name is required...";
    if (!formCarData.carModel.trim()) error.carModel = "car model is required...";
    if (!formCarData.carPrice) error.carPrice = "car price is required...";
    else if (formCarData.carPrice <= 0) error.carPrice = "car price is invalid...";
    if (!formCarData.carBrand.trim()) error.carBrand = "car brand is required...";
    if (formCarData.carColor.length === 0) error.carColor = "car color is required...";
    if (!formCarData.carFuel.trim()) error.carFuel = "car fuel is required...";
    setErrorForm(error);
    return Object.keys(error).length === 0;
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!validation()) return;
    setAllCars(cars => [...cars, formCarData]);
    toast.success("Car added successfully...");
    setFormCarData({ id: Math.floor(Math.random() * 10000), carName: "", carModel: "", carPrice: 0, carBrand: "", carColor: [], carFuel: "" });
  };

  const onHandleChange = (event: any) => {
    const { name, value } = event.target;
    setFormCarData(carData => ({ ...carData, [name]: name === 'carPrice' ? Number(value) : value }));
  };

  const onColorChange = (event: any) => {
    const { value, checked } = event.target;
    setFormCarData(carData => ({
      ...carData,
      carColor: checked ? [...carData.carColor, value] : carData.carColor.filter(c => c !== value)
    }));
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 bg-white border ${err ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} text-gray-900 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400`;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Inventory</p>
          <h1 className="text-3xl font-black text-gray-900 mb-1">Add New Car</h1>
          <p className="text-gray-400 text-sm">Fill in the details to register a car.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 space-y-5">

          {/* Car Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Car Name <span className="text-red-500">*</span></label>
            <input type="text" name="carName" id="carName" value={formCarData.carName} onChange={onHandleChange}
              placeholder="e.g., Nexon, Creta, Seltos" className={inputCls(errorForm.carName)} />
            {errorForm.carName && <p className="text-red-500 text-xs mt-1">{errorForm.carName}</p>}
          </div>

          {/* Car Model */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Car Variant / Model <span className="text-red-500">*</span></label>
            <input type="text" name="carModel" id="carModel" value={formCarData.carModel} onChange={onHandleChange}
              placeholder="e.g., XZ Plus, S Plus, HTX" className={inputCls(errorForm.carModel)} />
            {errorForm.carModel && <p className="text-red-500 text-xs mt-1">{errorForm.carModel}</p>}
          </div>

          {/* Car Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Selling Price (₹) <span className="text-red-500">*</span></label>
            <input type="number" name="carPrice" id="carPrice" value={formCarData.carPrice || ""} onChange={onHandleChange}
              placeholder="e.g., 850000" className={inputCls(errorForm.carPrice)} />
            {errorForm.carPrice && <p className="text-red-500 text-xs mt-1">{errorForm.carPrice}</p>}
          </div>

          {/* Car Brand - Custom Dropdown */}
          <div ref={brandRef}>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Manufacturer / Brand <span className="text-red-500">*</span></label>
            <button type="button" onClick={() => setBrandOpen(!brandOpen)}
              className={`w-full px-4 py-3 bg-white border ${errorForm.carBrand ? 'border-red-400 ring-1 ring-red-400' : brandOpen ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} rounded-xl flex items-center justify-between text-sm transition-all`}>
              <span className={formCarData.carBrand ? 'text-gray-900' : 'text-gray-400'}>
                {formCarData.carBrand || 'Select Manufacturer'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${brandOpen ? 'rotate-180' : ''}`} />
            </button>
            {brandOpen && (
              <div className="mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10 relative">
                <div className="max-h-48 overflow-y-auto">
                  {carBrand.map((brand, index) => (
                    <button type="button" key={index}
                      onClick={() => { onHandleChange({ target: { name: 'carBrand', value: brand } }); setBrandOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${formCarData.carBrand === brand ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700'}`}>
                      {brand}
                      {formCarData.carBrand === brand && <Check className="w-4 h-4 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {errorForm.carBrand && <p className="text-red-500 text-xs mt-1">{errorForm.carBrand}</p>}
          </div>

          {/* Car Color */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Available Colors <span className="text-red-500">*</span></label>
            <div className="flex gap-3">
              {carColor.map((color, index) => (
                <label key={index} className={`flex-1 flex items-center gap-2.5 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${formCarData.carColor.includes(color) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                  <input type="checkbox" name="carColor" value={color} checked={formCarData.carColor.includes(color)} onChange={onColorChange} className="hidden" />
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 shadow-sm" style={{ backgroundColor: color.toLowerCase() }}></div>
                  <span className={`text-sm font-medium ${formCarData.carColor.includes(color) ? 'text-blue-700' : 'text-gray-600'}`}>{color}</span>
                </label>
              ))}
            </div>
            {errorForm.carColor && <p className="text-red-500 text-xs mt-1">{errorForm.carColor}</p>}
          </div>

          {/* Car Fuel */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Type <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-5 gap-2">
              {carFuel.map((fuel, index) => (
                <label key={index} className={`flex items-center justify-center py-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-xs font-semibold ${formCarData.carFuel === fuel ? 'border-blue-500 bg-blue-600 text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`}>
                  <input type="radio" name="carFuel" value={fuel} checked={formCarData.carFuel === fuel} onChange={onHandleChange} className="hidden" />
                  {fuel}
                </label>
              ))}
            </div>
            {errorForm.carFuel && <p className="text-red-500 text-xs mt-1">{errorForm.carFuel}</p>}
          </div>

          <button type="submit" onClick={onSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-md shadow-blue-200 mt-2">
            Add Car to Inventory
          </button>
        </div>
      </div>
    </div>
  );
}
