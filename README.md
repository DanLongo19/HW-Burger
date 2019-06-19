# HW-Burger

I cannot get my app to work so I haven't been able to properly style it with CSS. I believe it is an issue with connecting to MySQL (or JawsDB in Heroku). I reworked some of my connection.query functions, but now am getting the below...

TypeError: orm.all is not a function
    at Object.all (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/config/controllers/models/burger.js:7:9)
    at /Users/dan_longo/Desktop/Bootcamp/HW-Burger/config/controllers/burger_controller.js:9:12
    at Layer.handle [as handle_request] (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/layer.js:95:5)
    at /Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/dan_longo/Desktop/Bootcamp/HW-Burger/node_modules/express/lib/router/index.js:174:3)
    
I talked with Scott about this before class on Monday and he mentioned that in his past he has seen a lot of people have trouble connecting using the JawsDB so I believe this is leading to my error.

All of my code and work is there, but after trying to connect to JawsDB I am getting this error and unable to move forward with confirming everything is functioning properly and then styling it.


Could the below be part of my issue (this was taken from the instructions)?

In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()
