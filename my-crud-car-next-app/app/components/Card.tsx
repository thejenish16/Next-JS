type cardPropsType = {
    title: string,
    description: string
}

const icons = ["🚗", "➕", "✏️", "📋"];
let i = 0;

export default function Card({ title, description }: cardPropsType) {
    return (
        <div className="group bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 w-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer">
            <h5 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {title}
            </h5>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
