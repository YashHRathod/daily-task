const Person = require('./models/person');

const passport = require('passport');
// this is called username and password login strategy
const LocalStrategy = require('passport-local').Strategy;// For login


passport.use(new LocalStrategy(async function (USERNAME,password,done) {
    // authentication logic here
    try {
        // console.log('Received Credentials:',USERNAME,password);
        const user = await Person.findOne({username : USERNAME}).select('+password');
        if(!user)
        {
            return done(null,false,{message : 'Incorrect Username'});
        }
        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch)
        {
            return done(null,user);
        }
        else 
        {
            return done(null,false,{message: 'Incorrect Password'});
        }
    } catch (error) {
        console.log(error);
        return done(error);
    }
}));

module.exports = passport;//Export configured passport
