
export default {
    name : "order",
    type : "document",
    title: "order",
    fields: [
        {
            name: "firstName",
            tital:"firstName",
            type:"string"
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string"
        },
        {
            name: "address",
            title:"address",
            type: "string"
        },
        {
            name: "city",
            title:"city",
            type:"string",
        },
        {
            name: "zipCode",
            title:"Zip Code",
            type:"string",
        },
        {
            name: "phone",
            title:"phone",
            type:"string",
        },
        {
            name: "email",
            title:"Email",
            type:"string",
        },
        {
           name : "discount",
           type: "number",
           title:"Discount"
        },
        {
            name: "cartItem",
            title:"Cart Item",
            type:"array",
            of :[{type : 'reference', to : {type : 'product'}}]
        },
        {
            name: "total",
            title:"Total",
            type:"number",
        },
        {
            name: "status",
            title:"Order Status",
            type:"string",
            Options :{
                list :[
                    {title : 'Pending', value: 'pending'},
                    {title : 'Success', value: 'success'},
                    {title : 'Dispatch', value: 'dispatch'},
                ],
                layout: 'radio'
            },
            initialValue : 'pending'
        },

    ]
}