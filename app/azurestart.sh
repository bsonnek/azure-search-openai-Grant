

cd app/backend
./backend_env/bin/python ./backend_env/bin/activate
./backend_env/bin/python ./app.py
if [ $? -ne 0 ]; then
    echo "Failed to start backend"
    exit $?
fi
