all:
	make -C share
	make -C sites

deploy:
	@bash ./scripts/deploy.sh
