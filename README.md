# Elwin recreates the Hamilton Cohort

Welcome!  For this project, I will be making a simple API that connects to a database.  If I have time, I will add a client side that enables users to view cohort members and their number of publically available Github repos,  as well as add and delete cohort members.  Finally, I would like to add an option for increasing and decreasing the number of publically available Gkithub repos for each member of the cohort.

Please continue reading for user instructions, other functionality, and resources I used to help me with this little project.

### Demo repo
To run the code in this repo:
1. Fork and clone this repo
2. Open the client:
   - `cd client`
   - `open index.html` / `python -m http.server` / `http-server`
   
3. Start the server
    - `cd server-postgresql`
    - `docker-compose up`
    - `docker-compose down` to stop and keep data
    - `docker-compose down --volumes --remove-orphans` to stop and remove all artifacts

### Study materials
| [Connecting Webapps to Databases](https://github.com/getfutureproof/fp_guides_wiki/wiki/Connecting-Webapps-to-Databases) | [Docker Compose 101](https://github.com/getfutureproof/fp_guides_wiki/wiki/Docker-Compose-101) | \

# Exercises
1. [ ] Prepare a small database
    - [ ] It is your choice of what type of db and what service you use
    - [ ] Add at least one resource (ie. collection/table) and seed it with some data (ie. documents or rows)

2. [ ] Make a docker-compose.yaml that runs your api service and your database
  
3. [ ] Create a basic API with database integration
    - [ ] Use the express and cors libraries plus the node driver to match your database choice
    - [ ] Include at least 2 CRUD operations
  
***NB: Creating a front-end client is optional, you can also interact with your API via [Hoppscotch](https://hoppscotch.io/), the browser console or other tools***
