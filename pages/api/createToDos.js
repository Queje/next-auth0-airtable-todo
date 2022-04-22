import { table } from './utils/airtableHelper'
import auth0 from './utils/auth0'

export default async function getToDos (req, res) {
    const { user } = auth0.getSession(req, res);
    const { description } = req.body;
    
    if (user) {
        try{
            const createdRecords = await table.create([{ fields: {description, userid: user.sub }}]);
            const listCreatedRecords = {
                id: createdRecords[0].id,
                fields: createdRecords[0].fields
            };
            res.status(200).json( listCreatedRecords );
        }
    catch(err) {
            res.status(500).json({msg:'something went wrong!...'});
        }
  } else {
    res.status(500).json({msg:"you can not do that, please login"})
  }
};