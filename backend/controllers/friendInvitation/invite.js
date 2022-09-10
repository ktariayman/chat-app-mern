

const invite = async (req, res) => {
    const {email} = req.body 
    console.log(email ,'invite is working')
    return res.send('working')
  };
module.exports= invite;