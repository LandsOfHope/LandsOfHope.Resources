{
  description = "LandsOfHope.Resources";

  inputs = {
    self.lfs = true;
    nixpkgs.url = "github:etinquis/nixpkgs/nixos-26.05";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
    }:
    let
      inherit (nixpkgs) lib;
      forSystems = lib.genAttrs lib.systems.flakeExposed;
    in
    {

      packages = forSystems (
        system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        rec {
          default = landsofhope-cdn-resources;

          landsofhope-cdn-resources = pkgs.stdenv.mkDerivation {
            pname = "landsofhope-cdn-resources";
            version = (builtins.fromJSON (builtins.readFile ./health)).version;
            src = ./.;
            buildInputs = [
              pkgs.bun
              pkgs.stylelint
              pkgs.rsync
            ];
            buildPhase = ''
              runHook preBuild
              set -euxo pipefail
              pushd .build
              bun install --frozen-lockfile --production
              popd
              bun .build/generate_chat_colors_css.ts
              stylelint --config .build/node_modules/stylelint-config-recommended/index.js css/chat/chat-colors.css
              bun build .build/analytics.js --target browser --minify --outdir ./js/current/
              runHook postBuild
            '';
            installPhase = ''
              runHook preInstall
              rsync --archive --verbose --exclude='.*' --exclude "*.nix" --exclude "*.lock" --exclude "result" --delete-after . $out
              runHook postInstall
            '';

            # Build fetches resources from internet and is generally non-deterministic at present
            outputHashAlgo = "sha256";
            outputHashMode = "recursive";
            outputHash = "sha256-6eo9ShqMmdJWSYLIWV0XWuz1HjtIY/RcIDzoXgd5OUw=";
          };

        }
      );

      overlays = {
        landsofhope-cdn-resources = final: prev: {
          landsofhope-cdn-resources = final.packages.${final.system}.landsofhope-cdn-resources;
        };
      };

    };

}
