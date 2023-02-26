// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "./channels"
import "./packs/service_worker.js"
// import "./packs/localization.js"
import './packs/flash_messages.js'
import "daemonite-material";
import "jquery"