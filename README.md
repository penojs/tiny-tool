# tiny tool

some tiny tools for promoting my work.

# how to develop

1. add dependency to workspace

```bash
$ yarn add -W -D some-package 
```

2. lerna 

```bash
$ lerna bootstrap
$ lerna link
$ lerna add <package>[@version] [--dev] [--exact] [--peer] --scope=<package-name>
$ lerna run <script>
```
