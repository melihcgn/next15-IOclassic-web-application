import FormTable from '../molecules/FormTable';

interface ClientFormTablesProps {
    data: any;
    selectedOption: string;
}

const ClientFormTables: React.FC<ClientFormTablesProps> = ({ data, selectedOption }) => {
    return (
        <>
                <FormTable
                    id="consultations"
                    title="Consultation"
                    actions={true}
                    columns={['Presentation']}
                    data={data.consultations}
                    link={`/newConstDetail`}
                    altTable={(
                        <FormTable
                            id="contactLensDetails"
                            title="Left /  Right"
                            actions={true}
                            columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                            data={data.constactLensAltTable}
                            link={`/newConstDetail`}
                            backgroundColor='bg-gray'
                        />
                    )}
                />
            {(selectedOption === 'option-two' || selectedOption === 'option-three') && (
                <FormTable
                    id="contactLensDetails"
                    title="CONTACT LENS SPECIFIC DETAILS"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.contactLensDetails}
                    link={`/newConstDetail`}
                />
            )}

            {(selectedOption === 'option-one' || selectedOption === 'option-three') && (
                <FormTable
                    id="standardConstDetails"
                    title="STANDARD CONSULTATION DETAILS"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.standardConstDetails}
                    link={`/newConstDetail`}
                />
            )}
        </>
    );
};

export default ClientFormTables;
