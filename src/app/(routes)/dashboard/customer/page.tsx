import React, { Suspense } from 'react'
import CustomerTable from "@/components/organisms/CustomersTable"
import Loading from '../../loading';

const customers = [
    {
        id: 1,
        name: 'Melih Çağan Arı',
        mobile: '+21323242343',
        email: 'selamlar@gmail.com',
        updatedAt: '17 March 2023 9.48 pm',
    },
    {
        id: 2,
        name: 'John Doe',
        mobile: '+1234567890',
        email: 'john.doe@gmail.com',
        recallOn: '25 March 2023 10.00 am',
        updatedAt: '20 March 2023 10.00 am',
    },
    // Add more users as needed
];

const UsersPage: React.FC = () => {
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}></Suspense>
            <CustomerTable customers={customers} />
        </div>
    );
}

export default UsersPage;
