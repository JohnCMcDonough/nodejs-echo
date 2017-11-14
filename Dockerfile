FROM mhart/alpine-node:9.1.0


WORKDIR src/
ADD src/ src/
ADD package.json package.json
ADD tsconfig.json tsconfig.json

RUN npm install
RUN ./node_modules/.bin/tsc -p .

ENTRYPOINT node bin/