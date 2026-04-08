"use client";

import { useState, useEffect } from "react";
import { formBookDataType } from "../utils/type";
import { BookOpen, Edit, Trash2, PlusCircle, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ViewBooks() {
  const [allBooks, setAllBooks] = useState<formBookDataType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("books");
    if (stored) setAllBooks(JSON.parse(stored));
  }, []);

  const deleteBook = (id: number) => {
    console.log("Delete Book ID : ", id);

    const deletedBookData = allBooks.filter((book) => book.id !== id);

    setAllBooks(deletedBookData);

    localStorage.setItem('books', JSON.stringify(deletedBookData));

    toast.success("Book deleted successfully...");
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-indigo-100 p-3 rounded-2xl">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Book Collection</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all your books in one place</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Books", value: allBooks.length, color: "text-indigo-600" },
            { label: "Genres", value: new Set(allBooks.map((b) => b.bookGenre)).size, color: "text-emerald-600" },
            { label: "Authors", value: new Set(allBooks.map((b) => b.bookAuthor)).size, color: "text-violet-600" },
            {
              label: "Avg Price",
              value: allBooks.length > 0 ? `₹${Math.round(allBooks.reduce((s, b) => s + Number(b.bookPrice), 0) / allBooks.length).toLocaleString()}` : "₹0",
              color: "text-orange-600",
            },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Add Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => router.push("/addBook")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-medium transition-all shadow-sm"
          >
            <PlusCircle className="w-4 h-4" /> Add New Book
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {["#", "Book Name", "Author", "Price", "Genre", "Language", "Format", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {allBooks.length > 0 ? (
                  allBooks.map((book, index) => (
                    <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-4 text-sm text-gray-400 font-medium">{index + 1}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="text-sm font-medium text-gray-900">{book.bookName}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-600">{book.bookAuthor}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-emerald-600">₹{Number(book.bookPrice).toLocaleString()}</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">{book.bookGenre}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1">
                          {book.bookLanguage.map((lang, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">{lang}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-medium">{book.bookFormat}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push(`/editBook/${book.id}`)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl text-xs font-medium transition-all"
                          >
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button
                            onClick={() => deleteBook(book.id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl text-xs font-medium transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <AlertCircle className="w-12 h-12 text-gray-300" />
                        <p className="text-gray-500 font-medium">No books in your collection</p>
                        <p className="text-gray-400 text-sm">Add your first book to get started</p>
                        <button
                          onClick={() => router.push("/addBook")}
                          className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-medium transition-all"
                        >
                          <PlusCircle className="w-4 h-4" /> Add Book
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
