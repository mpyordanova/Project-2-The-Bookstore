# Project-2-The-Bookstore
Project Details

 
🔴 Mandatory To Pass:
MVP:
URL	HTTP Verb	Action	Notes
/products/	GET	index	INDEX when a user types localhost:3000/products this route shows a list or index of all products
/products/:id	DELETE	delete	DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to delete a product
/products/:id	PUT	update	UPDATE initiates a put request through a postman with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Update data about a product
/products	POST	create	CREATE initiates a post request through postman with action = http://localhost:3000/products/and allows the application the ability to Create a product
/products/:id	GET	show	SHOW when a user types localhost:3000/products/:idOfProduct shows the user an Individual product
/users/	GET	index	INDEX when a user types localhost:3000/users this route shows a list or index of all users
/users/:id	DELETE	delete	DELETE initiates a delete request through postman with action = http://localhost:3000/users/:idOfUser and allows the application the ability to delete a user
/users/:id	PUT	update	UPDATE initiates a PUT request through postman with action = http://localhost:3000/users/:idOfUser and allows the application the ability to update data about a user
/users/	POST	create	CREATE initiates a post request through postman with action = http://localhost:3000/users/ and allows the application the ability to Create a user
/users/:id	GET	show	SHOW when a user types localhost:3000/users/:idOfUser shows the user an Individual user.
 

Products
Spend some time thinking about what kind of store you want to make, and what data that would entail about the items in the store. If it's a supermarket you might want to have the section it's in, such as Dairy, the expiration date, or the weight (for fresh produce). Think also about things you could add to challenge yourself!

 

Users
Spend some time thinking about what kind of data your User table would need to have. Maybe you're creating a list of favorites unique to each user, maybe you're adding a cart that they can add items to for purchase! You could think about adding a gift card balance to their data, the sky is the limit!

 

Relationships
Try to think about what kind of relationships you would need between Schemas. If you're doing a favorites list, what kind of relationship would that be? One to One? One to Many? Many to Many?

Technical Requirements
Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
Must contain all 5 CRUD routes for all schemas present in MongoDB
Must contain some form of One to Many or Many to Many relationship!
Must be hosted on some form of hosting service! (netlify, heroku, etc.)
 