#!/bin/bash
# Get the absolute path to the script
THISFILE=$(readlink -f -- "$0")
# Extract the directory path
SCRIPT_DIR=$(dirname "$THISFILE")
echo $SCRIPT_DIR
source "$SCRIPT_DIR/utils/with_jwt.sh"
source "$SCRIPT_DIR/utils/without_jwt.sh"
source "$SCRIPT_DIR/utils/db_redis.sh"
source "$SCRIPT_DIR/utils/db_mongodb.sh"
source "$SCRIPT_DIR/utils/db_postgres.sh"
source "$SCRIPT_DIR/utils/db_mysql.sh"
source "$SCRIPT_DIR/utils/git.sh"

# Ask for auth type (simple/jwt)
echo -e "Which authentication type would you like to include? \n"

echo "1. with_jwt"
echo "2. without_jwt"

read -p "auth_type: " auth_type

if [ "$auth_type" -eq 1 ]; then
    echo -e "\n» auth_type $auth_type selected!"
elif [ "$auth_type" -eq 2 ]; then
    echo -e "\n» auth_type $auth_type selected!\n"
else 
    echo -e "\n« Please select a valid choice! »\n"
    exit
fi 
# ----------------------

echo -e "Would you like to include Databases? "

read -p "(y/n): " db_flag 
if [ $db_flag = "y" -o $db_flag = "Y" ]; then
    echo -e "Alrighty, let's take you to the database types: \n"

elif [ "$db_flag" == 'n' -o "$db_flag" == 'N' ]; then
    if [ "$auth_type" -eq 1 ]; then
        echo -e "Cloning branch: auth/with_jwt..."
        clone_with_jwt
    elif [ "$auth_type" -eq 2 ]; then 
        echo -e "Cloning branch: auth/without_jwt..."
        clone_without_jwt
    fi
    
    echo "Goodbye!"
    exit 
else 
    echo -e "\n« Please select a valid choice! »\n"
    exit 
fi

# ----------------------

# Ask for db type
echo -e "\nWhich database type would you like to include? \n"

echo "1. Redis"
echo "2. MongoDB (includes Redis)"
echo "3. Postgres (includes Redis)"
echo "4. MySQL (includes Redis)"

read -p "db_type: " db_type

if [ "$db_type" -ne 1 ] && [ "$db_type" -ne 2 ] && [ "$db_type" -ne 3 ] && [ "$db_type" -ne 4 ]; then 
    echo -e "\n« Please select a valid choice! »\n"
    exit

elif [ "$db_type" -eq 1 ]; then
    echo -e "\n» db_type $db_type selected!\n"
    clone_db_redis

elif [ "$db_type" -eq 2 ]; then
    echo -e "\n» db_type $db_type selected!\n"
    clone_db_mongodb

elif [ "$db_type" -eq 3 ]; then
    echo -e "\n» db_type $db_type selected!\n"
    clone_db_postgres

elif [ "$db_type" -eq 4 ]; then
    echo -e "\n» db_type $db_type selected!\n"
    clone_db_mysql
fi

# ----------------------

remove_git

initiate_git