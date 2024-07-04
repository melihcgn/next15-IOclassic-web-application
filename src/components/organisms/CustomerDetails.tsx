import React from 'react';
import Image from 'next/image';
import pencil from '../../../public/next.svg';
import exchange from '../../../public/next.svg';
import plus from '../../../public/next.svg';
import refresh from '../../../public/next.svg';
import rightAr from '../../../public/next.svg';
import Link from 'next/link';
import Table from '../molecules/Table';
import TableShadcn from '../molecules/TableShadcn';
import { FaPen } from "react-icons/fa";

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
    return (
        <div className="flex justify-between mr-8 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
                <Table
                    id="personalDetails"
                    title="Personal Details (Vend)"
                    columns={['Email', '', 'Gender', '', '', '']}
                    data={data.personalDetails.map(row => [row[0], row[1], '', row[2], row[3], ''])}
                    link="/user/personalDetails"
                    icon={FaPen.name}
                    showHeader={false}
                />
                <Table
                    id="regions"
                    title="Regions"
                    columns={['Region', 'Type', 'Vend Link']}
                    data={data.regions}
                />
                {/* THIS CODE IS ANOTHER WAY TO IMPLEMENT TABLES USING SHADCN
                 <TableShadcn
                    id="regions"
                    title="Regions"
                    columns={['Region', 'Type', 'Vend Link']}
                    data={data.regions}
                /> */}
                <Table
                    id="consultations"
                    title="Consultations"
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.consultations}
                    link="/newConstDetail"
                    icon={plus.src}
                />
                <Table
                    id="notes"
                    title="Notes"
                    columns={['Notes', 'Actions']}
                    data={data.notes}
                    icon={plus.src}
                />
                <Table
                    id="orders"
                    title="Orders"
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist']}
                    data={data.orders}
                    icon={rightAr.src}
                />
                <Table
                    id="healthFunds"
                    title="Health Funds"
                    columns={['Type', 'Provider', 'Member ID', 'Status', 'Expiry', 'Actions']}
                    data={data.healthFunds}
                    icon={plus.src}
                />
            </div>

            <div className="w-full sm:w-1/2 ml-2">
                <Table
                    id="prescriptions"
                    title="Prescriptions"
                    columns={data.prescriptions.columns}
                    data={data.prescriptions.data}
                    link="/newPrescription"
                    icon={plus.src}
                />
                <Table
                    id="pupil_distance"
                    title="Pupil Distance"
                    columns={data.pupilDistance.columns}
                    data={data.pupilDistance.data}
                    icon={plus.src}
                />
                <Table
                    id="images"
                    title="Images"
                    columns={['', '']}
                    data={data.images}
                    icon={exchange.src}
                    showHeader={false}
                />
                <Table
                    id="files"
                    title="Files"
                    columns={['', '']}
                    data={data.files}
                    icon={plus.src}
                    showHeader={false}
                />
                <Table
                    id="activities"
                    title="Activities"
                    columns={[]}
                    data={data.activities}
                />
            </div>
        </div>
    );
};

export default CustomerDetails;
