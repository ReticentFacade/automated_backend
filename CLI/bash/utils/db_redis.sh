#!/bin/bash

clone_db_redis() {
    echo -e "Cloning initiated...\n"

    BRANCH_NAME=db/redis
    echo "Branch Name: " $BRANCH_NAME

    REPO_SSH="git@github.com:ReticentFacade/automated_backend"
    echo "Repo SSH: " $REPO_SSH

    git clone --branch $BRANCH_NAME $REPO_SSH

    if [ $? -eq 0 ]; then
        echo -e "Repository cloned successfully!\n"
    else 
        echo -e "« Error: Failed to clone repository »"
    fi
}

export -f clone_db_redis