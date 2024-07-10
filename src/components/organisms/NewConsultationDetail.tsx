"use client"
import Table from '../molecules/Table';
import RadioGroupBar from '../molecules/RadioGroupBar';
import { useState, useEffect } from 'react';
import ClientFormTables from '../molecules/ClientFormTables';
// Define interfaces for your data structures
interface ConsultationData {
    personalDetails: string[][];
    consultations: string[][];
    contactLensDetails: string[][];
    standardConstDetails: string[][];
    constactLensAltTable: string[][];
}

// Define your data object with correct structure
const consultationData: ConsultationData = {
    personalDetails: [
        ['Email', 'melihcaganari@gmail.com'],
        ['Name', 'melihcaganari@gmail.com'],
        ['Phone', 'melihcaganari@gmail.com'],
        ['Occupation', 'melihcaganari@gmail.com'],
        ['Opt in', 'melihcaganari@gmail.com'],
        ['Gender', 'Newtown, 1'],
        ['DOB', 'Parcel Collect'],
        ['Mobile', '275 Newtown, Newtown'],
        ['Hobbies', 'sdfsdfds']
    ],
    consultations: [
        ['Presentation'],
        ['Medical History'],
        ['Family History'],
    ],
    contactLensDetails: [
        ['Allergies'],
        ['Contact lens trial review'],
        ['Contact lens solution/system'],
    ],
    standardConstDetails: [
        ['Ocular History'],
        ['Entering VA Right', 'Entering VA Left', 'UCVA Right', 'UCVA Left', 'UCVA Binocular'],
        ['OMB', 'Pupils & Mobility'],
        ['Anterior Eye', 'Posterior Eye'],
        ['Right IOP', 'Left IOP'],
        ['Case Analysis', 'Case Management'],
        ['Ancillary Tests', 'Notes'],
    ],
    constactLensAltTable:[
        ['Visual Acuity (Entering)', 'Visual Acuity (Entering)'],
        ['Visual Acuity (Fitting)', 'Visual Acuity (Fitting)'],
        ['Keratometry', 'Keratometry'],
    ],
};

const consOptions = [
    { value: "option-one", label: "Standard" },
    { value: "option-two", label: "Contact Lens" },
    { value: "option-three", label: "Standard and Contact Lens" },
];

const recallOptions = [
    { value: "option-one", label: "Do not change  Existing recall due 04 May 2025 7.00 pm" },
    { value: "option-two", label: "Standard Proactive check up 11 Aug 2025 12:44 am" },
    { value: "option-three", label: "Custom  Proactive check up" },
];

const dataWithRadioGroupBar = [
    [
        <RadioGroupBar options={recallOptions} />
    ],
    // Other rows if necessary
];

export default function NewConsultationDetail() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        // Set the initial state to match between server and client
        setSelectedOption('option-one');
    }, []);

    if (selectedOption === null) {
        // Prevent rendering until the state is set
        return null;
    }

    

    return (
        <div className='flex flex-col w-full items-start'>
            <div className='w-full'>
            <RadioGroupBar 
                    options={consOptions} 
                    value={selectedOption} 
                    onChange={setSelectedOption} 
                />
            </div>
            <div className='flex flex-row space-x-2'>

            <div className='w-2/3'>
                
                <ClientFormTables data={consultationData} selectedOption={selectedOption} />
            </div>
            <div className='w-1/3'>
                <Table
                    id="personalDetails(vend)"
                    title="Personal Details (Vend)"
                    columns={['Title', 'Explanation']}
                    data={consultationData.personalDetails}
                />
                <Table
                    id="recall"
                    title="Recall"
                    columns={['Choose Your Recall Type']}
                    data={dataWithRadioGroupBar}
                    />
            </div>
            </div>

        </div>
    )
}
