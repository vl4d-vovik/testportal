module.exports = {
    
        "src_folders" : ["tests"],
        //"page_objects_path": ["page-objects"],
      
        "webdriver" : {
          "start_process": true,
          "server_path": "lib/drivers/chromedriver",
          "port": 9515
        },
      
        "test_settings" : {
          "default" : {
            "desiredCapabilities": {
              "browserName": "chrome"
            }
          }
        }
      
}