all:
	hugo server --themesDir ../../themes

build:
	rm -fr public
	HUGO_ENV="production" hugo --gc --themesDir ../../themes

public-server:
	cd public && python -m SimpleHTTPServer 1314
