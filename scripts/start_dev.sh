docker-compose -f docker-compose.yml -f docker-compose.pub-posts.yml down --remove-orphans &&

# console.log(` ------------- hard code ---------------`);
rm -rf postgresql &&

docker-compose up -d