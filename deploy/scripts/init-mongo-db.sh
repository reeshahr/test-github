 #!/bin/bash

set -e
echo "DB_USER=$DB_USER"

mongo -- <<EOF
use $DB_DATABASE
db.createUser({
    user: '$DB_USER',
    pwd: '$DB_PASSWORD',
    roles: [{
        role: 'readWrite',
        db: '$DB_DATABASE'
    }]
});
EOF
