"use client"
import React from 'react';
import Table from '../molecules/Table';
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

// Define interfaces for your data structures
interface CustomerData {
    personalDetails: string[][];
    regions: string[][];
    consultations: string[][];
    notes: string[][];
    orders: string[][];
    healthFunds: string[][];
    prescriptions: {
        columns: string[];
        data: string[][];
    };
    pupilDistance: {
        columns: string[];
        data: string[][];
    };
    images: { colSpan: number; content: React.ReactNode }[][];
    files: { colSpan: number; content: React.ReactNode }[][];
    activities: { colSpan: number; content: React.ReactNode }[][];
    anotherPrescriptions: {
        columns: string[];
        data: string[][];
    };
}

// Define your data object with correct structure
const data: CustomerData = {
    personalDetails: [
        ['Email', 'melihcaganari@gmail.com', 'Gender', 'melihcaganari@gmail.com'],
        ['Name', 'melihcaganari@gmail.com', 'DOB', 'melihcaganari@gmail.com'],
        ['Mobile', 'melihcaganari@gmail.com', 'Hobbies', 'melihcaganari@gmail.com'],
        ['Phone', 'melihcaganari@gmail.com', 'Opt in', 'melihcaganari@gmail.com'],
        ['Occupation', 'melihcaganari@gmail.com'],
        ['Shipping', 'Newtown, 1'],
        ['Home', 'Parcel Collect'],
        ['Home', '275 Newtown, Newtown'],
        ['Home', '']
    ],
    regions: [
        ['Region', 'Type', 'Vend Link'],
        ['Staging', 'Home Region', 'Vend'],
        ['Australia', '', 'Vend']
    ],
    consultations: [
        ['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions'],
        ['Staging', 'Home Region', 'Vend', '', '', ''],
        ['Australia', '', 'Vend', '', '', '']
    ],
    notes: [
        ['Notes', 'Actions']
    ],
    orders: [
        ['Presentation', 'Outlet', 'Type', 'Optometrist'],
        ['Staging', 'Home Region', 'Vend', ''],
        ['Australia', '', 'Vend', '']
    ],
    healthFunds: [
        ['Type', 'Provider', 'Member ID', 'Status', 'Expiry', 'Actions'],
        ['Staging', 'Home Region', 'Vend', '', '', ''],
        ['Australia', '', 'Vend', '', '', '']
    ],
    prescriptions: {
        columns: ['Location', 'Type', 'Optometrist', 'Status', 'Due', 'Actions'],
        data: [
            ['ONLINE AU DEV', 'Standard', 'Hakim Alkhateeb', '', '', ''],
            ['ONLINE AU DEV', '', 'Vend', '', '', ''],
            ['ONLINE AU DEV', '', 'Vend', '', '', ''],
        ]
    },
    pupilDistance: {
        columns: ['PD', 'Monocular', 'Height', 'Frame size', 'Created by', 'Date', 'Actions'],
        data: [
            ['Staging', 'Home Region', 'Vend', '', '', '', ''],
            ['Australia', '', 'Vend', '', '', '', ''],
        ]
    },
    images: [
        [{ colSpan: 2, content: <div className="font-bold px-4 py-4">There are no images for this customer</div> }]
    ],
    files: [
        [{ colSpan: 2, content: <div className="font-bold px-4 py-4">There are no files for this customer</div> }]
    ],
    activities: [
        [{ colSpan: 1, content: <div className="font-bold px-4 py-4">Hakim Alkhateeb sent prescription as a PDF attachment to hakim alkhateb through email on Tuesday.</div> }]
    ],
    anotherPrescriptions: {
        columns: ['Location', 'Type', 'Optometrist', 'Status', 'Due', 'Actions'],
        data: [
            ['ONLINE AU DEV', 'Standard', 'Hakim Alkhateeb', '', '', ''],
            ['ONLINE AU DEV', '', 'Vend', '', '', ''],
            ['ONLINE AU DEV', '', 'Vend', '', '', ''],
        ]
    }
};

const CustomerDetails = () => {
    const pathname = usePathname();
    return (
        <div className="flex justify-between mr-8 flex-col sm:flex-row space-x-2">
            <div className="w-full sm:w-1/2">
                <Table
                    id="personalDetails"
                    title="Personal Details (Vend)"
                    columns={['Email', '', 'Gender', '', '', '']}
                    actions={true}
                    data={data.personalDetails.map(row => [row[0], row[1], '', row[2], row[3], ''])}
                    link={`${pathname}/personalDetails`}
                    icon={FaPen} // Pass FaPen as the icon component
                    showHeader={false}
                />
                <Table
                    id="regions"
                    title="Regions"
                    columns={['Region', 'Type', 'Vend Link']}
                    data={data.regions}
                />
                <Table
                    id="consultations"
                    title="Consultations"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.consultations}
                    link="/newConstDetail"
                    icon={FaPlus} // Pass FaPen as the icon component
                />
                <Table
                    id="notes"
                    title="Notes"
                    actions={true}
                    columns={['Notes', 'Actions']}
                    data={data.notes}
                    icon={FaPlus} // Pass FaPen as the icon component
                />
                <Table
                    id="orders"
                    title="Orders"
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist']}
                    data={data.orders}
                    icon={FaPen} // Pass FaPen as the icon component
                />
                <Table
                    id="healthFunds"
                    title="Health Funds"
                    actions={true}
                    columns={['Type', 'Provider', 'Member ID', 'Status', 'Expiry', 'Actions']}
                    data={data.healthFunds}
                    icon={FaPlus}
                />
                </div>
                <div className="w-full sm:w-1/2">
                <Table
                    id="prescriptions"
                    title="Prescriptions"
                    actions={true}
                    columns={data.prescriptions.columns}
                    data={data.prescriptions.data}
                    icon={FaPlus} // Pass FaPen as the icon component
                />
                
                <Table
                    id="pupilDistance"
                    title="Pupil Distance"
                    actions={true}
                    columns={data.pupilDistance.columns}
                    data={data.pupilDistance.data}
                    icon={FaPlus} // Pass FaPen as the icon component
                />
                <Table
                    id="images"
                    title="Images"
                    actions={true}
                    columns={['']}
                    data={data.images}
                    icon={FaPen} // Pass FaPen as the icon component
                />
                <Table
                    id="files"
                    title="Files"
                    actions={true}
                    columns={['']}
                    data={data.files}
                    icon={FaPlus} // Pass FaPen as the icon component
                />
                <Table
                    id="activities"
                    title="Activities"
                    columns={['']}
                    data={data.activities}
                    icon={FaPen} // Pass FaPen as the icon component
                />
                <Table
                    id="anotherPrescriptions"
                    title="Another Prescriptions"
                    actions={true}
                    columns={data.anotherPrescriptions.columns}
                    data={data.anotherPrescriptions.data}
                    icon={FaPlus} // Pass FaPen as the icon component
                />
            </div>
        </div>
    );
};

export default CustomerDetails;
