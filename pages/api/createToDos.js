import { table } from './utils/airtableHelper'

export default async function getToDos (req, res) {
    const { description } = req.body;

    try{
        const createdRecords = await table.create([{fields: {description}}]);
        const listCreatedRecords = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        };
        res.status(200).json(listCreatedRecords);
    }catch(err){
        res.status(500).json({msg:'something went wrong!...'});
    }
};