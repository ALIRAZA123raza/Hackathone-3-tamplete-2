
export interface Product {
    _id: string;
    productName : string;
    _type:"product";
    name: string;
    image? : {
        asset :{
            _ref: string;
            _type: "image";

        }
    };
    price : number;
    description?: string;
    quantity: number;
    slug: {
        _type: "slug"; // Type of the slug
        current: string; // Current slug value
    }; 

};

export interface Category {
    _id: string; // Unique identifier for the document
    _type: "category"; // Type of the document
    name: string; // Name of the category
    slug: {
        _type: "slug"; // Type of the slug
        current: string; // Current slug value
    };
    
};

