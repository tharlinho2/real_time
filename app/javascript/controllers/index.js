import StimulusReflex from "stimulus_reflex";
import { application } from "./application"
import consumer from '../channels/consumer'

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import UserController from "./user_controller"
application.register("user", UserController)

import LocationController from "./location_controller"
application.register("location", LocationController)


StimulusReflex.initialize(application, { consumer, application})