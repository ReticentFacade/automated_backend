#!/bin/bash

clone_with_jwt() {
    echo -e "Cloning initiated...\n"

    BRANCH_NAME=auth/with_jwt
    echo -e "Branch Name: " $BRANCH_NAME

    REPO_SSH="git@github.com:ReticentFacade/automated_backend"
    echo -e "Repo SSH: " $REPO_SSH

    if [ $? -eq 0 ]; then
        echo -e "Repository cloned successfully!"
    else 
        echo -e "« Error: Failed to clone repository »"
    fi 
}

export -f clone_with_jwt