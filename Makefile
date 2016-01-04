CHROME := "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

all: copy build

build: build-dir build-crx build-xpi build-xar

build-dir:
	mkdir -p build

build-crx:
	$(CHROME) --pack-extension="$(shell pwd)/Chrome Callsigns Extension" --pack-extension-key="$(shell pwd)/Chrome Callsigns Extension.pem"
	mv "Chrome Callsigns Extension.crx" build/Callsigns.crx

build-xpi:
	(cd "Firefox Callsigns Extension"; ../node_modules/jpm/bin/jpm xpi; mv *.xpi ../build/)
	(cd build/; ln -s $$(ls -1t *.xpi | tail -n 1) Callsigns.xpi)

build-xar:
	xar -czf build/Callsigns.safariextz Callsigns.safariextension

copy:
	cp callsigns.js Callsigns.safariextension/js/
	cp callsigns.js "Chrome Callsigns Extension/js/"
	cp callsigns.js "Firefox Callsigns Extension/data/js/"

.PHONY: run
