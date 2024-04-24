#!/bin/bash

clone_without_jwt() {
    echo -e "Cloning initiated...\n"
    
    BRANCH_NAME=auth/without_jwt
    echo "Branch Name: " $BRANCH_NAME

    REPO_SSH="git@github.com:ReticentFacade/automated_backend"
    echo "Repo SSH: " $REPO_SSH

    git clone --branch $BRANCH_NAME $REPO_SSH

    if [ $? -eq 0 ]; then
        echo "Repository cloned successfully!"
    else 
        echo "« Error: Failed to clone repository »" 
    fi
}

export -f clone_without_jwt