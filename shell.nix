with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        jq
        nodejs-8_x
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
        alias scripts='jq ".scripts" package.json'
        alias run='npm run'
    '';
}
