# orgloader

  - install latest version of node
  - clone this repository locally
  - npm install
  - edit config.json
    - baseurl - change to the url for your desired environment (the trailing slash is important - I haven't gotten that fancy with this script)
    - startingOrgId - Some number for an org that doesn't yet exist
    - numberOfOrgs - How many orgs to create - the orgIds will be startingOrgId + the number of the iteration in numberOfOrgs that we're on, so be sure that you don't try to create a bunch that already exist.
    - bureauCode - some valid bureau code
    - token - a valid token for your environment
  - npm start
  - enjoy!
