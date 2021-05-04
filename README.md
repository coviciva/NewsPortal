# News Portal 

> Frontend Developer task

<div style="float: right">
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>
</div>

<br />

News Portal is a web application for reading breaking news stories as they happen around the world.

## Application design


<div><img src="https://user-images.githubusercontent.com/48959368/117065031-3afe3480-ad27-11eb-97a5-95c415406f6d.png" width="800"/></div>
<p style="margin-right: 5px;">
  <img src="https://user-images.githubusercontent.com/48959368/117065016-36d21700-ad27-11eb-9c9a-ffe0696fd5c9.png" width="250"/>
  <img src="https://user-images.githubusercontent.com/48959368/117065022-389bda80-ad27-11eb-9db0-044989e1a3e2.png" width="250"/>
  <img src="https://user-images.githubusercontent.com/48959368/117065024-389bda80-ad27-11eb-98c1-7da323819864.png" width="250"/>
</p>


## Features

* the Search bar (search by name, should be done on client side)
* list of articles
  * needs to size nicely on any screen width (check mobile design)
  * get data from appropriate API endpoint
  * pagination is not needed for regular articles
  * "latest news" sidebar should be scrollable and should load more articles
when scrolled to the end (only once)

## Installation

### Prerequirements

* [Git](https://github.com/)
* [NodeJS](https://nodejs.org/en/)

### Installing the app

Clone this repository

```
git clone https://github.com/coviciva/NewsPortal.git
```

Position in the current working directory

```
cd NewsPortal
```

Installing dependencies

```
npm install
```

Starting the app

```
npm start
```

Open http://localhost:3000 to view it in the browser.

## Design decisions

I used InVision desktop and mobile prototype for developing this web application.
I used grid for displaying elements beacuse it is easiest to arrange elements using it. Also, it is more elegant solution for setting up responsiveness.
Also, I added grey image when article does not have url to image because it is prettier to see it rather then seeing just title. It is better for overall page impression.
When article does not have an author, I adjusted author's name to author unknown.






