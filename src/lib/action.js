"use server";
import { signIn, signOut } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { Users } from './models';
import { connectToDb } from './utils';
import { revalidatePath } from "next/cache";
export const sayHello = async () => {
    "use server"
    console.log("hello")
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  export const handleLogout = async () => {
    "use server";
    await signOut();
  };

  export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await Users.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new Users({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const login = async (prevState, formData) => {
    //console.log(formData)
    const { username, password } = Object.fromEntries(formData)
    try {
        await signIn("credentials", { username, password });

    } catch (err) {
        //console.log(err)
        if(err.message.includes("CredentialSignIn")){
            return { error: "Invalid user or password"}
        }
        //return { error: "Something went wrong"}
        throw err
    }
  }

  export const addUser = async (prevState,formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);
  
    try {
      connectToDb();
      const newUser = new Users({
        username,
        email,
        password,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };