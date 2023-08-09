import guestbook from "../models/guestbook.js"



class Delete_Guest_Controller {
    
    static delete_guest(req,res) {
        // variabel if error database server
        const database_error = res.status(500)
        guestbook.query(`
        delete from guestbook where id in (${req.body.id}); 
        ALTER SEQUENCE id_guest RESTART WITH 1; 
        update guestbook set id=nextval('id_guest');`
        ,(err,result) => {
            if(err){ 
                database_error.json({error_msg : err});
                console.log('Hello dev : error query database in server');
                return
            }
                if(result[0].rowCount > 0) {
                    res.status(200).json(`delete guest id ${req.body.id} success`)
                }else {
                    res.status(400).json({msg:'error delete data guest'})
                    console.log('failed delete data guest!')
                }
            
        })
    }


}


export default Delete_Guest_Controller