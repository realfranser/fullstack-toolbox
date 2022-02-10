# Go Test Tools

## Extra Tips

### Colored output

> Debian/Ubuntu: apt-get install grc

> MacOS: brew install grc

Create personal grc config in ~/.grc/grc.conf

```Go
#Go
\bgo.* test\b
conf.gotest
```

Create Go test colourization config in ~/.grc/conf.gotest

```Go
regexp==== RUN .*
colour=blue
-
regexp=--- PASS: .*
colour=green
-
regexp=^PASS$
colour=green
-
regexp=^(ok|\?) .*
colour=magenta
-
regexp=--- FAIL: .*
colour=red
-
regexp=[^\s]+\.go(:\d+)?
colour=cyan
```

> **Source:** https://stackoverflow.com/questions/27242652/colorizing-golang-test-run-output
