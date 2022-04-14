import { table, sortingRecords } from './utils/airtableHelper'

export default async function getToDos (req, res) {
    const { id, fields } = req.body;

    try{
        const updatedRecords = await table.update([
            {id, fields},
        ]);
        res.status(200).json(sortingRecords(updatedRecords));
    }catch(err){
        console.log(err)
        res.status(500).json({msg:'something went wrong!...'});
    }
};