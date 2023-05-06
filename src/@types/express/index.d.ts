import * as express from "express";
import { IUserResponse } from "../../interfaces/users.interface";
import { ICustomerResponse } from "../../interfaces/customers.interface";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts.interface";

declare global {
	namespace Express {
		interface Request {
			userId: string;
			user: IUserResponse;
			customer: ICustomerResponse;
			contact: IContactResponse;
		}
	}
}
