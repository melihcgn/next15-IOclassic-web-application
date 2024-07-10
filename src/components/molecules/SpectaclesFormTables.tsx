import FormTable from "./FormTable";
import React from 'react';

interface SpectaclesData {
    spectaclesTable1: string[][];
    spectaclesTable2: string[][];
    spectaclesTable3: string[][];
    spectaclesTable4: string[][];
}

interface ContactLensData {
    contactLensTable1: string[][];
    contactLensTable2: string[][];
    contactLensTable3: string[][];
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

const contactLensData: ContactLensData = {
    contactLensTable1: [
        ['Supplier',],
        ['Type',],
        ['Brand',],
        ['Base Curve',],
        ['Diameter',],
        ['Color',],
        ['Notes',],
    ],
    contactLensTable2: [
        ['Supplier'],
    ],
    contactLensTable3: [
        ['Right', 'Left'],
    ],
};

interface SpectaclesFormTablesProps {
    bgColor: string;
    spectaclesBoolean: boolean;
}

const SpectaclesFormTables: React.FC<SpectaclesFormTablesProps> = ({ bgColor, spectaclesBoolean }) => {
    return (
        <main>
            {spectaclesBoolean ? (
                <section id="spectaclesFormTables" className="flex flex-row">
                    <div className="flex flex-col">
                        <FormTable
                            id="Left1"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable1}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Left2"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable2}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Left3"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable3}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Left4"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable4}
                            backgroundColor={bgColor}
                        />
                    </div>

                    <div className="flex flex-col">
                        <FormTable
                            id="Right1"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable1}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Right2"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable2}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Right3"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable3}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="Right4"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={spectaclesData.spectaclesTable4}
                            backgroundColor={bgColor}
                        />
                    </div>
                </section>
            ) : (
                <section id="contactLensFormTables" className="flex flex-col">
                    <div className="flex flex-row">
                        <FormTable
                            id="ContactLensRight1"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={contactLensData.contactLensTable1}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="ContactLensrLeft1"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={contactLensData.contactLensTable1}
                            backgroundColor={bgColor}
                        />
                    </div>
                    <div className="flex flex-row">
                        <FormTable
                            id="ContactLensRight1"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={contactLensData.contactLensTable1}
                            backgroundColor={bgColor}
                        />
                        <FormTable
                            id="ContactLensrLeft1"
                            title="Left"
                            actions={true}
                            columns={[]}
                            data={contactLensData.contactLensTable1}
                            backgroundColor={bgColor}
                        />
                    </div>
                    <div className="flex">
                        <FormTable
                            id="ContactLens3"
                            title="Right"
                            actions={true}
                            columns={[]}
                            data={contactLensData.contactLensTable3}
                            backgroundColor={bgColor}
                        />
                    </div>
                </section>
            )}
        </main>
    );
};

export default SpectaclesFormTables;
