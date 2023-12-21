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

In the `cds-ts-dispatcher-samples` folder, run:

```
npm install
```

## Run server

```
npm run start:ts
```

Open this link in your browser: http://localhost:4004

## Deployment to BTP 

```
mbt build
```
This process will do the following : 

1. Will run the builder from `mta.yaml`: 
   
```yml
    - builder: custom
      commands:
        - npm ci
        - npm run build:production
        - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models
```

Where `npm run build:production` is a `package.json` command for `cds build --production` and `tsc` 



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

Copyright (c) 2023 DXFrontier

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
