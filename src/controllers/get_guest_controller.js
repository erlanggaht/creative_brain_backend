import guestbook from "../models/guestbook.js"



class Get_Guest_Controller {
    
    static get_guest(req,res) {
        // variabel if error database server
        const database_error = res.status(500)
        
        guestbook.query('SELECT * FROM guestbook',(err,result) => {
            if(err){ 
                database_error.json({error_msg : err});
                console.log('Hello dev : error query database in server');
                return false
            }
                if(result.rowCount > 0) {
                    res.status(200).json(result.rows)
                }else {
                    res.status(400).json({msg:'error get data guestbook'})
                    console.log('failed get data guestbook!')
                }
            
        })
    }


}


export default Get_Guest_Controller