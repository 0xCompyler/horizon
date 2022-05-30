import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { NextPage } from "next";

import UserType from "../types/Users";
import Axios from "axios";
import Link from "next/link";

interface UserContextType {
	token: string | null;
	user: UserType | null;
	login: (email: string, password: string) => void;
	logout: () => void;
	signup: (name:string,email:string,password:string,phone:string) => void;
	isAuth: boolean;
	updateUser: (user: UserType) => void;
}

const UserContext = createContext<UserContextType>({
	token: null,
	user: null,
	login: () => {},
	signup: () => {},
	logout: () => {},
	isAuth: false,
	updateUser: () => {},
});

export const useUser = () => useContext(UserContext);

interface Props {
	children: ReactNode;
}

export const UserProvider: NextPage<Props> = ({ children }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		if (window) {
			const token = window.localStorage.getItem("token");
			const user = window.localStorage.getItem("user");
			if (token && user) {
				setToken(token);
				setUser(JSON.parse(user));
			}
		}
	}, []);

	const login = (email: string, password: string) => {
		console.log(email,password);
		Axios.post("http://localhost:5000/user/login", {
			email,
			password,
		})
			.then((res:any) => res.data.data)
			.then((res:any) => {
				const { password, ...newUser } = res.user;
				setUser(newUser);
				setToken(res.token);
				localStorage.setItem("token", res.token);
				localStorage.setItem("user", JSON.stringify(newUser));
			})
			.catch((err) => {
				console.log(err.response.status);
				if (err.response.status === 400) {
					console.log(err);
					console.log("Wrong Credentials");
					//TODO : Send this to the toast api and disply this message
				}
			});
	};


	const signup = (name:string,email:string,password:string,phone:string) => {
		Axios.post("http://localhost:5000/user/signup", {
			name,
			phone,
			password,
			email,
		})
			.then((res:any) => res.data.data)
			.then((res:any) => {
				<Link href="/login"></Link>
			})
			.catch((err) => {
				console.log(err.response.status);
			});
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	const updateUser = (user: UserType) => {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	};

	return (
		<UserContext.Provider
			value={{
				token,
				user,
				login,
				signup,
				isAuth: token ? true : false,
				logout,
				updateUser,
			}}>
			{children}
		</UserContext.Provider>
	);
};
