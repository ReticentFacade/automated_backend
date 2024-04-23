#!/bin/bash
source utils/test_func.sh
test_function

# Ask for auth type (simple/jwt)
echo -e "Which authentication type would you like to include? \n"

echo "1. with_jwt"
echo "2. without_jwt"

read -p "auth_type: " auth_type

if [ "$auth_type" -eq 1 ]; then
    echo -e "\n» auth_type $auth_type selected!"
elif [ "$auth_type" -eq 2 ]; then
    echo -e "\n» auth_type $auth_type selected!"
    # run clone function and exit (because `auth/without_jwt` isn't included in any other branch)
    exit 
else 
    echo -e "\n« Please select a valid choice! »\n"
    exit
fi 

echo -e "\nWhich database type would you like to include? \n"

echo "-1. None"
echo "1. Redis"
echo "2. MongoDB (includes Redis)"
echo "3. Postgres (includes Redis)"
echo "4. MySQL (includes Redis)"

read -p "db_type: " db_type

if [ "$db_type" -ne -1 ] && [ "$db_type" -ne 1 ] && [ "$db_type" -ne 2 ] && [ "$db_type" -ne 3 ] && [ "$db_type" -ne 4 ]; then 
    echo -e "\n« Please select a valid choice! »\n"
    exit

elif [ "$db_type" -eq 1 ]; then
    echo -e "\n» db_type $db_type selected!\n"
fi
