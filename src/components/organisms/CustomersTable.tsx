import React from 'react'
import Link from 'next/link'

interface Customer {
    id: number;
    name: string;
    mobile: string;
    email: string;
    recallOn?: string;
    updatedAt: string;
}

interface CustomerTableProps {
    customers: Customer[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
    return (
        <div id="CustomerTable" className="m-4 w-full border divide-y divide-gray-200    ">
            <div id='header' className="flex justify-between px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-headerBgColor">
                <div>Customers</div>
                <div>
                    <button className="icon-button"></button>
                </div>
            </div>
            <div id='body' className="divide-y divide-gray-200">
                <div className="flex justify-between px-4 py-4">
                    <div className="font-bold w-1/5">Name</div>
                    <div className="font-bold w-1/5">Mobile</div>
                    <div className="font-bold w-1/5">Email</div>
                    <div className="font-bold w-1/5">Recall On</div>
                    <div className="font-bold w-1/5">Updated At</div>
                </div>
                {customers.map(customer => (
                    <div key={customer.id} className="hover:bg-gray-dark">
                        <Link href={`/dashboard/customer/${customer.name}`} className="block">
                            <div className="flex justify-between px-2 py-2">
                                <div className='w-1/5'>{customer.name}</div>
                                <div className='w-1/5'>{customer.mobile}</div>
                                <div className='w-1/5'>{customer.email}</div>
                                <div className='w-1/5'>{customer.recallOn || 'N/A'}</div>
                                <div className='w-1/5'>{customer.updatedAt}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerTable;
