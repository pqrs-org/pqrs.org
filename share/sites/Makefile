all:
	pnpm exec hugo server --renderToMemory

build:
	rm -fr public
	find * -name '.DS_Store' -delete
	find * -name '._*' -delete
	HUGO_ENV="production" pnpm exec hugo --gc
	install -m 644 ../../share/assets/public/_headers public

clean:
	pnpm exec hugo mod clean

public-server:
	cd public && python3 -m http.server 1314

optimize-image:
	../../scripts/optimize-image.sh `find content static -name '*.png'`
