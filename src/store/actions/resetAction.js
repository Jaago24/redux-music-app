import { createAction } from "@reduxjs/toolkit";

//we can also manually create Actions
const resetAction = createAction("app/reset"); /*it can be any type ex: jagadish/reset*/

export default resetAction;