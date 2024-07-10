"use client"

import { useState, useEffect } from "react";
import PrescriptionFormTables from "../molecules/PrescriptionFormTables";
import RadioGroupBar from "../molecules/RadioGroupBar";
import FormTable from "../molecules/FormTable";
interface SpectaclesData {
    spectaclesTable1: string[][];
    spectaclesTable2: string[][];
    spectaclesTable3: string[][];
    spectaclesTable4: string[][];
}

interface PrescriptionOtherTablesData {
    additionalInformation: string[][];
    Notes: string[][];
    PrintedNotes: string[][];
}

const spectaclesData: SpectaclesData = {
    spectaclesTable1: [
        ['SPH', 'CYL', 'Axis', 'VA'],
    ],
    spectaclesTable2: [
        ['Add Near', 'Add Intermediate'],
    ],
    spectaclesTable3: [
        ['Near'],
        ['Distance'],
    ],
    spectaclesTable4: [
        ['Near'],
        ['Distance'],
    ],

};

const prescriptionOtherTablesData: PrescriptionOtherTablesData = {
    additionalInformation: [
        ['Prescription Source'],
        ['Online Au'],
        ['Expiry Date'],
    ],
    Notes: [
        [''],
    ],
    PrintedNotes: [
        [''],
    ],
};



const PrescriptionOptions = [
    { value: "option-one", label: "Spectacles" },
    { value: "option-two", label: "Contact Lens" },
];

// Define your data object with correct structure

export default function NewPrescriptionDetail() {
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
        <main className="flex flex-col w-full">
            <div>
                <RadioGroupBar
                    options={PrescriptionOptions}
                    value={selectedOption}
                    onChange={setSelectedOption}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-2/3">
                    <section id="NewPrescription" className="max-w-full">
                        <PrescriptionFormTables data={spectaclesData} selectedOption={selectedOption}></PrescriptionFormTables>
                    </section>
                </div>
                <div className="w-1/3">
                    <FormTable
                        id="Left1"
                        title="Left"
                        actions={true}
                        columns={[]}
                        data={prescriptionOtherTablesData.additionalInformation}
                    />
                    <FormTable
                        id="Left1"
                        title="Left"
                        actions={true}
                        columns={[]}
                        data={prescriptionOtherTablesData.Notes}
                    />
                    <FormTable
                        id="Left1"
                        title="Left"
                        actions={true}
                        columns={[]}
                        data={prescriptionOtherTablesData.PrintedNotes}
                    />
                </div>
            </div>

        </main>
    )
}