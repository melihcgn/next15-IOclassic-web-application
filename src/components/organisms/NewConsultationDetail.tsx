import Image from 'next/image';
import { RadioGroup } from '../ui/radio-group';
import RadioGroupBar from '../molecules/RadioGroupBar';
import Table from '../molecules/Table';
import FormTable from '../molecules/FormTable';
import { AltTable } from '../molecules/AltTable';
// Define interfaces for your data structures
interface ConsultationData {
    personalDetails: string[][];
    consultations: string[][];
    contactLensDetails: string[][]
    standardConstDetails: string[][];
    constactLensAltTable: string[][];
}

// Define your data object with correct structure
const data: ConsultationData = {
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
    consultations: [
        ['Presentation'],
        ['Medical History'],
        ['Family History'],
    ],
    contactLensDetails: [
        ['Allergies'],
        ['Contact lens trial review'],
        ['Contact lens solution/sytem'],
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
    ]
};


export default function NewConsultationDetail() {
    const consOptions = [
        { value: "option-one", label: "Standard" },
        { value: "option-two", label: "Contact Lens" },
        { value: "option-three", label: "Standard and Contact Lens" },
    ];
    return (
        <div className='flex flex-row w-full items-start'>
            <div className='w-2/3'>
                <FormTable
                    id="consultations"
                    title="Consultation"
                    actions={true}
                    columns={['Presentation']}
                    data={data.consultations}
                    link={`/newConstDetail`}
                    altTable={<FormTable
                        id="contactLensDetails"
                        title=""
                        actions={true}
                        columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                        data={data.constactLensAltTable}
                        link={`/newConstDetail`}
                        backgroundColor='bg-gray'
                    />}
                />
                <FormTable
                    id="contactLensDetails"
                    title="CONTACT LENS SPECIFIC DETAILS"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.contactLensDetails}
                    link={`/newConstDetail`}
                />
                <FormTable
                    id="standardConstDetails"
                    title="STANDARD CONSULTATION DETAILS"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.standardConstDetails}
                    link={`/newConstDetail`}
                />
                <RadioGroupBar options={consOptions}></RadioGroupBar>
            </div>

            <div className='w-1/3'>

            </div>
        </div>

    )
}
