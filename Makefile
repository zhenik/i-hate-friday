init:
	docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
run:
	docker run --rm -it -p 8000:8000 -v ${PWD}/mkdocs:/docs squidfunk/mkdocs-material