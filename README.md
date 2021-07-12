# Arrow Interactive Website

<!--- simple and straight to the point --->

This is the source code for the main Arrow Interactive website. The website is built using the Preact.

## Developing

Open the workspace in VSCode. Then, in the integrated terminal run:

```bash
# Install dependencies
yarn
# Start dev server
yarn dev
```

If you are not using VSCode, we recommend you open another terminal to run TypeScript type checking.

```bash
# Start type checking
# --watch makes tsc watch the directory
# --noEmit makes tsc not output the compiled files
tsc --watch --noEmit
```

### Testing

```
TODO: Configure testing
```

## Building

### Requirements:

Editor: Visual Studio Code if possible
NodeJS installed via [fnm](https://github.com/Schniz/fnm) on the latest version.
Once you have installed Node via fnm, you can run `npm install -g yarn` to install yarn globally

Once you have a copy of the source code, open VSCode on the folder and run `yarn` to install Node modules.

### Building

Run `yarn build`

#### Useful commands:

- `yarn dev` - start local dev server
- `yarn build` - build source into static webpage files
- `yarn serve` - serve built static webpage files locally

