cd app/frontend
npm install
if [ $? -ne 0 ]; then
    echo "Failed to restore frontend npm packages"
    exit $?
fi

cd ../backend
./venv/bin/python ./app.py
if [ $? -ne 0 ]; then
    echo "Failed to start backend"
    exit $?
fi
