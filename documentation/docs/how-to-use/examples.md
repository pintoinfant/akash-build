---
sidebar_position: 3
---

# Examples

### Build and Push a Container Image

To build and push a container image to Docker Hub, use the following command:

```bash
akash-build my-app
```

This command will build a container image for the application in the current directory and push it to Docker Hub. You will be prompted to enter your Docker Hub username and password for authentication.

### Build and Push a Container Image with Custom Path

To specify a custom path where your application code is located, use the `--path` option:

```bash
akash-build --path /path/to/my-app my-app
```

This command will build a container image for the application located in `/path/to/my-app` and push it to Docker Hub.