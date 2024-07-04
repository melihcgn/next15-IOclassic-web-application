import CustomerDetails from "@/components/organisms/CustomerDetails";

export default function DynamicCustomerDetails({params}:{
    params: {customerId: string};
}){
    return <CustomerDetails></CustomerDetails>// <h1>sdfdsfsd {decodeURIComponent(params.customerId)}</h1>
}
