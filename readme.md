# MentorFix

MentorFix is an open source initiative to find mentors for people around who have certain projects in mind but need people/volunteers to bring those into life.

> Be what you wanted your mentors to be for you.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have NPM(or yarn), NodeJS and MongoDB server installed to use MentorFix locally. A full guide for installing each of these is given below:

```sh
# Ubuntu
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

```sh
# Windows
Windows users need to download the installer from Official NodeJS and run it with administrator privileges.https://nodejs.org/

```

```sh
# macOS
brew install node
```

To check NodeJS and NPM has been installed run on terminal or command prompt

```js
node -v
npm -v
```

* MongoDB server

  * echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
  * apt-get install mongodb-org
  * systemctl start mongod
  * systemctl enable mongod
  * mongo
  * mongod
  * apt install mongodb-server
  * mongo
  * mongod
  * .systemctl start mongod

### Installation

```js
git clone https://github.com/WrippleFoss/mentorFix
```

* Backend

```js
cd server-api
yarn
```

* Frontend

```js
cd view-src
yarn
```

### Run locally

* Backend

```js
$ cd server-api
$ yarn start
goto http://localhost:4000
```

* Frontend

```js
$ cd view-src
$ yarn start
goto http://localhost:3000
```

## Built With

MentorFix uses a number of open source projects to work properly:

* [ReactJS](https://reactjs.org/)
* [GraphQL](https://www.graphql.com/)
* [Node.js](https://nodejs.org/)
* [Mongoose.js](https://mongoosejs.com/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/WrippleFoss/mentorFix/blob/master/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* [Abhishek Prasad](https://github.com/abhishek71994)

## Important Notice

> **MentorFix** has been selected at [GirlScript Summer of Code 2019](https://www.gssoc.tech/)!

![GirlScript](https://cdn-images-1.medium.com/max/600/1*47hUn6EfnP5hZkHslmUsxQ.jpeg)

## License

This project is licensed under the Apache-2.0 - see the [LICENSE.md](https://github.com/WrippleFoss/mentorFix/blob/master/LICENSE) file for details
