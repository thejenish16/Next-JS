export type formCarDataType = {
    id: number,
    carName: string,
    carModel: string,
    carPrice: number,
    carBrand: string,
    carColor: string[],
    carFuel: string
}

export const carBrand = [
    "Maruti Suzuki",
    "Hyundai",
    "TATA Motors",
    "Mahindra",
    "Kia",
    "Toyota",
    "Honda",
    "MG Motor",
    "Volkswagen",
    "Skoda",
    "Renault",
    "Nissan",
    "Ford",
    "BMW",
    "Mercedes-Benz"
];
export const carColor = ["Black", "White", "Silver"];
export const carFuel = ["Petrol", "Diesel", "EV", "CNG", "Hybrid"];
