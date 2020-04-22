const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./user');

passport.serializeUser ((user, done) => {
    done (null, user.id);
});

passport.deserializeUser (async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-register', new LocalStrategy({
    firstNameField: 'name',
    lastNameField: 'lastname',
    userEmailField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, name, lastname, email, password, done) => {
    const user = new User ();
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    await user.save();
    done (null, user);
}));