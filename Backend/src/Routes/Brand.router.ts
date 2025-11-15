import { Router } from "express";
import CreateUser from "../Controllers/RegisterBrand.controller";
import { requireAuth } from "../Middlewares/Auth.Middlware";
import ListBrands from "../Controllers/ListBrands.contorller";
const router = Router()

//for  create a user and register brand
router.route('/create').post(requireAuth, CreateUser)


//for get all brands which user registered
router.route('/getbrands').get(requireAuth, ListBrands)
export { router }
