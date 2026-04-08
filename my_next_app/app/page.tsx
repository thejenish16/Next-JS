import Card from "./components/Card";
import Slider from "./components/Slider";

export default function Home() {
  const cardViewData = [
    {
      icon: "📚",
      title: "Manage Your Collection",
      description: "Add, edit and delete books from your personal library with ease.",
    },
    {
      icon: "🔍",
      title: "Browse by Genre",
      description: "Filter books by Fiction, Science, History, Technology and more.",
    },
    {
      icon: "🌐",
      title: "Multiple Languages",
      description: "Track books in English, Hindi, Marathi, Tamil and other languages.",
    },
    {
      icon: "📖",
      title: "All Formats Supported",
      description: "Hardcover, Paperback, E-Book or Audiobook — manage them all.",
    },
  ];

  return (
    <>
      <Slider />
      <div className="py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why BookShelf?</h2>
          <p className="text-gray-500 mt-2 text-sm">Everything you need to manage your reading life</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto">
          {cardViewData.map((cardData, index) => (
            <Card key={index} icon={cardData.icon} title={cardData.title} description={cardData.description} />
          ))}
        </div>
      </div>
    </>
  );
}
