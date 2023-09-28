---
sidebar_position: 1
---

# Installation

Before using `akash-build`, make sure you have the following prerequisites installed on your system:

- [Docker](https://docs.docker.com/get-docker/): To build and push container images.
- [Pack](https://buildpacks.io/docs/install-pack/): To create container images using buildpacks.

### Installing Docker

You can install Docker by following the instructions for your operating system:

- **Linux**:

  ```bash
  sudo apt-get update
  sudo apt-get install -y docker.io
  sudo systemctl start docker
  sudo systemctl enable docker
  ```

- **macOS**:

  Install [Docker Desktop](https://docs.docker.com/desktop/install/) for macOS.

### Installing Pack

You can install Pack by following the instructions for your operating system:

- **Linux**:

  ```bash
  curl -sSL https://github.com/buildpacks/pack/releases/latest/download/pack-bionic | sudo tar -xz -C /usr/local/bin
  ```

- **macOS**:

  ```bash
  brew install buildpacks/tap/pack
  ```

Once you have Docker and Pack installed, you are ready to use `akash-build`.
