"use client";

import { useEffect, useState } from "react";
import { bookGenre, bookLanguage, bookFormat, formBookDataType } from "../utils/type";
import { toast } from "react-toastify";

export default function AddBook() {
  const [formBookData, setFormBookData] = useState<formBookDataType>({
    id: Math.floor(Math.random() * 10000),
    bookName: "",
    bookAuthor: "",
    bookPrice: 0,
    bookGenre: "",
    bookLanguage: [],
    bookFormat: "",
  });

  const [errorForm, setErrorForm] = useState<any>({});
  const [allBooks, setAllBooks] = useState<formBookDataType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('books');
    if (stored) {
      setAllBooks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (allBooks.length > 0) {
      localStorage.setItem('books', JSON.stringify(allBooks));
    }
  }, [allBooks]);

  const onSubmit = (event: any) => {

    event.preventDefault();

    console.log("Form Submit.....");
    if (!validation()) {
      return;
    };

    console.log("Book : ", formBookData);
    setAllBooks(books => [...books, formBookData]);

    toast.success("Book added successfully...");

    // Reset Form
    setFormBookData({
      id: Math.floor(Math.random() * 10000),
      bookName: "",
      bookAuthor: "",
      bookPrice: 0,
      bookGenre: "",
      bookLanguage: [],
      bookFormat: "",
    });
  };

  const onHandleChange = (event: any) => {

    // console.log(event.target.value);
    // console.log(event.target.name);

    const { name, value } = event.target;

    setFormBookData(data => ({ ...data, [name]: (name === 'bookPrice') ? Number(value) : value }));
  }

  const onLanguageChange = (event: any) => {
    const { value, checked } = event.target;

    setFormBookData(data => ({ ...data, bookLanguage: (checked) ? [...data.bookLanguage, value] : data.bookLanguage.filter((lang) => lang !== value) }))

  }

  const validation = () => {
    const error: any = {};

    if (!formBookData.bookName.trim()) {
      error.bookName = "book name is required...";
    }

    if (!formBookData.bookAuthor.trim()) {
      error.bookAuthor = "book author is required...";
    }

    if (!formBookData.bookPrice) {
      error.bookPrice = "book price is required...";
    } else if (formBookData.bookPrice <= 0) {
      error.bookPrice = "book price is invalid...";
    }

    if (!formBookData.bookGenre.trim()) {
      error.bookGenre = "book genre is required...";
    }

    if (formBookData.bookLanguage.length === 0) {
      error.bookLanguage = "book language is required...";
    }

    if (!formBookData.bookFormat.trim()) {
      error.bookFormat = "book format is required...";
    }

    setErrorForm(error);

    return Object.keys(error).length === 0; // false
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Add New Book</h1>
          <p className="text-gray-500 text-sm mt-1">Fill in the details to add a book to your collection</p>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-5">
          {/* Book Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Book Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="bookName"
              value={formBookData.bookName}
              onChange={onHandleChange}
              placeholder="e.g., Atomic Habits"
              className={`w-full px-4 py-3 bg-gray-50 border ${errorForm.bookName ? "border-red-400" : "border-gray-200"} rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all`}
            />
            {errorForm.bookName && <p className="text-red-500 text-xs">{errorForm.bookName}</p>}
          </div>

          {/* Book Author */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Author <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="bookAuthor"
              value={formBookData.bookAuthor}
              onChange={onHandleChange}
              placeholder="e.g., James Clear"
              className={`w-full px-4 py-3 bg-gray-50 border ${errorForm.bookAuthor ? "border-red-400" : "border-gray-200"} rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all`}
            />
            {errorForm.bookAuthor && <p className="text-red-500 text-xs">{errorForm.bookAuthor}</p>}
          </div>

          {/* Book Price */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Price (₹) <span className="text-red-500">*</span></label>
            <input
              type="number"
              name="bookPrice"
              value={formBookData.bookPrice}
              onChange={onHandleChange}
              placeholder="e.g., 499"
              className={`w-full px-4 py-3 bg-gray-50 border ${errorForm.bookPrice ? "border-red-400" : "border-gray-200"} rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all`}
            />
            {errorForm.bookPrice && <p className="text-red-500 text-xs">{errorForm.bookPrice}</p>}
          </div>

          {/* Book Genre */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Genre <span className="text-red-500">*</span></label>
            <select
              name="bookGenre"
              value={formBookData.bookGenre}
              onChange={onHandleChange}
              className={`w-full px-4 py-3 bg-gray-50 border ${errorForm.bookGenre ? "border-red-400" : "border-gray-200"} rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all`}
            >
              <option value="">Select a genre</option>
              {bookGenre.map((g, i) => <option key={i} value={g}>{g}</option>)}
            </select>
            {errorForm.bookGenre && <p className="text-red-500 text-xs">{errorForm.bookGenre}</p>}
          </div>

          {/* Book Language */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Language <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {bookLanguage.map((lang, i) => (
                <label key={i} className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                  <input
                    type="checkbox"
                    value={lang}
                    checked={formBookData.bookLanguage.includes(lang)}
                    onChange={onLanguageChange}
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm text-gray-700">{lang}</span>
                </label>
              ))}
            </div>
            {errorForm.bookLanguage && <p className="text-red-500 text-xs">{errorForm.bookLanguage}</p>}
          </div>

          {/* Book Format */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Format <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {bookFormat.map((fmt, i) => (
                <label key={i} className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                  <input
                    type="radio"
                    name="bookFormat"
                    value={fmt}
                    checked={formBookData.bookFormat === fmt}
                    onChange={onHandleChange}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-sm text-gray-700">{fmt}</span>
                </label>
              ))}
            </div>
            {errorForm.bookFormat && <p className="text-red-500 text-xs">{errorForm.bookFormat}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm shadow-sm"
            >
              Add to Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
