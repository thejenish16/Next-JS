export type formBookDataType = {
    id: number;
    bookName: string;
    bookAuthor: string;
    bookPrice: number;
    bookGenre: string;
    bookLanguage: string[];
    bookFormat: string;
};

export const bookGenre = ["Fiction", "Non-Fiction", "Science", "History", "Biography", "Technology", "Self-Help"];
export const bookLanguage = ["English", "Hindi", "Marathi", "Gujarati", "Tamil", "Bengali"];
export const bookFormat = ["Hardcover", "Paperback", "E-Book", "Audiobook"];
