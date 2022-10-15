import passport from "passport";
import SteamStrategy from "passport-steam";

passport.serializeUser(function(user, done) {
	done(null, user);
});
  
passport.deserializeUser(function(obj: any, done) {
	done(null, obj);
});

// @ts-ignore
passport.use(new SteamStrategy({
	returnURL: `${process.env.DOMAIN}/api/auth/return`,
	realm: process.env.DOMAIN,
	apiKey: `${process.env.STEAM_API_KEY}`
  
}, (_: any, profile: any, done: any) => {
	// Fetch any more information to populate
  profile.identifier = _;
	return done(null, profile);
}));

export default passport;