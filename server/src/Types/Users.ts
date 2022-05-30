interface Users{
    _id?:string;
    name:string;
    email:string;
    password?:string;
    addresses:Array<string>;
    paymentMethods:Array<string>;
    phoneNo:string;
    preferredPaymentMethod:string;
    preferredAddress:string;
}

export default Users;