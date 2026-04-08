type cardPropsType = {
    title: string;
    description: string;
    icon: string;
};

export default function Card({ title, description, icon }: cardPropsType) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 max-w-sm w-full">
            <div className="text-3xl mb-4">{icon}</div>
            <h5 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{title}</h5>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    );
}
