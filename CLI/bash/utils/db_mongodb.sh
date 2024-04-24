#!/bin/bash 

clone_db_mongodb() {
    echo -e "Cloning initiated...\n"

    BRANCH_NAME=db/mongodb
    echo -e "Branch Name: " $BRANCH_NAME

    REPO_SSH="git@github.com:ReticentFacade/automated_backend"
    echo -e "Repo SSH: " $REPO_SSH

    if [ $? -eq 0 ]; then
        echo -e "Repository cloned successfully!"
    else 
        echo -e "« Error: Failed to clone repository »"
    fi
}

export -f clone_db_mongodb