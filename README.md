# Neighborhoodblog(name still up for debate)
An Application that will allow users to map and track new musicians and artist based off of their neighborhood

## Project Description
Map artist based on their histroical neighborhood. Still working on our "IPutYouOn" Ticket for user

## MVP List
1. User Auth
2. Main Page Map API with each neighborhood
3. Artist Profile

# Workflow
1. git pull staging 
2. git checkout -b `<github issue number>-<name of branch>` (you are branching off of staging)
3. work on feature 
4. once you are done 
    * checkout the master branch
    * git pull on staging branch
    * checkout YOUR feature branch
    * git rebase staging
    * fix merge conflicts if they exist
    * git push
    * if you have any issues please let someone know
    * do the command that the terminal says to do
    * your branch should now be in the remote repository
5. create a pull request on github 
    
    * what we're doing here is requesting to pull in our branch into the staging branch.  The base in the third picture will always be staging, and what we're comparing is the branch we're requesting to be pulled in.  Once we make sure that the feature is working in the staging branch then we go ahead and merge to master in another pull request. 
