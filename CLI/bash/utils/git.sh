#!/bin/bash

remove_git() {
    echo -e "Removing previous `.git` directory...\n" 

    cd automated_backend
    rm -rf .git
    
    if [ $? -eq 0 ]; then
        echo -e "Removed!\n"
    else 
        echo -e "« Error: Failed to remove `.git` directory! »"
    fi 
}

initiate_git() {
    echo -e "Initiating git...\n"

    cd automated_backend
    git init
    
    if [ $? -eq 0 ]; then
        echo -e "Initiated!\n"
    else 
        echo -e "« Error: Failed to initate git »"
    fi
}

export -f remove_git
export -f initiate_git