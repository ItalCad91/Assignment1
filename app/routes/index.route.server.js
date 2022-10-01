//ROUTES CONNECT THE METHODS TO THE CONTROLLERS

import { Router } from "express";
import {
  displayAboutPage,
  displayContactPage,
  displayHomePage,
  displayProjectsPage,
  displayServicesPage,
} from "../controllers/index.controller.server.js";

const router = Router();

router.get("/", displayHomePage);
router.get("/home", displayHomePage);
router.get("/about", displayAboutPage);
router.get("/projects", displayProjectsPage);
router.get("/services", displayServicesPage);
router.get("/contact", displayContactPage);


// WHY DO WE USE .GET?? VISIT HERE ---->  https://www.restapitutorial.com/lessons/httpmethods.html

export default router;
