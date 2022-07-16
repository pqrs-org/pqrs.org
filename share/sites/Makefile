all:
	hugo server

build:
	rm -fr public
	find * -name '.DS_Store' -delete
	find * -name '._*' -delete
	HUGO_ENV="production" hugo --gc

public-server:
	cd public && python3 -m http.server 1314
