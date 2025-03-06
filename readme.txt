backend

vite
config has connection to mongodb function
controller has all api functions of product, get, create, delete, update
model has the schema of the product
route has given the url, decides which api function
server starts with environment config, then start the app on express, port,
then declares the prefix for products,
then listens on the port, if there is a connection then connect to DB

frontend

install chakra
contain frontend app with chakra in main
app contains a global navigation bar (by being above everything)
route homepage to /
route createpage to /createpage
install react-router-dom
create elements of website
install zustand
createpage button calls backend create product
added toaster to notify you the status of the product when you create it
added cards to see products
added icons and name and image and price
linked delete button to the delete api
utilized dialog from chakra ui to do functionality of the edit/update icons

deploying the app
within the backend server
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(_dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
	});
}
^ if production that means it is deployable ie the build
it will take the front end build stored in frontend dist and make it static
then handle any get requests and send them to the frontend dist indexedDB.html