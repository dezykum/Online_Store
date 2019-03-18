# Online_Store
Node.js API for online store
Online Store-rest-api is an authenticated rest api which supports CRUD operation of products and orders.

Endpoints

HTTP	Path	Action	Used for

GET	/api/products	 get Product details

POST	/(id of particular product which you want to buy)	 Order successfully placed

GET	/api/orders	 get Order details

DELETE	/:id  Detete order 

PUT /:id  update the product field

Installation and Run:

$ git clone  https://github.com/dezykum/Online_Store 

Enter folder: cd server

$ npm install

$ node server.js

Database

Nodejs-Online-Store uses a MongoDB for storing all the data. Setting of the database connection is done through the 

command line : \Users\dezy.kumari\database\mongodb\bin\mongod.exe  --dbpath=\Users\dezy.kumari\database\mongodb-data

For Deploying the api on AWS EC2 Instance follow the below steps.

1) Choose an AMI preferably Ubuntu or Linux.

2) Choose a default instance type preferably t2.micro(default).

3)Keep default Instance Configure Details and Storage.

4) Security group need to be configured for allowing HTTP,HTTPS, Custom TCP rule etc.Port range needs to be defined for the node server port and mongodb port. Source can be of Anywhere.

5) Create the instance and launch it. We will get a Public DNS . Connect to it using the public/private key pair setup while configuring the instance.

6) After connecting to the instance and installing git bash and creating the local repository, follow the instructions for Installation and Run. 

