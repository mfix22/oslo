# oslo
Tools for creating open source documents, and a hub for open source legal documents.

## Installation
```bash
$ npm install -g open-source-law
```

## Usage
```bash
$ oslo <license_name>
```

## Example
```bash
$ oslo mit  #capitalization insensative
```
will create a file called `LICENSE.md` in the current working directory containing the MIT license.

### Supported Licenses
The following licenses are supported by the *oslo* command line interface:
- `mit` - MIT
- `isc` - ISC
- `gnu` - GNU General Public License (GPL-3.0)

Please submit a pull request to contribute new licenses.
