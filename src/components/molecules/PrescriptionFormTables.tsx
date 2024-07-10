import FormTable from '../molecules/FormTable';
import SpectaclesFormTables from './SpectaclesFormTables';
interface ClientFormTablesProps {
    data: any;
    selectedOption: string;
}

const PrescriptionFormTables: React.FC<ClientFormTablesProps> = ({ data, selectedOption }) => {
    return (
        <>
            {(selectedOption === 'option-one' ) && (
                <FormTable
                id="consultations"
                title="Consultation"
                actions={true}
                columns={[]}
                data={data.spectaclesTable1}
                link={`/newConstDetail`}
                altTable={(
                    <SpectaclesFormTables bgColor="bg-gray" spectaclesBoolean={true}></SpectaclesFormTables>
                )}
            />
            )}

            {(selectedOption === 'option-two') && (
                <FormTable
                    id="ContactLens"
                    title="STANDARD CONSULTATION DETAILS"
                    actions={true}
                    columns={['Presentation', 'Outlet', 'Type', 'Optometrist', 'Date', 'Actions']}
                    data={data.spectaclesTable2}
                    link={`/newConstDetail`}
                    altTable={(
                        <SpectaclesFormTables bgColor="bg-gray" spectaclesBoolean={false}></SpectaclesFormTables>
                    )}
                />
            )}
        </>
    );
};
export default PrescriptionFormTables;