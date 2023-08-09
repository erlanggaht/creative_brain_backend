import guestbook from "../models/guestbook.js"



class Add_Guest_Controller {
    
    static add_guest(req,res) {
        // variabel if error database server
        const database_error = res.status(500)

        const {name,comment,website} = req.body

        // if website empty string
        const website_check = website == '' || null ? 'no_website' : website

        guestbook.query(`
        insert into guestbook values 
        ('${name}','${comment}','${website_check}',default)
        `,(err,result) => {
            if(err){ 
                database_error.json({error_msg : err});
                console.log('Hello dev : error query database in server');
                return false
            }
                if(result.rowCount > 0) {
                    res.status(201).json({msg:'thanks for commenting'})
                }else {
                    res.status(400).json({msg:'error add comment  guestbook'})
                    console.log('failed add comment guestbook!')
                }
            
        })
    }


}


export default Add_Guest_Controller