export interface Product {
    _id: string;
    productName: string;
    _type: "product";
    name: string;
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    quantity: number;
    slug: {
        _type: "slug";
        current: string;
    };
    category: {    // ✅ Yahan category object hai
        name: string;
    };
}
