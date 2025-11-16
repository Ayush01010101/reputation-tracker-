import { Router } from "express";
import CreateUser from "../Controllers/RegisterBrand.controller";
import { requireAuth } from "../Middlewares/Auth.Middlware";
import ListBrands from "../Controllers/ListBrands.contorller";
import RegisterBrand from "../Controllers/RegisterBrand.controller";
import ScrapeBrandDataFromGemini from "../Controllers/ScrapeBrandDataFromGemini";
import GetBrandDetail from "../Controllers/GetBrandDetail.contorller";
const router = Router()

//for  create a user and register brand
router.route('/create').post(requireAuth, RegisterBrand)
//for get all brands which user registered
router.route('/getbrandDetail/:brandId').get(GetBrandDetail)
// router.route('/:brandId').post(requireAuth, ScrapeBrandDataFromGemini)



export { router }
