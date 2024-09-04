<h2> CDS-TS-Dispatcher and CDS-TS-Repository samples </h2>

![SAP](https://img.shields.io/badge/SAP-0FAAFF?style=for-the-badge&logo=sap&logoColor=white)
![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

This Git samples repository was created as a reference on how to use the **[CDS-TS-Dispatcher](https://github.com/dxfrontier/cds-ts-dispatcher)** decorators & **[CDS-TS-Repository](https://github.com/dxfrontier/cds-ts-repository)** actions.

- [Prerequisites](#prerequisites)
- [Download](#download)
  - [Setup](#setup)
  - [Run server](#run-server)
- [Deployment to BTP](#deployment-to-btp)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Prerequisites

1. Ensure you have the latest LTS version of Node.js installed (see [Getting Started](https://cap.cloud.sap/docs/get-started/))

2. Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), `typescript`, `ts-node` globally:

```bash
npm install -g @sap/cds-dk typescript ts-node
```

## Download

If you have [Git](https://git-scm.com/downloads) installed, clone this repo as shown below.

```bash
git clone https://github.com/dxfrontier/cds-ts-samples.git
cd cds-ts-samples
```

### Setup

In the `cds-ts-dispatcher-samples` folder, run the following commands:

```
npm install
```

### Run server

```
npm run watch
```

Open link in your browser: http://localhost:4004

> [!IMPORTANT]
> Use 'manager' as user and password 'manager' to access the services where prompt user and password.

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
    - npm run build
    - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models
```

`Steps` explained :

- `npm ci` - Will do a clean install.
- `npm run build` - will run the package.json script command for CDS build and transpilation of TS to JS and clean the `TS files`.
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
