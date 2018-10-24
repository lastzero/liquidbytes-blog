---
title: Quick and easy guide for migrating to Go 1.11 modules
author: Michael Mayer
type: post
date: 2018-09-06T08:46:17+00:00
url: /2018/09/quick-and-easy-guide-for-migrating-to-go-1-11-modules/
cover_image: /wp-content/uploads/2018/09/4769775073_ace6cf8ee2_z.jpg
categories:
  - Golang
  - Software Engineering

---

Dependency management traditionally has been one of the weak spots of Go. Knowing that Google internally is using a [monorepo][1], this didn&#8217;t seem much of a surprise. Various techniques like using a vendor directory and tools like [dep][2] evolved to solve the issue. Go 1.11 finally comes with (experimental) module support and the good news is: While it doesn&#8217;t look anything similar to dep, it&#8217;s surprisingly easy to migrate to and use. Modules will be enabled in 1.12 by default. Here&#8217;s a simple step by step guide. Have a look at the [wiki page][3] for background information and more details.

**Step 1:** First of all, make sure you got [Go 1.11][4] (or later) installed:

<pre># go version
go version go1.11 darwin/amd64</pre>

Module support is disabled by default for all code inside $GOPATH so that 1.11 behaves like 1.10 did. To enable it, you have to set GO111MODULE=on in your environment

<pre class="p1"><span class="s1"># export GO111MODULE=on</span></pre>

or prepend all commands with &#8220;env GO111MODULE=on&#8221; as shown in the next step.

**Step 2:** Switch to the project&#8217;s root directory and type:

<pre># env GO111MODULE=on go mod init
</pre>

If you don&#8217;t see an error, everything is ok.

**Step 3:** Run go build to add dependencies to the newly created go.mod file (it will copy version requirements from an existing Gopkg.lock file):

<pre># go build ./...
go: creating new go.mod: module github.com/your/project
go: copying requirements from Gopkg.lock
go: finding github.com/dghubble/oauth1 v0.0.0-20180522044949-c0a405baf29f
go: downloading github.com/dghubble/oauth1 v0.0.0-20180522044949-c0a405baf29f
</pre>

You can now enable Go Modules (vgo) integration, if you&#8217;re using an IDE like GoLand.

**Step 4:** Remove the vendor directory, Gopkg.lock and Gopkg.toml (if exists) and run tests to verify the changes didn&#8217;t break anything:

<pre># git rm -rf Gopkg.* vendor
# go test ./...
ok      github.com/your/project 0.039s</pre>

**Step 5:** Finally add the module config, don&#8217;t forget to update the documentation and commit your changes:

<pre># git add go.mod go.sum
# git commit -m "Migrate to go modules"</pre>

You&#8217;re welcome to have a look at my existing Go projects for further inspiration: [TweetHog][5] and [PhotoPrism][6]. They use Travis CI for automated testing, one [directly][7] and the other via [Docker][8].

**Bonus:** Put a [Makefile][9] in your project root to simplify building your application. It might look something like that (make sure to use tabs, not spaces):

<pre>export GO111MODULE=on
BINARY_NAME=yourapp

all: deps build
install:
    go install cmd/yourapp/yourapp.go
build:
    go build cmd/yourapp/yourapp.go
test:
    go test -v ./...
clean:
    go clean
    rm -f $(BINARY_NAME)
deps:
    go build -v ./...
upgrade:
    go get -u
</pre>

You can now automate building and easily run tasks without remembering individual commands:

<pre class="p1"><span class="s1"># make deps upgrade build</span></pre>

See also [Using a Makefile with Golang][10] and [Don’t be afraid of makefiles][11].

 [1]: https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext
 [2]: https://github.com/golang/dep
 [3]: https://github.com/golang/go/wiki/Modules
 [4]: https://golang.org/dl/
 [5]: https://github.com/lastzero/tweethog
 [6]: https://github.com/photoprism/photoprism
 [7]: https://github.com/lastzero/tweethog/blob/master/.travis.yml
 [8]: https://github.com/photoprism/photoprism/blob/master/.travis.yml
 [9]: https://github.com/photoprism/photoprism/blob/master/Makefile
 [10]: https://willhaley.com/blog/golang-makefile/
 [11]: https://sohlich.github.io/post/go_makefile/