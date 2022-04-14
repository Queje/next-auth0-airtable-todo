import { table, sortingRecords } from './utils/airtableHelper'

export default async function getToDos (req, res) {
    const { id } = req.body;

    try{
        const deletedRecords = await table.destroy([id]);
        res.status(200).json(sortingRecords(deletedRecords));
    }catch(err){
        res.status(500).json({msg:'something went wrong!...'});
    }
};