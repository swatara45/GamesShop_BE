// Mini Sprint
// objective: create middleware that will allow access to a route if user is an admin
// Steps for auth middleware:
// 1. get user id from req.user
// 2. get userInfo from database
// 3. check if user exists, if not, send them back
// 4. check if user has admin privledges, if not, send them back
// 5. if admin, allow to route

import User from "../models/userSchema.mjs";

export default async function (req, res, next) {
  const id = req.user;

  let user = await User.findById(id).select("admin");

  if (!user) {
    return res.status(401).json({ msg: `No User, Auth Denied` });
  }

  if (user.admin) {
    next();
  } else {
    return res.status(401).json({ msg: `Admin Privileges denied` });
  }
}