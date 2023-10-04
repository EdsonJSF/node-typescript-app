import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controller/user.controllers";

const router = Router();

router.get("/",       getUsers);
router.get("/:id",    getUser);
router.post("/",      postUser);
router.put("/:id",    putUser);
router.delete("/:id", deleteUser);

export default router;
