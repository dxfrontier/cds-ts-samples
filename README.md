# Welcome to CDS-TS-Dispatcher samples

This Git samples repository was created as a reference on how to use the **[CDS-TS-Dispatcher](https://github.com/dxfrontier/cds-ts-dispatcher)** decorators.

## Prerequisites

1. Ensure you have the latest LTS version of Node.js installed (see [Getting Started](https://cap.cloud.sap/docs/get-started/))

2. Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/) globally:

```sh
npm i -g @sap/cds-dk
```

## Download

If you have [Git](https://git-scm.com/downloads) installed, clone this repo as shown below.

```bash
git clone https://github.com/dxfrontier/cds-ts-samples.git cds-ts-dispatcher-samples
cd cds-ts-dispatcher-samples
```

## Setup

In the `cds-ts-dispatcher-samples` folder, run the following commands:

```
npm install
```

## Run server

```
npm start
```

Open link in your browser: http://localhost:4004

## Deployment to BTP

1. Install [**MTA Build tool**](https://cap.cloud.sap/docs/get-started/) globally:

```bash
npm install -g mbt
```

2. Run the following command to build the `mta`:

```bash
mbt build
```

Will run the builder from `mta.yaml` which has the following npm commands :

```yml
- builder: custom
  commands:
    - npm ci
    - npm run fix
    - npm run build:production
    - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models
```

`Steps` explained :

- `npm ci` - Will do a clean install.
- `npm run fix` - Will run the ESLint and Prettier.
- `npm run build:production` - will run the package.json script command for CDS build and transpilation of TS to JS and clean the `TS files`.
- `npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models` - will make sure the @cds-models are generated.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

Copyright (c) 2024 DXFrontier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Authors

- [@dragolea](https://github.com/dragolea)
- [@sblessing](https://github.com/sblessing)
- [@ABS GmbH](https://www.abs-gmbh.de/) team

<p align="right">(<a href="#readme-top">back to top</a>)</p>
