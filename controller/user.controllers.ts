import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json({
    msg: "Get all users",
    data: users,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      msg: "User doesnt exist",
      data: false,
    });
  }

  res.json({
    msg: "getUser",
    data: user,
  });
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const user = await User.create(body);

    res.json({
      msg: "User was create",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      data: false,
    });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      msg: "User doesnt exist",
      data: false,
    });
  }

  await user.update(body);

  res.json({
    msg: "User was updated",
    data: user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      msg: "User doesnt exist",
      data: false,
    });
  }

  // await user.destroy()
  await user.update({ status: false });

  res.json({
    msg: "User was deleted",
    data: user,
  });
};
